import express from 'express';


const location = express.Router();

location.get('/ip', (req, res) => {
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.send(`Your IP address is: ${userIp}`);
});

location.get('/device', (req, res) => {
    const userDevice = req.headers['user-agent'];
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.send(`Your User device is: ${userDevice}`);
});



//Making the file exportable to be used in another file
export default location;