import { PRODUCTS } from './products.js';

function getOriginList(product) {
  return product.origins.join(', ');
}

function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === path);
  });
}

function renderProductCard(product) {
  return `
    <a class="product-card" href="products.html#${product.slug}">
      <h3>${product.name}</h3>
      <p class="tagline">${product.tagline}</p>
      <div class="meta">
        <span>Place of Origin</span>
        <span>${getOriginList(product)}</span>
      </div>
    </a>
  `;
}

function enableWheelAndTouchScroll(container) {
  if (!container) return;

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  container.addEventListener('wheel', event => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      container.scrollBy({ left: event.deltaY, behavior: 'smooth' });
    }
  }, { passive: false });

  container.addEventListener('pointerdown', event => {
    if (event.target.closest('button, a')) return;
    isDragging = true;
    startX = event.clientX;
    startScrollLeft = container.scrollLeft;
    container.setPointerCapture(event.pointerId);
  });

  container.addEventListener('pointermove', event => {
    if (!isDragging) return;
    const deltaX = event.clientX - startX;
    container.scrollLeft = startScrollLeft - deltaX;
  });

  container.addEventListener('pointerup', event => {
    if (!isDragging) return;
    isDragging = false;
    container.releasePointerCapture(event.pointerId);
  });

  container.addEventListener('pointercancel', () => {
    isDragging = false;
  });
}

function renderFeaturedProducts() {
  const slider = document.getElementById('featured-slider');
  if (!slider) return;

  slider.innerHTML = PRODUCTS
    .filter(product => product.image != null)
    .slice(0, 6)
    .map(product => renderCarouselSlide(product))
    .join('');

  enableWheelAndTouchScroll(slider);
}

function renderHeroCarousel() {
  const carousel = document.getElementById('hero-carousel');
  const dotsContainer = document.getElementById('hero-carousel-dots');
  if (!carousel || !dotsContainer) return;

  const featured = PRODUCTS
    .filter(product => product.image != null)
    .slice(0, 6);

  carousel.innerHTML = featured.map(product => renderHeroCarouselSlide(product)).join('');
  dotsContainer.innerHTML = featured.map((_, index) => `<button class="hero-dot" data-index="${index}" type="button" aria-label="Go to slide ${index + 1}"></button>`).join('');

  const slides = Array.from(carousel.querySelectorAll('.hero-slide'));
  const dots = Array.from(dotsContainer.querySelectorAll('.hero-dot'));
  let currentIndex = 0;
  let intervalId = null;
  const slideCount = featured.length;

  function setActiveSlide(index) {
    slides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === index));
    dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
  }

  function getActiveSlideIndex() {
    const slideWidth = carousel.clientWidth;
    if (!slideWidth) return 0;
    return Math.min(Math.max(0, Math.round(carousel.scrollLeft / slideWidth)), slideCount - 1);
  }

  function scrollToSlide(index, smooth = true) {
    const slide = carousel.children[index];
    if (!slide) return;
    carousel.scrollTo({ left: slide.offsetLeft, behavior: smooth ? 'smooth' : 'auto' });
    currentIndex = index;
    setActiveSlide(index);
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slideCount;
    scrollToSlide(nextIndex);
  }

  function resetAutoScroll() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 10000);
  }

  carousel.addEventListener('scroll', () => {
    const index = getActiveSlideIndex();
    if (index !== currentIndex && index >= 0 && index < slideCount) {
      currentIndex = index;
      setActiveSlide(index);
    }
  });

  let isPointerDown = false;
  let pointerStartX = 0;
  let pointerScrollStart = 0;
  let didDrag = false;

  enableWheelAndTouchScroll(carousel);

  carousel.addEventListener('click', event => {
    if (didDrag) return;

    const slide = event.target.closest('.hero-slide');
    if (!slide || !slide.classList.contains('is-active')) return;

    const href = slide.dataset.href;
    if (href) window.location.href = href;
  });

  carousel.addEventListener('pointerdown', event => {
    if (event.target.closest('.hero-dot')) return;
    isPointerDown = true;
    didDrag = false;
    pointerStartX = event.clientX;
    pointerScrollStart = carousel.scrollLeft;
    resetAutoScroll();
  });

  carousel.addEventListener('pointermove', event => {
    if (!isPointerDown) return;
    const dx = event.clientX - pointerStartX;
    if (Math.abs(dx) > 5) didDrag = true;
    carousel.scrollLeft = pointerScrollStart - dx;
  });

  carousel.addEventListener('pointerup', event => {
    if (!isPointerDown) return;
    isPointerDown = false;
    const index = getActiveSlideIndex();
    scrollToSlide(Math.min(Math.max(0, index), slideCount - 1));
    resetAutoScroll();
  });

  carousel.addEventListener('pointercancel', () => {
    isPointerDown = false;
  });

  dots.forEach(dot => dot.addEventListener('click', event => {
    const targetIndex = Number(event.currentTarget.dataset.index);
    scrollToSlide(targetIndex);
    resetAutoScroll();
  }));

  resetAutoScroll();
  scrollToSlide(0, false);
}


function renderHeroCarouselSlide(product) {
  const imageUrl = Array.isArray(product.image) ? product.image[0] : product.image;
  return `
    <a class="slider-item hero-slide">
      <img src="assets/image/${imageUrl}" alt="${product.name}">
      <span>${product.name}</span>
    </a>
  `;
}

function renderCarouselSlide(product) {
  const imageUrl = Array.isArray(product.image) ? product.image[0] : product.image;
  return `
    <a class="slider-link" href="products.html#${encodeURIComponent(product.slug)}">
      <div class="slider-item hero-slide">
        <img src="assets/image/${imageUrl}" alt="${product.name}">
        <span>${product.name}</span>
      </div>
    </a>
  `;
}

function renderProductList() {
  const container = document.getElementById('products-list');
  if (container) {
    container.innerHTML = PRODUCTS.map(renderProductCard).join('');
  }
}

function renderProductDetailFromHash() {
  const hash = window.location.hash.replace('#', '');
  const product = PRODUCTS.find(item => item.slug === hash);
  const container = document.getElementById('products-list');
  if (!product || !container) return;

  const hasMultiple = product.type.length > 1;
  const imageUrl = Array.isArray(product.image) ? product.image[0] : product.image;

  container.innerHTML = `
    <div style="grid-column: 1 / -1;">
      <a href="products.html" class="back-link">&larr; Back to Products</a>
      <h1>${product.name}</h1>
      <p>${product.tagline}</p>
      ${imageUrl ? `<div class="detail-image"><img src="assets/image/${imageUrl}" alt="${product.name}"> </div>` : ''}
      ${hasMultiple ? `<div class="type-selector">${product.type.map((type, index) => `<button class="type-tab${index === 0 ? ' active' : ''}" data-index="${index}">${type.name}</button>`).join('')}</div>` : ''}
      <div class="type-panel">
        <h2>${product.type[0].name}</h2>
        <p>${product.type[0].description}</p>
        <h3>Specifications</h3>
        <table class="detail-meta">
          <tr><th>Place of Origin</th><td>${getOriginList(product)}</td></tr>
          ${product.type[0].specs.map(([key, value]) => `<tr><th>${key}</th><td>${value}</td></tr>`).join('')}
        </table>
      </div>
    </div>
  `;

  if (hasMultiple) {
    container.querySelector('.type-selector').addEventListener('click', function (event) {
      const tab = event.target.closest('.type-tab');
      if (!tab) return;
      this.querySelectorAll('.type-tab').forEach(button => button.classList.remove('active'));
      tab.classList.add('active');
      const index = Number(tab.dataset.index);
      const type = product.type[index];
      const panel = container.querySelector('.type-panel');
      panel.innerHTML = `
        <h2>${type.name}</h2>
        <p>${type.description}</p>
        <h3>Specifications</h3>
        <table class="detail-meta">
          <tr><th>Place of Origin</th><td>${type.origin}</td></tr>
          ${type.specs.map(([key, value]) => `<tr><th>${key}</th><td>${value}</td></tr>`).join('')}
        </table>
      `;
    });
  }
}

function initPage() {
  setActiveNav();
  renderHeroCarousel();
  renderFeaturedProducts();
  renderProductList();
  renderProductDetailFromHash();
}

window.addEventListener('DOMContentLoaded', initPage);
window.addEventListener('hashchange', renderProductDetailFromHash);
