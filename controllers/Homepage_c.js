const { students } = require("../models/student_schema.js");
const { jobseekers } = require("../models/jobseeker_schema.js");
const tutors = require("../models/tutor_schema.js");
const companies = require("../models/company_schema.js");
const saltRounds = 10;
const bcrypt = require("bcrypt");

exports.LandingPageLoadUp = function (req, res) {
  res.render("homePage");
};

exports.LoginTutCom = function (req, res) {
  res.render("login_tut_cmp");
};

exports.Login = function (req, res) {
  res.render("Login");
};

exports.LoginPost = function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const check = req.body.WhoAreYou;

  if (check == "student") {
    students
      .findOne({ username: username })
      .then(function (foundUser) {
        if (foundUser) {
          bcrypt.compare(password, foundUser.password, function (err, result) {
            if (result === true) {
              res.cookie("id", username);
              console.log("Login Successful");
              res.redirect("/S_Landing");
            }
          });
        } else {
          res.redirect("/Login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (check == "jobseeker") {
    jobseekers
      .findOne({ username: username })
      .then(function (foundUser) {
        if (foundUser) {
          bcrypt.compare(password, foundUser.password, function (err, result) {
            if (result === true) {
              res.cookie("id", username);
              console.log("Login Successful");
              res.redirect("/JobSeeker_Landing");
            }
          });
        } else {
          res.redirect("/Login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.redirect("/Login");
  }
};

exports.LoginTutComPost = function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const check = req.body.WhoAreYou;

  if (check == "tutor") {
    tutors
      .findOne({ username: username })
      .then(function (foundUser) {
        if (foundUser && foundUser.Status) {
          bcrypt.compare(password, foundUser.password, function (err, result) {
            if (result === true) {
              res.cookie("id", username);
              console.log("Login Successful");
              res.redirect("/tutorLanding");
            }
          });
        } else {
          res.redirect("/loginSecondary");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (check == "company") {
    companies
      .findOne({ username: username })
      .then(function (foundUser) {
        if (foundUser && foundUser.Status) {
          bcrypt.compare(password, foundUser.password, function (err, result) {
            if (result === true) {
              res.cookie("id", username);
              console.log("Login Successful");
              res.redirect("/companyLanding");
            }
          });
        } else {
          res.redirect("/loginSecondary");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.redirect("/loginSecondary");
  }
};

exports.Services = function (req, res) {
  res.render("ourservices");
};

exports.AboutUs = function (req, res) {
  res.render("aboutus");
};

exports.Logout = async function (req, res) {
  await res.clearCookie("id");

  res.redirect("/");
  console.log(req.cookies.id);
};

exports.StudentRegister = function (req, res) {
  res.render("S_JS_Register", { user: "Student" });
};

exports.JobseekerRegister = function (req, res) {
  res.render("S_JS_Register", { user: "Jobseeker" });
};

exports.TutorRegister = function (req, res) {
  res.render("tutorRegister");
};

exports.CompanyRegister = function (req, res) {
  res.render("companyRegister");
};

exports.MentorRegister = function (req, res) {
  res.render("mentorRegister");
};

exports.StudentRegisterPost = async function (req, res) {
  const password = req.body.password1;
  const hashPassword = await bcrypt.hash(password, saltRounds);

  const skills = req.body.skill.split(",");

  const details = {
    username: req.body.username,
    First_Name: req.body.fname,
    Last_Name: req.body.lname,
    Sur_Name: req.body.sname,
    Email: req.body.emailID,
    Mobile: req.body.mobile,
    DOB: req.body.DOB,
    Gender: req.body.gender,
    Address: req.body.address,
    Qualification: req.body.qual,
    Institute_Name: req.body.InstName,
    Country: req.body.country,
    password: hashPassword,
    Skills: skills,
  };

  const doc = new students(details);

  doc
    .save()
    .then(() => {
      res.redirect("/Login");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/studentRegister");
    });
};

exports.JobseekerRegisterPost = async function (req, res) {
  const password = req.body.password1;
  const hashPassword = await bcrypt.hash(password, saltRounds);
  const skills = req.body.skill.split(",");
  const details = {
    username: req.body.username,
    First_Name: req.body.fname,
    Last_Name: req.body.lname,
    Sur_Name: req.body.sname,
    Email: req.body.emailID,
    Mobile: req.body.mobile,
    DOB: req.body.DOB,
    Gender: req.body.gender,
    Address: req.body.address,
    Qualification: req.body.qual,
    Institute_Name: req.body.InstName,
    Country: req.body.country,
    password: hashPassword,
    Skills: skills,
  };
  const doc = new jobseekers(details);

  doc
    .save()
    .then(() => {
      res.redirect("/Login");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/jobseekerRegister");
    });
};

exports.TutorRegisterPost = async function (req, res) {
  const password = req.body.password1;
  const hashPassword = await bcrypt.hash(password, saltRounds);
  const details = {
    username: req.body.username,
    First_Name: req.body.fname,
    Sur_Name: req.body.sname,
    Email: req.body.emailID,
    Mobile: req.body.mobile,
    DOB: req.body.DOB,
    Gender: req.body.gender,
    Address: req.body.address,
    Qualification: req.body.qual,
    Institute_Name: req.body.InstName,
    Country: req.body.country,
    password: hashPassword,
  };
  const doc = new tutors(details);

  doc
    .save()
    .then(() => {
      res.redirect("/loginSecondary");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/tutorRegister");
    });
};

exports.CompanyRegisterPost = async function (req, res) {
  const password = req.body.password1;
  const hashPassword = await bcrypt.hash(password, saltRounds);

  const details = {
    username: req.body.username,
    Name: req.body.fname,
    Email: req.body.emailID,
    Mobile: req.body.mobile,
    Address: req.body.address,
    Country: req.body.country,
    password: hashPassword,
  };

  const doc = new companies(details);

  doc
    .save()
    .then(() => {
      res.redirect("/loginSecondary");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/companyRegister");
    });
};

exports.MentorRegisterPost = async function (req, res) {
  res.redirect("/Login");
};
