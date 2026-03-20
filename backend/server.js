const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// API endpoints
app.get('/api/tweets', (req, res) => { /* Get tweets */ });
app.post('/api/tweets', (req, res) => { /* Create tweet */ });
app.post('/api/auth/login', (req, res) => { /* User login */ });
app.post('/api/auth/register', (req, res) => { /* User registration */ });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
