import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
connectDB()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.listen(port, () => {
    console.log(`Server is ready at http://localhost:${port}`);
}
)