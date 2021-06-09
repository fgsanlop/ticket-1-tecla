//Modulos
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const midd = require('./midd/midd.general');
//Views
const templates = require('./views/general.view');
const usuarioView = require('./views/usuario.view');
//Sequelize
const sequelize = require('./db/conn');
const Usuario = require('./db/usuario');
//Middlewares generales
app.use(express.json());
app.use(cors(midd.corsOptions));
app.use(midd.limiter);
app.use(cookieParser());
app.use((err, req, res, next) => { //Errores generales
    if (err) {
        console.log(err);
        if (!res.headersSent) {
            res.status(500).send("Error en el servidor: " + err.message)
        }
    }
    next();
});
//EJS
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates');

const serverStart = async () => {   
    try {           
        await sequelize.authenticate();    
        await Usuario.sync({alter: true});         
        app.listen(process.env.PORT, () => {
            console.log(`Server on: http://${process.env.HOST}:${process.env.PORT}`);
        })
    }catch (err){
        console.log('---DB connection ERROR: ', err);
    }
}

app.use('/api', usuarioView);
app.use(templates);

serverStart();

 