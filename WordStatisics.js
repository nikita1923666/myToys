var fs = require('fs');
var text = fs.readFileSync('selfgods.txt', 'utf8');

var wordStorage = {};

function saveWord(word) {
    if (wordStorage[word]) {
        wordStorage[word]++;
    } else {
        wordStorage[word] = 1;
    }
}

function printOut() {
    var words = Object.keys(wordStorage);
    for (var c = 0; c < words.length; c++) {
        var word=words[c];
        console.log(word, ': ', wordStorage[word])
    }
}

function wordCount(text) {
    var l = text.length;
    var flag = false;
    var count = 0;

    function isWhiteSpace(char) {
        if (' \t\n'.indexOf(char) !== -1) {
            return true;
        }
        return false;
    }

    var word = '';
    for (var g = 0; g < l; g++) {
        var char = text.charAt(g);
        if (flag) {
            if (!isWhiteSpace(char)) {
                flag = false;
                word = char;
            }
        }
        else if (flag === false) {
            if (isWhiteSpace(char)) {

                if (word !== '') {
                    saveWord(word.toLowerCase());
                    count++;
                }

                word = '';
                stack = '';
                flag = true;
            } else {
                word = word + char;
            }
        }
    }
    if (isWhiteSpace(char)) {
        count++;
    };

    return count;
}

var qty = wordCount(text);

console.log(qty);
printOut();
