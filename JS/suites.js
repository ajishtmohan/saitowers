$(document).ready(function() {
        var sidebar = $("#suite1"); //get offset of second div
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
        var sidebar = $("#suite1"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".suitesidebar").css("right","30px");
                } else {
                    $(".suitesidebar").css("right","-80px");
                }
            });
        });
});

$(document).ready(function() {
        var sidebar = $("#suite1"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".suite-text1").css("opacity","1");
                    $(".suite-text1").css("transform","translateX(0px)");
                } else {
                    $(".suite-text1").css("opacity","0");
                    $(".suite-text1").css("transform","translateX(-100px)");
                }
            });
        });
});

$(document).ready(function() {
        var sidebar = $("#suite2"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".suite-text2").css("opacity","1");
                    $(".suite-text2").css("transform","translateX(0px)");
                } else {
                    $(".suite-text2").css("opacity","0");
                    $(".suite-text2").css("transform","translateX(-100px)");
                }
            });
        });
});

$(document).ready(function() {
        var sidebar = $("#suite3"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".suite-text3").css("opacity","1");
                    $(".suite-text3").css("transform","translateX(0px)");
                } else {
                    $(".suite-text3").css("opacity","0");
                    $(".suite-text3").css("transform","translateX(-100px)");
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
