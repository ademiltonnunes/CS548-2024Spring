const express = require('express');
const https = require('https');
const fs = require('fs');
const { start } = require('repl');

const app = express();
const httpsOptions = {
    key: fs.readFileSync('./SSL/server.key'),
    cert: fs.readFileSync('./SSL/server.crt')
};

app.use(express.json());

const server = https.createServer(httpsOptions,app);
const startup = require('./routes/startup');


app.use('/marcelo', startup);


server.listen(8080, () => {
    console.log('Server running at https://localhost:8080/');
});

