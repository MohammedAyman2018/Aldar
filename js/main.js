window.onload = function () {
    Animate();
}

// Make Navbar interactive
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

function Animate() {
    $('.preload').animate({width: '0'}, 
    {
        duration: 500,
        complete: function () {
           $(this).css({"display" : "none"})
        },
    });
}