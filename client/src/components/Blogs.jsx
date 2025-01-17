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
          "${import.meta.env.VITE_API_BASE_URL}/api/posts",
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
    <div className="section bg-[#160a1a] text-white">
      {/* Custom Header Section */}
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <figure className="w-20">
          <img src="/logo.svg" alt="Logo" className="w-12 h-12 rounded-full" />
        </figure>
        <h2 className="text-3xl font-bold">
          <a
            href="https://medium.com/@dennismiringu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            My Blogs
          </a>
        </h2>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">
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
                <div
                  key={index}
                  className="blog-post bg-[#130936] rounded-lg p-6 flex flex-col justify-between"
                >
                  <figure className="aspect-video rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={thumbnailUrl}
                      alt="Thumbnail"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "./medium.png";
                      }}
                    />
                  </figure>
                  <div className="flex-1 flex flex-col justify-between mt-4">
                    <p className="text-sm text-gray-400">{formattedDate}</p>
                    <h3 className="text-2xl font-bold my-2">{title}</h3>
                    <p className="text-lg text-gray-300">by {author}</p>
                    <p className="text-sm text-gray-400 mt-4">
                      Tags: {tags.length ? tags.join(", ") : "No Tags"}
                    </p>
                    <button className="btn btn-primary mt-4 self-start bg-blue-800 hover:bg-blue-900 transition-transform duration-200 hover:scale-105 text-white px-4 py-2 rounded-lg">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold"
                      >
                        Read More on Medium
                      </a>
                    </button>
                  </div>
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
