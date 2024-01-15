$(document).ready(function () {

    $('.icon').click(function () {
        $('.side-bar p').toggle()
        $('.side-bar').toggleClass("small-sidebar")
    });

    $('.icon').click(function () {
        $(".container").toggleClass("large-container")
    });

    $("#btn").mouseenter(function () {
        $("#btn").addClass("bg-white")
    });
    $("#btn").mouseleave(function () {
        $("#btn").removeClass("bg-white")
    });


});