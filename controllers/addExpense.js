import User from '../models/user.js';
import { isValidObjectId } from 'mongoose';

async function addExpense(req, res) {
  const { userId, amount } = req.body;

  if (!userId || !amount) {
    return res.status(400).json({
      message: 'userId and amount are required',
    });
  }

  if (!isValidObjectId(userId)) {
    return res.status(400).json({
      message: 'Incorrect userId',
    });
  }

  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({
      message: 'Incorrect amount of income. Please set positive number',
    });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.currentBalance < amount) {
      return res
        .status(400)
        .json({ message: 'Insufficient funds on the balance' });
    }

    user.currentBalance -= amount;

    user.transactions.push({
      type: 'expense',
      amount,
      date: new Date(),
    });

    await user.save();

    res.status(200).json({
      message: 'Balance was decreased',
      data: { currentBalance: user.currentBalance },
    });
  } catch (error) {
    res.status(500).json({ message: `Error server: ${error}` });
  }
}

export default addExpense;
