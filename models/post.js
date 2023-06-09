const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema ({
    _id : {
        type: String,
        required: true,
        trim: true
    },
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
    },
    image: {
        url: String,
        public_id: String
    }
});

module.exports = mongoose.model('Post', Post);