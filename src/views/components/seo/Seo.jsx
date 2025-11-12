import { useI18n } from "../../../i18n/I18nProvider";
import { useEffect } from "react";
const Seo = ({
  title,
  description,
  keywords,
  image = "/og-image.jpg",
  url,
  canonical,
}) => {
  const { t, currentLanguage } = useI18n();

  const defaultTitle = t("common.brand") || "Charter Balears";
  const defaultDescription =
    t("home.about.lead") || "Luxury yacht charter in Mallorca";

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const baseUrl = "https://www.charterbalears.com";

  const fullUrl =
    canonical ||
    `${baseUrl}${currentLanguage !== "en" ? `/${currentLanguage}` : ""}${
      url || ""
    }`;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  useEffect(() => {
    // Обновляем title
    document.title = seoTitle;

    // Обновляем meta-теги
    const updateMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updateMetaProperty = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Основные meta-теги
    updateMetaTag("description", seoDescription);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Open Graph
    updateMetaProperty("og:title", seoTitle);
    updateMetaProperty("og:description", seoDescription);
    updateMetaProperty("og:image", fullImageUrl);
    updateMetaProperty("og:url", fullUrl);
    updateMetaProperty("og:type", "website");
    updateMetaProperty("og:site_name", "Charter Balears");
    updateMetaProperty(
      "og:locale",
      currentLanguage === "es"
        ? "es_ES"
        : currentLanguage === "de"
        ? "de_DE"
        : "en_US"
    );

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", seoTitle);
    updateMetaTag("twitter:description", seoDescription);
    updateMetaTag("twitter:image", fullImageUrl);

    // Robots
    updateMetaTag("robots", "index, follow");

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = fullUrl;

    // hreflang links
    ["x-default", "en", "es", "de"].forEach((lang) => {
      const href =
        lang === "x-default"
          ? `${baseUrl}${url || ""}`
          : lang === "en"
          ? `${baseUrl}${url || ""}`
          : `${baseUrl}/${lang}${url || ""}`;

      let link = document.querySelector(
        `link[rel="alternate"][hreflang="${lang}"]`
      );
      if (!link) {
        link = document.createElement("link");
        link.rel = "alternate";
        link.hreflang = lang;
        document.head.appendChild(link);
      }
      link.href = href;
    });
  }, [
    seoTitle,
    seoDescription,
    keywords,
    fullImageUrl,
    fullUrl,
    currentLanguage,
    baseUrl,
    url,
  ]);

  // Этот компонент не рендерит ничего в DOM
  return null;
};

export default Seo;
