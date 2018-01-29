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
            type: Sequelize.STRING,
            allowNull: false
        },
        user_bio : {
            type : Sequelize.TEXT
        },
        profile_image : {
            type : Sequelize.STRING
        },
        wins : {
            type : Sequelize.INTEGER,
            defaultValue: 0
        }, 
        losses : {
            type : Sequelize.INTEGER,
            defaultValue: 0
        }, 
        last_played : {
            type : Sequelize.INTEGER
        }
    });
    return User;
};

