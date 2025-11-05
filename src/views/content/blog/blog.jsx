import React from "react";
import "./styles.scss";
import { useI18n } from "../../../i18n/I18nProvider";

export const Blog = () => {
  const { t } = useI18n();
  const blogCopy = t("blog") || {};
  const posts = blogCopy.posts || [];

  return (
    <div className="blog-page">
      <header className="blog-hero">
        <div className="content-container">
          <h1>{blogCopy.hero?.title}</h1>
          <p>{blogCopy.hero?.subtitle}</p>
        </div>
      </header>

      <main className="content-container">
        <section className="blog-posts" aria-label="Blog posts collection">
          <div className="posts-grid">
            {posts.map((post) => (
              <article key={post.id} className="blog-post-card">
                <div className="post-image">
                  <img
                    src={post.image}
                    alt={post.imageAlt || `Featured image for ${post.title}`}
                    loading="lazy"
                  />
                  <div className="post-category">{post.category}</div>
                </div>

                <div className="post-content">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>

                  <div className="post-meta">
                    <div className="meta-author">
                      <span className="author-name">{post.author}</span>
                    </div>
                    <div className="meta-details">
                      <span className="post-date">{post.date}</span>
                      <span className="post-read-time">{post.readTime}</span>
                      <span className="post-views">{post.views}</span>
                      {post.likes ? (
                        <span className="post-likes">{post.likes}</span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
