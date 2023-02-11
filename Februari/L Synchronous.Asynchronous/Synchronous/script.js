//SYNCHRONOUS (BLOCKING)
let siswa = {
  perkenalan: function () {
    console.log(`Nama saya ${this.nama}`);
  },
};
siswa.nama = "Ahmad";
siswa.perkenalan()

let Siswa = {
    usia: 19,
    perkenalan: function(){
        console.log(`Usia saya ${this.usia} tahun`);
    }
}
Siswa.perkenalan()

let SISWA = {
    asal: 'Bekasi',
    perkenalan: function(){
        console.log(`Tinggal di ${this.asal}`);
    }
}
SISWA.perkenalan()
//SYNCHRONOUS (BLOCKING)


//ASYNCHRONOUS (NON-BLOCKING)
let kegiatanpagi = ['Piket makan', 'Mandi', 'Makan', 'Menyalakan Lampu']
setTimeout(()=>{
    console.log(kegiatanpagi[0]);
}, 1000)
setTimeout (() =>{
    console.log(kegiatanpagi[1]);
}, 6000)
setTimeout(() =>{
    console.log(kegiatanpagi[2]);
}, 3000)
console.log(kegiatanpagi[3]);
//ASYNCHRONOUS (NON-BLOCKING)

