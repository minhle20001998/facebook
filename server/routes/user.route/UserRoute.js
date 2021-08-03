const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middlewares/Authenticate')

const user = require('../../controllers/user.controller/UserController')

router.get('/', authenticate, user.getAll);
router.post('/register', user.register);
router.post('/login', user.login);
router.post('/token', user.refreshToken);
router.delete('/logout', user.logout);


module.exports = router;

