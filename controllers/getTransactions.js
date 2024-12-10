import User from '../models/user.js';
import { isValidObjectId } from 'mongoose';

async function getTransactions(req, res) {
  const userId = req.params.userId;

  if (!isValidObjectId(userId)) {
    return res.status(400).json({
      message: 'Incorrect userId',
    });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'transactions',
      data: {
        transactions: user.transactions,
      },
    });
  } catch (error) {
    res.status(500).json({ message: `Error server: ${error}` });
  }
}

export default getTransactions;
