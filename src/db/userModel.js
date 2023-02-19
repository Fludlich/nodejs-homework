const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  subscription: {
    type: String,
    enum: ['starter', 'pro', 'business'],
    default: 'starter',
  },
  token: {
    type: String,
    default: '',
  },
  newAvatar: {
    type: Object,
    default: {
      id: Number,
      avatarUrl: String,
      created: Date,
    },
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
});

userSchema.pre('save', async function() {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = {User};
