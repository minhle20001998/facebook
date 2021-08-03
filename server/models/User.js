module.exports = (sequelize, Datatype) => {
    const User = sequelize.define("User", {
        uid: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        lastName: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        phoneNumber: {
            type: Datatype.INTEGER,
        },
        password: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: Datatype.STRING,
        },
        dob: {
            type: Datatype.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        gender: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    // User.associate = models => {
    //     User.hasMany(models.Post, {
    //         onDelete: 'cascade'
    //     });
    // }

    User.associate = models => {
        User.hasMany(models.Post_Like, {
            onDelete: 'cascade'
        });
    }

    return User;
}

