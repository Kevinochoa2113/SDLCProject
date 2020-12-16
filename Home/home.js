//*Created by CodePen Home
//CSS Slideshow
//Marifer Villarroel

var slideIndex = 1;
var actualSlide = null;
var actualDot = null;
var slides = null;
var dots = null;
initSlides();

function initSlides() {
    slides = document.getElementsByClassName("slideshow-slide");
    var dotContainer = document.getElementById("slideshow-bar");
    dots = document.getElementById("slideshow-bar").children;
    if (slides.length != 0) {
    var child = document.createElement("div");
    child.className = "slideshow-dot";
    for (i = 0; i < slides.length; i++) {
    (function (j) {
        var child = document.createElement("div");
        child.className = "slideshow-dot";
        child.onclick = function () {
            showSlides(j + 1);
        };
        dotContainer.appendChild(child);
        })(i);
    }
    dots = dotContainer.children;
    actualDot = dots[0];
    actualSlide = slides[0];
    actualDot.className += " active";
    actualSlide.style.display = "inline-block";
    }
}

function plusSlides(add) {
    showSlides(slideIndex + add);
}

function showSlides(index) {
    if (index > slides.length) slideIndex = 1;
    else if (index < 1) slideIndex = slides.length;
    else slideIndex = index;
    actualSlide.className = "slideshow-slide slideOut";
    actualDot.className = "slideshow-dot";
    actualSlide = slides[slideIndex - 1];
    actualDot = dots[slideIndex - 1];
    actualSlide.className = "slideshow-slide slideIn";
    actualSlide.style.display = "inline-block";
    actualDot.className += " active";
}
