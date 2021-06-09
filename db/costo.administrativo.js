const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');

const CostoAdministrativo = sequelize.define('costos_administrativos', {
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
    opcion: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

module.exports = CostoAdministrativo;