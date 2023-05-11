console.log("testworks");
var audio = new Audio('menu.mp3');
audio.volume = 0.3;
document.onmousedown = function(){
audio.play();}