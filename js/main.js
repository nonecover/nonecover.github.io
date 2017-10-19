$(".nav-button").hover(function (button) {
    $(this).removeClass('nav-button').addClass('nav-button-hover');
});

$(".right-nav-button").click(function (button) {
    $(this).removeClass('nav-button-hover nav-button').addClass('right-nav-button-click');
    $(".top-nav-button, .bottom-nav-button, .left-nav-button").removeClass('nav-button-hover nav-button').addClass('right-nav-button-click');
    $("main").addClass('right-nav-hide');
});

$(".left-nav-button").click(function (button) {
    $(this).removeClass('nav-button-hover nav-button').addClass('left-nav-button-click');
    $(".top-nav-button, .bottom-nav-button, .right-nav-button").removeClass('nav-button-hover nav-button').addClass('left-nav-button-click');
    $("main").addClass('left-nav-hide');
});

$(".top-nav-button").click(function (button) {
    $(this).removeClass('nav-button-hover nav-button').addClass('top-nav-button-click');
    $(".left-nav-button, .bottom-nav-button, .right-nav-button").removeClass('nav-button-hover nav-button').addClass('top-nav-button-click');
    $("main").addClass('top-nav-hide');
});

$(".bottom-nav-button").click(function (button) {
    $(this).removeClass('nav-button-hover nav-button').addClass('bottom-nav-button-click');
    $(".top-nav-button, .left-nav-button, .right-nav-button").removeClass('nav-button-hover nav-button').addClass('bottom-nav-button-click');
    $("main").addClass('bottom-nav-hide');
});