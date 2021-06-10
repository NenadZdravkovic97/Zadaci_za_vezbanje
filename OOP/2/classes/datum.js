export class Datum {
    constructor(dan, mesec, godina) {
        this.dan = dan;
        this.mesec = mesec;
        this.godina = godina;
    }
    // Seteri
    set dan(dan){
        this._dan = dan;
    }
    set mesec(mesec){
        this._mesec = mesec;
    }
    set godina(godina){
        this._godina = godina;
    }

    // Geteri
    get dan() {
        return this._dan;
    }
    get mesec() {
        return this._mesec;
    }
    get godina() {
        return this._godina;
    }
}