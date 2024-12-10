import { Router } from 'express';
import setBalance from '../controllers/setBalance.js';

const router = Router();

router.post('/set-balance', setBalance);

export default router;
