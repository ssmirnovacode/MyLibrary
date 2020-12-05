import $ from '../core';

$.prototype.html = function(content) {
    for (let i=0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        }
        else {
            return this[i].innerHTML;
        }
    }

    return this;
};

//find element by its index
$.prototype.eq = function(i) {
    const targetItem = this[i];
    const objLength = Object.keys(this).length;

    for (let i=0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = targetItem;
    this.length = 1;

    return this;
};

$.prototype.index = function() {
    const parent = this[0].parentNode;
    const kids = [...parent.children];

    const findMyIndex = (item) => {
        return item == this[0]; // filter function
    };

    return kids.findIndex(findMyIndex);
};

//finding elements with the selector among a group of preselected elements
$.prototype.find = function(selector) { 
    let numberOfItems = 0; //total qty of elems that matched the selector to be recorded into 'this'
    let counter = 0; // number of new elements recorded in 'this'

    const copyObj = Object.assign({}, this); //usual copy of our object

    for (let i=0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) { // if there was no watch for current i
            continue;
        }

        for (let j=0; j < arr.length; j++) {
            this[counter] = arr[j]; // recording the arr elems to 'this' obj
            counter++;
        }

        numberOfItems += arr.length;
    }

    //deleting the 'tail' that might remain in 'this' after recording new key/value pairs
    for (let k=numberOfItems; k < this.length; k++) { 
        delete this[k];
    }
    
    this.length = numberOfItems;

    return this;
};

$.prototype.closest = function(selector) {
    let counter = 0; // qty of elems found using closest

    for (let i=0; i < this.length; i++) {
        this[i] = this[i].closest(selector);
        counter++;
    }

    for (; counter < this.length; counter++) {
        delete this[counter];
    }

    this.length = counter;

    return this;
};