const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');
const Presupuesto = require('./presupuesto');

const Ingreso = sequelize.define('ingresos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    /*
    id_presupuesto: {
        type: Sequelize.INTEGER,
        references: {
            model: 'presupuestos',
            key: 'id'
        },
        allowNull: false        
    },
    */
    concepto: {
        type: DataTypes.STRING(40),
        allowNull: true,        
    },
}, { 
    timestamps: false
});

Presupuesto.hasMany(Ingreso, {
    foreignKey: {
        name: 'id_presupuesto',
        type: Sequelize.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
});

module.exports = Ingreso;