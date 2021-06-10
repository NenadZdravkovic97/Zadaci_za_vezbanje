export class Boja {
    constructor(talasnaDuzina, zasicenje, intenzitet) {
        this.talasnaDuzina = talasnaDuzina;
        this.zasicenje = zasicenje;
        this.intenzitet = intenzitet
    }
    // Seteri
    set talasnaDuzina(talasnaDuzina) {
        this._talasnaDuzina = talasnaDuzina;
    }
    set zasicenje(zasicenje) {
        this._zasicenje = zasicenje;
    }
    set intenzitet(intenzitet) {
        this._intenzitet = intenzitet;
    }

    // Geteri
    get talasnaDuzina(){
        return this._talasnaDuzina;
    }
    get zasicenje(){
        return this._zasicenje;
    }
    get intenzitet(){
        return this._intenzitet;
    }
}