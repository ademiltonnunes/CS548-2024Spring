const express = require('express');
const students = express.Router();

// 2. Copying the students.json file to the route
const fs = require('fs');
const data = require('../db/2024-spring-student-info.json');

// 3. Create a routes for:

// 3.1. Get all students
students.get('/', (req, res) => {
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userDevice = req.headers['user-agent'];
    res.json({
        IP: userIp, 
        deviceType: userDevice,  
        students: data
    });
});

// 3.2 POST /to retrieve your information based on 'student-id'
students.post('/', (req, res) => {
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userDevice = req.headers['user-agent'];
    const {student_id} = req.body;

    if (!student_id) {
        return res.status(400).json({
            IP: userIp, 
            deviceType: userDevice,  
            message: 'student_id is required'
        });
    }

    const found = data.find(c => c["student_id"] === student_id);

    if (found) {
        res.json({
            IP: userIp, 
            deviceType: userDevice,  
            student: found
        });
    } else {
        res.status(404).json({
            IP: userIp, 
            deviceType: userDevice,            
            message: 'Student not found'
        });
    }
});

// 3.3 POST /to retrieve student's info who has taken CS548 -> the result should be all students ( return student-id only)
students.post('/course', (req, res) => {
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userDevice = req.headers['user-agent'];
    const {course_id} = req.body;

    const course_students_id = data
    .filter(student => student.courses.some(course => course.course_id === course_id))
    .map(student => student.student_id);

    if (course_students_id.length > 0) {
        res.json({
            IP: userIp, 
            deviceType: userDevice,
            students:course_students_id
        });
    } else {
        res.status(404).json({
            IP: userIp, 
            deviceType: userDevice,
            message: 'No student has taken this course'
        });
    }
});

// 3.4 POST /to retrieve who has taken the courses you have taken except CS548.
students.post('/sameclass/exceptCS548', (req, res) => {
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userDevice = req.headers['user-agent'];
    const {student_id} = req.body;

    if (!student_id) {
        return res.status(400).json({
            IP: userIp, 
            deviceType: userDevice,
            message: 'student_id is required'
        });
    }

    // Find the student
    const student = data.find(c => c["student_id"] === student_id);

    if (!student) {
        return res.status(404).json({
            IP: userIp, 
            deviceType: userDevice,
            message: 'Student not found'
        });
    }

    // Get the courses that the student has taken
    courses_id = student.courses.filter(course => course.course_id !== "CS548")
    .map(course => course.course_id);;

    if (courses_id.length === 0) {
        return res.status(404).json({
            IP: userIp, 
            deviceType: userDevice,
            message: 'No courses found for the student-id provided'
        });
    }

    // Find the students that have taken the same courses
    const filteredStudents = data.filter(student => {
        if (student.student_id != student_id) {
            return student.courses.some(course => courses_id.includes(course.course_id));
        }else{
            return false;
        }
    });

    if (filteredStudents.length === 0) {
        return res.status(404).json({
            IP: userIp, 
            deviceType: userDevice,
            message: 'No students found with the same courses'
        });
    }
    
    res.json({
        IP: userIp, 
        deviceType: userDevice,
        students: filteredStudents});

});



module.exports = students;