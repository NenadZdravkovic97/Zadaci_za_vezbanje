import {Cipela} from "./classes/cipela.js";

let cipela1 = new Cipela('naziv1', 37, ['zalepi', 'usij']);
let cipela2 = new Cipela('naziv2', 35, ['prosiri', 'usij']);
let cipela3 = new Cipela('naziv3', 42, ['zalepi', 'prosiri']);
let cipela4 = new Cipela('naziv3', 42, ['zalepi', 'sadasd']);

// Napraviti funkciju radi kojoj se prosledjuje jedna cipela (jedna instanca klase Cipela) i koja proverava da li je neka u nizu prepravki sadrži string zalepi, proširi ili ušij. Svaki put kada naiđe na prepravku (element u nizu prepravki) zalepi poziva se metoda zalepi, kada naiđe na prepravku prosiri poziva se metoda prosiri, kada naiđe na prepravku usij poziva se metoda usij, u suprotno se na ekranu ispisuje “Nepoznata prepravka”.

let radi = (cipela) => {
    let prepravka = cipela.nizPrepravki;
    prepravka.forEach(element => {
        if (element.includes('zalepi')) {
            cipela.zalepi();
        } else if(element.includes('prosiri')) {
            cipela.prosiri();
        } else if(element.includes('usij')) {
            cipela.usij();
        } else {
            console.log('nepoznata prepravka');
        }
    })
}

radi(cipela1);
radi(cipela2);
radi(cipela3);
radi(cipela4);


