var hira = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ"];
var hiraRom = ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa"];
var kata = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ"];
var kataRom = ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa"];
var kanji_list = ['一', '七', '万', '三', '上', '下', '中', '九', '二', '五', '人', '今', '休', '会', '何', '先', '入', '八', '六', '円', '出', '前', '北', '十', '千', '午', '半', '南', '友', '口', '古', '右', '名', '四', '国', '土', '外', '多', '天', '女', '子', '学', '安', '小', '少', '山', '岩', '川', '左', '年', '店', '後', '手', '新', '日', '時', '書', '月', '木', '本', '朝', '東', '校', '母', '毎', '気', '水', '火', '父', '生', '男', '白', '百', '目', '社', '秋', '空', '立', '耳', '聞', '花', '行', '西', '見', '言', '話', '語', '読', '谷', '足', '車', '週', '道', '金', '長', '間', '雨', '電', '食', '飲', '高', '魚', '黄', '黒', '点'];
var romaji_list = ['ichi', 'shichi/nana', 'man', 'san', 'ue', 'shita', 'naka', 'kyuu', 'ni', 'go', 'jin/nin', 'ima', 'yasumi', 'kai', 'nani', 'saki', 'iri', 'hachi', 'roku', 'en', 'de/da', 'mae', 'kita', 'juu', 'sen', 'go', 'han', 'minami', 'tomo', 'kuchi', 'furu', 'migi', 'na', 'shi', 'koku', 'tsuchi', 'soto', 'ta', 'ten', 'onna', 'ko', 'gaku', 'yasui', 'ko', 'sukunai', 'yama', 'iwa', 'kawa', 'hidari', 'toshi', 'mise', 'go', 'te', 'shin', 'nichi', 'ji', 'sho', 'getsu', 'ki', 'hon', 'asa', 'higashi', 'kou', 'haha', 'mai', 'ki', 'mizu', 'hi', 'chichi', 'sei', 'otoko', 'shiro/shiroi', 'hyaku', 'me', 'sha/yashiro', 'aki', 'sora', 'tachi', 'mimi', 'kiku', 'hana', 'gyou', 'nishi', 'mi', 'gen', 'wa', 'go', 'yomi', 'tani', 'ashi', 'kuruma', 'shuu', 'michi', 'kin', 'naga', 'aida', 'ame', 'den', 'shoku', 'in', 'kou', 'gyo', 'kuro', 'ten'];
var english_translations = ['one', 'seven', 'ten thousand', 'three', 'above', 'below', 'middle', 'nine', 'two', 'five', 'person', 'now', 'rest', 'meet', 'what', 'before', 'enter', 'eight', 'six', 'circle', 'go out', 'before', 'north', 'ten', 'thousand', 'noon', 'half', 'south', 'friend', 'mouth', 'old', 'right', 'name', 'four', 'country', 'soil', 'outside', 'many', 'heaven', 'woman', 'child', 'study', 'peace', 'small', 'few', 'mountain', 'rock', 'river', 'left', 'year', 'shop', 'behind', 'hand', 'new', 'day', 'time', 'write', 'month', 'tree', 'book', 'morning', 'east', 'school', 'mother', 'every', 'spirit', 'water', 'fire', 'father', 'life', 'man', 'white', 'hundred', 'eye', 'society', 'autumn', 'sky', 'stand', 'ear', 'hear', 'flower', 'go', 'west', 'see', 'say', 'talk', 'language', 'read', 'valley', 'leg', 'car', 'week', 'road', 'gold', 'long', 'interval', 'rain', 'electricity', 'eat', 'drink', 'tall', 'fish', 'yellow', 'black', 'dot'];
var sym = [];
var rom = [];
var promptUrl = "";

var music = new Audio('learning.mp3');
var rightSfx = new Audio("ok.mp3");
var wrongSfx = new Audio("wrong.mp3");
music.volume = 0.3;
rightSfx.volume = 0.2;
wrongSfx.volume = 0.2;

let successCount = 0;
let totalTries = 0;
const MAX_TRACKED_TRIES = 100;
let recentTries = [];

function updateSuccessRate(isSuccess) {
    recentTries.push(isSuccess);

    if (recentTries.length > MAX_TRACKED_TRIES) {
        recentTries.shift();
    }

    successCount = recentTries.filter(Boolean).length;
    totalTries = recentTries.length;

    updateSuccessRateDisplay();
}

function updateSuccessRateDisplay() {
    const successRateElement = document.getElementById('successRate');
    if (successRateElement) {
        const successRate = totalTries > 0
            ? Math.round((successCount / totalTries) * 100)
            : 0;
        successRateElement.textContent = `Success Rate: ${successRate}%`;
    }
}

function init() {
    var type = new URLSearchParams(window.location.search).get("type");
    promptUrl = "/JapTrainer/" + type + "Prompt.png";
    if (type == "hira") {
        sym = hira;
        rom = hiraRom;
    } else if (type == "kata") {
        sym = kata;
        rom = kataRom;
    } else if (type == "both") {
        sym = kata.concat(hira);
        rom = kataRom.concat(hiraRom);
    }
    else {
        sym = kanji_list;
        rom = romaji_list;
    }
    newCharacter();
    setTimeout(function () {
        document.getElementById("userInput").oninput = function () {
            music.play();
        }
    }, 10);

}
var characterIndex = 0;
function newCharacter() {
    setTimeout(function () {
        var character = document.getElementById("symbol");
        characterIndex = Math.floor(Math.random() * sym.length);
        character.innerText = sym[characterIndex];
    }, 10);

}
let isFirstTry = true;
function check() {
    input = document.getElementById("userInput");
    const isCorrect = rom[characterIndex].split("/").includes(input.value) ||
        input.value == sym[characterIndex] ||
        input.value.toLowerCase() == english_translations[characterIndex];

    if (isCorrect) {
        newCharacter();
        rightSfx.play();
        updateSuccessRate(isFirstTry);
        isFirstTry = true;
    } else {
        wrongSfx.play();
        isFirstTry = false;
    }
    input.value = "";
}
function openPrompt() {
    var prompt = document.getElementById("prompt");
    console.log(prompt);
    if (prompt == null) {
        var img = document.createElement("img");
        img.src = promptUrl;
        img.classList.add("prompt");
        img.id = "prompt";
        img.onclick = function () {
            this.remove();
        }
        document.body.appendChild(img);
    } else {
        prompt.remove();
        setTimeout(function () {
            document.getElementById("userInput").value = "";
        }, 5);

    }

}
function enter(ele) {
    if (event.key === 'Enter') {
        check();
    } else if (event.key == " ") {
        openPrompt();
    }
}