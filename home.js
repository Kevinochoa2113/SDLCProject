
let slide = 0;

function slideShow(){
    let image;
    let show = document.getElementsByClassName("mySlide");

    for(let i = 0; i < show.length; i++) {
        show[image].display = "none";
    }

    slide++;
    if(slide > show.length) {
        slide = 1;
    }
    image[slide - 1].display = "block";
    setTimeout(slideShow, 2000);
}