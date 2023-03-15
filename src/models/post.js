const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema ({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', Post);