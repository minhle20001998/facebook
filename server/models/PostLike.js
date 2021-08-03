module.exports = (sequelize, Datatype) => {
    const PostLike = sequelize.define("Post_Like", {
        id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    })

    PostLike.associate = models => {
        PostLike.belongsTo(models.Post, { foreignKey: 'PostId' });
        PostLike.belongsTo(models.User, { foreignKey: 'UserUid' });
    }

    return PostLike;
}