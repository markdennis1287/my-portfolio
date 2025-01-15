import express from 'express';
import cors from 'cors';
import Parser from 'rss-parser';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

const parser = new Parser();

// Dynamic CORS configuration to allow specific origins
const corsOptions = {
  origin: (origin, callback) => {
    // List of allowed origins
    const allowedOrigins = [
      'https://effective-space-capybara-wrvp7q5qrxjp2x49-5173.app.github.dev', // Codespaces frontend
      'http://localhost:5173', // Local development
      'https://dennis-miringu.onrender.com', // Production
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
    const articles = feed.items.map((item) => ({
      author: item.creator || 'Unknown',
      title: item.title,
      url: item.link,
      date: item.pubDate,
      content: item['content:encoded'] || '',
      tags: item.categories || [],
    }));
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching feed:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

// Serve static files from the React frontend
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, './client/dist')));

// Catch-all handler to serve the index.html file for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on ${PORT}`);
});
