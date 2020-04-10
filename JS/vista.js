window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() {
        window.location.href = href
    }, 1000)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
});

$(document).ready(function() {
        var sidebar = $("#vista1"); //get offset of second div
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
        var sidebar = $("#vista1"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $("#vista1 img").css("transform", "scale(1)");
                } else {
                    $("#vista1 img").css("transform", "scale(1.15)");
                }
            });
        });
});

$(document).ready(function() {
        var vistasidebar = $("#vista1"); //get offset of second div
        var offset = vistasidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".vistasidebar").css("right","30px");
                } else {
                    $(".vistasidebar").css("right","-80px");
                }
            });
        });
});

$(document).ready(function() {
        var sidebar = $("#vista1"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $("#vista1 img").css("transform", "scale(1)");
                    $(".vista1-text").css("opacity", "1");
                    $(".vista1-text").css("transform", "translateY(0px)");
                } else {
                    $("#vista1 img").css("transform", "scale(1.15)");
                    $(".vista1-text").css("opacity", "0");
                    $(".vista1-text").css("transform", "translateY(100px)");
                }
            });
        });
});

$(document).ready(function() {
        var sidebar = $("#vista2"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $("#vista2 img").css("transform", "scale(1)");
                    $(".vista2-text").css("opacity", "1");
                    $(".vista2-text").css("transform", "translateX(0)");
                } else {
                    $("#vista2 img").css("transform", "scale(1.15)");
                    $(".vista2-text").css("opacity", "0");
                    $(".vista2-text").css("transform", "translateX(-100px)");
                }
            });
        });
});

$(document).ready(function() {
        var sidebar = $("#vista3"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $("#vista3 img").css("transform", "scale(1)");
                    $(".vista3-text").css("opacity", "1");
                    $(".vista3-text").css("transform", "translateX(0)");
                } else {
                    $("#vista3 img").css("transform", "scale(1.15)");
                    $(".vista3-text").css("opacity", "0");
                    $(".vista3-text").css("transform", "translateX(-100px)");
                }
            });
        });
});
