const courses = require("../models/courses_schema.js");
const tutors = require("../models/tutor_schema.js");
const { students, coursers } = require("../models/student_schema.js");
const bcrypt = require("bcrypt");

exports.StudentLandingLoadUp = function (req, res) {
  if (req.cookies?.id) {
    students.findOne({ username: req.cookies.id }).then((result) => {
      if (result) {
        res.render("S_landing");
      } else {
        res.redirect("/Login");
      }
    });
  } else {
    res.redirect("/Login");
  }
};

exports.StudentProfile = function (req, res) {
  if (req.cookies?.id) {
    students.findOne({ username: req.cookies.id }).then((result) => {
      if (result) {
        students
          .findOne({ username: req.cookies.id })
          .then((data) => {
            res.render("profile_stu", { User: data });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/Login");
      }
    });
  } else {
    res.redirect("/Login");
  }
};

exports.StudentProfilePost = async function (req, res) {
  const name = req.body.name;
  const password = req.body.password;
  const hashPassword = await bcrypt.hash(password, 10);
  const email = req.body.email;
  const phone = req.body.mobile;

  students
    .findOneAndUpdate(
      { username: req.cookies.id },
      {
        $set: {
          First_Name: name,
          password: hashPassword,
          Email: email,
          Mobile: phone,
        },
      }
    )
    .then((data) => {
      console.log("Successfully updated");
      res.redirect("/S_Landing/profile");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.FAQ = async function (req, res) {
  if (req.cookies?.id) {
    students.findOne({ username: req.cookies.id }).then((result) => {
      if (result) {
        res.render("FAQ");
      } else {
        res.redirect("/Login");
      }
    });
  } else {
    res.redirect("/Login");
  }
};

exports.Find_Tutor = async function (req, res) {
  if (req.cookies?.id) {
    students.findOne({ username: req.cookies.id }).then((result) => {
      if (result) {
        courses.find({}).limit(3).then((result) => {
          res.render("Find_Tutor", { course: result });
        });
      } else {
        res.redirect("/Login");
      }
    });
  } else {
    res.redirect("/Login");
  }
};

exports.Find_TutorPost = async function (req, res) {
  let id = req.body.apply;

  let user = req.cookies.id;

  courses
    .findOne({ _id: id })
    .then((result) => {
      tutors.findOne({ username: result.Tutor_Username }).then((tutor) => {
        let a = new coursers({
          Tutor_Name: result.Tutor_Name,
          Tutor_Email: tutor.Tutor_Email,
          Course_Name: result.Course_Name,
          Course_Fee: result.Course_Fee,
          Mode: result.Mode,
          Tutor_Number: tutor.Mobile,
        });

        students
          .findOne({ username: user })
          .then(async (result) => {
            console.log(result);
            result.myCourses.push(a);
            await result.save();
            res.redirect("/S_Landing");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
