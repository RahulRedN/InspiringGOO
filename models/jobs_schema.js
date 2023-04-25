const mongoose = require('mongoose');

const Jobs = new mongoose.Schema({
    Company_Name: String,
    Company_Username: String,
    Job_Name: String,
    Job_Description: String,
    Salary: Number,
    Skills: [String],
    Vacancies: Number,
    Total: Number,
    Duration: String,
    Img: String,
    Responsibilities: [String],
});

const jobs = mongoose.model('jobs', Jobs);

module.exports = jobs;