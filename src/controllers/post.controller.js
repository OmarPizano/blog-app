const Post = require('../models/post');
const { nanoid } = require('nanoid');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.json({status: true, info: 'OK', data: posts});
    } catch (error) {
        res.json({status: false, info: error.message, data: []});
    }
};

exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post !== null) {
            res.json({status: true, info: 'OK', data: post});
        } else {
            res.json({status: false, info: 'NOT FOUND', data: []});
        }
    } catch (error) {
        res.json({status: false, info: error.message, data: []});
    }
}

exports.createPost = async (req, res) => {
    const post = new Post(req.body);
    post._id = nanoid(6); 
    let date = new Date();
    post.date = `${date.getFullYear()}/${"0" + String(date.getMonth() + 1).slice(-2)}/${("0" + date.getDate()).slice(-2)}`;
    try {
        await post.save();
        res.json({status: true, info: 'OK', data: post});
    } catch (error) {
        res.json({status: false, info: error.message, data: []});
    }
};

exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (post !== null) {
            res.json({status: true, info: 'OK', data: post});
        } else {
            res.json({status: false, info: 'NOT FOUND', data: []});
        }
    } catch (error) {
        res.json({status: false, info: error.message, data: []});
    }
}

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (post !== null) {
            res.json({status: true, info: 'OK', data: post});
        } else {
            res.json({status: false, info: 'NOT FOUND', data: []});
        }
    } catch (error) {
        res.json({status: false, info: error.message, data: []});
    }
}