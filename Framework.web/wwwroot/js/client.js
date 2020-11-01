
$(document).ready(function () {

    // owl clients script

    $(".owl-carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            300: {
                items: 2,
                nav: false,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 4,
                nav: false,
            },
        },
    });

});