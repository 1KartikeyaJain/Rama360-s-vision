const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * User Model
 * Stores user information, including their role.
 */
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  // In a real app, this would be a hashed password
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['customer', 'admin'], // Defines possible roles
    default: 'customer',
  },
  // You can add more fields here, like 'name'
  name: {
    type: String,
    default: '',
  }
}, { timestamps: true });

// Check if the model already exists before defining it
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
