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

        try {
            if (this[i].classList.contains('autoplay')) {
                setInterval( () => {
                    hideSlides();
                    if (slideIndex < slides.length-1) {
                        slideIndex++;    
                    }
                    else {
                        slideIndex = 0;  
                    }
                    slides[slideIndex].style.width = width;
                    dots.forEach(dot => {
                        dot.classList.remove('active');
                    });
                    dots[slideIndex].classList.add('active');
                }, this[i].getAttribute('data-speed') * 1000);
            }
        } catch(e) {}
        

        dots.forEach((item,i) => {
            item.addEventListener('click', () => {
                hideSlides();
                slides[i].style.width = width;
                dots.forEach(dot => {
                    dot.classList.remove('active');
                });
                item.classList.add('active');
            });
        });
    

        $(btnPrev).click( (e) => {
            e.preventDefault();
            hideSlides();
            if (slideIndex > 0) {
                slideIndex--;                
            }
            else {
                slideIndex = slides.length-1;
            }
            slides[slideIndex].style.width = width;
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[slideIndex].classList.add('active');
        });

        $(btnNext).click( (e) => {
            e.preventDefault();
            hideSlides();
            if (slideIndex < slides.length-1) {
                slideIndex++;    
            }
            else {
                slideIndex = 0;  
            }
            slides[slideIndex].style.width = width;
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[slideIndex].classList.add('active');
        });
    }
};

$('.carousel').carousel();