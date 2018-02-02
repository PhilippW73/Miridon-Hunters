module.exports = function(sequelize, DataTypes) {
    
    var ActionTypes = sequelize.define("ActionTypes", {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        faIcon : {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return ActionTypes;
};

