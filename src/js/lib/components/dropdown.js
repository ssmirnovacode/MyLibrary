import $ from '../core';

$.prototype.dropdown = function() {
    for (let i=0; i < this.length; i++) {
        const id = this[i].getAttribute('id');
        $(this[i]).click( () => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};

$('.dropdown-toggle').dropdown(); //we have markup in html done already so we initialise it here
//NB! Dynamically-created html block will miss this line, so we initialize it again in main.js