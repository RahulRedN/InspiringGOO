const {jobseekers, jobers} = require("../models/jobseeker_schema.js");
const jobs = require("../models/jobs_schema.js");

exports.JobseekerLandingLoadUp = function(req, res){

    if(req.cookies?.id) {
      jobseekers.findOne({username:req.cookies.id}).then((result)=>{
      if(result){
        jobs.find().then((job) => {
          res.render('jobseeker_landing', {jobs: job});
        })
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
          jobs.find().limit(6).then((result)=>{
            res.render("filter_page", {Company: result, Job: ""}); 
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
  
  exports.JobseekerFilterPagePost = async function(req, res)
  {

    let id = req.body.apply;  //CARD ID COMPANY
  
    let user = req.cookies.id;  //USER ID
    
    let date = new Date();

    jobs.findOne({_id:id}).then((result) => {
      let a ={
        Company_Name: result.Company_Name,
        Job_Name: result.Job_Name,
        Salary: result.Salary,
        Join_Date: date.toDateString(),
      };

      let vac = result.Vacancies - 1 ;
      
      jobs.findOneAndUpdate({_id:id},{"$set":{"Vacancies":vac}}).then((status)=>{
        console.log("Updated vacancies");
      })
      jobseekers.findOne({username: user}).then(async (result) => {
        result.myJobs.push(a);
        await result.save();
        console.log("Successfully updated");
        res.redirect('/Jobseeker_Landing');
      })
    });

  }


  exports.JobseekerProfile = function (req, res) {
  
    if(req.cookies?.id) {
      jobseekers.findOne({username:req.cookies.id}).then((result)=>{
        if(result){
          jobseekers.findOne({username:req.cookies.id }).then((data)=>{
            res.render('profile_jobseeker',{User:data})
           }).catch((err)=>{
           console.log(err);
           })
           }
           else{
            res.redirect('/Login')
           }
        })
      }else{
        res.redirect('/Login')
      }
    
}

exports.JobseekerProfilePost = async function(req, res){
  const name = req.body.name;
  const password = req.body.password;
  const hashPassword = await bcrypt.hash(password, 10);
  const email = req.body.email;
  const phone = req.body.mobile;

  jobseekers.findOneAndUpdate({username:req.cookies.id},{"$set":{"First_Name":name , "password": hashPassword , "Email":email,"Mobile":phone}}).then((data)=>
  {
      console.log('Successfully updated')
      res.redirect('/JobSeeker_Landing/')
  }).catch((err)=>{
      
      console.log(err);
  })
};