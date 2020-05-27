const express = require('express');
const router = express.Router();
//const fetch = require('node-fetch');

router.get('/', (req, res) => {

    res.send('Hola ke ase');
});

module.exports = router;