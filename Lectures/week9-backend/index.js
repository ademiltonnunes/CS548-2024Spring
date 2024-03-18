import express from 'express';
import fs from 'fs';
import https from 'https';
import { start } from 'repl';
import cors from 'cors';

const app = express();
const httpsOptions = {
    key: fs.readFileSync('./SSL/server.key'),
    cert: fs.readFileSync('./SSL/server.crt')
};
//Routes
import startup from './routes/startup.js';
import classSchedule from './routes/classSchedule.js';
import location from './routes/location.js';


//Creating server
const server = https.createServer(httpsOptions,app);
app.use(cors());
app.use(express.json());
app.use('/', startup);
app.use('/classschedule', classSchedule);
app.use('/location', location);

server.listen(8080, () => {
    console.log('Server running at https://localhost:8080/');
});

