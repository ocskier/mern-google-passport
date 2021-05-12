const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  googleId: {
    type: String,
    unique: true,
  },
  firstName: { type: String },
  lastName: { type: String },
  photos: [String],
});

const User = model('User', userSchema);

module.exports = User;
