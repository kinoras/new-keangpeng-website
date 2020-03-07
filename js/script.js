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

    $(mySwiper.navigation.nextEl).html(`<img src="image/swiper/button/next.png" alt="下一張">`);
    $(mySwiper.navigation.prevEl).html(`<img src="image/swiper/button/prev.png" alt="上一張">`);

});

$("#nav-menu-toggle").on("click", () => {
    $("#nav-menu-toggle").toggleClass("active");
    $("nav").toggleClass("active");
})

function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all the :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}