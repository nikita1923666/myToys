var whiteSpaces = ' \t\n\r';
var number = '0123456789';
var Character = 'абвгдеёжзийклмопрстуфхцчшщъыьэюяabcdefghijlmnopqrstuvwxyz';
function isWhiteSpace(char) {
    return whiteSpaces.indexOf(char) !== -1;
}
function isNumber(char) {
    if (number.indexOf(char) !== -1) {
        return true;
    }
    return false;
}
function isCharacter(char) {
    if (Character.indexOf(char.toLowerCase()) !== -1) {
        return true;
    }
    return false;
}
var fs = require('fs');
var text = fs.readFileSync('selfgods.txt', 'utf8');
var l = text.length;
var count = 0;
var countN = 0;
var countW = 0;
var special = 0;
var flag = false;
for (var g = 0; g < l; g++) {
    var char = text.charAt(g);

    if (isNumber(char)) {
        countN++;
    }
    else if (isCharacter(char)) {
        countW++;
    }
    else  {
        special++;
    }
}
console.log('number of numbers:', countN++, '\nnumber of characters:', countW, '\nnumber of special symbols:', special);
