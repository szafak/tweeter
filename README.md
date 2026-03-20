# Tweeter - Good, Old, Back...

Classic Twitter clone bringing back the old Twitter experience with modern features.

## ✨ Features

✅ User Authentication (Register/Login)
✅ Post Tweets (280 character limit)
✅ Like/Unlike Tweets
✅ Retweet Functionality
✅ User Profiles with Follow/Unfollow
✅ Personalized Feed
✅ Search & Discover
✅ Notifications
✅ Bookmarks
✅ Image Uploads
✅ Trending Hashtags
✅ Tweet Threads & Replies

## 🛠️ Tech Stack

**Backend:** Node.js, Express, MongoDB  
**Frontend:** React, Tailwind CSS

## 🚀 Installation

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## 📋 API Endpoints

- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login
- `GET /api/tweets` - Get tweets
- `POST /api/tweets` - Create tweet
- `POST /api/tweets/:id/like` - Like tweet
- `POST /api/tweets/:id/retweet` - Retweet
- `GET /api/profiles/:id` - User profile
- `POST /api/profiles/:id/follow` - Follow user
- `GET /api/search` - Search tweets
- `GET /api/notifications` - Get notifications

## 📝 License

MIT