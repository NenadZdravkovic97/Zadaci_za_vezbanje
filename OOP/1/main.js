import {Boja} from "./classes/boja.js";

let boja1 = new Boja(120, 20, 25);
let boja2 = new Boja(125, 32, 48);
let boja3 = new Boja(120, 20, 25);
let boja4 = new Boja(155, 10, 55);
let arrBoja = [boja1, boja2, boja3, boja4];

// 1.Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true ukoliko su te dve boje iste, u suprotnom vraća false.

let ispitajSlicnost = (prva, druga) => {
    if (prva.talasnaDuzina == druga.talasnaDuzina && prva.zasicenje == druga.zasicenje && prva.intenzitet == druga.intenzitet) {
        return true;
    } else {
        return false;
    }
    
}
console.log(ispitajSlicnost(boja1, boja3));

// 2. Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost srednje talasne dužine.

let srednjaTalasnaDuzina = (niz) => {
    let sum = 0;
    niz.forEach(element => {
        sum += element.talasnaDuzina;
    });
    return sum / niz.length;
}

console.log(srednjaTalasnaDuzina(arrBoja));