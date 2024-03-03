const express = require('express');

// Importing data
const data = require('../db/class-schedule.json');
const classSchedule = express.Router();

const fs = require('fs');


// 1. Get all courses
classSchedule.get('/courses', (req, res) => {
    res.json(data);
});

// 2. Get with parameters to get a specific course
classSchedule.get('/courses/:course', (req, res) => {
    // reading the paramenter passed
    const course = req.params.course;

    // finding the course
    const foundCourse = data.find(c=> c["Course"] === course);

    if (foundCourse) {
        res.json(foundCourse);
    } else {
        res.status(404).send('Course not found');
    }
});

// 3. GET with query parameters online courses
classSchedule.get('/online', (req, res) => {

    // filtering the data
    const filteredCourse = data.filter(c=> c.Classroom.includes("Online"));

    if (filteredCourse) {
        res.json(filteredCourse);
    } else {
        res.status(404).send('Course not found');
    }
});

// 4. POST where the classroom is assigment
classSchedule.post('/classroom', (req, res) => {
    const {course} = req.body;

    if (!course) {
        return res.status(400).json({message: 'Course is required'});
    }

    const found = data.find(c => c.Course === course);

    if (found) {
        res.json({classroom: found?.Classroom});
    } else {
        res.status(404).send('Classroom not found');
    }
});

// 5. PUT to update the classroom
classSchedule.put('/update/:course', (req, res) => { 
    const course = req.params.course;
    const {newInstructor, token} = req.body;

    // token value = admin
    if (token !== "admin") {
        return res.status(401).json({message: 'Unauthorized'});
    }

    const indexList = data.findIndex(c => c.Course === course);

    console.log(indexList);

    data[indexList].Instructor = newInstructor;
    const filePath = path.join(__dirname, '../db/updated-class-schedule.json','class-schedule');
    fs.writeFileSync(filePath, JSON.stringify);

    res.json({message: 'Instructor updated'});

});	



// 6. DELETE to remove a class




module.exports = classSchedule;