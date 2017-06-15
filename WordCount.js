var whiteSpaces = ' \t\n\r';

function isWhiteSpace(char) {
    // char === ' ' || char === '\t' || char === '\n'

    // if (whiteSpaces.indexOf(char) === -1) {
    //     return false;
    // } else {
    //     return true;
    // }


    // if (whiteSpaces.indexOf(char) === -1) {
    //     return false;
    // }
    // return true;

    return whiteSpaces.indexOf(char) !== -1;

}
/*
var fs = require('fs');
var text = fs.readFileSync('selfgods.txt', 'utf8');
*/
var text =' 1 '
var l = text.length;
var count = 0;
var flag = false;
for (var g = 0; g < l; g++) {
    var char = text.charAt(g);
    if (flag) {
        if (!isWhiteSpace(char)) {
            flag = false;
        }
    } else {
        if (isWhiteSpace(char)) {
            count++;
            flag = true;
        }
    }
}

if (!isWhiteSpace(char)) {
    count++;
}
console.log(text, 'number of words:', count);