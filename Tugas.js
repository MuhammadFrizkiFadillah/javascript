//TUGAS 1

let array = [1, 1, 2, 2, 2, 3, 3, 3, 3];
let counts = {};
let hasil = ""

for (let i = 0; i < array.length; i++) {
    let angka = array[i];
    if (counts[angka]) {
        counts[angka]++;
    } else {
        counts[angka] = 1;
    }
}

    for (let angka in counts) {
        hasil += (hasil ? ", " : "") + `${angka}:${counts[angka]}`;
    }

    console.log(hasil);


//TUGAS 2

let arrayy = [1, 2, 2, 3, 3, 4, 5, 5];
let countss = {};
let hasill = [];

for (let angkaa of arrayy) {
    if (countss[angkaa]) {
        countss[angkaa] += 1;
    } else {
        countss[angkaa] = 1;
    }
}

for (let key in countss) {
    if (countss[key] == 1) {
        hasill.push(Number(key));
    }
}

console.log(hasill);

//Tugas 3
let arraypertama = [7, 8, 9];
let arraykedua = [7, 8, 9, 10, 11];
let hasilll = [];

for (let angkaaa of arraypertama) {
    if (arraykedua.includes(angkaaa) && (angkaaa == 7 || angkaaa == 9)) {
        hasilll.push(angkaaa);
    }
}

console.log(hasilll);