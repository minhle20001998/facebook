const UserDAO = require('../../dao/userDAO')
const jwt = require('jsonwebtoken');

let refreshTokens = []

module.exports.getAll = async function getAll(req, res) {
    const result = await UserDAO.findAll();
    if (result.errors) {
        res.status(401).json(result)
    } else {
        res.status(200).json(result)
    }
}

module.exports.register = async function register(req, res) {
    const result = await UserDAO.insert(req.body);
    if (result.errors) {
        res.status(400).json(result)
    } else {
        res.status(201).json(result)
    }
}

module.exports.login = async function login(req, res) {
    const result = await UserDAO.checkLogin(req.body);
    if (result.errors) {
        res.status(200).json("wrong email or phone number")
    } else if (result) {
        const token = generateAccessToken(result)
        const refreshToken = jwt.sign(result, process.env.REFRESH_KEY);
        refreshTokens.push(refreshToken)
        res.status(201).json({ token, refreshToken })
    } else if (result === false) {
        res.status(200).json("wrong password")
    }
}

module.exports.refreshToken = function refreshToken(req, res) {
    console.log({refreshTokens})
    const refreshToken = req.body.refreshToken;
    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) {
        return res.sendStatus(403)
    }
    jwt.verify(refreshToken, process.env.REFRESH_KEY, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ username: user.username, uid: user.uid })
        res.json({ accessToken: accessToken })
    })
}

module.exports.logout = function (req, res) {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204);
}


function generateAccessToken(user) {
    return jwt.sign(user, process.env.JWT_KEY, { expiresIn: '15s' })
}
