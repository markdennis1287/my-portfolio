import express from 'express';
import cors from 'cors';
import Parser from 'rss-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const parser = new Parser();


const corsOptions = {
  origin: (origin, callback) => {
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


app.get('/api/posts', async (req, res) => {
  try {
    const feed = await parser.parseURL('https://medium.com/feed/@dennismiringu');

    const articles = feed.items.map((item) => ({
      author: item.creator || item.author || 'Unknown',
      title: item.title || 'Untitled',
      url: item.link || '#',
      date: item.pubDate || 'No Date',
      content: item['content:encoded'] || item.content || '',
      tags: item.categories || [],
    }));

    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching feed:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on ${PORT}`);
});
