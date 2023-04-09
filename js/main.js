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
    title: 'Product 1',
    image: 'images/beer.png',
    description: 'Product 1 description',
    price: '$99.99'
  },
  {
    title: 'Product 2',
    image: 'images/beer.png',
    description: 'Product 2 description',
    price: '$119.99'
  },
  {
    title: 'Product 3',
    image: 'images/beer.png',
    description: 'Product 3 description',
    price: '$89.99'  },
  {
    title: 'Product 4',
    image: 'images/beer.png',
    description: 'Product 4 description',
    price: '$129.99'
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