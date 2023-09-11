const jobs = require("../models/jobs_schema");
const courses = require("../models/courses_schema");

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