window.onload = function () {
    Animate();
}


function Animate() {
    $('.preload').animate({width: '0'}, 
    {
        duration: 500,
        complete: function () {
           $(this).css({"display" : "none"})
        },
    });
}