const jwt = require('jsonwebtoken');

module.exports.authenticate = function authenticate(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.sendStatus(401);
    }
    const token = authHeader.split(' ')[1];
    console.log('--------------', { token })
    if (token == null) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

