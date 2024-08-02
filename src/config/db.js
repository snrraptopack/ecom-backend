// `backend/src/config/db.js`
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.error('MongoDB connection error: MONGO_URI is not defined in environment variables');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(mongoUri, {

    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
