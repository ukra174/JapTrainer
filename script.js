var music = new Audio('menu.mp3');
music.volume = 0.3;
document.onmousedown = function(){
    music.play();
}