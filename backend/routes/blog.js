import express from 'express';
import { getBlogPosts,addBlogPost,updateBlogPost,deleteBlogPost,addBlogTopic,likeBlog,dislikeBlog,removeDislikeBlog,removeLikeBlog } from '../controllers/blog.js';


const blogRouter = express.Router();

blogRouter.route('/').get(getBlogPosts);
blogRouter.route('/addBlog').post(addBlogPost);
blogRouter.route('/updateBlog/:id').put(updateBlogPost);
blogRouter.route('/deleteBlog/:id').delete(deleteBlogPost);
blogRouter.route('/addBlogTopic/:blogId/:topicId').post(addBlogTopic);
blogRouter.route('/likeBlog/').post(likeBlog);
blogRouter.route('/removeLikeBlog/').post(removeLikeBlog);
blogRouter.route('/dislikeBlog/').post(dislikeBlog);
blogRouter.route('/removeDislikeBlog/').post(removeDislikeBlog);
// blogRouter.route('/addComment').post(addComment);


export default blogRouter;