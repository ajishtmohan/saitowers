$(document).ready(function() {
        var sidebar = $("#h-accommodation"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".sidebar").css("right","30px");
                    $(".logo-menu").css("transform", "translateY(-79px)");
                } else {
                    $(".sidebar").css("right","-80px");
                    $(".logo-menu").css("transform", "translateY(0px)");
                }
            });
        });
});

$(document).ready(function() {
        var sidebar = $("#h-accommodation"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".accoleft").css("opacity", "1")
                    $(".accoright").css("opacity", "1")
                    $(".accoleft").css("transform", "translateX(0)")
                    $(".accoright").css("transform", "translateX(0)")
                } else {
                    $(".accoleft").css("opacity", "0")
                    $(".accoright").css("opacity", "0")
                    $(".accoleft").css("transform", "translateX(-100px)")
                    $(".accoright").css("transform", "translateX(100px)")
                }
            });
        });
});

$(document).ready(function() {
        var sidebar = $("#h-restaurant"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".restLtextbox").css("transform", "translateX(0)")
                    $(".restLtextbox").css("opacity", "1")
                    $(".restRtextbox").css("transform", "translateX(0px)")
                    $(".restRtextbox").css("opacity", "1")
                } else {
                    $(".restLtextbox").css("transform", "translateX(-100px)")
                    $(".restLtextbox").css("opacity", "0")
                    $(".restRtextbox").css("transform", "translateX(100px)")
                    $(".restRtextbox").css("opacity", "0")
                }
            });
        });
});

$(document).ready(function() {
        var sidebar = $("#h-services"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".hservetext").css("transform", "translateY(0)")
                    $(".hservetext").css("opacity", "1")
                    $(".hserves").css("opacity", "1")
                } else {
                    $(".hservetext").css("transform", "translateY(200px)")
                    $(".hservetext").css("opacity", "0")
                    $(".hserves").css("opacity", "0")
                }
            });
        });
});

$(document).ready(function() {
        var sidebar = $("#h-gallery"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".gal-cont").css("transform", "scale(1)")
                    $(".gal-cont").css("opacity", "1")
                } else {
                    $(".gal-cont").css("transform", "scale(1.05)")
                    $(".gal-cont").css("opacity", "0")
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
