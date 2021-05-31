import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true,
  },
  firstName: { type: String },
  lastName: { type: String },
  photos: [String],
});

const User = mongoose.model('User', userSchema);

export default User;
