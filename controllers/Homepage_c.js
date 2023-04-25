const student_user = require("../models/student_schema.js");
const jobseeker_user = require("../models/jobseeker_schema.js");
const tutor_user = require("../models/tutor_schema.js");
const saltRounds = 10;
const bcrypt = require('bcrypt');


exports.LandingPageLoadUp = function (req, res) {
  res.render("homePage");
};

exports.Login = function (req, res) {
  res.render("Login");
};

exports.LoginPost = function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const check = req.body.WhoAreYou;


  if(check== "student"){


    student_user.findOne({ username: username }).then(function(foundUser) {
        console.log(foundUser);
        if (foundUser) {
            console.log("gshjghcs");
            bcrypt.compare(password, foundUser.password, function (err, result) {
            if (result === true) {
                res.cookie('id',username);
                console.log("Login Successful");
                res.redirect("/S_Landing");
            }
            });
        }
        })
        .catch((err) => {
        console.log(err);
        });
    }
};

exports.Logout = function (req, res) {
  res.clearCookie("id");
  res.redirect("/");
};

exports.StudentRegister = function (req, res) {
  res.render("S_JS_Register", { user: "Student" });
};

exports.JobseekerRegister = function (req, res) {
  res.render("S_JS_Register", { user: "Jobseeker" });
};

exports.TutorRegister = function (req, res) {
  res.render("tutorRegister");
};

exports.CompanyRegister = function (req, res) {
  res.render("tutorRegister");
};

exports.MentorRegister = function (req, res) {
  res.render("mentorRegister");
};

exports.StudentRegisterPost = async function (req, res) {
  const password = req.body.password1;
  const hashPassword = await bcrypt.hash(password, saltRounds);

  const skills = req.body.skill.split(",");

  const details ={
    username: req.body.username,
    First_Name: req.body.fname,
    Last_Name: req.body.lname,
    Sur_Name: req.body.sname,
    Email: req.body.emailID,
    Mobile: req.body.mobile,
    DOB: req.body.DOB,
    Gender: req.body.gender,
    Address: req.body.address,
    Qualification: req.body.qual,
    Institute_Name: req.body.InstName,
    Country: req.body.country,
    password: hashPassword,
    Skills: skills,
  };

  const doc = new student_user(details);

  doc.save().then(() => {
      res.redirect("/Login");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.JobseekerRegisterPost = async function (req, res) {
  const password = req.body.password1;
  const hashPassword = await bcrypt.hash(password, saltRounds);
  const skills = req.body.skill.split(",");
  const doc = await jobseeker_user({
    username: req.body.username,
    First_Name: req.body.fname,
    Last_Name: req.body.lname,
    Sur_Name: req.body.sname,
    Email: req.body.emailID,
    Mobile: req.body.mobile,
    Address: req.body.address,
    password: hashPassword,
    Skills: skills,
  });
  con
    .collection("jobseekers")
    .insertOne(doc)
    .then((result) => {
      console.log("New jobseeker registered...");
      res.redirect("/");
    })
    .catch((err) => {
      // if(err.name === 'MongoError' && err.code === 11000){

      // }
      console.log(err);
      res.redirect("/jobseekerRegister");
    });
};

exports.TutorRegisterPost = async function (req, res) {
  const password = req.body.password1;
  const hashPassword = await bcrypt.hash(password, saltRounds);
  const doc = await tutor_user({
    username: req.body.username,
    First_Name: req.body.fname,
    Sur_Name: req.body.sname,
    Email: req.body.emailID,
    Mobile: req.body.mobile,
    Address: req.body.address,
    password: hashPassword,
  });
  con
    .collection("tutors")
    .insertOne(doc)
    .then((result) => {
      console.log("New tutor registered...");
      res.redirect("/");
    })
    .catch((err) => {
      // if(err.name === 'MongoError' && err.code === 11000){

      // }
      console.log(err);
      res.redirect("/tutorRegister");
    });
};

exports.CompanyRegisterPost = function (req, res) {
  res.redirect("/Login");
};

exports.MentorRegisterPost = function (req, res) {
  res.redirect("/Login");
};

exports.StudentLandingLoadUp = function (req, res) {
    if(req.cookies?.id) return  res.render("S_Landing");
    res.redirect('/Login')
 
};

exports.StudentProfile = function (req, res) {

    if(req.cookies?.id) {
    student_user.findOne({username:req.cookies.id }).then((data)=>{
        res.render('profile_stu',{User:data})
    }).catch((err)=>{
    console.log(err);
    })
    }
};

exports.StudentProfilePost = async function(req, res){
    const name = req.body.name;
    const password = req.body.password;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const email = req.body.email;
    const phone = req.body.mobile;

    student_user.findOneAndUpdate({username:req.cookies.id},{"$set":{"First_Name":name , "password": password , "Email":email,"Mobile":phone}}).then((data)=>
    {
        console.log('Successfully updated')
        res.redirect('/student_profile')
    }).catch((err)=>{
        
        console.log(err);
    })




};
