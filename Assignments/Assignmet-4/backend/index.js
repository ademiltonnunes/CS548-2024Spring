import express from 'express';
import fs from 'fs';
import https from 'https';
import { start } from 'repl';
import cors from 'cors';
import { getLoggerInstance } from './logger.js';

//Routes
import startup from './routes/startup.js';
import store from './routes/grocery_store.js';



const logger = getLoggerInstance();

const app = express();
const httpsOptions = {
    key: fs.readFileSync('./SSL/server.key'),
    cert: fs.readFileSync('./SSL/server.crt')
};



//Creating server
const server = https.createServer(httpsOptions,app);
app.use(cors());
app.use(express.json());
app.use('/', startup);
app.use('/store', store);


server.listen(8080, () => {
    logger.info('Server running at https://localhost:8080/');
});

