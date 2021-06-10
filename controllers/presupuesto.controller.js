const jwt = require('jsonwebtoken');
const PresupuestoModel = require('../models/presupuesto.model');

const registrarPresupuesto = async (body, idUsuario) => {
    const { proyecto, mes, año, datos } = body;
    let nuevoPresupuesto = new PresupuestoModel(proyecto, false, mes, año, datos);      
    try {
        let res = await nuevoPresupuesto.registrarPresupuesto(idUsuario);
        return res;
    } catch (error) {
        throw error;
    }    
}

module.exports = {
    registrarPresupuesto,
}