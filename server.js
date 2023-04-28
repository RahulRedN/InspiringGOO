const cookieParser = require('cookie-parser');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ejs = require('ejs');
const session = require('express-session');
const app=express();
app.use(cookieParser());





app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(cookieParser());

app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://pavankumarp21:pavan1234@cluster0.k9kh9zv.mongodb.net/INSPIRINGGO?retryWrites=true&w=majority", {
  family: 4,
  useNewUrlParser: true,
});

const sessionDuration = 50;
const sessionExpiry = new Date(Date.now() + sessionDuration*60000);


/*  Routes */

const AdminRoutes = require('./routes/AdminRoutes.js');
const HomeRoutes = require('./routes/HomeRoutes.js');
const StudentRoutes = require('./routes/StudentRoutes.js');
const JobseekerRoutes = require('./routes/JobSeekerRoutes.js');
const TutorRoutes = require('./routes/TutorRoutes.js');
const CompanyRoutes = require('./routes/CompanyRoutes.js');



/* Admin Routes*/
app.use('/Admin', AdminRoutes);
app.use('/Admin/dashboard', AdminRoutes);
app.use('/Admin/student', AdminRoutes);
app.use('/Admin/jobseeker', AdminRoutes);
app.use('/Admin/tutor', AdminRoutes);
app.use('/Admin/company', AdminRoutes);




/* Home Routes*/
app.use('/',HomeRoutes);
app.use('/Login', HomeRoutes);
app.use('/Logout', HomeRoutes);
app.use('/loginSecondary', HomeRoutes);
app.use('/studentRegister', HomeRoutes);
app.use('/jobseekerRegister', HomeRoutes);
app.use('/tutorRegister', HomeRoutes);
app.use('/mentorRegister', HomeRoutes);
app.use('/companyRegister', HomeRoutes);



/* Student Routes*/
app.use('/S_Landing', StudentRoutes);
app.use('/S_Landing/profile', StudentRoutes);
app.use('/S_Landing/FAQ', StudentRoutes);
app.use('/S_Landing/Find_Tutor',StudentRoutes);




/* JobSeeker Routes*/
app.use('/JobSeeker_Landing', JobseekerRoutes);
app.use('/JobSeeker_Landing/filter_page', JobseekerRoutes);
app.use('/JobSeeker_Landing/profile', JobseekerRoutes);





/* Tutor Routes*/
app.use('/tutorLanding',TutorRoutes);
app.use('/tutorLanding/postCourse',TutorRoutes);
app.use('/tutorLanding/myCourses',TutorRoutes);
app.use('/tutorLanding/studentsEnrolled',TutorRoutes);



/* Company Routes*/
app.use('/companyLanding',CompanyRoutes);
app.use('/companyLanding/postjob',CompanyRoutes);
app.use('/companyLanding/myJobs',CompanyRoutes);
app.use('/companyLanding/jobseekerEnrolled',CompanyRoutes);



app.listen(3000, function () {
  console.log("Server started on port 3000");
});