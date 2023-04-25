const mongoose = require('mongoose');

const Job_Employee = new mongoose.Schema({
    Jobseeker_Name: String,
    Jobseeker_Username: String,
    Jobseeker_Email: String
});

const Jobs = new mongoose.Schema({
    Job_Name: String,
    Job_Description: String,
    Salary: Number,
    Skills: [String],
    Vacancies: Number,
    Total: Number,
    Duration: String,
    Img: String,
    Responsibilities: [String],
    myEmployee: [Job_Employee],
});

const userSchema_Company = new mongoose.Schema({
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
    myJobs: [Jobs],
});

const companies = mongoose.model('companies', userSchema_Company);

module.exports = companies;