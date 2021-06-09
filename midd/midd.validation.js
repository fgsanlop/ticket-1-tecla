const Joi = require('joi')
const validation = require('./validation')

const validarLogin = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, validation.login, 'Datos incorrectos')
        return next()
    }catch (err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

const validarSignUp = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, validation.signup, 'Datos incorrectos');
        return next()
    }catch (err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

const validarActualizacionUsuario = async (req, res, next) => {
    try{
        await Joi.attempt(req.body, validation.actualizarUsuario, 'Datos incorrectos');
        return next()
    }catch (err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    validarLogin,
    validarSignUp,
    validarActualizacionUsuario,
}