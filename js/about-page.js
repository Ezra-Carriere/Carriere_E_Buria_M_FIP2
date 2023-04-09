document.addEventListener('DOMContentLoaded', () => {
  const aboutSections = document.querySelectorAll('.about-section');

  aboutSections.forEach((section, index) => {
    section.addEventListener('mouseenter', () => {
      section.classList.add('hover');
    });

    section.addEventListener('mouseleave', () => {
      section.classList.remove('hover');
    });
  });
});

//mobile nav
const menuIcon = document.querySelector('.menu-icon');
const mobileNav = document.querySelector('.mobile-nav');
const closeIcon = document.querySelector('#close-icon');

menuIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  closeIcon.style.display = 'block';
});

//close mobile nav bar
closeIcon.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  closeIcon.style.display = 'none';
});

  document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");

    function checkFadeInElements() {
      const windowHeight = window.innerHeight;
      fadeInElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        if (elementPosition - windowHeight <= -100) {
          element.classList.add("visible");
        }
      });
    }

    checkFadeInElements();
    window.addEventListener("scroll", checkFadeInElements);
  });
