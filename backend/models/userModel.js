const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  username: { 
    type: String,
    required: true,
    unique: true
  },
  email: { 
    type: String,
    required: true,
    unique: true
  },
  password: { 
    type: String,
    required: true,
  },
  role: {
    type: Number,
    default: 0
  },
  cart: {
    type: Array,
    default: []
  }
}, {
  timestamps: true
});

const User = mongoose.model('client', UserSchema);
module.exports= User