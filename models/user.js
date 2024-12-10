import mongoose from 'mongoose';
import transactionSchema from './transaction.js';

const userSchema = new mongoose.Schema({
  initialBalance: {
    type: Number,
    required: true,
  },
  currentBalance: {
    type: Number,
    required: true,
  },
  transactions: {
    type: [transactionSchema],
  },
});

const User = mongoose.model('User', userSchema);
export default User;
