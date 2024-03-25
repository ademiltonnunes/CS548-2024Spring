import express from 'express';
import { getZipCode } from '../controller/getZipCode.js';
import { getLoggerInstance } from '../logger.js';
const logger = getLoggerInstance();
const location = express.Router();

location.get('/ip', async (req, res) => {
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userInformation = await getZipCode(userIp);
    logger.info(userIp)
    logger.info(userInformation)
    res.status(200);

    res.json({UserIP: userIp, UserInformation: userInformation});
});

location.get('/device', (req, res) => {
    const userDevice = req.headers['user-agent'];
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.send(`Your User device is: ${userDevice}`);
});



//Making the file exportable to be used in another file
export default location;