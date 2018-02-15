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
        character_author : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        character_desc : {
            type: DataTypes.TEXT
        },
        class_name : {
            type : DataTypes.STRING,
            allowNull: false
        },
        character_image : {
            type : DataTypes.STRING,
            allowNull: false
        },
        strength_point : {
            type : DataTypes.INTEGER,
            allowNull: false
        }, 
        speed_point : {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        hit_point : {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        skill_point : {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        ghost_hp : {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        skills : {
            type: DataTypes.TEXT
        },
        wins : {
            type : DataTypes.INTEGER,
            default: 0
        },
        losses : {
            type : DataTypes.INTEGER,
            default: 0
        }
    });
    return Character;
};
