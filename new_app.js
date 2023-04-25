const cookieParser = require('cookie-parser');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ejs = require('ejs');
const session = require('express-session');
const app=express();
app.use(cookieParser())
// const courses_cards = require("./models/courses_schema.js");
// const card_data = require('./courses.js');


app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(cookieParser());

app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://pavankumarp21:pavan1234@cluster0.k9kh9zv.mongodb.net/test?retryWrites=true&w=majority", {
  family: 4,
  useNewUrlParser: true,
});

const HomeRoutes = require('./routes/HomeRoutes.js');


app.use('/',HomeRoutes);
app.use('/Login', HomeRoutes);
app.use('/Logout', HomeRoutes);
app.use('/studentRegister', HomeRoutes);
app.use('/jobseekerRegister', HomeRoutes);
app.use('/tutorRegister', HomeRoutes);
app.use('/mentorRegister', HomeRoutes);
app.use('/companyRegister', HomeRoutes);

app.use('/S_Landing', HomeRoutes);
app.use('/student_profile', HomeRoutes);

app.use('/JobSeeker_Landing', HomeRoutes);

// app.get('/test', async (req, res) => {
//   courses_cards.create(card_data).then((result) => {
//     console.log("ok");
//   });
// });


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
