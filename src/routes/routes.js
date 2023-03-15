const express = require('express');
const router = express.Router();
const blog = require('../controllers/blog.controller');

router.get('/', (req, res) => {
    blog.index(req, res);
})

router.post('/addpost', (req, res) => {
    blog.addPost(req, res);
})

module.exports = router;