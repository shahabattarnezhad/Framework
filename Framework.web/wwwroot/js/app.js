$(document).ready(function () {

    $(window).scroll(function () {

        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }

    });

    // slide up scroll

    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
    });

    // toggle menu/navbar script

    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    // typing animation script

    var typed = new Typed(".typing", {
        strings: ["Flexible", "Stable", "Extensible"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed = new Typed(".typing-2", {
        strings: [
            "Domain Driven Design (DDD)",
            "EF 6 and EF Core 3.0, 3.1",
            "The ability to develop software in a simple and fast way",
            "Based on SOLID Principles",
            "Modular Design",
            "Layered architecture",
            "Asp.Net MVC (.Net Framework and EF6)",
            "Asp.Net MVC Core 3.0, 3.1",
            "Asp.Net Web API Core 3.0, 3.1",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // owl carousel script

    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });

});

/* Toggle menu */


$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".wrapper").toggleClass("active");
    });
});

/* selected li a */

$(document).ready(function () {
    $("ul#myNav li a").click(function () {
        $("ul#myNav li a").removeClass("active");
        $(this).toggleClass("active");
    });
});









