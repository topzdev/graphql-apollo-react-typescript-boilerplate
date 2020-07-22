module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { timestamps: true })

    // User.associate = (models) => {
    //     models.User.hasMany(models.Post, { foreignKey: 'author' })
    // }

    return User
}