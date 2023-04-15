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