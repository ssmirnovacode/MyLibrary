/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function (headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
  // 40px padding coz its a sum of 20 top and 20 bottom
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(contentActive);

      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
      } else {
        this[i].nextElementSibling.style.maxHeight = "0px";
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-head').accordion();

/***/ }),

/***/ "./src/js/lib/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/carousel.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.carousel = function (autoplay = false) {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width,
          //we get width from computed width of the wrapper
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

    if (autoplay) {
      setInterval(() => {
        hideSlides();

        if (slideIndex < slides.length - 1) {
          slideIndex++;
        } else {
          slideIndex = 0;
        }

        slides[slideIndex].style.width = width;
        dots.forEach(dot => {
          dot.classList.remove('active');
        });
        dots[slideIndex].classList.add('active');
      }, 1500);
    }

    dots.forEach((item, i) => {
      item.addEventListener('click', () => {
        hideSlides();
        slides[i].style.width = width;
        dots.forEach(dot => {
          dot.classList.remove('active');
        });
        item.classList.add('active');
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(btnPrev).click(e => {
      e.preventDefault();
      hideSlides();

      if (slideIndex > 0) {
        slideIndex--;
      } else {
        slideIndex = slides.length - 1;
      }

      slides[slideIndex].style.width = width;
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
      dots[slideIndex].classList.add('active');
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(btnNext).click(e => {
      e.preventDefault();
      hideSlides();

      if (slideIndex < slides.length - 1) {
        slideIndex++;
      } else {
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

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.carousel').carousel(true);

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown(); //we have markup in html done already so we initialise it here
//NB! Dynamically-created html block will miss this line, so we initialize it again in main.js

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  // 'created' pàrameter checks if modal was created dynamically
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
    });
    const closeElements = document.querySelectorAll(`${target} [data-close]`); // now we check only the btns inside our i-element

    closeElements.forEach(elem => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';

        if (created) {
          document.querySelector(target).remove(); // avoiding dynamic modals to mount up (making the background darker and darker)
        }
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(e => {
      if (e.target.classList.contains('modal')) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';

        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal(); // initializing it on all the modal triggers

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function ({
  text,
  btns
} = {}) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1)); //we slice the # out of the attr
    //btns = {count: num, settings: [[text, classNames=[], close, callback]]}

    const buttons = [];

    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement('button');
      btn.classList.add('btn', ...btns.settings[j][1]); //btns.settings[j][1] - classNames

      btn.textContent = btns.settings[j][0]; // btns.settings[j][0] - text

      if (btns.settings[j][2]) {
        //btns.settings[j][2] - close true/false
        btn.setAttribute('data-close', true);
      }

      if (btns.settings[j][3] && typeof btns.settings[j][3] === 'function') {
        //btns.settings[j][3] - callback
        btn.addEventListener('click', btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">${text.title}</div>
                    </div>
                    <div class="modal-body">${text.body}</div>
                    <div class="modal-footer">
                           
                    </div>
                </div>
            </div>
        `;
    modal.querySelector('.modal-footer').append(...buttons); // spead operator will unwrap and add all btns

    document.body.appendChild(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true); // binds modal() method to the dynamically created modal

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute('data-target')).fadeIn(500); // calling the modal
  }
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('click', () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('tab-item--active').siblings().removeClass('tab-item--active').closest('.tab').find('.tab-content').removeClass('tab-content--active').eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addClass('tab-content--active');
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tabpanel] .tab-item').tab();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  // constructor
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; // this - {} - $.prototype.init(selector) - our new created empty object
  }

  if (selector.tagName) {
    // checking if this parameter is a tag (not a selector), to be able to use $(this) in callback functions in main.js
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector)); //Object.assign() allows us to copy all properties values from prototype objecto to a target one(this)

  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype; //!!!we record the prototype of $ to the prototype of our returned object; so now we can use all methods of $ prototype

window.$ = $; // to be able to use $ globally

/* harmony default export */ __webpack_exports__["default"] = ($); // so we can use it in other modules

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/carousel */ "./src/js/lib/components/carousel.js");
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/requests */ "./src/js/lib/services/requests.js");
//this file will enrich the $ function with different secondary methods












/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]); // the $ func will be now enriched with imported modules functionality

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
}; //find element by its index


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const targetItem = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = targetItem;
  this.length = 1;
  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const kids = [...parent.children];

  const findMyIndex = item => {
    return item == this[0]; // filter function
  };

  return kids.findIndex(findMyIndex);
}; //finding elements with the selector among a group of preselected elements


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0; //total qty of elems that matched the selector to be recorded into 'this'

  let counter = 0; // number of new elements recorded in 'this'

  const copyObj = Object.assign({}, this); //usual copy of our object

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);

    if (arr.length == 0) {
      // if there was no watch for current i
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j]; // recording the arr elems to 'this' obj

      counter++;
    }

    numberOfItems += arr.length;
  } //deleting the 'tail' that might remain in 'this' after recording new key/value pairs


  for (let k = numberOfItems; k < this.length; k++) {
    delete this[k];
  }

  this.length = numberOfItems;
  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0; // qty of elems found using closest

  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector) == undefined || this[i].closest(selector) == null) {
      continue;
    } else {
      this[i] = this[i].closest(selector);
      counter++;
    }
  }

  for (; counter < this.length; counter++) {
    delete this[counter];
  }

  this.length = counter;
  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        // if its our element. we dont want to include it
        continue;
      }

      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1; // -1 coz its without our element
  }

  for (; numberOfItems < this.length; numberOfItems++) {
    //same as in find() but better syntax
    delete this[numberOfItems];
  }

  this.length = numberOfItems;
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.remove(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(className);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = ''; // we set '' so the browser will put default value (inline, block, flex etc)
  }

  return this; // we return our object so we can continue chaining
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 //Technical function just to launch animation

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  //fin - final function to be called after the animation
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
    } else {
      // when animation has finished
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime; // to be able to use it in other methods
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block'; // another way to set default value

    const _fadeIn = completion => {
      this[i].style.opacity = completion;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = completion => {
      this[i].style.opacity = 1 - completion;

      if (completion === 1) {
        // if the element became transparent completely, ...
        this[i].style.display = 'none'; // ...we hide it from the page
      }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    9;

    if (window.getComputedStyle(this[i]).display === 'none') {
      this[i].style.display = display || 'block';

      const _fadeIn = completion => {
        this[i].style.opacity = completion;
      };

      const ani = this.animateOverTime(dur, _fadeIn, fin);
      requestAnimationFrame(ani);
    } else {
      const _fadeOut = completion => {
        this[i].style.opacity = 1 - completion;

        if (completion === 1) {
          // if the element became transparent completely, ...
          this[i].style.display = 'none'; // ...we hide it from the page
        }
      };

      const ani = this.animateOverTime(dur, _fadeOut, fin);
      requestAnimationFrame(ani);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this; // we do nothing, return this for further chaining
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/services/requests.js":
/*!*****************************************!*\
  !*** ./src/js/lib/services/requests.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.get = async function (url, dataTypeAnswer = 'json') {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();

    case 'text':
      return await res.text();
    //more cases can be added
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.post = async function (url, data, dataTypeAnswer = 'text') {
  let res = await fetch_(url, {
    method: "POST",
    body: data
  });

  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();

    case 'text':
      return await res.text();
  }
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#first').on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(1).fadeToggle(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-count="second"]').on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(2).fadeToggle(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button').eq(2).on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-500').fadeToggle(800);
}); // creating the html markup for dropdown dynamically:

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.wrap').html(`
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" >Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action 2</a>
            <a href="#" class="dropdown-item">Action 3</a>
        </div>
    </div>
    `);
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown(); //NB! Dynamically-created html block will miss this line in dropdown.js, so we initialize it again

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').click(() => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').createModal({
    text: {
      title: 'Modal title dyn',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium vitae, quibusdam saepe, voluptas enim est maxime recusandae quisquam quaerat cupiditate vero illo aliquid ut distinctio facilis aspernatur ducimus blanditiis odio?'
    },
    btns: {
      count: 3,
      settings: [['Close', // btn text
      ['btn-danger', 'mr-10'], true // closing btn
      ], ['Save changes', ['btn-success'], false, () => {
        // callback function
        alert('Data is saved!');
      }], ['Anther btn', ['btn-warning', 'ml-10'], false, () => {
        alert('Hi there');
      }]]
    }
  });
}); //testing GET request

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])().get('https://jsonplaceholder.typicode.com/todos/1').then(res => console.log(res));

/***/ })

/******/ });
//# sourceMappingURL=script.js.map