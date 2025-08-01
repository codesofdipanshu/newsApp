const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// CORS Configuration (Allow only Vercel Frontend)
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://the-news-minute.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Middleware
app.use(express.json());

// Health Check Route
app.get('/', (req, res) => {
  res.send('✅ Backend is running successfully...');
});

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
