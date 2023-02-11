//CALLBACK SYNCHRONOUS
function belajar(pertama, kedua, ketigacallback, keempatcallback) {
    console.log(pertama, kedua);
    ketigacallback()
    keempatcallback()
}
function callback3() {
    console.log('JavaScript');
}
function callback4() {
    console.log('React JS');
}

belajar('Html', 'Css', callback3, callback4)
//CALLBACK SYNCHRONOUS



//CALLBACK ASYNCHRONOUS
function hobi(satu, dua, callbackasynch) {
    setTimeout(()=>{
        console.log(satu, dua);
    }, 5000)
    callbackasynch()
}

function asynchcallback() {
    console.log('Masak');
}
hobi('Membaca', 'Badminton', asynchcallback)
//CALLBACK ASYNCHRONOUS