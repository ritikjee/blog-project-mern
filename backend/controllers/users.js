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

export const registerUser = async (req, res) => {
    const { email, password, name ,username,bio,profilePicture,coverPicture} = req.body;
    const res=mongoose.find({email:email})
    const res2=mongoose.find({username:username})
    if(res||res2){
        res.status(409).json({ message: "user already exists" });
    }


    try {

        const user = await User.create({ name, password, email,username,bio,profilePicture,coverPicture });
        res.status(201).json({ user });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const loginUser = async (req, res) => {
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