let sayilar = [1, 5, 4, 6, 7, 15, 3, 25];

/*
for (sayi of sayilar) {
    console.log(Math.pow(sayi, 2));
}

for (sayi of sayilar) {
    if (sayi % 5 === 0) {
        console.log(sayi);
    }
}

let toplam = 0;
for (sayi of sayilar) {
    if (sayi % 2 === 0) {
        toplam += sayi;
    }
}

console.log(toplam);


let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

let toplam = 0;
for (urun of urunler) {
    if (urun.includes("samsung")) {
        toplam++;
    }
}
console.log(toplam);
*/
let ogrenciler = [
    { "ad": "yiğit", "soyad": "bilgi", "notlar": [60, 70, 60] },
    { "ad": "ada", "soyad": "bilgi", "notlar": [80, 70, 80] },
    { "ad": "çınar", "soyad": "turan", "notlar": [70, 70, 60] }
]

let allAvg = 0;
for (ogr of ogrenciler) {
    let toplam = 0;
    for (not of ogr.notlar) {
        toplam += not;
    }
    let ort = toplam / 3;
    allAvg += ort;
    console.log(parseInt(ort));
}
allAvg /= 3;
console.log(parseInt(allAvg));