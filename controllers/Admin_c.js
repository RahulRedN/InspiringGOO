const students = require("../models/student_schema.js");
const jobseekers = require("../models/jobseeker_schema.js");
const tutors = require("../models/tutor_schema.js");
const companies = require("../models/company_schema.js");
const jobs = require("../models/jobs_schema.js");
const courses = require("../models/courses_schema.js");
const wait_tutors = require("../models/tutor_WaitSchema.js");
const wait_companies = require("../models/company_wait.js");

exports.LoginAdmin = function (req, res) {
    res.render("login_admin");
};

exports.LoginAdminPost = function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if(username=="Admin" && password=="Admin@2021"){
      res.cookie('id',username);
      console.log("Login Successful");
      res.redirect("/Admin/dashboard");
    }
    else{
      redirect('/Admin');
    }
   };

exports.AdminDashboard = function(req, res){

    if(req.cookies?.id && req.cookies.id==="Admin") 
    {
      res.render('admin_dashboard');
    }
    else{
      res.redirect('/Admin');
    }
    };
  
  
  exports.AdminDashboardStudent = function(req, res){
    if(req.cookies?.id && req.cookies.id==="Admin") 
    {
      res.render('admin_student');
    }
    else{
      res.redirect('/Admin');
    }
  };
  
  exports.AdminDashboardJobseeker = function(req, res){
    if(req.cookies?.id && req.cookies.id==="Admin") 
    {
      res.render('admin_jobseeker');
    }
    else{
      res.redirect('/Admin');
    }
  };
  
  exports.AdminDashboardTutor = function(req, res){
    if(req.cookies?.id && req.cookies.id==="Admin") 
    {
      res.render('admin_tutor');
    }
    else{
      res.redirect('/Admin');
    }
  };
  
  exports.AdminDashboardCompany= function(req, res){
    if(req.cookies?.id && req.cookies.id==="Admin") 
    {
      res.render('admin_company');
    }
    else{
      res.redirect('/Admin');
    }
  }