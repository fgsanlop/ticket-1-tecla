const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');
const Ingreso = require('./ingreso');

const IngresoValor = sequelize.define('ingresos_valores', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    /*id_ingreso: {
        type: Sequelize.INTEGER,
        references: {
            model: 'ingresos',
            key: 'id'
        },
        allowNull: false        
    },*/
    valor: {
        type: DataTypes.DECIMAL(20,2),
        allowNull: false,        
    },
}, {     
    timestamps: false
});

Ingreso.hasMany(IngresoValor, {
    foreignKey: {
        name: 'id_ingreso',
        type: Sequelize.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
});
module.exports = IngresoValor;