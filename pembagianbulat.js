
var a = 2;
console.log("input a:"+a);
var b = 6;
console.log("input ab:"+b);

function PembagianBulat (a,b){
    var c=a/b;
    if(c>=0){
        return Math.floor(c);
    }else{
        return Math.ceil(c);
    }
}

console.log(`${a}/${b}=${PembagianBulat(a,b)}`);

