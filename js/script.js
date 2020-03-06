$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        autoplay: {
            delay: 3000,
        },
    })
});

$("#nav-menu-toggle").on("click", () => {
    $("#nav-menu-toggle").toggleClass("active");
    $("nav").toggleClass("active");
})