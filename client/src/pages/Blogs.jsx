import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://effective-space-capybara-wrvp7q5qrxjp2x49-5000.app.github.dev/api/posts",
          { withCredentials: true }
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="loading-spinner h-screen flex items-center justify-center">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="white"
          ariaLabel="loading"
        />
      </div>
    );
  }

  return (
    <div className="section">
      {/* Custom Header Section */}
      <div className="flex items-center justify-between p-4 border-b">
        <figure className="w-20">
          <img src="/logo.svg" alt="Logo" className="w-12 h-12 rounded-full" />
        </figure>
        <h2 className="text-3xl font-bold text-white x-9">My Blogs</h2>
      </div>

      {/* Blog Posts */}
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.length === 0 ? (
            <p className="text-center text-zinc-500">
              No blog posts available. Please check back later.
            </p>
          ) : (
            posts.map(({ author, title, url, date, content, tags }, index) => {
              const thumbnailMatch = content.match(/<img[^>]+src="([^">]+)"/);
              const thumbnailUrl = thumbnailMatch
                ? thumbnailMatch[1]
                : "/assets/images/medium.jpg"; // Default image path
              const formattedDate = new Date(date).toLocaleDateString();

              return (
                <div key={index} className="blog-post">
                  <figure className="img-box aspect-video rounded-lg">
                    <img
                      className="img-cover"
                      src={thumbnailUrl}
                      alt="Thumbnail"
                      onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop
                        e.target.src = "/assets/images/medium.jpg"; // Fallback image
                      }}
                    />
                  </figure>
                  <p className="text-sm text-zinc-600 mt-4">{formattedDate}</p>
                  <h3 className="title-1 mb-3">{title}</h3>
                  <p className="text-2xl text-zinc-400 mb-4">by {author}</p>
                  <p className="text-zinc-500 mb-8">
                    Tags: {tags.length ? tags.join(", ") : "No Tags"}
                  </p>
                  <button className="btn btn-primary">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
