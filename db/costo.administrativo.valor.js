const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');

const CostoAdministrativoValor = sequelize.define('costos_administrativos_valores', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_costo_administrativo: {
        type: Sequelize.INTEGER,
        references: {
            model: 'costos_administrativos',
            key: 'id'
        },
        allowNull: false        
    },
    valor: {
        type: DataTypes.DECIMAL(20,2),
        allowNull: true,        
    },
});

module.exports = CostoAdministrativoValor;