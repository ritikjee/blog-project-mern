import express from 'express';
import { getSingleUser,getUsers,registerUser,loginUser} from '../controllers/users.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.post('/add', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/:id', getSingleUser);


export default userRouter;