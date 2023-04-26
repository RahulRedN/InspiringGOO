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

exports.MyCourses= function(req,res){

  if(req.cookies?.id) {
    tutors.findOne({username:req.cookies.id}).then((result)=>{
    if(result){
      res.render('myCourses', {Tutor:result});
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


exports.PostCoursePost = function(req,res){

  let name = req.body.coursename;
  let coursefee = req.body.coursefee;
  let duration = req.body.duration;
  let mode = req.body.mode;
  let id = req.cookies.id;

  tutors.findOne({username:id}).then(async (result)=>{

    let details = {
      Tutor_Name:result.First_Name,
      Tutor_Username:result.username,
      Course_Name:name,
      Course_Fee:coursefee,
      Course_Duration:duration,
      Mode:mode,
    }



    let tutordetails = ({
      Course_Name:name,
      Course_Fee:coursefee,
      Course_Duration:duration,
      Mode:mode,
    })

    result.myCourses.push(tutordetails);
    await result.save();

    const doc = new courses(details);

    doc.save().then((result)=>{
      res.redirect('/tutorlanding');
    })
  })

}



