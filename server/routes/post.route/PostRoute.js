const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middlewares/Authenticate')

const posts = require('../../controllers/post.controller/PostController')

router.get('/user/:id', authenticate, posts.getAll);
router.post('/', authenticate, posts.createPost);
router.post('/like', authenticate, posts.likePost);
router.get('/:id', authenticate, posts.getOnePost);



module.exports = router;

