const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  bio: String,
  avatar: String,
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const TweetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  likes: Number,
  retweets: Number,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);
const Tweet = mongoose.model('Tweet', TweetSchema);

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send('Access denied');
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
};

app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashed });
  await user.save();
  res.status(201).send('User created');
});

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send('Invalid credentials');
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.send({ token });
});

app.get('/api/tweets', auth, async (req, res) => {
  const tweets = await Tweet.find().populate('user', 'username').sort({ createdAt: -1 });
  res.send(tweets);
});

app.post('/api/tweets', auth, async (req, res) => {
  const tweet = new Tweet({ user: req.user._id, content: req.body.content, likes: 0, retweets: 0 });
  await tweet.save();
  res.status(201).send(tweet);
});

app.listen(5000, () => console.log('Server running on port 5000'));
