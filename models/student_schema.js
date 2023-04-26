const mongoose = require('mongoose');

const Courses = new mongoose.Schema({
    Tutor_Name: String,
    Tutor_Email: String,
    Tutor_Number: String,
    Course_Name: String,
    Course_Fee: Number,
    Mode: String,
})

const userSchema_Student = new mongoose.Schema({
    First_Name: String,
    Last_Name: String,
    Sur_Name: String,
    Email: String,
    Mobile: Number,
    Address: String,
    Gender: String,
    DOB: String,
    Qualification: String,
    Institute_Name: String,
    Skills: [String],
    Country: String,
    username: {
        type: String,
        unique: true,
    },
    password: String,
    myCourses: [Object]
});

const students = mongoose.model('students', userSchema_Student);
const coursers = mongoose.model('coursers', Courses);

module.exports = {students, coursers};