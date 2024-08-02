const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true },
  image: { type: String, required: true } // New field for image URI
});

ProductSchema.index({ name: 'text', description: 'text', category: 'text' });

module.exports = mongoose.model('Product', ProductSchema);
