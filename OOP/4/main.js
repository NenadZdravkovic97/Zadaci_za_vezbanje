import {Autobus} from "./classes/autobus.js";
let a1 = new Autobus('BG-15649-XY', 55);
let a2 = new Autobus('KV-5545-ZC', 80);
let a3 = new Autobus('RA-112233-AA', 80);

let arrAutobusa = [a1, a2, a3];

// 1. Napraviti funkciju ukupnoSedista kojoj se prosleđuje niz autobusa a koja određuje i vraća koliko ukupno sedišta sadrže svi autobusi koji se nalaze u nizu autobusa.

let ukupnoSedista = (niz) => {
    let sum = 0;
    niz.forEach(element => {
        sum += element.brSedista;
    });
    return sum;
}

console.log(ukupnoSedista(arrAutobusa));

// 2. Napraviti funkciju maksSedista koja ispisuje podatke o autobusu koji ima najveći broj sedišta.

let max = (niz) => {
    let max = niz[0].brSedista;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].brSedista > max) {
            max = niz[i].brSedista;
        }
    }
    return max;
}

// console.log(max(arrAutobusa));

let maksSedista = (niz) => {
    let maksSedista = max(niz);
    niz.forEach(element => {
        if (element.brSedista == maksSedista) {
            element.stampaj();
        }
    });
}

maksSedista(arrAutobusa);


// 3. Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a funkcija vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u suprotnom vraća false.

let ljudi = (brLjudi, nizA) => {
    let brSedista = ukupnoSedista(nizA);
    if (brLjudi > brSedista) {
        return false;
    } else {
        return true;
    }
}


console.log(ljudi(250, arrAutobusa));