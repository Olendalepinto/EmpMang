import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import employeeRoutes from './routes/employeeRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express(); // ✅ define app BEFORE using it

app.use(cors()); // ✅ use cors AFTER defining app
app.use(express.json()); // parse JSON bodies

// Use employee routes
app.use(employeeRoutes);

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.get('/', (req, res) => {
  res.send('API is working!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
