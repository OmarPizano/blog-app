const express = require('express');
const router = express.Router();
const blog = require('../controllers/blog.controller');

router.get('/', (req, res) => {
    blog.showIndex(req, res);
});

router.get('/post/:id', (req, res) => {
    blog.showPost(req, res);
});

router.post('/del/:id', (req, res) => {
    blog.delPost(req, res);
});

router.get('/edit/:id', (req, res) => {
    blog.showEditPost(req, res);
});

router.post('/edit/:id', (req, res) => {
    blog.editPost(req, res);
});

router.post('/add', (req, res) => {
    blog.addPost(req, res);
});

router.get('/add', (req, res) => {
    blog.showAddPost(req, res);
});

module.exports = router;