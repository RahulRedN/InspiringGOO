const rhs = document.getElementsByClassName("rhs");
const vp  = document.getElementsByClassName("btn")[0];
const ep = document.getElementsByClassName("btn")[1];
console.log(rhs);

function tabchange(a)
{   
    if(a == 0)
    {
        rhs[0].classList.remove('dpn');
        rhs[1].classList.add('dpn');
        rhs[2].classList.add('dpn');

    }
    if(a == 1)
    {
        rhs[1].classList.remove('dpn');
        rhs[0].classList.add('dpn');
        rhs[2].classList.add('dpn');

    }
    if(a == 2)
    {
        rhs[2].classList.remove('dpn');
        rhs[1].classList.add('dpn');
        rhs[0].classList.add('dpn');
    }
}
tabchange(2);   
