const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');
const Presupuesto = require('./presupuesto');

const Recurso = sequelize.define('recursos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    /*id_presupuesto: {
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
    costo_mensual: {
        type: DataTypes.DECIMAL(20,2),
        allowNull: false
    }
}, { 
    timestamps: false
});

Presupuesto.hasMany(Recurso, {
    foreignKey: {
        name: 'id_presupuesto',
        type: Sequelize.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
});

module.exports = Recurso;