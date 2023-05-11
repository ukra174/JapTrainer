var hira = ["a","b","c"];
var hiraRom = ["A","B","C"];
var kata = [];
var kataRom = [];
var sym = [];
var rom = [];
var audio = new Audio('learning.mp3');
audio.volume = 0.3;
function init(type){
    if(type=="hira"){
        sym = hira;
        rom = hiraRom;
    }else{
        sym = kata;
        rom = kataRom;
    }
    newChar();
    setTimeout(function(){
    document.getElementById("userInput").oninput = function(){
        audio.play();
    }
},1);
    
}
var index = 0;
function newChar(){
    setTimeout(function(){
        var symbol = document.getElementById("symbol");
        index = Math.floor(Math.random()*sym.length);
        symbol.innerText = sym[index];
    },1);

}
function check(){
    input = document.getElementById("userInput");
    if(input.value==rom[index]){
        input.value = "";
        newChar();
    }
}

function search(ele) {
    if(event.key === 'Enter') {
        check();       
    }
}