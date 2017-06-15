var a =  [5,6,9,15,2,8,100,-9];
for(var c = 0;c<a.length;c++){
    for(z=c+1;z<a.length;z++){
        if(a[c]>a[z]){
            var f = a[c];
            a[c]=a[z];
            a[z]=f;
        }
    }
}
console.log(a);
