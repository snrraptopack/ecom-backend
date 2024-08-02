require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config/db');

const key = process.env.MONGODB_URI;
console.log("The key is: " + key);


const dummyProducts = [
  {
    name: "Smartphone X",
    description: "Latest model with advanced features",
    price: 999.99,
    category: "Electronics",
    inStock: true,
    image: "https://unsplash.com/photos/person-holding-white-android-smartphone-aU-tyT7E0lw"
  },
  {
    name: "Leather Wallet",
    description: "Handcrafted genuine leather wallet",
    price: 49.99,
    category: "Accessories",
    inStock: true,
    image: "https://unsplash.com/photos/person-getting-1-us-dollar-banknote-in-wallet-fJTqyZMOh18"
  },
  {
    name: "Running Shoes",
    description: "Lightweight and comfortable for long distances",
    price: 129.99,
    category: "Sports",
    inStock: true,
    image: "https://unsplash.com/photos/unpaired-red-nike-sneaker-164_6wVEHfI"
  },
  {
    name: "Coffee Maker",
    description: "Programmable with multiple brew settings",
    price: 79.99,
    category: "Home Appliances",
    inStock: true,
    image: "https://unsplash.com/photos/black-espresso-machine-FOKVlQRl3uY"
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling with long battery life",
    price: 199.99,
    category: "Electronics",
    inStock: false,
    image: "https://unsplash.com/photos/white-dice-on-white-surface-KcbD8QoBGIk"
  }
];

const seedData = async () => {
  try {
    await connectDB();
    await Product.deleteMany({}); // Clear existing products
    await Product.insertMany(dummyProducts);
    console.log('Dummy data seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
