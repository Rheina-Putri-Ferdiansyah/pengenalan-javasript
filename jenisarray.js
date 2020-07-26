//array berindeks
let data=['a','b','c'];

//array asosiatif
let data={'satu':1,'dua':2, 'tiga':3}

let readline=require(readline-sync);
let n=parseInt(readline.questin("Masukkan Jumlah Data:"));
let a=new Array();//array kosong
let total=0.0;
for(let i=0;i<n;i++){
    a[i]=parseFloat(readline.question(`Data ke-${i+1}:`));
    total +=a[i];
}

let rata=total/a.length;

console.log(`\n Isi Array a: [${a}]`);
console.log(`\n Total Data: [${total}]`);
console.log(`\n Rata-rata: [${rata}]`);