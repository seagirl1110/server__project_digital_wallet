import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './db/index.js';
import balanceRouter from './routes/balance.js';

const app = express();
const port = process.env.PORT || 3333;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', balanceRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
