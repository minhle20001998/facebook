const PostDao = require('../../dao/postDAO')

module.exports.getAll = async function getAll(req, res) {
    const { id } = req.params;
    const result = await PostDao.findAll(id);
    if (result.errors) {
        res.status(401).json(result)
    } else {
        res.status(200).json(result)
    }
}

module.exports.createPost = async function createPost(req, res) {
    const post = req.body;
    const result = await PostDao.createPost(post);
    if (result.errors) {
        res.status(400).json(result)
    } else {
        res.status(201).json(result)
    }
}

module.exports.likePost = async function likePost(req, res) {
    const info = req.body;
    const result = await PostDao.likePost(info);
    if (result.errors) {
        res.status(400).json(result)
    } else {
        res.status(201).json(result)
    }
}

module.exports.getOnePost = async function getOnePost(req, res) {
    const { id } = req.params;
    const result = await PostDao.findOne(id);
    if (result.errors) {
        res.status(400).json(result)
    } else {
        res.status(201).json(result)
    }
}