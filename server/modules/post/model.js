module.exports = function (sequelize, DataTypes) {

    const Post = sequelize.define("post", {
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

        author: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
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

    return Post
}