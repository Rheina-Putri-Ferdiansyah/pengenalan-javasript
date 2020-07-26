

var x= 10;
console.log("input x:"+x);
var y= 10;
console.log("input y:"+y);
var z;

if(y===0){
    console.log('Kesalahan: Nilai y tidak boleh nol');
    process.exit(1);
}

z=x/y;
console.log(`${x}/${z}`);