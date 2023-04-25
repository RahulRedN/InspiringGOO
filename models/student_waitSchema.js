const mongoose = require('mongoose');

const students_wait = new mongoose.Schema({
    Student_Name: String,
    Student_Username: String,
    Student_Number: Number,
    Student_Email: String,
})

const WaitingList_Student = new mongoose.Schema({
    Tutor_Name: String,
    Tutor_Username: String,
    Tutor_Email: String,
    Pending: [{
        Course_Name: String,
        Students: [students_wait],
    }]
})

exports.waiting_student = mongoose.model('waiting_students', WaitingList_Student);
