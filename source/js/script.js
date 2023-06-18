

// Интерактивная карта leaflet.js

const map = L.map('map').setView([59.968389, 30.317533], 18);

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
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
