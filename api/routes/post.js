const express = require('express');
const { getPosts, getPost, addPost, updatePost, deletePost, searchData } = require('../controller/post');

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', addPost);
router.delete('/:id', deletePost);
router.put('/:id', updatePost);
router.get('/search', searchData);

module.exports = router;