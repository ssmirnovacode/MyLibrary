import $ from '../core';

//Technical function just to launch animation
$.prototype.animateOverTime = function(dur, cb, fin) { //fin - final function to be called after the animation
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let completion = Math.min(timeElapsed / dur, 1); //changing parameters on the page (like opacity etc)

        cb(completion);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        }
        else { // when animation has finished
            if (typeof fin === 'function') {
                fin();
            }
        }
    }
    return _animateOverTime; // to be able to use it in other methods
};

$.prototype.fadeIn = function(dur, display, fin) {
    for (let i=0; i < this.length; i++) {
        this[i].style.display = display || 'block'; // another way to set default value

        const _fadeIn = (completion) => {
            this[i].style.opacity = completion;
        };

        const ani = this.animateOverTime(dur, _fadeIn, fin);
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeOut = function(dur, fin) {
    for (let i=0; i < this.length; i++) {
        

        const _fadeOut = (completion) => {
            this[i].style.opacity = 1 - completion;
            if (completion === 1) { // if the element became transparent completely, ...
                this[i].style.display = 'none'; // ...we hide it from the page
            }
          
        };

        const ani = this.animateOverTime(dur, _fadeOut, fin);
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeToggle = function(dur, display, fin) {
    for (let i=0; i < this.length; i++) {
9
        if (window.getComputedStyle(this [i]).display === 'none') {
            this[i].style.display = display || 'block'; 

            const _fadeIn = (completion) => {
                this[i].style.opacity = completion;
            };

            const ani = this.animateOverTime(dur, _fadeIn, fin);
            requestAnimationFrame(ani);
        }
        else {
            const _fadeOut = (completion) => {
                this[i].style.opacity = 1 - completion;
                if (completion === 1) { // if the element became transparent completely, ...
                    this[i].style.display = 'none'; // ...we hide it from the page
                }
              
            };
    
            const ani = this.animateOverTime(dur, _fadeOut, fin);
            requestAnimationFrame(ani);
        }
    }

    return this;
};