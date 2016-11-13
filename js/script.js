$(document).ready(function () {
    $("span").hide();

    $("input").hover(
        function () {
            $(this).next().show("slow");
        },
        function () {
            $(this).next().hide();
        }
    );

    $("button").click(function () {
        $("span").toggle();
    });


})
