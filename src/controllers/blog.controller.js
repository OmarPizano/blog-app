const path = require('path');
const Post = require('../models/post');

exports.index = (req, res) => {
    res.sendFile(path.resolve('views/index.html'));
};