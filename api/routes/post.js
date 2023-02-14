const express = require('express');
const { getPosts, getPost, addPost, updatePost, deletePost, searchData } = require('../controller/post');

const router = express.Router();
// This route for product management
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', addPost);
router.delete('/:id', deletePost);
router.put('/:id', updatePost);

module.exports = router;
