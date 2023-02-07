// Mean
let datanilai = [5, 9, 6, 7, 9, 8, 10, 7, 8];
let nilai = 0;
for (i in datanilai) {
  nilai += datanilai[i];
}
let ratarata = nilai / datanilai.length;
document.write("Mean =" + ratarata.toFixed(2));
// Mean
document.write("<br>");

// Median
let dataNilai = [5, 9, 6, 7, 9, 8, 10, 7, 8];
dataNilai.sort(function (a, b) {
  return a - b;
});
let output = (dataNilai.length - 1) / 2;

document.write("Median =" + dataNilai[output]);
// Median

document.write("<br>");

// Modus
function modus(datasantri) {
  const frequencyTable = {};
  datasantri.forEach(
    (elem) => (frequencyTable[elem] = frequencyTable[elem] + 1 || 1)
  );

  let modus = [];
  let maxFrequency = 0;
  for (const key in frequencyTable) {
    if (frequencyTable[key] > maxFrequency) {
      modus = [Number(key)];
      maxFrequency = frequencyTable[key];
    } else if (frequencyTable[key] === maxFrequency) {
      modus.push(Number(key));
    }
  }

  if (modus.length === Object.keys(frequencyTable).length) modus = [];
  return modus;
}

let datasantri = [5, 9, 6, 7, 9, 8, 10, 7, 8];
document.write(`Modus = ${modus(datasantri)}`);
// Modus

document.write("<br>");

// Simpangan Baku
let semuanilai = [5, 9, 6, 7, 9, 8, 10, 7, 8];
let rata2nilai = semuanilai.reduce((a, b) => a + b, 0);
let rata2 = (rata2nilai / semuanilai.length).toFixed(2);
mulai = semuanilai.map((k) => {
  return ((k - rata2))** 2;
});
const tambah = mulai.reduce((a, b) => a + b, 0);
const dibagi = (tambah / semuanilai.length);
const penyesuaian = dibagi.toFixed();
const praakhir = (penyesuaian) => {
  return Math.sqrt(penyesuaian);
};

const hasil = praakhir(penyesuaian);

document.write(`Simpan Baku = ${hasil.toFixed(2)}`);