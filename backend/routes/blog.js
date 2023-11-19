import express from 'express';
import { getBlogPosts,addBlogPost,updateBlogPost,deleteBlogPost,addBlogTopic } from '../controllers/blog.js';


const blogRouter = express.Router();

blogRouter.route('/').get(getBlogPosts);
blogRouter.route('/addBlog').post(addBlogPost);
blogRouter.route('/updateBlog/:id').put(updateBlogPost);
blogRouter.route('/deleteBlog/:id').delete(deleteBlogPost);
blogRouter.route('/addBlogTopic/:blogId/:topicId').post(addBlogTopic);


export default blogRouter;