export class Radnik {
    constructor(ime, plata) {
        this.ime = ime;
        this.plata = plata;
    }
    // seteri
    set ime(ime) {
        this._ime = ime;
    }
    set plata(plata) {
        this._plata = plata;
    }

    // Geteri
    get ime() {
        return this._ime;
    }
    get plata() {
        return this._plata;
    }

    // Metode
    stampaj() {
        console.log(`Ime je ${this.ime}, plata je ${this.plata}`);
    }
}