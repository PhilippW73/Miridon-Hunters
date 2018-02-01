module.exports =  function(squelize, DataTypes){

    var Class = squelize.define("Class", {

        class_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        class_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        class_quote: {
            type: DataTypes.TEXT
        },
        class_desc: {
            type: DataTypes.TEXT
        },
        class_image: {
            type: DataTypes.STRING,
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
        skill_point : {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        ghost_hp : {
            type : DataTypes.INTEGER,
            default: 0
        },
        skills : {
            type: DataTypes.TEXT
        }
    });
    return Class;
};