import express from 'express';
import cors from 'cors';
import Parser from 'rss-parser';
import dotenv from 'dotenv';
import path from 'path';
import NodeCache from 'node-cache';

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

const parser = new Parser();
const cache = new NodeCache({ stdTTL: 600 }); // Cache posts for 10 minutes

// Dynamic CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'https://effective-space-capybara-wrvp7q5qrxjp2x49-5173.app.github.dev',
      'https://my-portfolio-vsvt.onrender.com',
      'http://localhost:5173',
      'https://dennis-miringu.onrender.com',
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

// Fetch Medium RSS feed with caching
app.get('/api/posts', async (req, res) => {
  try {
    const cachedPosts = cache.get('posts');
    if (cachedPosts) {
      return res.status(200).json(cachedPosts);
    }

    const feed = await parser.parseURL('https://medium.com/feed/@dennismiringu');
    const articles = feed.items.map((item) => ({
      author: item.creator || 'Unknown',
      title: item.title,
      url: item.link,
      date: item.pubDate,
      content: item['content:encoded'] || '',
      tags: item.categories || [],
    }));

    cache.set('posts', articles);
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching feed:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

// Serve React frontend files
const __dirname = path.resolve();
const frontendPath = path.join(__dirname, './client/dist');

app.use(express.static(frontendPath));

// Serve React index.html for non-API routes
app.get('*', (req, res) => {
  if (!req.url.startsWith('/api')) {
    res.sendFile(path.join(frontendPath, 'index.html'));
  } else {
    res.status(404).send('API route not found');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
