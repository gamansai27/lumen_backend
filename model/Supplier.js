// models/Supplier.js
const mongoose = require('mongoose');

// Define the supplier schema with the exact field names you provided
const supplierSchema = new mongoose.Schema({
  supplier_id: { type: String, unique: true, required: true },  // Varchar equivalent
  name: { type: String, required: true },  // Varchar equivalent
  contact: { type: String, required: true },  // Contact number as a string (for flexibility)
  email: { type: String, required: true, match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ },  // Email format validation
  address: { type: String, required: true },  // Varchar equivalent for the address
}, { timestamps: true });  // Timestamps for createdAt and updatedAt fields

// Create the Supplier model
const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
