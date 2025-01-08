import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import { parseStringPromise } from "xml2js";

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/blogs", async (req, res) => {
  try {
    const feedURL = "https://medium.com/feed/@dennismiringu";
    const proxyURL = `https://api.allorigins.win/get?url=${encodeURIComponent(feedURL)}`;
    const response = await fetch(proxyURL);

    if (!response.ok) {
      throw new Error("Failed to fetch Medium RSS feed");
    }

    const data = await response.json();
    const rss = await parseStringPromise(data.contents);

    // Extract the blog details from the RSS feed
    const blogs = rss.rss.channel[0].item.map((item) => ({
      title: item.title[0],
      link: item.link[0],
      pubDate: item.pubDate[0],
      contentSnippet: item.description[0],
      thumbnail: extractImageFromContent(item["content:encoded"]?.[0]),
    }));

    res.json({ blogs });
  } catch (err) {
    console.error("Error fetching blogs:", err.message);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});


function extractImageFromContent(content) {
  const imgRegex = /<img.*?src="(.*?)"/;
  const match = imgRegex.exec(content);
  return match ? match[1] : "default-image.jpg";
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
