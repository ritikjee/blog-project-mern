import Topic from "../models/topic.model.js";
import mongoose from "mongoose";


export const getTopics = async (req, res) => {
    try {
        const topics = await Topic.find();
        res.status(200).json({ topics: topics });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



export const addTopic = async (req, res) => {
    const topic = await req.body;
    const newTopic = new Topic(topic);
    try {
        await newTopic.save();
        res.status(201).json(newTopic);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updateTopic = async (req, res) => {
    const { id: _id } = req.params;
    const topic = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No topic with that id');
        const updatedTopic = await Topic.findByIdAndUpdate(_id, topic, { new: true });
        res.json(updatedTopic);
    }
    catch {
        res.status(409).json({ message: error.message });

    }
}


export const deleteTopic = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No topic with that id');
    try {
        await Topic.findByIdAndDelete(id);
        res.json({ message: 'Topic deleted successfully' });
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}