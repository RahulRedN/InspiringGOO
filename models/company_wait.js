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

const wait_companies = mongoose.model('wait_companies', Company_wait);

module.exports = wait_companies;