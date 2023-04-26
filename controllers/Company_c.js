const company = require("../models/company_schema.js");
const jobs = require("../models/jobs_schema.js");

exports.CompanyLanding = function(req,res){

    if(req.cookies?.id) {
        company.findOne({username:req.cookies.id}).then((result)=>{
        if(result){

          res.render('companyLanding',{company:result});
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
      res.render('jobseekerWaiting', {company:result});
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
      res.render('myJobs', {company:result});
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
      res.render('jobseekerEnrolled', {company:result});
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

exports.PostJobPost = function(req,res){
  
  let id = req.cookies.id;
  let jname = req.body.jobname;
  let salary = req.body.salary;
  let dur = req.body.jobduration;
  let vacancies = req.body.vacancies;
  let respons = req.body.responsibilities.split(",");
  let skills = req.body.skills.split(",");
  let jobDesc = req.body.jobdescription;
  
  company.findOne({username:id}).then(async (result)=>{

    let details = {
      Company_Name:result.First_Name,
      Company_Username:result.username,
      Job_Name:jname,
      Job_Description:jobDesc,
      Salary:salary,
      Skills:skills,
      Vacancies:vacancies,
      Total:vacancies,
      Duration:dur,
      Responsibilities:respons,
    }

    let Com_Details = ({
      Job_Name:jname,
      Job_Description:jobDesc,
      Salary:salary,
      Skills:skills,
      Vacancies:vacancies,
      Total:vacancies,
      Duration:dur,
      Responsibilities:respons,
    });


    result.myJobs.push(Com_Details);
    await result.save();

    const doc = new jobs(details);

    doc.save().then((result)=>{
      res.redirect('/companyLanding');


    }).catch((err)=>{
      console.log(err);
    })
  }).catch((err)=>{
    console.log(err);
  })
}



