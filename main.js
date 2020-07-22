//fa apparire la div hamburger-menu al click
//sull'icona in alto a dx
$('a:last-of-type').click(function(){
    $('.hamburger-menu').show();
});

//fa scomparire la div hamburger-menu al click
//sull'icona in alto a dx
$('.close').click(function(){
    $('.hamburger-menu').hide();
});
