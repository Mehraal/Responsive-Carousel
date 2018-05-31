var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); 
}

var theInterval;

function startSlide() {
    theInterval = setInterval(slideSwitch, 3000);
}

function stopSlide() {
    clearInterval(theInterval);
}

$(function () {
    startSlide();
    $('#slideshow DIV').hover(function () {
        stopSlide();
    }, function () {
        startSlide();
    })
})
$('#myCarousel').on('slide.bs.carousel', function () {
    myCarousel.carousel("next");
})
$('#myCarousel').on('slide.bs.carousel', function () {
    myCarousel.carousel("prev");
})