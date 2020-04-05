function toggle(){
  document.getElementById('nav-window').style.cssText = "left:0; opacity:1";
  document.getElementById('accommodation').style.left = '100vw';
  document.getElementById('dining').style.left = '100vw';
  document.getElementById('services').style.left = '100vw';
  document.getElementById('booknow').style.cssText = "left:100vw; opacity:1";
}
function booknow(){
  document.getElementById('booknow').style.cssText = "left:0; opacity:1";
  document.getElementById('nav-window').style.cssText = "left:100vw; opacity:0";
}
function closemenu(){
  document.getElementById('nav-window').style.left = '100vw';
}
function showAcco(){
  document.getElementById('nav-window').style.left = '-100vw';
  document.getElementById('accommodation').style.cssText = "left:0; opacity:1";
}
function close_acco_menu(){
  document.getElementById('accommodation').style.left = '100vw';
  document.getElementById('dining').style.left = '100vw';
  document.getElementById('nav-window').style.left = '0';
  document.getElementById('services').style.left = '100vw';
}
function showDine(){
  document.getElementById('nav-window').style.left = '-100vw';
  document.getElementById('dining').style.cssText = "left:0; opacity:1";
}
function showServ(){
  document.getElementById('nav-window').style.left = '-100vw';
  document.getElementById('services').style.cssText = "left:0; opacity:1";
}
function toBooking(){
  document.getElementById('booknow').style.opacity = '0';
  document.getElementById('booknow').style.left = '100vw';
}
function showSbr(){
  document.getElementById('singlebr').style.left = '0';
  document.getElementById('accommodation').style.left = '100vw';
}
$(document).ready(function() {
        var sidebar = $("#h-accommodation"); //get offset of second div
        var offset = sidebar.offset().top; //check for top property
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() >= offset) {
                    $(".sidebar").css("right","30px");
                    $(".logo").css("height", "0px");
                    $(".menu-button").css("border", "1px solid black");
                    $(".menu-button").css("background-color", "rgba(0, 0, 0, 0.8)");
                } else {
                    $(".sidebar").css("right","-80px");
                    $(".logo").css("height", "auto");
                    $(".logo-menu").css("background-color", "#1c1c1c");
                }
            });
        });
});

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() {
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('#roomhome').style.opacity = 1
})
