const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');
const CostoAdministrativo = require('./costo.administrativo');

const CostoAdministrativoValor = sequelize.define('costos_administrativos_valores', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    /*
    id_costo_administrativo: {
        type: Sequelize.INTEGER,
        references: {
            model: CostoAdministrativo,
            key: 'id',
            onDelete: 'cascade'
        },
        allowNull: false        
    },
    */
    valor: {
        type: DataTypes.DECIMAL(20,2),
        allowNull: false,        
    },    
}, { 
    timestamps: false
});

CostoAdministrativo.hasMany(CostoAdministrativoValor, {
    foreignKey: {
        name: 'id_costo_administrativo',
        type: Sequelize.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
});

module.exports = CostoAdministrativoValor;