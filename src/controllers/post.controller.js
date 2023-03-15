const Post = require('../models/post');

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

exports.editPost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body);
        if (post !== null) {
            res.json({status: true, info: 'OK', data: post});
        } else {
            res.json({status: false, info: 'NOT FOUND', data: []});
        }
    } catch (error) {
        res.json({status: false, info: error.message, data: []});
    }
}

exports.addPost = async (req, res) => {
    const post = new Post(req.body);
    try {
        await post.save();
        res.json({status: true, info: 'OK', data: post});
    } catch (error) {
        res.json({status: false, info: error.message, data: []});
    }
};

exports.delPost = async (req, res) => {
    try {
        const post = await Post.findByIdAndRemove(req.params.id);
        if (post !== null) {
            res.json({status: true, info: 'OK', data: post});
        } else {
            res.json({status: false, info: 'NOT FOUND', data: []});
        }
    } catch (error) {
        res.json({status: false, info: error.message, data: []});
    }
}