const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('./conn');
const Usuario = require('./usuario');

const Presupuesto = sequelize.define('presupuestos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    /*id_usuario: {
        type: Sequelize.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id'
        },
        allowNull: false
    },*/
    proyecto: {
        type: DataTypes.STRING(40),
        allowNull: false,        
    },
    version: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    mes: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    año: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    eliminado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});

Usuario.hasMany(Presupuesto, {
    foreignKey: {
        name: 'id_usuario',
        type: Sequelize.INTEGER,
        allowNull: false
    },
    onDelete: 'CASCADE'
});

module.exports = Presupuesto;