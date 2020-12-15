import $ from '../core';

$.prototype.accordion = function(headActive = 'accordion-head--active', 
                                contentActive = 'accordion-content--active', 
                                paddings = 40) { // 40px padding coz its a sum of 20 top and 20 bottom
    for (let i=0; i < this.length; i++) {
        $(this[i]).click( () => {
            $(this[i]).toggleClass(headActive);
            $(this[i].nextElementSibling).toggleClass(contentActive);

            if (this[i].classList.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
            }
            else {
                this[i].nextElementSibling.style.maxHeight = "0px";
            }
        });
    }
    
};

$('.accordion-head').accordion();