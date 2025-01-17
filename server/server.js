import express from 'express';
import cors from 'cors';
import Parser from 'rss-parser';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

const parser = new Parser();

// Dynamic CORS configuration to allow specific origins
const corsOptions = {
  origin: (origin, callback) => {
    // List of allowed origins
    const allowedOrigins = [
      'https://effective-space-capybara-wrvp7q5qrxjp2x49-5173.app.github.dev',
      'http://localhost:5173',
      'https://my-portfolio-peach-nu-27.vercel.app',
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
};
app.use(cors(corsOptions));

// Fetch and format Medium RSS feed
app.get('/api/posts', async (req, res) => {
  try {
    const feed = await parser.parseURL('https://medium.com/feed/@dennismiringu');

    // Log the feed for debugging
    console.log('Feed structure:', feed);

    // Map articles from feed
    const articles = feed.items.map((item) => ({
      author: item.creator || item.author || 'Unknown', // Use 'creator' or fallback to 'author'
      title: item.title || 'Untitled', // Use 'title' or fallback to 'Untitled'
      url: item.link || '#', // Ensure the link is valid
      date: item.pubDate || 'No Date', // Use 'pubDate' or fallback to 'No Date'
      content: item['content:encoded'] || item.content || '', // Check both possible content fields
      tags: item.categories || [], // Use 'categories' for tags
    }));

    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching feed:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on https://effective-space-capybara-wrvp7q5qrxjp2x49-5000.app.github.dev`);
});
