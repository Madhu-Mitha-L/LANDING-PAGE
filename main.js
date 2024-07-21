const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".chef__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".chef__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chef__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chef__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
// main.js// Function to handle toggle button click and swipe gestures
function handleToggle() {
    const toggleButton = document.querySelector('.toggle-btn');
    const body = document.body;
  
    let startX = null;
  
    toggleButton.addEventListener('click', function() {
      toggleButton.classList.toggle('on');
      body.classList.toggle('dark-theme');
    });
  
    toggleButton.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
    });
  
    toggleButton.addEventListener('touchmove', function(e) {
      if (startX !== null) {
        const moveX = e.touches[0].clientX;
        const diffX = moveX - startX;
        if (diffX > 50) {
          // Swipe right (light mode)
          if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            toggleButton.classList.remove('on');
          }
        } else if (diffX < -50) {
          // Swipe left (dark mode)
          if (!body.classList.contains('dark-theme')) {
            body.classList.add('dark-theme');
            toggleButton.classList.add('on');
          }
        }
        startX = null;
      }
    });
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const toggleContainer = document.querySelector('.toggle-container');
    let startX = null;
    let currentX = null;
  
    toggleBtn.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX - toggleContainer.offsetLeft;
    });
  
    toggleBtn.addEventListener('touchmove', function(e) {
      if (startX !== null) {
        currentX = e.touches[0].clientX - toggleContainer.offsetLeft;
        const diffX = currentX - startX;
        toggleBtn.style.transform = `translateX(${diffX}px)`;
      }
    });
  
    toggleBtn.addEventListener('touchend', function() {
      if (currentX !== null && startX !== null) {
        if (currentX > startX) {
          // Swipe right (light mode)
          toggleBtn.style.transform = 'translateX(0)';
          document.body.classList.remove('dark-theme');
        } else {
          
          toggleBtn.style.transform = `translateX(${toggleContainer.clientWidth - toggleBtn.clientWidth}px)`;
          document.body.classList.add('dark-theme');
        }
      }
      startX = null;
      currentX = null;
    });
  });
  

  function toggleMode() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const innerCircle = toggleBtn.querySelector('.inner-circle');
    
    const circleWidth = innerCircle.offsetWidth; 
    const buttonWidth = toggleBtn.offsetWidth; 
    
    const maxLeft = buttonWidth - circleWidth - 4; 
    
    if (!toggleBtn.classList.contains('on')) {
      innerCircle.style.transform = `translateX(${maxLeft}px)`; 
      toggleBtn.classList.add('on');
      document.body.classList.add('dark-theme');
    } else {
      innerCircle.style.transform = 'translateX(0)'; 
      toggleBtn.classList.remove('on');
      document.body.classList.remove('dark-theme');
    }
  }
  
  
  
  
  
  
