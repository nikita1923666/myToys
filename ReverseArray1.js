var a = [5, 6, 9, 15, 2, 3];
var l = a.length;
for (var g = 0; g < l / 2; g++) {
    var t = a[g];
    var c = l - g - 1;
    a[g] = a[c];
    a[c] = t;
}
console.log(a);
