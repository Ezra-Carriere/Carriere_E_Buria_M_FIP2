//hamburger
document.querySelector('.hamburger-menu').addEventListener('click', function () {
  this.classList.toggle('open');
  document.querySelector('.mobile-nav-menu').classList.toggle('open');
});

//carousel goes here
const carouselPrevButton = document.querySelector('.carousel-prev');
const carouselNextButton = document.querySelector('.carousel-next');
const carouselItems = document.querySelectorAll('.carousel-item');

let activeIndex = 0;

function updateCarousel() {
  carouselItems.forEach((item, index) => {
    if (index === activeIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

carouselPrevButton.addEventListener('click', () => {
  activeIndex--;
  if (activeIndex < 0) {
    activeIndex = carouselItems.length - 1;
  }
  updateCarousel();
});

carouselNextButton.addEventListener('click', () => {
  activeIndex++;
  if (activeIndex >= carouselItems.length) {
    activeIndex = 0;
  }
  updateCarousel();
});

//auto slide anim
const autoSlideInterval = 5000; // Duration between slides in milliseconds (5000ms = 5 seconds)

function autoSlide() {
  activeIndex++;
  if (activeIndex >= carouselItems.length) {
    activeIndex = 0;
  }
  updateCarousel();
}

const slideInterval = setInterval(autoSlide, autoSlideInterval);

carouselPrevButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  activeIndex--;
  if (activeIndex < 0) {
    activeIndex = carouselItems.length - 1;
  }
  updateCarousel();
  setInterval(autoSlide, autoSlideInterval);
});

carouselNextButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  activeIndex++;
  if (activeIndex >= carouselItems.length) {
    activeIndex = 0;
  }
  updateCarousel();
  setInterval(autoSlide, autoSlideInterval);
});

//loading bar for slides 
function updateCarousel() {
  carouselItems.forEach((item, index) => {
    if (index === activeIndex) {
      item.style.display = 'block';
      item.classList.add('active');
    } else {
      item.style.display = 'none';
      item.classList.remove('active');
    }
  });
}