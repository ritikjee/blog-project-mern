import mongoose from 'mongoose';
import Comment from '../models/comments.model.js';
import Blog from '../models/blog.model.js';
import User from '../models/users.model.js';

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addComment = async (req, res) => {
    const { id, userId, content, rating } = req.body;
    const blog = await Blog.findById(id);
    const user = await User.findById(userId);
    const comment = new Comment({ content, rating, });
    await comment.save();
    blog.comments.push(comment);
    await blog.save();
    user.comments.push(comment);
    await user.save();
    res.status(201).json(comment);
}

export const updateComment = async (req, res) => {
    const { id: _id } = req.params;
    const comment = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No comment with that id');
        const updatedComment = await Comment.findByIdAndUpdate(_id, comment, { new: true });
        res.json(updatedComment);
    }
    catch {
        res.status(409).json({ message: error.message });

    }
}

export const deleteComment = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No comment with that id');
    try {
        await Comment.findByIdAndDelete(id);
        res.json({ message: 'Comment deleted successfully' });
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

