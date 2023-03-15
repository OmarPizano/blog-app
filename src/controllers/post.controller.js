const Post = require('../models/post');
const { nanoid } = require('nanoid');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            res.sendStatus(404);
        } else {
            res.status(200).json(post);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createPost = async (req, res) => {
    const new_post = new Post(req.body);
    new_post._id = nanoid(6); 
    let date = new Date();
    new_post.date = `${date.getFullYear()}/${"0" + String(date.getMonth() + 1).slice(-2)}/${("0" + date.getDate()).slice(-2)}`;
    try {
        await new_post.save();
        res.sendStatus(201);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const updated_post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updated_post) {
            res.sendStatus(404);
        } else {
            res.sendStatus(204);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deletePost = async (req, res) => {
    try {
        const deleted_post = await Post.findByIdAndDelete(req.params.id);
        if (!deleted_post) {
            res.sendStatus(404);
        } else {
            res.sendStatus(204);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}