// Preloader
window.addEventListener('load', () => {
  const loader = document.getElementById('preloader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links ul');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('active');
  });
}

// Dynamic Hero Text
const heroLines = [
  "We create dreams",
  "We create designs",
  "We create stories"
];

const dynamicText = document.querySelector('.dynamic-text');
let currentIndex = 0;

function updateHeroText() {
  if (dynamicText) {
    dynamicText.style.opacity = '0';
    
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % heroLines.length;
      dynamicText.textContent = heroLines[currentIndex];
      dynamicText.style.opacity = '1';
    }, 500);
  }
}

if (dynamicText) {
  dynamicText.textContent = heroLines[0];
  dynamicText.style.opacity = '1';
  setInterval(updateHeroText, 3000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      
      if (navLinks.classList.contains('active')) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('active');
      }
    }
  });
});

// Initialize AOS animations
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 120
  });
}

// Animated steps observer
function animateSteps() {
  const steps = document.querySelectorAll('.process-step');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.5 });
  
  steps.forEach(step => observer.observe(step));
}

// Call this when DOM loads
document.addEventListener('DOMContentLoaded', animateSteps);