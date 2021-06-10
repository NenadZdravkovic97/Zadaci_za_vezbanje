import {FMRadio} from "./classes/fmradio.js";

let s1 = new FMRadio(88, 20);
let s2 = new FMRadio(96, 15);
let s3 = new FMRadio(92, 10);
let s4 = new FMRadio(103, 7);
let arrStanice = [s1, s2, s3, s4];

// Napisati funkciju srednjaFrekvencija kojoj se prosleđuje niz radio stanica, a ona vraća koja je prosečna frekvencija prosleđenih radio stanica.

let srednjaFrekvencija = (niz) => {
    let sum = 0;
    niz.forEach(element => {
        sum += element.frekvencija;
    });
    return sum / niz.length;
}

console.log(srednjaFrekvencija(arrStanice));

// Napisati funkciju najbliziMaks kojoj se prosleđuje niz radio stanica, a funkcija vraća onu radio stanicu čija je frekvencija najbliža maksimalnoj frekvenciji.
let maxFrek = (niz) => {
    let max = niz[0].frekvencija
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].frekvencija > max) {
            max = niz[i].frekvencija;
        }
    }
    return max;
}

console.log(maxFrek(arrStanice));


let najbliziMaks = (niz) => {
    let max = maxFrek(niz);
    let stanica = niz[0];
    let currDif = max - niz[0].frekvencija;
    for (let i = 0; i < niz.length; i++) {
        let newDiff = max - niz[i].frekvencija;
        if ((newDiff < currDif) && (newDiff != 0)) {
            currDif = newDiff;
            stanica = niz[i];
        }
    }
    return stanica;
}


console.log(najbliziMaks(arrStanice));