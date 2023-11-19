import mongoose from 'mongoose';
import Blog from '../models/blog.model.js';
import Topic from '../models/topic.model.js';
import User from '../models/users.model.js';
import Comment from '../models/comment.model.js';

export const getBlogPosts = async (req, res) => {
    try {
        const blogPosts = await Blog.find();
        res.status(200).json({ blogs: blogPosts });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const addBlogPost = async (req, res) => {
    const blogPost = await req.body;
    const newBlogPost = new Blog(blogPost);
    try {
        await newBlogPost.save();
        res.status(201).json(newBlogPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateBlogPost = async (req, res) => {
    const { id: _id } = req.params;
    const blogPost = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No blog post with that id');
        const updatedBlogPost = await Blog.findByIdAndUpdate(_id, blogPost, { new: true });
        res.json(updatedBlogPost);
    }
    catch {
        res.status(409).json({ message: error.message });

    }
}

export const deleteBlogPost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No blog post with that id');
    try {
        await Blog.findByIdAndDelete(id);
        res.json({ message: 'Blog post deleted successfully' });
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const addBlogTopic = async (req, res) => {

    const { topicId, blogId } =await req.params;
    const blog = await Blog.findById(blogId);
    const topic = await Topic.findById(topicId);

    if (!topic ) return res.status(404).send('No blog post or topic with that id2');
    if (!blog ) return res.status(404).send('No blog post or topic with that id1');
    try {
        blog.topic.push(topic);
        await blog.save();
        topic.blogs.push(blog);
        await topic.save();
        res.status(201).json(blog);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const addComment = async (req, res) => {
    const {id,userId,content,rating} = req.body;
    const blog = Blog.findById(id);
    const user = User.findById(userId);
    const comment = new Comment({content,user,blog,rating});
    await comment.save();
    blog.comments.push(comment);
}
