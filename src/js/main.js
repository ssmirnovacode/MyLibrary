import './lib/lib';

$('button').click(function() {
    $('div').eq(2).toggleClass('active'); //$(this) is a node, not a selector
});

$('div').click(function() {
    console.log($(this).index());
});

//console.log($('div').eq(2).find('.some'));
console.log($('.some').closest('.findme'));
