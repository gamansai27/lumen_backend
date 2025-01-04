// models/Alert.js
const mongoose = require('mongoose');

// Define the alert schema with the exact field names you provided
const alertSchema = new mongoose.Schema({
  alert_id: { type: String, unique: true, required: true },  // Unique identifier for the alert
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },  // Reference to the Product collection
  alert_type: { type: String, enum: ['low', 'high'], required: true },  // Enumeration for alert type
  triggered_time: { type: Date, default: Date.now },  // Timestamp for when the alert is triggered
}, { timestamps: true });  // Timestamps for createdAt and updatedAt fields

// Create the Alert model
const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;
