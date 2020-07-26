class Aritmetika{
    static tammbah(a,b){
        return a+b;
    }
}
//membaca data a dan b
let a = 10;
console.log("input nilai a:"+a);
let b = 20;
console.log("input nilai b:"+b);
//memanggil metode statis
console.log(`${a}+${b}=${Aritmetika.tammbah(a,b)}`);