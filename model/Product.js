// models/Product.js
const mongoose = require('mongoose');

// Define the product schema with the exact field names you provided
const productSchema = new mongoose.Schema({
  product_id: { type: String, unique: true, required: true },  // Varchar equivalent
  product_name: { type: String, required: true },  // Varchar equivalent
  category: { type: String, required: true },  // Varchar equivalent
  stock: { type: Number, required: true },  // Integer equivalent
  reorder_points: { type: Number, required: true },  // Integer equivalent
  product_image: { type: String },  // String for the image URL or path
  product_desc: { type: String },  // String for description
  serial_number: { type: String, unique: true, required: true },  // Unique serial number
  model_number: { type: String, required: true },  // Model number
  supplier_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },  // Reference to Supplier
  date: { type: Date, default: Date.now },  // Date when the product is created
}, { timestamps: true });  // Timestamps for createdAt and updatedAt fields

// Create the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
