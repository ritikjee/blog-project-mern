import express from 'express';
import { getComments,addComment,updateComment,deleteComment } from '../controllers/comments.js';

const commentsRouter = express.Router();

commentsRouter.route('/').get(getComments);
commentsRouter.route('/addComment').post(addComment);
commentsRouter.route('/updateComment/:id').put(updateComment);
commentsRouter.route('/deleteComment/:id').delete(deleteComment);


export default commentsRouter;