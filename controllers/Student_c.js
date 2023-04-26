const students = require("../models/student_schema.js");

exports.StudentLandingLoadUp = function (req, res) {
    if(req.cookies?.id) {
      students.findOne({username:req.cookies.id}).then((result)=>{
      if(result){
        res.render('S_landing');
      }
      else{
        res.redirect('/Login')
      }
    })
      }
      
      else{
        res.redirect('/Login')
      }
  };
  
  exports.StudentProfile = function (req, res) {
  
      if(req.cookies?.id) {
        students.findOne({username:req.cookies.id}).then((result)=>{
          if(result){
            students.findOne({username:req.cookies.id }).then((data)=>{
              res.render('profile_stu',{User:data})
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
      
  };
  
  exports.StudentProfilePost = async function(req, res){
      const name = req.body.name;
      const password = req.body.password;
      const hashPassword = await bcrypt.hash(password, saltRounds);
      const email = req.body.email;
      const phone = req.body.mobile;
  
      student_user.findOneAndUpdate({username:req.cookies.id},{"$set":{"First_Name":name , "password": hashPassword , "Email":email,"Mobile":phone}}).then((data)=>
      {
          console.log('Successfully updated')
          res.redirect('/student_profile')
      }).catch((err)=>{
          
          console.log(err);
      })
  };

exports.FAQ = async function(req,res){
  if(req.cookies?.id) {
    students.findOne({username:req.cookies.id}).then((result)=>{
    if(result){
      res.render('FAQ');
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