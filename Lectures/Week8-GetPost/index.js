const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const { start } = require('repl');
const httpsOptions = {
    key: fs.readFileSync('./SSL/server.key'),
    cert: fs.readFileSync('./SSL/server.crt')
};
//Routes
const startup = require('./routes/startup');
const classSchedule = require('./routes/classSchedule');
const location = require('./routes/location');

//Creating server
const server = https.createServer(httpsOptions,app);
app.use(express.json());
app.use('/', startup);
app.use('/classschedule', classSchedule);
app.use('/location', location);

server.listen(8080, () => {
    console.log('Server running at https://localhost:8080/');
});

