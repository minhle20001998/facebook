module.exports = (sequelize, Datatype) => {
    const Post = sequelize.define("Post", {
        id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: Datatype.STRING(65535),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }

    })

    Post.associate = models => {
        Post.hasMany(models.Post_Like, {
            onDelete: 'cascade'
        });
        Post.belongsTo(models.User, { foreignKey: 'uid' });
    }

    return Post;
}