
/*Navigator*/
let btnMenu = document.getElementById('btn-menu');
let menu1 = document.getElementById('menu');

btnMenu.onclick = () =>{
    btnMenu.classList.toggle('fa-times');
    menu1.classList.toggle('active')
}  



/*
  main page 
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();

   
    var parallax = scroll * 0.5;

    $('.parallax-bg').css({
      transform: 'translateY(' + parallax + 'px)',
    });
  });
});
*/
window.addEventListener('scroll', reveal);

function reveal() {
  let reveals = document.querySelectorAll('.reveal');

  for(let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

// JavaScript to create a testimonial carousel with navigation buttons
const carousel = document.querySelector('.carousel');
const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.style.display = 'block';
        } else {
            testimonial.style.display = 'none';
        }
    });
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

showTestimonial(currentIndex);

prevButton.addEventListener('click', prevTestimonial);
nextButton.addEventListener('click', nextTestimonial);

// Navigation bar effect

window.addEventListener("scroll", function() {
  const navbar = document.getElementsByClassName("header-nav")[0];
  navbar.classList.toggle("sticky", window.scrollY > 0);
});