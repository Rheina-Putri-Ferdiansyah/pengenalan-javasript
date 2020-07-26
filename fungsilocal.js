
function hipotenusa(a,b){
    //fungsi lokal
    function kuadrat(x){
        return x*x;
    }
    //memanggil fungsi lokal
    return c=Math.sqrt(kuadrat(a)+kuadrat(b));
}

console.log('Menghitung sisi miring segitiga siku-siku');
let a= 10;
console.log("a:"+a);
let b= 2;
console.log("b:"+b);

var c=hipotenus(a,b);

console.log(`sisi miring =${c}`);