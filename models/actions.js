module.exports = function(sequelize, DataTypes) {
    
    var User = sequelize.define("Actions", {
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
        actionType : {
            type: DataTypes.STRING,
            allowNull: false
        },
        category : {
            type: DataTypes.STRING,
            defaultValue: "basics"
        },
        function : {
            type : DataTypes.TEXT
        },
        strength_cost : {
            type : DataTypes.INTEGER,
            defaultValue: 0
        },
        speed_cost : {
            type : DataTypes.INTEGER,
            defaultValue: 0
        },
        subtlety_mod : {
            type : DataTypes.INTEGER,
            allowNull: true
        }        
    });
    return Action;
};

