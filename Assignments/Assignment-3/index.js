const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const { start } = require('repl');
const httpsOptions = {
    key: fs.readFileSync('./SSL/server.key'),
    cert: fs.readFileSync('./SSL/server.crt')
};

//1. Creating server
const server = https.createServer(httpsOptions,app);
app.use(express.json());

app.get('/', (req, res) => {
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userDevice = req.headers['user-agent'];
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.json({
        message: "Welcome to my app!",
        IP: userIp, 
        deviceType: userDevice});
});

// Questions 2. and 3. are in the routes folder
//Routes
const students = require('./routes/students');
app.use('/students', students);

server.listen(8080, () => {
    console.log('Server running at https://localhost:8080/');
});