class Segitiga{
    //konstruktor
    constructor(a,t){
        //mendefinisikan properti
        this.alas=a;
        this.tinggi=t;
    }

    //daftar metode
    luas(){
        return this.alas*this.tinggi/2;
    }
}

//membaca data alas dan tinggi
let a= 2;
console.log("input a:"+a);
let t=2;
console.log("input t:"+t);

//membuat objek dari kelas segitiga
let obj=new Segitiga(a,t);

console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj tinggi\t:${obj.tinggi}`);
console.log(`obj.luas(\t:${obj.luas()}`);