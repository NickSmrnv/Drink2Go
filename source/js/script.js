// Бургер меню
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const header = document.querySelector('.header');

nav.classList.remove('nav--nojs');
header.classList.remove('header--nojs');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});

// Интерактивная карта leaflet.js

const map = L.map('map', {
  attributionControl: false
}).setView([59.968389, 30.317533], 18);

const myIcon = L.icon({
  iconUrl: 'img/map-pin.png',
  iconSize: [38, 50], // устанавливаем новый размер иконки
  iconAnchor: [25, 25],
  popupAnchor:  [0, -25]
});

const marker = L.marker([59.968389, 30.317533],{icon: myIcon}).addTo(map);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.zoomControl.remove(); // убираем обе кнопки
map.panTo(marker.getLatLng()); // центрирование на маркере

// Слайдер swiper.js



const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper__button-next",
    prevEl: ".swiper__button-prev",
  },
  pagination: {
    keyboard: true,
    el: '.swiper-pagination',
    type: 'custom',
    clickable: true,
    renderCustom: function (swiper, current, total) {
      var paginationHtml = '';
      for (var i = 0; i < total; i++) {
        if (i === (current - 1)) {
          paginationHtml += '<span class="swiper-pagination-line swiper-pagination-line-active"></span>';
        } else {
          paginationHtml += '<span class="swiper-pagination-line"></span>';
        }
      }
      return paginationHtml;
    }
  }
});

swiper.on('init', () => {
  document.querySelector('.swiper-button-next img').setAttribute('src', '../img/arrow-left.svg');
  document.querySelector('.swiper-button-prev img').setAttribute('src', '../img/arrow-left.svg');
});
