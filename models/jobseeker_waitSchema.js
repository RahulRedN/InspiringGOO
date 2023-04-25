const mongoose = require('mongoose');

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

exports.waiting_student = mongoose.model('waiting_students', WaitingList_Jobseeker);
