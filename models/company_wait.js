const mongoose = require('mongoose');
const Company_wait = new mongoose.Schema({
    Name: String,
    Email: String,
    Mobile: Number,
    Address: String,
    Country: String,
    username: {
        type: String,
        unique: true,
    },
    password: String,
});

exports.company_wait = mongoose.model('tutors', Company_wait);
