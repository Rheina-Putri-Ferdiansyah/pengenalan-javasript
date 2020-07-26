var a=10, b=20;
console.log(`a \t: ${a}`);
console.log(`b \t: ${b}`);
console.log(`a==b \t: ${a==b}`);
console.log(`a!=b \t: ${a!=b}`);
console.log(`a<b \t: ${a<b}`);
console.log(`a>b \t: ${a>b}`);
console.log(`a<=b \t: ${a<=b}`);
console.log(`a>=b \t: ${a>=b}`);

//operator resional dalam blok pemilihan
if(a<b){
    console.log(`a lebih kecil dari b`);
}

//operator resional dalam blok pengulangan
var i=a;
while(i<=b){
    process.stdout.write(`${i}`); //menampilkan data ke layar tanpadisertai karakter baris baru(new lina)
    //console.log(s) --> process.stdout.write(s+`\n`)
    i +=2
}
