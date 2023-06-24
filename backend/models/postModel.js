const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    author: {
        type: Object,
        required: true,
        ref: 'User',
    },
    title: {
        type: String,
        required: [true, 'Please add a post title'],
    },
    content: {
        type: String,
        required: [true, 'Please add a content'],
    },
    likes: {
        type: Number,
        default: 0,      
    },
    comments: {
        type: [{body: String, date: Date}],
        default: [],
    },
    hidden: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Post', postSchema);