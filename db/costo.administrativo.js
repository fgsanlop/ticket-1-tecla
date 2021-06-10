const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');
const Presupuesto = require('./presupuesto');

const CostoAdministrativo = sequelize.define('costos_administrativos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    /*
    id_presupuesto: {
        type: Sequelize.INTEGER,
        references: {
            model: Presupuesto,
            key: 'id'
        },
        allowNull: false        
    },*/
    concepto: {
        type: DataTypes.STRING(40),
        allowNull: true,        
    },
    opcion: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { 
    timestamps: false
});

Presupuesto.hasMany(CostoAdministrativo, {
    foreignKey: {
        name: 'id_presupuesto',
        type: Sequelize.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
});

module.exports = CostoAdministrativo;