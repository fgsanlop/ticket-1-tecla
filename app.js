const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const templates = require('./views/general.views');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use((err, req, res, next) => {
    if (err) {
        console.log(err);
        if (!res.headersSent) {
            res.status(500).send("Error en el servidor: " + err.message)
        }
    }
    next();
});
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates');
app.use(cookieParser());

const serverStart = async () => {
    //await sequelize.authenticate();    
    try {                          
        app.listen(process.env.PORT, () => {
            console.log(`Server on: http://${process.env.HOST}:${process.env.PORT}`);
        })
    }catch (err){
        console.log('---DB connection ERROR: ', err);
    }
}

app.use(templates);

serverStart();

 