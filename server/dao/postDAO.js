const { Post, Post_Like, User } = require('../models/');
const db = require('../models');
class PostDAO {
    async findAll(uid) {
        try {
            // const findPostQuery = `SELECT posts.*, users.firstName, post_likes.id as liker,  GROUP_CONCAT((select users.firstName from users where users.uid = post_likes.uid)) as liker from posts INNER JOIN users ON users.uid = posts.uid INNER JOIN post_likes ON post_likes.PostId = posts.id`
            // const posts = await db.sequelize.query(findPostQuery, { type: db.sequelize.QueryTypes.SELECT })
            const posts = await Post.findAll({
                include: [
                    { model: User, attributes: ['firstname'] },
                    { model: Post_Like, attributes: ['UserUid'], include: { model: User, attributes: ['firstname'] } }
                ]
            }, { where: { uid: uid } })
            return posts;
        } catch (error) {
            return { errors: "error" }
        }
    }

    async findOne(PostId) {
        try {
            const post = await Post.findOne({
                where: { id: PostId },
                include: [
                    { model: User, attributes: ['firstname'] },
                    { model: Post_Like, attributes: ['UserUid'], include: { model: User, attributes: ['firstname'] } }
                ]
            })
            return post;
        } catch (error) {
            return { errors: "error" }
        }
    }


    async createPost(post) {
        try {
            await Post.create(post);
            return { status: "OK" };
        } catch (error) {
            return { errors: "error" }
        }
    }


    async likePost({ UserUid, PostId }) {
        try {
            const isLiked = await checkIfLiked();
            if (!isLiked) {
                await Post_Like.create(
                    { UserUid, PostId },
                    { fields: ['UserUid', 'PostId'] }
                );
            } else {
                await Post_Like.destroy(
                    {
                        where: {
                            PostId: PostId,
                            UserUid: UserUid
                        }
                    });
            }
            return await this.findOne(PostId);
        } catch (error) {
            return { errors: "error" }
        }

        async function checkIfLiked() {
            const result = await Post_Like.findOne({ where: { UserUid: UserUid, PostId: PostId } })
            return result ? true : false;
        }
    }

}

module.exports = new PostDAO();