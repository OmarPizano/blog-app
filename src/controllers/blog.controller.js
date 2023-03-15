const path = require('path');
const Post = require('../models/post');

exports.index = (req, res) => {
    res.sendFile(path.resolve('views/index.html'));
};

exports.addPost = (req, res) => {
    var post = new Post(req.body);
    // console.log(req.body);
    post.save();
    // console.log('New post added.');
    res.redirect('/');
};