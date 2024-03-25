# Assignment 3

## Report
It is the report of the assignment 3.
## Create a HTTPS Server
I created the server in the route https://localhot:8080.
I put it to show the device type and IP address:

- Terminal
![Running Server](./Screenshots/1.png)

- Browser:
![Browser](./Screenshots/2.png)

## Create a routes for:

### GET  / to retrieve all the student-info
- I create the route https://localhost:8080/students
- It shows the device name and IP address in the beginning of JSON

**Result:**
![GET ALL](./Screenshots/3.png)


### POST /to retrieve your information based on 'student-id'
- I am using the same route https://localhost:8080/students, but this is a POST so I need to inform the student id

- **Request**
Request sending student-id:
![Request Post StudentId](./Screenshots/4.png)


- **Result**
I tested sending my student ID:
![Result Post Student Id](./Screenshots/5.png)

### POST /to retrieve student's info who has taken CS548 -> the result should be all students ( return student-id only)
- I am using the same route https://localhost:8080/students/course

- **Request**
Request sending course-id:
![Request Post CourseId](./Screenshots/6.png)


- **Result**
I tested sending my the Course ID CS548:
![Result Post CourseId](./Screenshots/7.png)

### POST /to retrieve who has taken the courses you have taken except CS548.
- I am using the same route https://localhost:8080/students/sameclass/exceptCS548

- **Request**
Request sending student-id:
![Request except cs548](./Screenshots/8.png)


- **Result**
I tested sending my student id:
![Result except cs548](./Screenshots/10.png)
