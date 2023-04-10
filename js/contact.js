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

document.addEventListener('DOMContentLoaded', function() {
  const formTitle = document.querySelector('.form-title');
  const contactForm = document.getElementById('contact-form');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(formTitle);
  observer.observe(contactForm);

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    contactForm.reset();
  });
});

//window after click on submission button 
document.querySelector(".submit-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    const thankYouMessage = document.getElementById("thank-you-message");
    thankYouMessage.classList.add("visible");
    thankYouMessage.classList.remove("hidden");

    setTimeout(() => {
      thankYouMessage.classList.add("hidden");
      thankYouMessage.classList.remove("visible");
    }, 3000); // Remove the message after 3 seconds
  });