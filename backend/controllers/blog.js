import mongoose from 'mongoose';
import Blog from '../models/blog.model.js';
import Topic from '../models/topic.model.js';
import User from '../models/users.model.js';
import Comment from '../models/comments.model.js';

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
    const blog =await Blog.findById(id);
    const user =await  User.findById(userId);
    const comment = new Comment({content, rating,});
    await comment.save();
    // const result = await comment.save();
    blog.comments.push(comment);
    await blog.save();
    user.comments.push(comment);
    await user.save();

    res.status(201).json(comment);
}

export const likeBlog = async (req, res) => {
    const {blogId,userId} = await req.body;
    try {
        const blog = await Blog.findById(blogId);
        const user = await User.findById(userId);
        blog.likes.push(user);
        await blog.save();
        user.likedBlogs.push(blog);
        await user.save();
        res.status(201).json("Hurrah! You liked the blog");

    } catch (error) {
        res.status(409).json({ message: "Sorry you can't like the blog" });
    }
}

export const dislikeBlog = async (req, res) => {
    const {blogId,userId} = await req.body;
    try {
        const blog = await Blog.findById(blogId);
        const user = await User.findById(userId);
        blog.dislikes.push(user);
        await blog.save();
        user.dislikedBlogs.push(blog);
        await user.save();
        res.status(201).json("You disliked the blog");

    } catch (error) {
        res.status(409).json({ message: "Sorry you can't dislike the blog" });
    }
}

export const removeLikeBlog = async (req, res) => {
    const {blogId,userId} = await req.body;
    try {
        const blog = await Blog.findById(blogId);
        const user = await User.findById(userId);
        blog.likes.pull(user);
        await blog.save();
        user.likedBlogs.pull(blog);
        await user.save();
        res.status(201).json("You removed your like from the blog");

    } catch (error) {
        res.status(409).json({ message: "Sorry you can't remove your like from the blog" });
    }
}

export const removeDislikeBlog = async (req, res) => {
    const {blogId,userId} = await req.body;
    try {
        const blog = await Blog.findById(blogId);
        const user = await User.findById(userId);
        blog.dislikes.pull(user);
        await blog.save();
        user.dislikedBlogs.pull(blog);
        await user.save();
        res.status(201).json("You removed your dislike from the blog");

    } catch (error) {
        res.status(409).json({ message: "Sorry you can't remove your dislike from the blog" });
    }
}