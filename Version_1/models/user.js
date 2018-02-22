var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    
    var User = sequelize.define("User", {
        user_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
               isEmail: true
            }
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false
        },
        username : {
            type: DataTypes.STRING
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

    User.prototype.validPassword = function(password) {
       return bcrypt.compareSync(password, this.password);
    };
      // Hooks are automatic methods that run during various phases of the User Model lifecycle
      // In this case, before a User is created, we will automatically hash their password
    User.hook("beforeCreate", function(user) {
       user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
};


