const mongoose = require('mongoose');

const Courses = new mongoose.Schema({
    Tutor_Name: String,
    Tutor_Mail: String,
    Course_Name: String,
    Reg_Date: String,
    End_Date: String
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
    myCourses: [Courses]
});

const students = mongoose.model('students', userSchema_Student);

module.exports = students;