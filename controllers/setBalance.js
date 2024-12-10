import User from '../models/user.js';

async function setBalance(req, res) {
  const initialBalance = req.body.initialBalance;

  if (
    initialBalance === undefined ||
    typeof initialBalance !== 'number' ||
    initialBalance < 0
  ) {
    return res.status(400).json({
      message: 'Incorrect initial balance. Please set positive number',
    });
  }

  try {
    const user = new User({
      initialBalance,
      currentBalance: initialBalance,
      transactions: [],
    });

    await user.save();

    res.status(201).json({ message: 'User was created', data: user });
  } catch (error) {
    res.status(500).json({ message: `Error server: ${error}` });
  }
}

export default setBalance;
