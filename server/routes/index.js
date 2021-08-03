const userRouter = require("./user.route/UserRoute");
const postRouter = require("./post.route/PostRoute");

function route(app) {
    app.use("/user", userRouter);
    app.use("/post", postRouter);
}

module.exports = route;