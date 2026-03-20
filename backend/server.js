// server.js - Backend setup for Twitter features

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/tweeter', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const User = mongoose.model('User', UserSchema);

// Tweet Schema
const TweetSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    retweets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});
const Tweet = mongoose.model('Tweet', TweetSchema);

// Notification Schema
const NotificationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});
const Notification = mongoose.model('Notification', NotificationSchema);

// API Endpoints
app.post('/api/auth/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.post('/api/auth/login', async (req, res) => {
    // login logic
});

app.post('/api/tweets', async (req, res) => {
    // create tweet logic
});

app.get('/api/tweets', async (req, res) => {
    // retrieve tweets logic
});

app.post('/api/tweets/:id/like', async (req, res) => {
    // like tweet logic
});

app.post('/api/tweets/:id/retweet', async (req, res) => {
    // retweet logic
});

app.get('/api/users/:id', async (req, res) => {
    // get user profile logic
});

app.post('/api/users/:id/follow', async (req, res) => {
    // follow user logic
});

app.get('/api/search', async (req, res) => {
    // search tweets logic
});

app.get('/api/notifications', async (req, res) => {
    // get notifications logic
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
