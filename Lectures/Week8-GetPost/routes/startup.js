const express = require('express');
const startup = express.Router();

startup.get('/', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.send('It is working!');
});

startup.get('/alive', (req, res) => { 
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.send('HTTPS Server is alive!');
} );

//Making the file exportable to be used in another file
module.exports = startup;