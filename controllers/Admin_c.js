const {students} = require("../models/student_schema.js");
const {jobseekers} = require("../models/jobseeker_schema.js");
const tutors = require("../models/tutor_schema.js");
const companies = require("../models/company_schema.js");

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

exports.AdminDashboard = async function(req, res){

    if(req.cookies?.id && req.cookies.id==="Admin")
    {
      students.find().then((student)=>{
        jobseekers.find().then((jobseeker)=>{
          tutors.find().then((tutor)=>{
            companies.find().then((company)=>{
              res.render('admin_dashboard', {company:company, tutor:tutor, student:student, jobseeker:jobseeker});
            })
          })
        })
      })
    }
    else{
      res.redirect('/Admin');
    }
    };
  
exports.AdminDashboardPost = async function(req, res){
  let name= req.body.name;
  arr = name.split(' ');
  if(arr[0] === "accept"){
    if(arr[1] == "tut"){
      tutors.findOneAndUpdate({username:arr[2]},{"$set":{"Status":true }}).then((data)=>
      {
          console.log('Successfully updated')
          res.redirect('/admin/dashboard');
      }).catch((err)=>{
          
          console.log(err);
      })
  }
    else{
      companies.findOneAndUpdate({username:arr[2]},{"$set":{"Status":true }}).then((data)=>
      {
          console.log('Successfully updated')
          res.redirect('/admin/dashboard');
      }).catch((err)=>{
          console.log(err);
      })
    }
  }
  else{
    if(arr[1] == "tut"){
      tutors.deleteOne({username: arr[2]}).then((something)=>{
        console.log("deleted .. ");
        res.redirect("/admin/dashboard");
      })
    }
    else{
      companies.deleteOne({username: arr[2]}).then((something)=>{
        console.log("deleted .. ");
        res.redirect("/admin/dashboard");
      })
    }
  }
}


  
  exports.AdminDashboardStudent = function(req, res){
    if(req.cookies?.id && req.cookies.id==="Admin") 
    {
      students.find().then((student)=>{
        res.render('admin_student',{student:student});
      })
    }
    else{
      res.redirect('/Admin');
    }
  };

  exports.AdminDashboardStudentPost = async function(req, res){
    let name= req.body.remove;
    students.deleteOne({username: name}).then((result) => {
      console.log("Student deleted..");
      res.redirect('/admin/student');
    })
  }
  
  exports.AdminDashboardJobseeker = function(req, res){
    if(req.cookies?.id && req.cookies.id==="Admin") 
    {
      jobseekers.find().then((jobseeker)=>{
        res.render('admin_jobseeker', {jobseeker: jobseeker});
      })
    }
    else{
      res.redirect('/Admin');
    }
  };

  exports.AdminDashboardJobseekerPost = async function(req, res){
    let name= req.body.remove;
    jobseekers.deleteOne({username: name}).then((result) => {
      console.log("jobseeker deleted..");
      res.redirect('/admin/jobseeker');
    })
  }
  
  exports.AdminDashboardTutor = function(req, res){
    if(req.cookies?.id && req.cookies.id==="Admin") 
    {
      tutors.find().then((tutor)=>{
        res.render('admin_tutor', {tutor:tutor});
      })
    }
    else{
      res.redirect('/Admin');
    }
  };

  exports.AdminDashboardTutorPost = async function(req, res){
    let name= req.body.remove;
    tutors.deleteOne({username: name}).then((result) => {
      console.log("Tutor Deleted..");
      res.redirect('/admin/tutor');
    })
  }
  
  exports.AdminDashboardCompany= function(req, res){
    if(req.cookies?.id && req.cookies.id==="Admin") 
    {
      companies.find().then((company)=>{
        res.render('admin_company', {company:company});
      })
    }
    else{
      res.redirect('/Admin');
    }
  }

  exports.AdminDashboardCompanyPost = async function(req, res){
    let name = req.body.remove;
    companies.deleteOne({username: name}).then((result) => {
      console.log("Company deleted..");
      res.redirect('/admin/company');
    })
  }