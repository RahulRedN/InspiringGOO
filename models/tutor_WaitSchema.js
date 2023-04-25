const mongoose = require('mongoose');

const Tutor_Wait = new mongoose.Schema({
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
});

exports.tutor_wait = mongoose.model('wait_tutors', Tutor_Wait);
