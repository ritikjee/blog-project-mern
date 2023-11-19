import mongoose from 'mongoose';

const topicSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog'
        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
});

const Topic = mongoose.model('Topic', topicSchema);