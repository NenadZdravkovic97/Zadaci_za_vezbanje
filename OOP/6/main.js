import {Krug} from "./classes/krug.js";
let k1 = new Krug(5);
let k2 = new Krug(6);
let k3 = new Krug(8);
let k4 = new Krug(9);
let arrK = [k1, k2, k3, k4];
// console.log(p1.obimKruga());
// console.log(p1.povrsinaKruga());

// Napraviti funkciju upisaniKrug kojoj se prosleđuju dva objekta tipa krug, a ona vraća true ukoliko je u prvi prosleđeni krug moguće upisati drugi prosleđeni krug. U suprotnom funkcija vraća false.

let upisaniKrug = (prvi, drugi) => {
    if (prvi.r < drugi.r) {
        return true;
    } else {
        return false;
    }
}


console.log(upisaniKrug(k1, k2));

// * Napisati funkciju rastuci koja vraća true ukoliko se svaki krug može upisati u svog sledbenika. Ukoliko ma jedan krug ne može da se upiše u sledeći krug, vratiti false. 

let rastuci = (niz) => {
    let potvrda = true;
    for (let i = 0; i < niz.length - 1; i++) {
        if (niz[i].r > niz[i+1].r) {
            potvrda = false;
            break;
        } else {
            potvrda = true;
        }
    }
    return potvrda;
}

console.log(rastuci(arrK));