const mongoose = require('mongoose');

const Jobs = new mongoose.Schema({
    Company_Name: String,
    Salary: Number,
    Job_Name: String,
    Join_Date: String,
})

  const userSchema_Jobseeker = new mongoose.Schema({
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
    myJobs: [Object]
});

const jobseekers = mongoose.model('jobseekers', userSchema_Jobseeker);
const jobers = mongoose.model('jobers', Jobs);

module.exports = {jobseekers, jobers};
