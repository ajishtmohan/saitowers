$(document).ready(function() {
        var sidebar = $("#suite1"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".room-sidebar").css("right","30px");
                    $(".logo").css("height", "0px");
                    $(".menu-button").css("border", "1px solid black");
                    $(".menu-button").css("background-color", "rgba(0, 0, 0, 0.8)");
                } else {
                    $(".room-sidebar").css("right","-80px");
                    $(".logo").css("height", "auto");
                    $(".logo-menu").css("background-color", "#1c1c1c");
                }
            });
        });
});
