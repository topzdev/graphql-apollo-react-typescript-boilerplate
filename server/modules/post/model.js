module.exports = function (sequelize, DataTypes) {

    const Post = sequelize.define("posts", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        content: {
            type: DataTypes.STRING,
            allowNull: false
        },

        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },

        draft: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

    }, { timestamps: true })

    Post.associate = (models) => {
        models.Post.belongsTo(models.User, { foreignKey: 'author', keyType: DataTypes.UUID })
        models.User.hasMany(models.Post)
    }

    return Post
}