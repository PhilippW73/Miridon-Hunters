module.exports = function(sequelize, DataTypes) {
    
    var Action = sequelize.define("Action", {
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
        weapon : {
            type: DataTypes.STRING,
            defaultValue: ""
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
    }, {
        underscored: false,
        timestamps: false
    });
    return Action;
};

