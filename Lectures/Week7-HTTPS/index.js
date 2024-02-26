// Import Express module
const express = require('express');
const app = express();

// Importing for https protocol
const https = require('https');

// Importing for file system to read any file in the repository
// We use it to read the key stored in the repository
const fs = require('fs');
const { start } = require('repl');

//Reading the key and certificate
const key = fs.readFileSync('./SSL/server.key');
const cert = fs.readFileSync('./SSL/server.crt');

// Another way to store the key and certificate
const httpsOptions = {
    key: fs.readFileSync('./SSL/server.key'),
    cert: fs.readFileSync('./SSL/server.crt')
};

//Parse the body in Json
app.use(express.json());

//Creating server
const server = https.createServer(httpsOptions,app);

//Adding the routes
const startup = require('./routes/startup');

//We also can include more components to the routes
app.use('/', startup);
app.use('/test', startup); //different route name to the same component

server.listen(8080, () => {
    console.log('Server running at https://localhost:8080/');
});

