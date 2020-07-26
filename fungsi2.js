var a = 2, b= 2;

function kali(a,b){
    return a*b;

}

let a = parseFloat(readline.question('masukkan nilai A: '));
let b = parseFloat(readline.question('Masukkan nilai B: '));
let c;
//memanggil fungsi dan menampung ke c
c=kali(a,b);

console.log(`${a}X${b}=${c}`);