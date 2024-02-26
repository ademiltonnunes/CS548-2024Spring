const express = require('express');
const startup = express.Router();

startup.get('/', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.send("You're connected to my server!");
});

startup.get('/time', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');

    var now = new Date();
    // Get the current hour, minute, and second
    var currentHour = now.getHours();
    var currentMinute = now.getMinutes();
    var currentSecond = now.getSeconds();
    var currentTime = currentHour + ":" + currentMinute + ":" + currentSecond;
    res.send("Now it is: " + currentTime);
});

startup.post('/add-time', (req, res) => {
    var now = new Date();

    if (req.body && (req.body.hour || req.body.minute || req.body.second)) {

        hoursToAdd = req.body.hour || 0;
        minutesToAdd = req.body.minute || 0;
        secondsToAdd = req.body.second || 0;

        now.setHours(now.getHours() + hoursToAdd);
        now.setMinutes(now.getMinutes() + minutesToAdd);
        now.setSeconds(now.getSeconds() + secondsToAdd);

        var newTime =
        now.getHours() + ":" +
        now.getMinutes() + ":" +
        now.getSeconds();

        res.status(200);
        res.json({ message: `New time: ${newTime}` });
    } else {
        res.status(400).json({ message: `No valid time parameters provided` });
    }
});


//Making the file exportable to be used in another file
module.exports = startup;