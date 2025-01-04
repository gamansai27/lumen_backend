// models/ProductCategory.js
const mongoose = require('mongoose');

// Define the product category schema with the exact field names you provided
const productCategorySchema = new mongoose.Schema({
  category_id: { type: String, unique: true, required: true },  // Unique identifier for the category
  category_name: { type: String, required: true },  // Category name
  description: { type: String },  // Description of the category
}, { timestamps: true });  // Timestamps for createdAt and updatedAt fields

// Create the ProductCategory model
const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

module.exports = ProductCategory;
