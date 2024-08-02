require('dotenv').config();
const cors = require('cors');

const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
