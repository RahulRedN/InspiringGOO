const mongoose = require('mongoose');

const Course_Student = new mongoose.Schema({
    Student_Name: String,
    Student_Username: String,
    Student_Email: String
});

const Courses = new mongoose.Schema({
    Course_Name: String,
    Course_Fee: Number,
    Course_Duration: Number,
    Mode: String,
    myStudents: [Course_Student]
});

const userSchema_Tutor = new mongoose.Schema({
    First_Name: String,
    Sur_Name: String,
    Email: String,
    Mobile: Number,
    Address: String,
    Gender: String,
    DOB: String,
    Qualification: String,
    Institute_Name: String,
    Country: String,
    username: {
        type: String,
        unique: true,
    },
    password: String,
    myCourses: [Courses],
    Status: {
        type: Boolean,
        default: false,
    },
});

const tutors = mongoose.model('tutors', userSchema_Tutor);

module.exports = tutors;