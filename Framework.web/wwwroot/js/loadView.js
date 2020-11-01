
$(document).ready(function () {
    $("#myNav li a").click(function () {
        var href = $(this).attr('href');
        //alert(href);
        $("#showData").load(href);
    });
});