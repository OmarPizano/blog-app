const { type } = require('os');
const path = require('path');
const Post = require('../models/post');

exports.showIndex = async (req, res) => {
    const posts = await Post.find()
    res.render('index.html', {posts: posts});
    // res.json(posts);
};

exports.showAddPost = (req, res) => {
    res.render('addedit.html');
} 

exports.showEditPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('addedit.html', { post: post });
} 

exports.editPost = async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, {title: req.body.title, content: req.body.content}) 
        res.redirect('/post/' + req.params.id);
    } catch (error) {
        res.render('error.html', {info: error});
    }
}

exports.addPost = async (req, res) => {
    const post = new Post(req.body);
    try {
        await post.save();
        res.redirect('/');
        // res.json(post);
    } catch (error) {
        res.render('error.html', {info: error});
        // res.json({error: true, msg: error});
    }
};

exports.showPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.render('post.html', {post: post});
        // res.json(post);
    } catch (error) {
        res.render('error.html', {info: error});
        // res.json({error: true, msg: error});
    }
}

exports.delPost = async (req, res) => {
    try {
        const post = await Post.findByIdAndRemove(req.params.id);
        res.redirect('/');
        // res.json(post);
    } catch (error) {
        res.render('error.html', {info: error});
        // res.json({error: true, msg: error});
    }
}