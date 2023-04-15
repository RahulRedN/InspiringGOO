const exp = require('express');
const app = exp();
const path = require('path');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(exp.static("public"));

const db_name = path.join(__dirname,'db','registration.sqlite3');

const db = new sqlite3.Database(db_name,err => {
    if(err)
        return console.error(err.message);
    console.log("Database ---> Connected");
});

const S_ct = `CREATE TABLE IF NOT EXISTS student(salutation varchar(5),fname varchar(50),lname varchar(50),sname varchar(50),username varchar(100),password varchar(100),email varchar(50),mobile varchar(10),address varchar(500),gender varchar(10),dob varchar(30),nationality varchar(100));`

db.run(S_ct,err => {
    if(err)
        return console.log("Student Table Creation: "+err.message);
    else
        console.log("Student Table Created");
});


const T_ct = `CREATE TABLE IF NOT EXISTS tutor(salutation varchar(5),fname varchar(50),lname varchar(50),sname varchar(50),username varchar(100),password varchar(100),email varchar(50),mobile varchar(10),address varchar(500),gender varchar(10),dob varchar(30),nationality varchar(100),marital varchar(100),exp varchar(50),skills varchar(500),availabilty varchar(50),courses varchar(500));`

db.run(T_ct,err => {
    if(err)
        return console.log("Tutor Table Creation: "+err.message);
    else
        console.log("Tutor Table Created");
});

const JS_ct = `CREATE TABLE IF NOT EXISTS job_seeker(salutation varchar(5),fname varchar(50),lname varchar(50),sname varchar(50),username varchar(100),password varchar(100),email varchar(50),mobile varchar(10),address varchar(500),gender varchar(10),dob varchar(30),nationality varchar(100),marital varchar(100),exp varchar(50),skills varchar(500),availability varchar(50),courses varchar(500));`

db.run(JS_ct,err => {
    if(err)
        return console.log("Job Seeker Table Creation: "+err.message);
    else
        console.log("Job Seeker Table Created");
});

const M_ct = `CREATE TABLE IF NOT EXISTS mentor(salutation varchar(5),fname varchar(50),lname varchar(50),sname varchar(50),username varchar(100),password varchar(100),email varchar(50),mobile varchar(10),address varchar(500),gender varchar(10),dob varchar(30),nationality varchar(100),marital varchar(100),exp varchar(50),skills varchar(500),availability varchar(50));`

db.run(M_ct,err => {
    if(err)
        return console.log("Mentor Table Creation: "+err.message);
    else
        console.log("Mentor Table Created");
});

// const C_ct = `CREATE TABLE IF NOT EXISTS company(salutation varchar(5),fname varchar(50),lname varchar(50),sname varchar(50),username varchar(100),password varchar(100),email varchar(50),mobile varchar(10),address varchar(500),gender varchar(10),dob varchar(30),nationality varchar(100),marital varchar(100),exp varchar(50),skills varchar(500),availability varchar(50));`

// db.run(C_ct,err => {
//     if(err)
//         return console.log("Company Table Creation: "+err.message);
//     else
//         console.log("Company Table Created");
// });


app.get("/", function (req, res) {
    res.render("homePage");
});


app.get("/studentRegister",function(req,res){
    res.render('studentRegister');
});

app.post("/studentRegister",function(req,res){
    let salutation = req.body.salutation;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let sname = req.body.sname;
    let email = req.body.emailID;
    let mobile = req.body.mobile;
    let address = req.body.address;
    let gender = req.body.gender;
    let dob = req.body.DOB;
    let country = req.body.country;
    let username = req.body.username;
    let password = req.body.password1;  

    db.all("SELECT * FROM student WHERE email=?;",[email],(err,row) => {
        if (err)
            return console.log(err.message);
        console.log(row);

        let k = row.length;
        if(k!=0) {
            console.log("Email already exists!!\nTry with another email");
            res.redirect("/studentRegister");        
        } 
    });
    var S_in = `INSERT INTO student(salutation,fname,lname,sname,username,password,email,mobile,address,gender,dob,nationality) VALUES ("${salutation}","${fname}","${lname}","${sname}","${username}","${password}","${email}","${mobile}","${address}","${gender}","${dob}","${country}");`
    
    db.run(S_in,err =>{
        if(err)
            return console.log("Student table Insertion: "+err.message);
        else
            {
            console.log("1 record Inserted in Student Registration Table.");
            res.redirect('/Login');
            }
    })
});



app.get("/tutorRegister",function(req,res){
    res.render('tutorRegister');
});

app.post('/tutorRegister',function(req,res){
    let salutation = req.body.salutation;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let sname = req.body.sname;
    let email = req.body.emailID;
    let mobile = req.body.mobile;
    let address = req.body.address;
    let gender = req.body.gender;
    let dob = req.body.DOB;
    let country = req.body.country;
    let marital = req.body.marital;
    var exp = req.body.exp;
    var skills = req.body.skill;
    var availability = req.body.availability;
    var courses = req.body.courses;
    let username = req.body.username;
    let password = req.body.password1;  

    db.all("SELECT * FROM tutor WHERE email=?;",[email],(err,row) => {
        if (err)
            return console.log(err.message);
        console.log(row);

        let k = row.length;
        if(k!=0) {
            console.log("Email already exists!!\nTry with another email");
            res.redirect("/tutorRegister");        
        } 
    });

    var T_in = `INSERT INTO tutor(salutation,fname,lname,sname,username,password,email,mobile,address,gender,dob,nationality,marital,exp,skills,availability,courses) VALUES ("${salutation}","${fname}","${lname}","${sname}","${username}","${password}","${email}","${mobile}","${address}","${gender}","${dob}","${country},"${marital}","${exp}","${skills}","${availability}","${courses}");`
    
    db.run(T_in,err =>{
        if(err)
            return console.log("Tutor table Insertion: "+err.message);
        else
        {
            console.log("1 record Inserted in Tutor Registration Table.");
            res.redirect('/');
        }
    })
});



app.get("/jobseekerRegister",function(req,res){
    res.render('jobseekerRegister');
});

app.post('/jobseekerRegister',function(req,res){
    let salutation = req.body.salutation;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let sname = req.body.sname;
    let email = req.body.emailID;
    let mobile = req.body.mobile;
    let address = req.body.address;
    let gender = req.body.gender;
    let dob = req.body.DOB;
    let country = req.body.country;
    let exp = req.body.exp;
    let skills = req.body.skill;
    let availability = req.body.availability;
    let courses = req.body.courses;
    let username = req.body.username;
    let password = req.body.password1;  


    db.all("SELECT * FROM job_seeker WHERE email=?;",[email],(err,row) => {
        if (err)
            return console.log(err.message);
        console.log(row);

        let k = row.length;
        if(k!=0) {
            console.log("Email already exists!!\nTry with another email");
            res.redirect("/jobseekerRegister");        
        } 
    });


    var JS_in = `INSERT INTO job_seeker(salutation,fname,lname,sname,username,password,email,mobile,address,gender,dob,nationality,exp,skills,availability,courses) VALUES ("${salutation}","${fname}","${lname}","${sname}","${username}","${password}","${email}","${mobile}","${address}","${gender}","${dob}","${country}","${exp}","${skills}","${availability}","${courses}");`
    
    db.run(JS_in,err =>{
        if(err)
            return console.log("Job Seeker Table Insertion: "+err.message);
        else
        {
            console.log("1 record Inserted in Job Seeker Registration Table.");
            res.redirect('/Login');
        }
    })
});



app.get("/mentorRegister",function(req,res){
    res.render('mentorRegister');
});

app.post('/mentorRegister',function(req,res){
    let salutation = req.body.salutation;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let sname = req.body.sname;
    let email = req.body.emailID;
    let mobile = req.body.mobile;
    let address = req.body.address;
    let gender = req.body.gender;
    let dob = req.body.DOB;
    let country = req.body.country;
    let marital = req.body.marital;
    var exp = req.body.exp;
    var skills = req.body.skill;
    var availability = req.body.availability;
    let username = req.body.username;
    let password = req.body.password1;  

    db.all("SELECT * FROM mentor WHERE email=?;",[email],(err,row) => {
        if (err)
            return console.log(err.message);
        console.log(row);

        let k = row.length;
        if(k!=0) {
            console.log("Email already exists!!\nTry with another email");
            res.redirect("/mentorRegister");        
        } 
    });

    var M_in = `INSERT INTO mentor(salutation,fname,lname,sname,username,password,email,mobile,address,gender,dob,nationality,marital,exp,skills,availability) VALUES ('${salutation}','${fname}','${lname}','${sname}','${username}','${password}','${email}','${mobile}','${address}','${gender}','${dob}','${country},'${marital}','${exp}','${skills}','${availability}');`
    
    db.run(M_in,err =>{
        if(err)
            return console.log("Mentor table Insertion: "+err.message);
        else
        {
            console.log("1 record Inserted in Mentor Registration Table.");
            res.redirect('/');
        }
    })
});

app.get('/Login',function(req,res){
    res.render('Login');
})

app.post("/Login",function(req,res) {
    var email = req.body.email;
    var password = req.body.password;
    var check = req.body.WhoAreYou;

    if(check == "student")
    {
        db.all("SELECT * FROM student WHERE email=? AND password=?;",[email,password],(err,row) => {
            if (err)
                return console.log(err.message);
            console.log(row);

            let k = row.length;
            if(k!=0) {
                res.redirect("/S_Landing");
            }
            else {
                console.log("Incorrect Login Details\nTry Again.");
                res.redirect("/Login");
            }
        });
    }
    else if(check == "jobseeker")
    {
        db.all("SELECT * FROM job_seeker WHERE email=? AND password=?",[email,password],(err,row) => {
            if (err)
                return console.log(err.message);
            console.log(row);

            let k = row.length;
            if(k!=0) {
                res.redirect("/JobSeeker_Landing");
            }
            else {
                console.log("Incorrect Login Details\nTry Again.");
                res.redirect("/Login");
            }
        });
    }
});

app.get("/JobSeeker_Landing", function (req, res) {
    res.render("JobSeeker_Landing");
});

app.get("/S_Landing", function (req, res) {
    res.render("S_Landing");
});

app.get('/FAQs',function(req,res){
    res.render('FAQ');
});

app.get('/AboutUs',function(req,res){
    res.render('AboutUs');
});

app.get('/Find_Tutor',function(req,res){
    res.render('Find_Tutor');
});



app.get('/Student_Profile',function(req,res){
    res.render('Student_Profile');
});


app.get('/filter_page',function(req,res){
  res.render('filter_page');
})

app.get('/UnderConstruction',function(req,res){
    res.render('construction_display');
});


app.get('/JobSeeker_Profile',function(req,res){
    res.render('JobSeeker_Profile');
});


app.listen("8989",function(){
    console.log("Server Started at 8989");
});
