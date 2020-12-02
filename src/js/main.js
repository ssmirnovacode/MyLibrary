import './lib/lib';

$('button').click(function() {
    $(this).toggleClass('active'); //$(this) is a node, not a selector
});

