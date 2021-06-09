const express = require('express');
const middjwt = require('../midd/midd.jwt');
const router = express.Router();

router.get('/', (req, res) => {    
    res.render('login');
});

router.get('/signup', (req, res) => {    
    res.render('signup');
});

router.get('/index', middjwt.headerUsuario, middjwt.checarToken, (req, res) => {    
    res.render('index');
});

router.get('/create', middjwt.headerUsuario, middjwt.checarToken, (req, res) => {
    res.render('create');
});

router.get('/edit', middjwt.headerUsuario, middjwt.checarToken, (req, res) => {
    res.render('edit');
});

module.exports = router;