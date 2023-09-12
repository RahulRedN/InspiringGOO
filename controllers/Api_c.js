const jobs = require("../models/jobs_schema");
const courses = require("../models/courses_schema");
const { students } = require("../models/student_schema");
const { jobseekers } = require("../models/jobseeker_schema");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.verify = async function (req, res) {
  const { username, password, WhoAreYou } = req.query;
  if (WhoAreYou === "student") {
    students
      .findOne({ username: username })
      .then(function (foundUser) {
        if (foundUser) {
          bcrypt.compare(password, foundUser.password, function (err, result) {
            if (result === true) {
              res.json({ error: "valid", status: 0 });
            } else {
              res.json({ error: "Not found", status: 401 });
            }
          });
        } else {
          res.json({ error: "Not found", status: 401 });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    jobseekers
      .findOne({ username: username })
      .then(function (foundUser) {
        if (foundUser) {
          bcrypt.compare(password, foundUser.password, function (err, result) {
            if (result === true) {
              res.json({ error: "valid", status: 0 });
            } else {
              res.json({ error: "Not found", status: 401 });
            }
          });
        } else {
          res.json({ error: "Not found", status: 401 });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

//Jobseeker_Filter_Page
exports.getMoreJobs = async function (req, res) {
  const { s_idx } = req.query;

  try {
    const data = await jobs.find().skip(Number(s_idx)).limit(6).exec();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getJob = async (req, res) => {
  const { id } = req.query;

  try {
    const data = await jobs.findOne({ _id: id }).exec();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getJobSearch = async (req, res) => {
  const { name } = req.query;

  const matchRegex = new RegExp(".*" + name + ".*");

  try {
    const data = await jobs
      .find({
        $or: [
          { Job_Name: { $regex: matchRegex, $options: "i" } },
          { Skills: { $regex: matchRegex, $options: "i" } },
          { Company_Name: { $regex: matchRegex, $options: "i" } },
        ],
      })
      .limit(10)
      .exec();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//Find_Tutor_Filter_Page
exports.getMoreCourses = async function (req, res) {
  const { s_idx } = req.query;

  try {
    const data = await courses.find().skip(Number(s_idx)).limit(3).exec();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getCourseSearch = async (req, res) => {
  const { name } = req.query;

  const matchRegex = new RegExp(".*" + name + ".*");

  try {
    const data = await courses
      .find({
        $or: [
          { Course_Name: { $regex: matchRegex, $options: "i" } },
          { Tutor_Name: { $regex: matchRegex, $options: "i" } },
        ],
      })
      .limit(10)
      .exec();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//Register

exports.checkUsername = async (req, res) => {
  const { role, username } = req.query;
  try {
    if (role === "Student") {
      students.findOne({ username: username }).then((result) => {
        if (result) {
          res.json({ check: true });
        } else {
          res.json({ check: false });
        }
      });
    } else if (role === "Jobseeker") {
      jobseekers.findOne({ username: username }).then((result) => {
        if (result) {
          res.json({ check: true });
        } else {
          res.json({ check: false });
        }
      });
    }
  } catch (err) {
    console.error(err);
  }
};
