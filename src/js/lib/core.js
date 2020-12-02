const $ = function(selector) { // constructor
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if(!selector) {
        return this; // this - {} - $.prototype.init(selector) - our new created empty object
    }
    Object.assign(this, document.querySelectorAll(selector)); //Object.assign() allows us to copy all properties values from prototype objecto to a target one(this)
    this.length =  document.querySelectorAll(selector).length; 

    console.log(this);
    return this;
};

$.prototype.init.prototype = $.prototype; //!!!we record the prototype of $ to the prototype of our returned object; so now we can use all methods of $ prototype

window.$ = $; // to be able to use $ globally

export default $; // so we can use it in other modules