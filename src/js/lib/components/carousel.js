import $ from '../core';

$.prototype.carousel = function() {
    for (let i=0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width, //we get width from computed width of the wrapper
            slides = this[i].querySelectorAll('.carousel-item'),
            btnPrev = this[i].querySelector('.carousel-prev'),
            btnNext = this[i].querySelector('.carousel-next'),
            dots = this[i].querySelectorAll('.carousel-indicators li');

        let slideIndex = 0;

        function hideSlides() {
            slides.forEach(slide => {
                slide.style.width = '0px';
            });
        }
        hideSlides();
        
        slides[slideIndex].style.width = width;

        dots.forEach((item,i) => {
            item.click( () => {
                hideSlides();
                slides[i].style.width = width;
            });
        });

        btnPrev.click( (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (slideIndex > 0) {
                slideIndex--;
                hideSlides();
                slides[slideIndex].style.width = width;
            }
            else {
                slideIndex = slides.length-1;
                hideSlides();
                slides[slideIndex].style.width = width;
            }
        })

        btnNext.click( (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (slideIndex < slides.length-1) {
                slideIndex++;
                hideSlides();
                slides[slideIndex].style.width = width;
            }
            else {
                slideIndex = 0;
                hideSlides();
                slides[slideIndex].style.width = width;
            }
        })
    }
};

$('.carousel').carousel();