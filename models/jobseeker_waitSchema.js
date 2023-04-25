const mongoose = require('mongoose');
const { jobseeker_user } = require('./jobseeker_schema');

const jobseeker_wait = new mongoose.Schema({
    jobseeker_Name: String,
    jobseeker_Username: String,
    jobseeker_Number: Number,
    jobseeker_Email: String,
});

const WaitingList_Jobseeker= new mongoose.Schema({
    Company_Name: String,
    Company_Email: String,
    Pending: [{
        Job_Name: String,
        Jobseekers: [jobseeker_wait],
    }]
});


const wait_jobseekers = mongoose.model('wait_jobseekers', WaitingList_Jobseeker);

module.exports = wait_jobseekers;
