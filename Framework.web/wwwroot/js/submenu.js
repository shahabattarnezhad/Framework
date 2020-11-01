$(document).ready(function () {
    $(".ope-btn").click(function () {
        $("ul .ope-show").toggleClass("show");
        $("ul .first").toggleClass("rotate");
    });

    $(".sql-btn").click(function () {
        $("ul .sql-show").toggleClass("show");
        $("ul .second").toggleClass("rotate");
    });

    $(".ent-btn").click(function () {
        $("ul .ent-show").toggleClass("show");
        $("ul .third").toggleClass("rotate");
    });

    $(".mod-btn").click(function () {
        $("ul .mod-show").toggleClass("show");
        $("ul .fourth").toggleClass("rotate");
    });

    $(".ser-btn").click(function () {
        $("ul .ser-show").toggleClass("show");
        $("ul .fifth").toggleClass("rotate");
    });
    
    $(".acc-btn").click(function () {
        $("ul .acc-show").toggleClass("show");
        $("ul .sixth").toggleClass("rotate");
    });

    $(".app-btn").click(function () {
        $("ul .app-show").toggleClass("show");
        $("ul .seventh").toggleClass("rotate");
    });

});