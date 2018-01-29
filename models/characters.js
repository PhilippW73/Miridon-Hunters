module.exports = function(sequelize, DataTypes) {

    var Character = sequelize.define("Character", {
        
        character_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        character_name : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        character_desc : {
            type: Sequelize.TEXT
        },
        class_name : {
            type : Sequelize.STRING,
            allowNull: false
        },
        character_image : {
            type : Sequelize.STRING,
            allowNull: false
        },
        strength_point : {
            type : Sequelize.INTEGER,
            allowNull: false
        }, 
        speed_point : {
            type : Sequelize.INTEGER,
            allowNull: false
        },
        skill_point : {
            type : Sequelize.INTEGER,
            allowNull: false
        },
        ghost_hp : {
            type : Sequelize.INTEGER,
            allowNull: false
        },
        skills : {
            type: Sequelize.TEXT
        }
    });
    return Character;
};
