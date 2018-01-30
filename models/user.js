// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    
    var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation    
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        // The password cannot be null
        password: {
          type: DataTypes.STRING,
          allowNull: false
        }
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
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
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

// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define("User", {
//     // The email cannot be null, and must be a proper email before creation
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: true
//       }
//     },
//     // The password cannot be null
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   });
//   // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
//   User.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
//   };
//   // Hooks are automatic methods that run during various phases of the User Model lifecycle
//   // In this case, before a User is created, we will automatically hash their password
//   User.hook("beforeCreate", function(user) {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//   });
//   return User;
// };

