import {Datum} from "./classes/datum.js";
let d1 = new Datum(10, 6, 1989);
let d2 = new Datum(11, 6, 1989);
let d3 = new Datum(31, 5, 1986);
let arrD = [d1, d2, d3];

// Napraviti funkciju ranijiDatum koja za dva prosleđena datuma ispisuje raniji od ta dva datuma. Ukoliko su datumi jednaki onda na ekranu ispisati “Datumi su jednaki”.

let ranijiDatum = (prvi, drugi) => {
    if (prvi.godina > drugi.godina) {
        console.log(drugi);
    }
    else if (prvi.godina < drugi.godina){
        console.log(prvi);
    } 

    else if (prvi.mesec > drugi.mesec) {
        console.log(drugi);
    }
    else if (prvi.mesec < drugi.mesec) {
        console.log(prvi);
    }

    else if (prvi.dan > drugi.dan) {
        console.log(drugi);
    }
    else if (prvi.dan < drugi.dan) {
        console.log(prvi);
    }
    else {
        console.log('Isti su');
    }
}

ranijiDatum(d1, d2)