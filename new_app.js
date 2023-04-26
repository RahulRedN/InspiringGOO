const cookieParser = require('cookie-parser');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ejs = require('ejs');
const session = require('express-session');
const app=express();
app.use(cookieParser())
// const courses_cards = require("./models/courses_schema.js");
// const company_schema = require("./models/company_schema.js");
// const jobseeker_schema = require("./models/jobseeker_schema.js");
// const job_schema = require("./models/jobs_schema.js");
// const student_schema = require("./models/student_schema.js");
const tutor_schema = require("./models/tutor_schema.js");

// const card_data = require('../info/coursesData.js');
// const company_data = require("../info/companyData");
// const jobs_data = require("../info/JobsData");
// const jobseeker_data = require("../info/JobseekersData");
// const student_data = require("../info/studentsData");
const tutor_data = require("../info/TutorData");




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
mongoose.connect("mongodb+srv://pavankumarp21:pavan1234@cluster0.k9kh9zv.mongodb.net/test?retryWrites=true&w=majority", {
  family: 4,
  useNewUrlParser: true,
});

const AdminRoutes = require('./routes/AdminRoutes');
const HomeRoutes = require('./routes/HomeRoutes.js');
const StudentRoutes = require('./routes/StudentRoutes.js');
const JobseekerRoutes = require('./routes/JobSeekerRoutes.js');
const TutorRoutes = require('./routes/TutorRoutes.js');
const CompanyRoutes = require('./routes/CompanyRoutes.js');

app.use('/Admin', AdminRoutes);
app.use('/Admin/dashboard', AdminRoutes);
app.use('/Admin/student', AdminRoutes);
app.use('/Admin/jobseeker', AdminRoutes);
app.use('/Admin/tutor', AdminRoutes);
app.use('/Admin/company', AdminRoutes);

app.use('/',HomeRoutes);
app.use('/Login', HomeRoutes);
app.use('/Logout', HomeRoutes);
app.use('/loginSecondary', HomeRoutes);
app.use('/studentRegister', HomeRoutes);
app.use('/jobseekerRegister', HomeRoutes);
app.use('/tutorRegister', HomeRoutes);
app.use('/mentorRegister', HomeRoutes);
app.use('/companyRegister', HomeRoutes);



app.use('/S_Landing', StudentRoutes);
app.use('/S_Landing/profile', StudentRoutes);
app.use('/S_Landing/FAQs', StudentRoutes);
app.use('/S_Landing/Find_Tutor',StudentRoutes);



app.use('/JobSeeker_Landing', JobseekerRoutes);
app.use('/JobSeeker_Landing/filter_page', JobseekerRoutes);



app.use('/tutorLanding',TutorRoutes);
app.use('/tutorLanding/postCourse',TutorRoutes);
app.use('/tutorLanding/myCourses',TutorRoutes);
app.use('/tutorLanding/studentsEnrolled',TutorRoutes);




app.use('/companyLanding',CompanyRoutes);
app.use('/companyLanding/postjob',CompanyRoutes);
app.use('/companyLanding/myJobs',CompanyRoutes);
app.use('/companyLanding/jobseekerEnrolled',CompanyRoutes);



app.get('/test', async (req, res) => {
  // courses_cards.create(card_data).then((result) => {
  //   console.log("ok");
  // });
  // company_schema.create(company_data).then((result) => {
  //   console.log("ok");
  // });
  // job_schema.create(jobs_data).then((result) => {
  //   console.log("ok");
  // });
  // jobseeker_schema.create(jobseeker_data).then((result) => {
  //   console.log("ok");
  // });
  // student_schema.create(student_data).then((result) => {
  //   console.log("ok");
  // });
  tutor_schema.create(tutor_data).then((result) => {
    console.log("ok");
  })
  });


app.listen(3000, function () {
  console.log("Server started on port 3000");
});