import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoogleAnalytics = () => {
  const location = useLocation();
  const GA_MEASUREMENT_ID = "G-7WPLSBZY06";

  useEffect(() => {
    const loadGoogleAnalytics = () => {
      if (window.gtag) return;

      const script1 = document.createElement("script");
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script1.async = true;

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_title: document.title,
          page_location: window.location.href
        });
      `;

      document.head.appendChild(script1);
      document.head.appendChild(script2);
    };

    loadGoogleAnalytics();
  }, []);

  useEffect(() => {
    if (typeof gtag !== "undefined") {
      gtag("config", GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
