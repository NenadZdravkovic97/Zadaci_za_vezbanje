export class FMRadio {
    constructor(frekvencija, jacinaTona) {
        this.frekvencija = frekvencija;
        this.jacinaTona = jacinaTona;
    }
    // seteri
    set frekvencija(frekvencija){
        if (frekvencija >= 87.5 && frekvencija <= 108) {
            this._frekvencija = frekvencija;
        } else {
            this._frekvencija = 87.5;
        }
    }
    set jacinaTona(jacinaTona){
        if (jacinaTona >= 0 && jacinaTona <=20) {
            this._jacinaTona = jacinaTona;
        } 
    }

    // geteri
    get frekvencija(){
        return this._frekvencija;
    }
    get jacinaTona(){
        return this._jacinaTona;
    }

    // Metode
    promeniZvuk(sign){
        if (sign == '+') {
            this.jacinaTona++;
        } else if(sign == '-') {
            this.jacinaTona--;
        }
    }

    frekvencijaIskljuci() {
        this.frekvencija = 87.5;
    }
}