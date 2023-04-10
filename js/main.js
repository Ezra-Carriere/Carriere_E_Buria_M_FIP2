 let slides = document.querySelectorAll('.carousel-slide');
        let currentSlide = 0;
        let slideInterval = setInterval(nextSlide, 3000);

        function nextSlide() {
            slides[currentSlide].classList.add('hidden');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.remove('hidden');
}
        

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

//button animation
const buttons = document.querySelectorAll('.animated-button');

buttons.forEach((button) => {
  button.addEventListener('mouseenter', (event) => {
    const x = event.clientX - button.getBoundingClientRect().left;
    const y = event.clientY - button.getBoundingClientRect().top;
    const span = document.createElement('span');
    span.style.left = x + 'px';
    span.style.top = y + 'px';
    button.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 1000);
  });
});




//products

const productData = [
  {
    title: 'Classic',
    image: 'images/product-1.png',
    description: 'Discover the rich, bold flavors of our 0.33ml dark beer, masterfully crafted in a sleek bottle to elevate your drinking experience.',
    price: '$7.99'
  },
  {
    title: 'Pale Ale',
    image: 'images/product-2.png',
    description: 'Savor the crisp, refreshing taste of our 0.33ml pale ale, expertly brewed and presented in a stylish bottle for a delightful drinking experience.',
    price: '$6.99'
  },
  {
    title: 'Lager',
    image: 'images/product-3.png',
    description: 'Indulge in the smooth, well-balanced flavor of our 0.33ml lager beer, bottled to perfection for a satisfying and enjoyable drinking experience.',
    price: '$7.99'  },
  {
    title: 'Cider',
    image: 'images/product-4.png',
    description: 'Savor the crisp, refreshing taste of our 0.33ml cider, carefully bottled to deliver a delightful blend of natural fruitiness and subtle sweetness.',
    price: '$5.99'
  }
];

const grid = document.querySelector('.grid');

productData.forEach((product, index) => {
  const productItem = document.createElement('div');
  productItem.classList.add('product-item');
  productItem.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h2>${product.title}</h2>
    <h3>${product.price}</h3>
    <button class="buy-now">Buy Now</button>
  `;
  productItem.querySelector('.buy-now').addEventListener('click', () => {
    openModal(index);
  });
  grid.appendChild(productItem);
});

const modal = document.getElementById('productModal');
const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

function openModal(index) {
  const product = productData[index];
  const modalImage = document.querySelector('.modal-image');
  const modalTitle = document.querySelector('.modal-title');
  const modalDescription = document.querySelector('.modal-description');
  const modalPrice = document.querySelector('.modal-price');

  modalImage.src = product.image;
  modalTitle.textContent = product.title;
  modalDescription.textContent = product.description;
  modalPrice.textContent = product.price;

  modal.style.display = 'block';
}

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
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