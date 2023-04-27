const express = require('express');
const router = express.Router();
const blog = require('../controllers/post.controller');

router.get('/api', (req, res) => {
    blog.getAllPosts(req, res);
});

router.get('/api/:id', (req, res) => {
    blog.getPost(req, res);
});

router.post('/api/', (req, res) => {
    blog.createPost(req, res);
});

router.delete('/api/:id', (req, res) => {
    blog.deletePost(req, res);
});

router.put('/api/:id', (req, res) => {
    blog.updatePost(req, res);
});

router.get('*', (req, res) => {
    res.sendStatus(404);
});

module.exports = router;