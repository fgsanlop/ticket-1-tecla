const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');

const FlujoDeEfectivo = sequelize.define('flujos_de_efectivo', {
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
    ingreso: {
        type: DataTypes.DECIMAL(20,2),
        allowNull: true,        
    },    
}, { freezeTableName: true });

module.exports = FlujoDeEfectivo;