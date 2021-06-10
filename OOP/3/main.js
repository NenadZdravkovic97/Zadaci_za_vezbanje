import {Radnik} from "./classes/radnik.js";
let radnik1 = new Radnik('Prvi', 45000);
let radnik2 = new Radnik('Drugi', 35000);
let radnik3 = new Radnik('Treci', 35000);
let arrRadnici = [radnik1, radnik2, radnik3];

// 1. Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća najveću platu ranika.

let maksPlata = (niz) => {
    let max = niz[0].plata;
    for (let i = 0; i < niz.length; i++) {
        const element = niz[i];
        if (element.plata > max) {
            max = element.plata
        }
    }
    return max;
}

console.log(maksPlata(arrRadnici));

// 2. Napraviti funkciju maksPlataOsoba kojoj se prosleđuje niz ranika, a ona ispisuje sve podatke za svakom od radnika sa maksimalnom platom.
let maksPlataOsoba = (niz) => {
    let max = maksPlata(niz);
    niz.forEach(element => {
        if (element.plata === max) {
            element.stampaj();
        }
    });
}

maksPlataOsoba(arrRadnici);

