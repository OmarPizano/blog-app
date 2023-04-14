const Post = require('../models/post');
const { nanoid } = require('nanoid');
const cloudinary = require('../config/cloudinary');
const fs = require('fs-extra');

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
        if (req.files?.image) {
            const upload = await cloudinary.uploadFile(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath);
            new_post.image.url = upload.url;
            new_post.image.public_id = upload.public_id;
        }
        await new_post.save();
        res.status(201).json(new_post);
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
            if (req.files?.image) {
                const upload = await cloudinary.uploadFile(req.files.image.tempFilePath);
                await fs.remove(req.files.image.tempFilePath);
                updated_post.image.url = upload.url;
                const remove = await cloudinary.deleteFile(updated_post.image.public_id);
                updated_post.image.public_id = upload.public_id;
                updated_post.save();
            }
            res.status(204).json(updated_post);
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
            if (deleted_post.image.public_id) {
                const remove_cloud = await cloudinary.deleteFile(deleted_post.image.public_id);
            }
            res.sendStatus(204);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}