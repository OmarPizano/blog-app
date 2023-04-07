const express = require('express');
const router = express.Router();
const blog = require('../controllers/post.controller');

router.get('/', (req, res) => {
    blog.getAllPosts(req, res);
});

router.get('/:id', (req, res) => {
    blog.getPost(req, res);
});

router.post('/', (req, res) => {
    blog.createPost(req, res);
});

router.delete('/:id', (req, res) => {
    blog.deletePost(req, res);
});

router.put('/:id', (req, res) => {
    blog.updatePost(req, res);
});

router.get('*', (req, res) => {
    res.sendStatus(404);
});

module.exports = router;