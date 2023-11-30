import { SlideDeck } from './slidedeck.js';

const map = L.map('map', {scrollWheelZoom: false}).setView([38.760944657689585, -9.114346948961964], 13);

// ## The Base Tile Layer
L.tileLayer('https://api.mapbox.com/styles/v1/brookeva/clp0s2f0h00v801nsbf01fof2/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJvb2tldmEiLCJhIjoiY2xtandqYmJzMDc1aDJ3bDgxeTA5aXhvOSJ9.IafG9Pd_exryjb5MaKIIQw', {
  attribution: 'Map tiles by <a href="http://mapbox.com">Mapbox</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
}).addTo(map);

// ## Interface Elements
const slides = document.querySelectorAll('.slide');

// ## The SlideDeck object
const deck = new SlideDeck(slides, map);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();

window.deck = deck;