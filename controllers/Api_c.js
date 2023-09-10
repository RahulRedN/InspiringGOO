const jobs = require("../models/jobs_schema");

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
