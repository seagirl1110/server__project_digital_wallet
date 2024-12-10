import { Router } from 'express';
import setBalance from '../controllers/setBalance.js';
import addBalance from '../controllers/addBalance.js';
import addExpense from '../controllers/addExpense.js';
import getBalance from '../controllers/getBalance.js';
import getTransactions from '../controllers/getTransactions.js';

const router = Router();

router.post('/set-balance', setBalance);
router.post('/add-balance', addBalance);
router.post('/add-expense', addExpense);
router.get('/get-balance/:userId', getBalance);
router.get('/get-transactions/:userId', getTransactions);

export default router;
