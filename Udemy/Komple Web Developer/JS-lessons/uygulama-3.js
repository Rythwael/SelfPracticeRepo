function tekrar(msg, num) {
    for (let i = 0; i < num; i++) {
        console.log(msg);
    }
}
function rect(n1, n2) {
    let area = n1 * n2;
    let around = 2 * (n1 + n2);
    console.log(`Dikdörtgenin alanı : ${area} \nDikdörtgenin çevresi : ${around}`);
}
function coin() {
    let rng = Math.random();
    if (rng < 0.5) {
        console.log("Tura");
    } else {
        console.log("Yazı");
    }
}
function bolen(num) {
    let res = [];
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            res.push(i);
        }
    }
    return res;
}
function sum() {
    let sonuc = 0;

    for (let i = 0; i < arguments.length; i++) {
        sonuc += arguments[i];
    }

    return sonuc
}
//tekrar("Merhaba", 5);
//rect(5, 10)
//coin();
//console.log(bolen(27));
console.log(sum(5, 15, 20, 30, 40));