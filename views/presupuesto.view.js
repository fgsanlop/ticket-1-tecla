const express = require('express');
const router = express.Router();
const middjwt = require('../midd/midd.jwt');
const middValidation = require('../midd/midd.validation');
const presupuestoController = require('../controllers/presupuesto.controller');

router.post('/presupuesto/registrar', middjwt.checarToken, middValidation.validarPresupuesto, async (req, res) => {
    let body = req.body;    
    try {
        const token = req.headers.authorization.split(' ')[1];            
        const decoded = middjwt.decodificarToken(token);
        if(decoded) {
            let resultado = await presupuestoController.registrarPresupuesto(body, decoded.data.id);
            res.status(200).json(resultado);
        }
        else
            throw new Error('Hubo un error al registar presupuesto (usuario)')
    } catch (error) {
        res.status(400).send({error: error.message});
    }
});

module.exports = router;