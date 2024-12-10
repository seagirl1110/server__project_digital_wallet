import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './db/index.js';

const app = express();
const port = process.env.PORT || 3333;

connectDB();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
