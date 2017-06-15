var a = [5, 6, 9, 15, 2, 3];
var l = a.length;
for (var c = l - 1, g = 0; g < l / 2; c-- , g++) {
    var t;
    t = a[g];
    a[g] = a[c];
    a[c] = t;
}
console.log(a);
