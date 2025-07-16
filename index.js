import express from 'express';
import bodyParser from 'body-parser';
import { customAlphabet } from 'nanoid';
import sequelize from './db.js';
import Url from './models/Url.js';

const app = express();
const PORT = 3000;
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);

app.use(bodyParser.json());

// Sync DB and create table
sequelize.sync().then(() => {
  console.log('MySQL connected & tables ready.');
});

// POST /shorten
app.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl || typeof longUrl !== 'string') {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  try {
    // Check if URL already exists
    const existing = await Url.findOne({ where: { longUrl } });

    if (existing) {
      return res.json({ shortUrl: `http://localhost:${PORT}/${existing.shortCode}` });
    }

    // Create new short code
    const shortCode = nanoid();
    await Url.create({ shortCode, longUrl });

    res.json({ shortUrl: `http://localhost:${PORT}/${shortCode}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /:shortCode
app.get('/:shortCode', async (req, res) => {
  const { shortCode } = req.params;

  try {
    const record = await Url.findOne({ where: { shortCode } });

    if (!record) {
      return res.status(404).json({ error: 'Short URL not found' });
    }

    res.redirect(record.longUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`URL Shortener running at http://localhost:${PORT}`);
});
