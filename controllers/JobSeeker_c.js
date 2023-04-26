const jobseekers = require("../models/jobseeker_schema.js");
const jobs = require("../models/jobs_schema.js");
const companies= require("../models/company_schema.js");

exports.JobseekerLandingLoadUp = function(req, res){

    if(req.cookies?.id) {
      jobseekers.findOne({username:req.cookies.id}).then((result)=>{
      if(result){
        res.render('jobseeker_landing');
      }
      else{
        res.redirect('/Login')
      }
    })
      }
      
      else{
        res.redirect('/Login')
      }
    }
  
  exports.JobseekerFilterPage = function(req, res){
    
    if(req.cookies?.id){
      jobseekers.findOne({username:req.cookies.id}).then((result)=>{
        if(result){
          jobs.find().then((result)=>{
            let id = req.query.id;
            if(id){
              jobs.findOne({"_id": id}).then((result1)=>{
                console.log(result1);
                res.render("filter_page", {Company: result, Job: result1});
              })
            }else{
              res.render("filter_page", {Company: result, Job: ""});
            }
            
          })
        }
        else{
          res.redirect('/Login');
        }
      });
  
  
    }
    else{
      res.redirect('/Login');
    }
  }
  
  exports.JobseekerFilterPagePost = async function(req, res){

    let id = req.body.apply;  //CARD ID COMPANY
    let card_details=await jobs.findOne({_id:id});
    let {Company_Username,Job_Name}=card_details;
    

    let user = req.cookies.id;  //USER ID

    let {First_Name,username,Email}=await jobseekers.findOne({username:user});  //USER DETAILS NEED TO BE PUSHED

    let company=await companies.findOne({username:Company_Username});
    let my_jobs=company.myJobs;
    // console.log(typeof(myJobs),"...");
    let applied_job=my_jobs.filter((job)=>job.Job_Name==Job_Name);
    console.log(applied_job);




    // jobseekers.findOne({username:id}).then((jobseekerdata)=>
    // {
    //   jobs.findOne({_id:id}).then((card)=>{
    //     let job_name=card.Job_Name;
    //     let {First_Name,username,Email}=jobseekerdata;  //USER DETAILS NEED TO BE PUSHED


    //     // companies.findOneAndUpdate({username:card.Company_Username}).then((company)=>{

    //   // const name = jobseekerdata.First_Name;

    //     // })
    //   })
    // })
  }
  