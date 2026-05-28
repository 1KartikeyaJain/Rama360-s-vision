const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Meeting Model
 * Stores all meeting information, public or private.
 */
const meetingSchema = new Schema({
  // 'public' for the single, site-wide meeting
  // 'private' for user-specific meetings
  type: {
    type: String,
    enum: ['public', 'private'],
    required: true,
  },
  
  // 'link' if storing a full URL
  // 'id' if storing a Meeting ID and Password
  format: {
    type: String,
    enum: ['link', 'id'],
    required: true,
  },

  // The user this meeting is assigned to (ONLY for 'private' type)
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null, // Will be null for the public meeting
  },

  // --- Data Fields ---
  // Used if format is 'link'
  link: {
    type: String,
    trim: true,
  },

  // Used if format is 'id'
  meetingId: {
    type: String,
    trim: true,
  },
  
  // Used if format is 'id'
  password: {
    type: String,
    trim: true,
  },

}, { timestamps: true });

// Ensure only ONE public meeting document can exist
meetingSchema.index({ type: 1 }, { unique: true, partialFilterExpression: { type: 'public' } });

// Check if the model already exists before defining it
module.exports = mongoose.models.Meeting || mongoose.model('Meeting', meetingSchema);
