module.exports = function(sequelize, DataTypes) {
    
    var User = sequelize.define("User", {
        user_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_name : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_bio : {
            type : DataTypes.TEXT
        },
        profile_image : {
            type : DataTypes.STRING
        },
        wins : {
            type : DataTypes.INTEGER,
            defaultValue: 0
        }, 
        losses : {
            type : DataTypes.INTEGER,
            defaultValue: 0
        }, 
        last_played : {
            type : DataTypes.INTEGER
        }
    });
    return User;
};

