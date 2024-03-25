import express from 'express';
import { getLoggerInstance } from '../logger.js';
const logger = getLoggerInstance();

const startup = express.Router();

startup.get('/', (req, res) => {
    logger.info('Incoming request', { ipAddress: req.ip });
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.send('Grocery Store API is Up!');
});



//Making the file exportable to be used in another file
export default startup;