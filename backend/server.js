import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import blogRouter from './routes/blog.js';
import topicRouter from './routes/topic.js';
import userRouter from './routes/users.js';
import commentRouter from './routes/comments.js';
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
connectDB()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/blogs', blogRouter);
app.use('/api/topics', topicRouter);
app.use('/api/users', userRouter);
app.use('/api/comments', commentRouter);

app.listen(port, () => {
    console.log(`Server is ready at http://localhost:${port}`);
}
)