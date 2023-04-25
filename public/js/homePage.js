//navbar js
const toggleMenuOpen = () => document.body.classList.toggle("open");

//for testimonials
const slides = document.querySelectorAll('.testimonial_card');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let slideIndex = 0;

function showSlide(n) {
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  }
  
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

showSlide(slideIndex);

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

//animations for oppcards intersection observer
const obsodd = new IntersectionObserver((entries)=>
{
  entries.forEach((entry)=>
  {
    console.log(entry);
    if(entry.isIntersecting)
    {
      entry.target.classList.add('animate1');
    }
  });
});

const oppodd = document.querySelectorAll('.hidden1');
oppodd.forEach((card)=> obsodd.observe(card));

//even

const obseven = new IntersectionObserver((entries)=>
{
  entries.forEach((entry)=>
  {
    console.log(entry);
    if(entry.isIntersecting)
    {
      entry.target.classList.add('animate2');
    }
  });
});

const oppeven = document.querySelectorAll('.hidden2');
oppeven.forEach((card)=> obseven.observe(card));
