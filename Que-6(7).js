const mongoose = require('mongoose');

// Define your schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number
  }
});

// Add indexes to the schema
userSchema.index({ name: 1 });       // Single field index
userSchema.index({ email: 1 }, { unique: true });  // Single field index with unique constraint
userSchema.index({ name: 1, age: -1 });   // Compound index with ascending and descending sorting

// Create the model
const User = mongoose.model('User', userSchema);
