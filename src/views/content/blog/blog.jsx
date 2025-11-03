import React from "react";
import "./styles.scss";

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Yacht Charter Mallorca",
      excerpt:
        "Yacht Charter Mallorca: Embark on an Unforgettable Balearic Voyage. Mallorca, the radiant jewel of the Balearic Islands, beckons with its...",
      author: "Fadik Play",
      date: "May 6",
      readTime: "3 min read",
      views: "3 views",
      category: "Luxury Charters",
      image: "/gallery/1.jpg", // Место для фото: Яхта в красивом заливе Майорки
    },
    {
      id: 2,
      title: "Mallorca Private Yacht Charter",
      excerpt:
        "A Mallorca private yacht charter offers the ultimate escape, combining the breathtaking beauty of the Balearic Islands with unparalleled...",
      author: "Fadik Play",
      date: "May 2",
      readTime: "2 min read",
      views: "7 views",
      category: "Private Charters",
      image: "/gallery/6.jpg", // Место для фото: Приватная вечеринка на яхте
    },
    {
      id: 3,
      title: "Luxury Yacht Charter Mallorca",
      excerpt:
        "For the discerning traveler seeking an unparalleled blend of opulence, freedom, and natural beauty, a luxury yacht charter in Mallorca...",
      author: "Fadik Play",
      date: "May 2",
      readTime: "2 min read",
      views: "6 views",
      category: "Luxury Experience",
      image: "/gallery/price-header.jpg", // Место для фото: Роскошный интерьер яхты
    },
    {
      id: 4,
      title: "Celebrities at work and on vacation on our yacht",
      excerpt: "Very famous artists recently filmed a video on our yacht",
      author: "Dmitry Pavlov",
      date: "Jul 14, 2023",
      readTime: "1 min read",
      views: "208 views",
      likes: "5 likes",
      category: "Celebrities",
      image: "/gallery/7.jpg", // Место для фото: Знаменитости на яхте (если возможно)
    },
    {
      id: 5,
      title: "Place of interest Palma de Mallorca",
      excerpt:
        "I often hear the opinion that Palma de Mallorca is just luxury hotels on the islands belonging to Spain. As a tour guide with experience, I...",
      author: "Hanna Doboshne",
      date: "Feb 26, 2023",
      readTime: "2 min read",
      views: "22 views",
      likes: "5 likes",
      category: "Travel Guide",
      image: "/gallery/5.jpg", // Место для фото: Достопримечательности Пальмы
    },
    {
      id: 6,
      title: "Traveling with my girlfriend on a yacht",
      excerpt:
        "The journey itself is beyond praise! I won't talk about the beauty of landscapes, it goes without saying. But this time we were especially...",
      author: "Jesus Santos",
      date: "Feb 13, 2023",
      readTime: "2 min read",
      views: "23 views",
      likes: "11 likes",
      category: "Romantic Getaways",
      image: "/gallery/4.jpg", // Место для фото: Романтический закат на яхте
    },
  ];

  return (
    <div className="blog-page">
      <header className="blog-hero">
        <div className="content-container">
          <h1>Blog - First-hand Information</h1>
          <p>
            Discover insights, stories, and expert advice about yacht charters
            and Mediterranean adventures
          </p>
        </div>
      </header>

      <main className="content-container">
        <section className="blog-posts" aria-label="Blog posts collection">
          <div className="posts-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post-card">
                <div className="post-image">
                  {/* Универсальное место для фото - одинаковый размер для всех постов */}
                  <img
                    src={post.image}
                    alt={`Featured image for ${post.title}`}
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
                      {post.likes && (
                        <span className="post-likes">{post.likes}</span>
                      )}
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
