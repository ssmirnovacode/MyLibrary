import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

// creating the html markup for dropdown dynamically:
$('.wrap').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" >Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action 2</a>
            <a href="#" class="dropdown-item">Action 3</a>
        </div>
    </div>
    `
);
$('.dropdown-toggle').dropdown(); //NB! Dynamically-created html block will miss this line in dropdown.js, so we initialize it again

$('#trigger').click( () => {
    $('#trigger').createModal({
        text: {
            title: 'Modal title dyn',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium vitae, quibusdam saepe, voluptas enim est maxime recusandae quisquam quaerat cupiditate vero illo aliquid ut distinctio facilis aspernatur ducimus blanditiis odio?'
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Close', // btn text
                    ['btn-danger', 'mr-10'],
                    true // closing btn
                ],
                [
                    'Save changes',
                    ['btn-success'],
                    false,
                    () => { // callback function
                        alert('Data is saved!'); 
                    }
                ],
                [
                    'Anther btn',
                    ['btn-warning', 'ml-10'],
                    false,
                    () => {
                        alert('Hi there');
                    }
                ]
            ]
        }
    });
});