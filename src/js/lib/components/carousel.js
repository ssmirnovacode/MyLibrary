import $ from '../core';

$.prototype.carousel = function() {
    for (let i=0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width; //we get width from computed width of the wrapper
        const slides = this[i].querySelectorAll('.carousel-item');

        
    }
};

$('.carousel').carousel();