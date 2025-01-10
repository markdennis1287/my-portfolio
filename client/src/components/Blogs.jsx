import React, { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://dennis-miringu.onrender.com/api/posts"); // Replace with your backend's deployed URL if necessary
        setBlogs(response.data.blogs || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching blogs:", err.message);
        setError("Could not fetch blogs. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-center py-8 text-white">Loading blogs...</p>;
  }

  if (error) {
    return <p className="text-center py-8 text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Latest Blogs</h2>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-600">No blogs to display. Please check back later.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-48 object-cover"
                onError={(e) => (e.target.src = "default-image.jpg")}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600">{new Date(blog.pubDate).toLocaleDateString()}</p>
                <p className="mt-2 text-gray-700">{blog.contentSnippet}</p>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 font-semibold"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
