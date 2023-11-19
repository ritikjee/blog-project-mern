import User from '../models/users.model.js';
import mongoose from 'mongoose';


export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        const responseData=[]
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            const { password, updatedAt, ...other } = user._doc;
            responseData.push(other);
        }

        res.status(200).json({users:responseData});

    } catch (error) {
        res.status(404).json({ message: "can not find user" });
    }

   
}

export const addUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const { id: _id } = req.params;
    const user = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that id');
        const updatedUser = await User.findByIdAndUpdate(_id, user, { new: true });
        res.json(updatedUser);
    }
    catch {
        res.status(409).json({ message: error.message });

    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id');
    try {
        await User.findByIdAndDelete(id);
        res.json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: "User not found"});
    }
}