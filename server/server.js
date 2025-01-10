import express from "express";
import axios from "axios";
import cors from "cors";
import { XMLParser } from "fast-xml-parser";

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(
  cors({
    origin: " http://localhost:5173/", // Adjust origin to your frontend's URL if necessary
    methods: "GET",
  })
);

// Default route
app.get("/", (req, res) => {
  res.send("Blog API is running! Use /api/blogs to fetch blogs.");
});

// Fetch blogs endpoint
app.get("/api/blogs", async (req, res) => {
  try {
    const feedURL = "https://medium.com/feed/@dennismiringu"; // Replace with your Medium username
    const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(feedURL)}`);

    if (!response.data || !response.data.contents) {
      throw new Error("RSS feed fetch failed.");
    }

    const parser = new XMLParser();
    const parsedFeed = parser.parse(response.data.contents);
    const items = parsedFeed.rss.channel.item || [];

    const blogs = items.map((item) => {
      const description = item.description || "";
      const thumbnailMatch = description.match(/<img[^>]+src="([^">]+)"/);
      const thumbnail = thumbnailMatch ? thumbnailMatch[1] : "default-image.jpg";

      return {
        title: item.title || "Untitled",
        link: item.link || "#",
        pubDate: item.pubDate || new Date().toISOString(),
        contentSnippet: description.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
        thumbnail,
      };
    });

    res.json({ blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    res.status(500).json({ error: "Failed to fetch blogs. Try again later." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
