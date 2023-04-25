const mongoose = require('mongoose');

const Courses = new mongoose.Schema({   
    Tutor_Name: String,
    Tutor_Username: String,
    Course_Name: String,
    Course_Fee: Number,
    Course_Duration: Number,
    Mode: String,
});

const courses= mongoose.model('courses', Courses);

module.exports = courses;
