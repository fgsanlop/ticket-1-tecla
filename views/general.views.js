const express = require('express');
const router = express.Router();

router.get('/index', (req, res) => {    
    res.render('index');
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.get('/edit', (req, res) => {
    res.render('edit');
});

module.exports = router;