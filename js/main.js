window.onload = function () {
    // Animate();
}

// Make Navbar interactive
var navbar = document.getElementById('Nav'),
    toogle = document.querySelector('nav button.navbar-toggler i');

window.onscroll = function () {
    if (window.scrollY <= 100) {
        move(navbar)
            .set('background', 'transparent')
            .duration('0.7s')
            .end();

        move(toogle)
            .set("color", "white")
            .end()
    } else {
        move(navbar)
            .set('background', '#E7E8EA')
            .duration('0.7s')
            .end();

        move(toogle)
            .set("color", "black")
            .end()
    }
};

function Animate() {
    move('.overlay')
        .x(0)
        .duration(3000)
        .then()
    move('.preload')
        .x(4000)
        .duration(2000)
        .delay(1000)
        .end();
}