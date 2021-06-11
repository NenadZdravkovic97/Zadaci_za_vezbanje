export class Cipela {
    constructor(naziv, broj, nizPrepravki) {
        this.naziv = naziv;
        this.broj = broj;
        this.nizPrepravki = nizPrepravki;
    }
    // Seteri
    set naziv(naziv) {
        this._naziv = naziv;
    }
    set broj(broj) {
        this._broj = broj;
    }
    set nizPrepravki(nizPrepravki) {
        this._nizPrepravki = nizPrepravki;
    }

    // Geteri
    get naziv() {
        return this._naziv;
    }
    get broj() {
        return this._broj;
    }
    get nizPrepravki() {
        return this._nizPrepravki;
    }

    // Metode
    zalepi() {
        console.log('Zalepljena cipela');
    }

    prosiri() {
        console.log('Prosirena cipela');
    }

    usij() {
        console.log('Usivena cipela');
    }
}