import $ from '../core';

$.prototype.show = function() {
    //console.log(this);
    for (let i=0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = ''; // we set '' so the browser will put default value (inline, block, flex etc)
    }

    return this; // we return our object so we can continue chaining
};

$.prototype.hide = function() {
    
    for (let i=0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = 'none'; 
    }

    return this; 
};

$.prototype.toggle = function() {
    
    for (let i=0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }

        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        }
        else {
            this[i].style.display = 'none'; 
        }       
    }

    return this; 
};