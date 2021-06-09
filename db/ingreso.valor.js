const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');

const IngresoValor = sequelize.define('ingresos_valores', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_ingreso: {
        type: Sequelize.INTEGER,
        references: {
            model: 'ingresos',
            key: 'id'
        },
        allowNull: false        
    },
    valor: {
        type: DataTypes.DECIMAL(20,2),
        allowNull: true,        
    },
});

module.exports = IngresoValor;