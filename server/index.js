import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import employeeRoutes from './routes/employeeRoutes.js';  // 👈 import the router

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use employee routes
app.use(employeeRoutes);  // 👈 mount the router

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.get('/', (req, res) => {
  res.send('API is working!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
