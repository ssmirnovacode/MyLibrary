# MyLibrary
Customized HTML/CSS/JS library
version 1.0.0

Includes tabs, modal, dropdown, carousel and accordeon components ready to use (specific HTML markup required). See "Components" section for more information.

Most frequently used actions and DOM manipulations are simplified to one word commands. See "Modules" section for more information.

Pre-coded CSS styles implemented through html markup classes and data attributes can be consulted in the "CSS" section.

1. QUICK START:

To set up MyLibray to your project you only need to copy the script.js and styles.css files into corresponding folders and link them to your index.html file:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project</title>
    <!-- MyLibrary css file -->
    <link rel="stylesheet" href="css/style.css"> T
    <!-- Your own css files if required-->
    <link rel="stylesheet" href="">
</head>
<body>
    <!-- MyLibrary js file -->
    <script src="js/script.js"></script>
    <!-- Your own scripts if required -->
    <script src=""></script>
</body>
</html>
```

The pre-coded components will require specific html markup tha will be provided further below in "components" section.

2. COMPONENTS

The classes indicated in html markup aremandatory for proper functioning of the components. Additional classes can be added for further custom styling ("CSS" section).

2.1 Tabs

To set up the tabs js-component, the following markup is required: 

```
<div class="tab">
    <div class="tab-panel" data-tabpanel>
        <div class="tab-item tab-item--active">...</div>
        ...
        <div class="tab-item">...</div>
    </div>
    <div class="tab-content tab-content--active">
        
        <!--  Your tab content here -->
        
    </div>
    ....
    <div class="tab-content">
        
    </div>
    </div>
</div>
```

//example with a screenshot can be added here ---------------------------


2.2. Modal

To set up the modal component, the following markup is required:

```
<div class="modal" id="exampleModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <button class="close" data-close>
                <span>&times;</span>
            </button>
            <div class="modal-header">
                <div class="modal-title">Modal title</div>
            </div>
            <div class="modal-body">Lorem, ipsum dolor sit </div>
            <div class="modal-footer">
                <button class="btn" data-close>Close</button>
                <button class="btn">Submit</button>    
            </div>
        </div>
    </div>
</div>
```

Modal requires a trigger, where specific data-attributes must be added to markup - data-toggle="modal"  data-target="#exampleModal" (the value can be random, but it MUST match the modal id). For example:

 ```
 <a href="#"  id="trigger" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Link to</a>
 ```

 //example with a screenshot can be added here ---------------------------

2.3. Accordion

To set up the accordion component, the following markup is required:

```
<div class="accordion">
    <div class="accordion-head">
        <span>Accordion title</span>
    </div>
    <div class="accordion-content">
        <div class="accordion-inner">Lorem ipsum dolor</div>
    </div>

        ...

    <div class="accordion-head">
        <span>Accordion title</span>
    </div>
    <div class="accordion-content">
        <div class="accordion-inner">Lorem ipsum dolor</div>
    </div>
</div>
```

//example with a screenshot can be added here ---------------------------

2.4. Carousel (slider)

To set up the carousel component, the following markup is required:

```<div class="carousel" id="myCarousel">
    <ol class="carousel-indicators">
        <li class="active"  data-slide-to="0"></li>
        <li data-slide-to="1"></li>
        <li data-slide-to="2"></li>
        ...
    </ol>
    <div class="carousel-inner">
        <div class="carousel-slides">
            <div class="carousel-item">
                <img src="..." alt="foto">
            </div>

            ...

            <div class="carousel-item">
                <img src="..." alt="foto">
            </div>
        </div>
    </div>
    <a href="#" class="carousel-prev" data-slide="prev">
        <span class="carousel-prev-icon">&lt;</span>
    </a>
    <a href="#" class="carousel-next" data-slide="next">
        <span class="carousel-next-icon">&gt;</span>
    </a>
</div>
```
Autoplay option: to enable automatic slide change: 
1. Add class "autoplay" to the div with class carousel
2. Add data-speed="", putting a number as value (1 for 1000ms, 2 for 2000ms etc) to set the slides change speed
```
<div class="carousel autoplay" data-speed="3" id="myCarousel">
```
//example with a screenshot can be added here ---------------------------

2.5. Cards 

To set up the cards component, the following markup is required:

```<div class="goods d-flex f-space-around">
    <div class="card">
        <img class="card-img" src="" alt="photo">
        <div class="card-body">
            <div class="card-title">Card title 1</div>
            <p class="card-text">Lorem ipsum
            </p>
        </div>
    </div>
    <div class="card">
        <img class="card-img" src="" alt="photo">
        <div class="card-body">
            <div class="card-title">Card title 2</div>
            <p class="card-text">Lorem ipsum
            </p>
            
        </div>
    </div>
</div>
```

//example with a screenshot can be added here ---------------------------
      

2.6. Dropdown

To set up the dropdown component, the following markup is required:

```
<div class="dropdown">
    <button class="btn dropdown-toggle" id="dropdownMenuButton" >Dropdown button</button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
        <a href="#" class="dropdown-item">Action</a>
        <a href="#" class="dropdown-item">Action 2</a>
        <a href="#" class="dropdown-item">Action 3</a>
    </div>
</div>
```

//example with a screenshot can be added here ---------------------------

3. MODULES 

Different MyLibrary methods can de initialized following the example:

```
$(selector).methodName();
```

$(selector) - object containing element(s) according to chosen selector. Essentially, it´s the same as document.querySelectorAll(selector).

Each method returns the modified object (element), so chaining is available:
```
$(selector).methodName1().methodName2();
```

3.1. DOM elements manipulation methods



3.1.1. html(content) 

A shorter verison of innerHTML method:
```
$(selector).html(content);
```


3.1.2. eq(index) 

Finds an element by its index in a group of sibling elements:
```
$(selector).eq(index);
```

3.1.3. index()

Returns the index of an element in a group of sibling elements:
```
$(selector).index();
```

3.1.4. find(selector)

Returns an object with element(s) with a specified selector:
```
$(selector).find(selector);
```

3.1.5. siblings(selector)

Returns all siblings of an element with a specified selector:
```
$(selector).siblings(selector);
```


3.2. Event handlers


3.2.1. on(eventName, callback)

on() method is a shorter version of addEventListener:
```
$(selector).on(eventName, callback);
```

3.2.2. off(eventName, callback)

removes the event handler:
```
$(selector).off(eventName, callback);
```

3.2.3. click(callback)

A shorter way to add an event Handler on click:
```
$(selector).click(callback);
```


3.3. classList property changing methods


3.3.1. addClass(...classNames)

addClass() method is a shorter version of classList.add(). Multiple classes can be passed as parameters.
```
$(selector).addClass(...classNames);
```

3.3.2. removeClass(...classNames)

removeClass() method is a shorter version of classList.remove(). Multiple classes can be passed as parameters.
```
$(selector).removeClass(...classNames);
```

3.3.3. toggleClass(className)

toggleClass() method is a shorter version of classList.toggle():.
```
$(selector).toggleClass(className);
```

3.4. Display property changing methods


3.4.1. show()

Sets the display property to '' so the element(s) are visible:
```
$(selector).show();
```

3.4.2. hide()

Sets the display property to 'none' so the element(s) are hidden:
```
$(selector).hide();
```

3.4.3. toggle()

Toggles the display property value from '' to 'none' and back:
```
$(selector).toggle();
```


3.5. Animation methods


3.5.1. fadeIn(duration, callback, fin) 

Creates a fade-in (element slowly becoming visible) animation based on parameters:

duration - animation duration in ms 
callback - animation callback function
fin - function to be called after the animation is finished (optional)
```
$(selector).fadeIn(duration, callback, fin);
```

3.5.2. fadeOut(duration, callback, fin) 

Creates a fade-out (element slowly becoming hidden) animation based on parameters:

duration - animation duration in ms 
callback - animation callback function
fin - function to be called after the animation is finished (optional)
```
$(selector).fadeOut(duration, callback, fin);
```

3.5.3. fadeToggle(duration, callback, fin) 

Animation working as fadeIn or fadeOut depending on the value of display property of the element.

duration - animation duration in ms 
callback - animation callback function
fin - function to be called after the animation is finished (optional)
```
$(selector).fadeToggle(duration, callback, fin);
```


3.6. Server requests methods


3.6.1. get(url, dataTypeAnswer)

A shorter version of fetch API for GET requests with following parameters:

url - path to the Server
dataTypeAnswer - data format (set to 'json' format as default)
```
$(selector).get(url, dataTypeAnswer);
```

3.6.2. post(url, dataTypeAnswer)

A shorter version of fetch API for POST requests with following parameters:

url - path to the Server
dataTypeAnswer - data format (set to 'json' format as default)
```
$(selector).post(url, dataTypeAnswer);
```

4. CSS 

MyLibrary has a variety of custom ready-to-use CSS-classes specified below.


4.1. Text align classes 
```
.text-center {
    text-align: center;
}
.block-center {
    margin: 0 auto;
}
```

4.2. Display options classes
```
.hidden {
    visibility: hidden;
}
.visible {
    visibility: visible;
}
.d-none {
    display: none;
}
.d-block {
    display: block;
}
.d-flex {
    display: flex;
}
.f-centered {
    justify-content: center;
    align-items: center;
}
.f-space-around {
    justify-content: space-around;
}
.f-space-between {
    justify-content: space-between;
}
```

4.3. Font modifying classes
```
.fz-16 {
    font-size: 16px;
}
.fz-20 {
    font-size: 20px;
}
.fz-24 {
    font-size: 24px;
}
.bold {
    font-weight: bold;
}
.thin {
    font-weight: 300;
}
.italic {
    font-style: italic;
}
.text-color-primary {
    color: $primary;
}
.text-color-danger {
    color: $danger;
}
.text-color-success {
    color: $success;
}
.text-color-warning {
    color: $warning;
}
.text-color-dark {
    color: $dark;
}
```

4.4. Margin modifying classes
```
.m10 {
    margin: 10px;
}
.m20 {
    margin: 20px;
}
.mt-10 {
    margin-top: 10px;
}
.mr-10 {
    margin-right: 10px;
}
.mb-10 {
    margin-bottom: 10px;
}
.ml-10 {
    margin-left: 10px;
}
.mt-20 {
    margin-top: 20px;
}
.mr-20 {
    margin-right: 20px;
}
.mb-20 {
    margin-bottom: 20px;
}
.ml-20 {
    margin-left: 20px;
}
```

4.5. Padding modifying classes
```
.p10 {
    padding: 10px;
}
.p20 {
    padding: 20px;
}
.pt-10 {
    padding-top: 10px;
}
.pr-10 {
    padding-right: 10px;
}
.pb-10 {
    padding-bottom: 10px;
}
.pl-10 {
    padding-left: 10px;
}
.pt-20 {
    padding-top: 20px;
}
.pr-20 {
    padding-right: 20px;
}
.pb-20 {
    padding-bottom: 20px;
}
.pl-20 {
    padding-left: 20px;
}
```

4.6. Width and height classes
```
.w-100 {
    width: 100%;
}
.w-50 {
    width: 50%;
}
.w-300 {
    width: 300px;
}
.w-500 {
    width: 500px;
}
.h-100 {
    height: 100%;
}
.h-50 {
    height: 50%;
}
.h-300 {
    height: 300px;
}
.h-500 {
    height: 500px;
}
```

---------------------------
The documentation above will be updated according the new versions of MyLibrary
