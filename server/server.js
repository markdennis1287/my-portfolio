import express from 'express';
import cors from 'cors';
import Parser from 'rss-parser';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

const parser = new Parser();

// Dynamic CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'https://effective-space-capybara-wrvp2x49-5173.app.github.dev',
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

// Resolve __dirname
const __dirname = path.resolve();

// Determine the frontend path dynamically
const frontendPathCRA = path.join(__dirname, './client/build'); // CRA build folder
const frontendPathVite = path.join(__dirname, './client/dist'); // Vite dist folder

let frontendPath;
if (fs.existsSync(frontendPathCRA)) {
  frontendPath = frontendPathCRA;
} else if (fs.existsSync(frontendPathVite)) {
  frontendPath = frontendPathVite;
} else {
  console.error('Error: No build/dist folder found. Did you forget to build the frontend?');
  process.exit(1); // Exit the process
}

// Serve React frontend files
app.use(express.static(frontendPath));

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
