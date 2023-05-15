var hira = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ"];
var hiraRom = ["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so","ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","fu","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa"];
var kata = ["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ"];
var kataRom = ["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so","ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","fu","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa"];
var sym = [];
var rom = [];
var promptUrl = "";

var music = new Audio('learning.mp3');
var rightSfx = new Audio("ok.mp3");
var wrongSfx = new Audio("wrong.mp3");
music.volume = 0.3;
rightSfx.volume = 0.2;
wrongSfx.volume = 0.2;

function init(type){
    promptUrl = "/JapTrainer/"+type+"Prompt.png";
    if(type=="hira"){
        sym = hira;
        rom = hiraRom;
    }else{
        sym = kata;
        rom = kataRom;
    }
    newCharacter();
    setTimeout(function(){
    document.getElementById("userInput").oninput = function(){
        music.play();
    }
},10);
    
}
var characterIndex = 0;
function newCharacter(){
    setTimeout(function(){
        var character = document.getElementById("symbol");
        characterIndex = Math.floor(Math.random()*sym.length);
        character.innerText = sym[characterIndex];
    },10);

}
function check(){
    input = document.getElementById("userInput");
    if(input.value==rom[characterIndex] || input.value==sym[characterIndex]){
        newCharacter();
        rightSfx.play();
    }else{
        wrongSfx.play();
    }
    input.value = "";
}
function openPrompt(){
    var prompt = document.getElementById("prompt");
    console.log(prompt);
    if(prompt==null){
    var img = document.createElement("img");
    img.src = promptUrl;
    img.classList.add("prompt"); 
    img.id = "prompt";
    img.onclick = function(){
        this.remove();
    }
    document.body.appendChild(img);
    }else{
        prompt.remove();
        document.getElementById("userInput").value = "";
    }

}
function enter(ele) {
    if(event.key === 'Enter') {
        check();       
    }else if(event.key == " "){
        openPrompt();
    }
}