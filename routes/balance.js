import { Router } from 'express';
import setBalance from '../controllers/setBalance.js';
import addBalance from '../controllers/addBalance.js';
import addExpense from '../controllers/addExpense.js';

const router = Router();

router.post('/set-balance', setBalance);
router.post('/add-balance', addBalance);
router.post('/add-expense', addExpense);

export default router;
