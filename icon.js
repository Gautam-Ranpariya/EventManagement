// -------------------------------------------------> Login-SingUp Input
$(Document).ready(function () {
    $(".input_box input").click(function () {
        $(this).css("border-color", "#be2edd");
    });
// -------------------------------------------------> Manager-1
    $(".Manager1").mouseenter(function () {
        $("#M-1").show();
    });

    $(".Manager1").mouseleave(function () {
        $("#M-1").hide();
    });

// -------------------------------------------------> Manager-2
$(".Manager2").mouseenter(function () {
    $("#M-2").show();
});

$(".Manager2").mouseleave(function () {
    $("#M-2").hide();
});

// -------------------------------------------------> Manager-3
$(".Manager3").mouseenter(function () {
    $("#M-3").show();
});

$(".Manager3").mouseleave(function () {
    $("#M-3").hide();
});

// -------------------------------------------------> Manager-4
$(".Manager4").mouseenter(function () {
    $("#M-4").show();
});

$(".Manager4").mouseleave(function () {
    $("#M-4").hide();
});

});