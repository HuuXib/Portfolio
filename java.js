// app.js

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

var slides = document.querySelectorAll('.slide');
var slideIndex = 0;

function showSlide(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  
  slides[slideIndex].classList.add('active');
}

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

showSlide(slideIndex);
