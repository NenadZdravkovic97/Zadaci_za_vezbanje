export class Krug{
    constructor(r) {
        this.r = r;
    }

    set r(r) {
        this._r = r;
    }
    get r() {
        return this._r;
    }
    // Metode
    obimKruga() {
        let o = this.r*2 * Math.PI;
        return o;
    }

    povrsinaKruga() {
        let p = this.r**2 * Math.PI;
        return p;
    }
}