module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: true,
            defaultValue: DataTypes.UUIDV4
        },

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

    User.associate = (models) => {
        models.User.hasMany(models.Post)
    }

    return User
}