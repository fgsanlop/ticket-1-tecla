const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');

const Ingreso = sequelize.define('ingresos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_presupuesto: {
        type: Sequelize.INTEGER,
        references: {
            model: 'presupuestos',
            key: 'id'
        },
        allowNull: false        
    },
    concepto: {
        type: DataTypes.STRING(40),
        allowNull: true,        
    },
});

module.exports = Ingreso;