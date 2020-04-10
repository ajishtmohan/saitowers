$(document).ready(function() {
        var sidebar = $("#room1"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".logo-menu").css("transform", "translateY(-79px)");
                } else {
                    $(".logo-menu").css("transform", "translateY(0px)");
                }
            });
        });
});

$(document).ready(function() {
        var sidebar = $("#room1"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".room-sidebar").css("right","30px");
                    $(".room-image1").css("transform", "translateX(0)");
                    $(".room-image1").css("opacity", "1");
                    $(".room-image1 img").css("transform", "scale(1)");
                    $(".room-text1").css("transform", "translateX(0)");
                    $(".room-text1").css("opacity", "1");
                } else {
                    $(".room-sidebar").css("right","-80px");
                    $(".room-image1").css("transform", "translateX(-50px)");
                    $(".room-image1").css("opacity", "0");
                    $(".room-image1 img").css("transform", "scale(1.3)");
                    $(".room-text1").css("transform", "translateX(50px)");
                    $(".room-text1").css("opacity", "0");
                }
            });
        });
});

$(document).ready(function() {
        var sidebar = $("#room2"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".room-image2").css("transform", "translateX(0)");
                    $(".room-image2").css("opacity", "1");
                    $(".room-image2 img").css("transform", "scale(1)");
                    $(".room-text2").css("transform", "translateX(0)");
                    $(".room-text2").css("opacity", "1");
                } else {
                    $(".room-image2").css("transform", "translateX(-50px)");
                    $(".room-image2").css("opacity", "0");
                    $(".room-image2 img").css("transform", "scale(1.3)");
                    $(".room-text2").css("transform", "translateX(50px)");
                    $(".room-text2").css("opacity", "0");
                }
            });
        });
});
$(document).ready(function() {
        var sidebar = $("#room3"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".room-image3").css("transform", "translateX(0)");
                    $(".room-image3").css("opacity", "1");
                    $(".room-image3 img").css("transform", "scale(1)");
                    $(".room-text3").css("transform", "translateX(0)");
                    $(".room-text3").css("opacity", "1");
                } else {
                    $(".room-image3").css("transform", "translateX(-50px)");
                    $(".room-image3").css("opacity", "0");
                    $(".room-image3 img").css("transform", "scale(1.3)");
                    $(".room-text3").css("transform", "translateX(50px)");
                    $(".room-text3").css("opacity", "0");
                }
            });
        });
});


window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() {
        window.location.href = href
    }, 1000)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
});
