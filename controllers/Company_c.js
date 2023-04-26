const company = require("../models/company_schema.js");
const jobs = require("../models/jobs_schema.js");

exports.CompanyLanding = function(req,res){

    if(req.cookies?.id) {
        company.findOne({username:req.cookies.id}).then((result)=>{
        if(result){

          res.render('companyLanding',{Company:result});
        }
        else{
          res.redirect('/loginSecondary')
        }
      })
        }
        else{
          res.redirect('/loginSecondary');
        }

}

exports.PostJob = function(req,res){

  if(req.cookies?.id) {
    company.findOne({username:req.cookies.id}).then((result)=>{
    if(result){
      res.render('postJob',{Tutor:result});
    }
    else{
      res.redirect('/loginSecondary');
    }
  })
    }
    else{
      res.redirect('/loginSecondary');
    }

}

exports.JobSeekerWaiting = function(req,res){

  if(req.cookies?.id) {
    company.findOne({username:req.cookies.id}).then((result)=>{
    if(result){
      res.render('jobseekerWaiting');
    }
    else{
      res.redirect('/loginSecondary');
    }
  })
    }
    else{
      res.redirect('/loginSecondary');
    }

}

exports.MyJobs= function(req,res){

  if(req.cookies?.id) {
    company.findOne({username:req.cookies.id}).then((result)=>{
    if(result){
      res.render('myJobs');
    }
    else{
      res.redirect('/loginSecondary');
    }
  })
    }
    else{
      res.redirect('/loginSecondary');
    }

}

exports.JobSeekerEnrolled = function(req,res){

  if(req.cookies?.id) {
    company.findOne({username:req.cookies.id}).then((result)=>{
    if(result){
      res.render('jobseekerEnrolled');
    }
    else{
      res.redirect('/loginSecondary');
    }
  })
    }
    else{
      res.redirect('/loginSecondary');
    }

}



