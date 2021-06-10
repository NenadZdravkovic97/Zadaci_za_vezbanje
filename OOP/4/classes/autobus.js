export class Autobus {
    constructor(regBr, brSedista) {
        this.regBr = regBr;
        this.brSedista = brSedista;
    }
    // Seteri
    set regBr(regBr){
        this._regBr = regBr;
    }
    set brSedista(brSedista){
        this._brSedista = brSedista;
    }

    // Geteri
    get regBr(){
        return this._regBr;
    }
    get brSedista(){
        return this._brSedista;
    }

    // Metode
    stampaj() {
        console.log(`Registarski broj ${this.regBr}, broj sedista ${this.brSedista}`);
    }
}