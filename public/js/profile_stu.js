const rhs = document.getElementsByClassName("rhs");
const vp  = document.getElementsByClassName("btn")[0];
// const ep = document.getElementsByClassName("btn")[1];
console.log(rhs);

function tabchange(a)
{   
    console.log(rhs);
    if(a == 0)
    {
        rhs[0].classList.remove('dpn');
        rhs[1].classList.add('dpn');
        // rhs[2].classList.add('dpn');

    }
    if(a == 1)
    {
        rhs[1].classList.remove('dpn');
        rhs[0].classList.add('dpn');
        // rhs[2].classList.add('dpn');

    }
    // if(a == 2)
    // {
    //     rhs[2].classList.remove('dpn');
    //     rhs[1].classList.add('dpn');
    //     rhs[0].classList.add('dpn');
    // }
}
tabchange(1);   


function enableInput()
{
    var txt = document.getElementsByClassName("profile-input");

    txt[0].disabled = false;
    txt[1].disabled = false;
    txt[2].disabled = false;
    txt[3].disabled = false;
    txt[4].disabled = false;
}

const regexPass = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var txt = document.getElementById("validation-update");

    function checkP()
    {
        var answer1 = document.getElementById("pass1").value;
        var answer2 = document.getElementById("pass2").value;

        if(regexPass.test(pass1.value) && regexPass.test(pass2.value) && (pass1.value === pass2.value))
        {
            txt.innerHTML = "";
            return true;
        }
        else if((pass1.value && pass2.value === "") || (pass1.value === "" && pass2.value))
        {
            txt.innerHTML = "Enter complete password";
            return false;
        }
        else
        {
            txt.innerHTML = "Incorrect Password Credentials!!";
            return false;
        }
    }


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const mobileRegex = /^\d{10}$/;
var etxt = document.getElementById("validation-email");
var em = document.getElementById("email");

function checkE()
{
    if(!emailRegex.test(em.value) || em.value === "")
    {
        etxt.innerHTML = "Incorrect Email";
        return false;
    }
    else
    {
        etxt.innerHTML="";
        return true;
    }
}

var mo = document.getElementById("mobile");
var mtxt = document.getElementById("validation-mobile");
function checkM()
{
    if(!mobileRegex.test(mo.value) || mo.value===NaN || mo.value ==="")
    {
        mtxt.innerHTML = "Incorrect Mobile Number!!";
        return false;
    }
    else
    {
        mtxt.innerHTML = "";
        return true;
    }
}

var atxt = document.getElementById("validation-address");
var ad = document.getElementById("address");
function checkA()
{
    if(ad.value === "")
    {
        atxt.innerHTML = "Enter Address!";
        return false;
    }
    else
    {
        atxt.innerHTML = "";
        return true;
    }
}