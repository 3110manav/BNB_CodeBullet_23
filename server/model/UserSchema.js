import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Check if the phone number is exactly 10 digits
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number! Must be 10 digits.`
    }
  },
  gender: {
    type: String,
    enum: ['male', 'female'], required: true
  },
  password: {
    type: String,
    required: true
  }
});

const user = mongoose.model('User', userSchema);

export default user;
