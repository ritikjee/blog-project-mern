import express from 'express';
import { getSingleUser,getUsers,addUser,updateUser,deleteUser } from '../controllers/users.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.post('/add', addUser);
userRouter.get('/:id', getSingleUser);


export default userRouter;