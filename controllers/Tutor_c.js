const tutors = require("../models/tutor_schema.js");
const courses = require("../models/courses_schema.js");

exports.TutorLanding = function(req,res){

    if(req.cookies?.id) {
        tutors.findOne({username:req.cookies.id}).then((result)=>{
        if(result){

          res.render('tutorLanding',{Tutor:result});
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

exports.PostCourse = function(req,res){

  if(req.cookies?.id) {
    tutors.findOne({username:req.cookies.id}).then((result)=>{
    if(result){
      res.render('postCourse',{Tutor:result});
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

exports.StudentsWaiting = function(req,res){

  if(req.cookies?.id) {
    tutors.findOne({username:req.cookies.id}).then((result)=>{
    if(result){
      res.render('studentWaiting');
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

exports.MyCourses= function(req,res){

  if(req.cookies?.id) {
    tutors.findOne({username:req.cookies.id}).then((result)=>{
    if(result){
      res.render('myCourses');
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

exports.StudentsEnrolled = function(req,res){

  if(req.cookies?.id) {
    tutors.findOne({username:req.cookies.id}).then((result)=>{
    if(result){
      res.render('studentEnrolled', {Tutor : result});
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



