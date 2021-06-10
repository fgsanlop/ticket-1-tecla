const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');
const Recurso = require("./recurso");

const RecursoPorcentaje = sequelize.define('recursos_porcentajes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    /*
    id_recurso: {
        type: Sequelize.INTEGER,
        references: {
            model: 'recursos',
            key: 'id'
        },
        allowNull: false        
    },*/
    porcentaje: {
        type: DataTypes.INTEGER,
        allowNull: false,        
    },
}, { 
    timestamps: false
});

Recurso.hasMany(RecursoPorcentaje, {
    foreignKey: {
        name: 'id_recurso',
        type: Sequelize.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
});

module.exports = RecursoPorcentaje;