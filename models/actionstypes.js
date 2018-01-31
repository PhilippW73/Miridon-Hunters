module.exports = function(sequelize, DataTypes) {
    
    var User = sequelize.define("ActionsTypes", {
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
        },
        onTurn : {
            type: DataTypes.BOOLEAN,
            defaultValue: 1
        }
    });
    return ActionTypes;
};

