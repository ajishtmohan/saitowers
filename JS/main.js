function menu(){
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
  document.getElementById('nav-window').style.cssText = "left:100vw; opacity:0";
  document.getElementById('accommodation').style.cssText = "left:100vw; opacity:1";
  document.getElementById('dining').style.cssText = "left:100vw; opacity:1";
  document.getElementById('services').style.cssText = "left:100vw; opacity:1";
  document.getElementById('booknow').style.cssText = "left:100vw; opacity:1";
}
function showAcco(){
  document.getElementById('nav-window').style.cssText = "left:-100vw; opacity:1";
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
