$(document).ready(function() {
        var sidebar = $("#limf1"); //get offset of second div
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
        var sidebar = $("#limf1"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".limf-sidebar").css("right","30px");
                } else {
                    $(".limf-sidebar").css("right","-80px");
                }
            });
        });
});
$(document).ready(function() {
        var sidebar = $("#limf2"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    // $(".cornerpic img").css("right", "50px")
                    $(".cornerpic1 img").css("opacity", "1")
                } else {
                    // $(".cornerpic img").css("right", "-400px")
                    $(".cornerpic1 img").css("opacity", "0")
                }
            });
        });
});

$(document).ready(function() {
        var sidebar = $("#limf3"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    // $(".cornerpic img").css("right", "50px")
                    $(".cornerpic2 img").css("opacity", "1")
                } else {
                    // $(".cornerpic img").css("right", "-400px")
                    $(".cornerpic2 img").css("opacity", "0")
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
