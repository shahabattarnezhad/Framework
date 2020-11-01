$(document).ready(function () {

    // Navbar

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

    // Typing

    var typed = new Typed(".typing-team", {
        strings: [
            "we can refactor your codes",
            "we can refactor your design",
            "we can refactor your business",
            "we can refactor your architecture",
            "we can refactor your framework",
            "then your product will be clean!",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

      // owl carousel script

    $(".carouselTeam").owlCarousel({
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
        },
    });

});