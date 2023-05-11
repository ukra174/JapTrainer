var hira = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ"];
var hiraRom = ["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so","ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa"];
var kata = ["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ"];
var kataRom = ["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so","ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa"];
var sym = [];
var rom = [];
var audio = new Audio('learning.mp3');
var right = new Audio("ok.mp3");
var wrong = new Audio("wrong.mp3");
audio.volume = 0.3;
right.volume = 0.2;
wrong.volume = 0.2;
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
    if(input.value==rom[index] || input.value==sym[index]){
        newChar();
        right.play();
    }else{
        wrong.play();
    }
    input.value = "";
}

function search(ele) {
    if(event.key === 'Enter') {
        check();       
    }
}