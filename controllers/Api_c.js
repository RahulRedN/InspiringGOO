const jobs = require("../models/jobs_schema");
const {students} = require('../models/student_schema');
const jobseekers = require('../models/jobseeker_schema');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getMoreJobs = async function (req, res) {
  const { s_idx } = req.query;

  try {
    const data = await jobs.find().skip(Number(s_idx)).limit(12).exec();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};


exports.verify = async function(req,res){

  const {username,password,WhoAreYou} = req.query;

  if(WhoAreYou === "student"){

    students.findOne({username:username}).then(function(foundUser){

      if(!foundUser){
        res.json({ error: "Not found",status:401 },);
      }else{
        res.status(401).json({ error: "Not found" });
      }
    })


  }



}