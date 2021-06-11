// Prilikom kreiranja konstruktora, prosledjuje se jmbg, ime, prezime i nizOcena, a automatski se izračuna prosečna ocena ovog studenta. 
// Takođe, voditi računa o tome da svaka od unetih ocena može biti isključivo ceo broj i to 6, 7, 8, 9 ili 10.
// JMBG studenta mora biti string koji sadrži 13 karaktera.
// Izračunata prosečna ocena se dodeli atributu prosecna ocena.
// Napraviti i odgovarajuće getere i setere.

export class Student {
    constructor(jmbg, ime, prezime, nizOcena) {
        this.jmbg = jmbg;
        this.ime = ime;
        this.prezime = prezime;
        this.nizOcena = nizOcena;
        this.prosecna = this.prosecnaOcena();
    }
    // Seteri
    set jmbg(jmbg) {
        // this._jmbg = jmbg;
        if (jmbg.length === 13) {
            this._jmbg = jmbg;
        } else {
            console.log(`unesite validan jmbg`);
        }
    }

    set ime(ime) {
        this._ime = ime;
    }

    set prezime(prezime) {
        this._prezime = prezime;
    }

    set nizOcena(nizOcena) {
        let newArr = [];
        nizOcena.forEach(ocena => {
            if (ocena == 6 || ocena == 7 || ocena == 8 || ocena == 9 || ocena == 10) {
                newArr.push(ocena);
            } else {
                console.log(`unesite ceo broj od 6 do 10, uneli ste ${ocena}`);
            }
        });
        nizOcena = newArr;
        this._nizOcena = nizOcena;
        
    }



    // Geteri
    get jmbg() {
        return this._jmbg;
    }

    get ime() {
        return this._ime;
    }

    get prezime() {
        return this._prezime;
    }

    get nizOcena() {
        return this._nizOcena;
    }

    get prosecnaOcena() {
        return this._prosecnaOcena;
    }

    // Metode
    prosecnaOcena() {
        let sum = 0;
        this.nizOcena.forEach(element => {
            sum += element;
        });
        return sum / this.nizOcena.length;
    }

    // Metode
    // Napraviti metodu ispis koja ispisuje sve podatke o jednom studentu.
    // Napraviti niz studenata i koristiti ga u predstojećim funkcijama.
    ispis() {
        console.log(`Ime: ${this.ime}, Prezime: ${this.prezime}, JMBG: ${this.jmbg}, sve ocene: ${this.nizOcena}, prosecna ocena ${this.prosecna}`);
    }

    // najmanja ocena
    najmanjaOcena() {
        let min = this.nizOcena[0];
        for (let i = 0; i < this.nizOcena.length; i++) {
            let element = this.nizOcena[i];
            if (element < min) {
                min = element;
            }
        }
        return min;
    }

    // Godina rodjenja
    // DDMMGGGRRBBBK izvuci godinu
    godinaRodjenja() {
        let jmbg = this.jmbg;
        let god = jmbg.slice(4, 7);
        let godRodjenja = undefined;
        if (god.startsWith('9')) {
            godRodjenja = '1' + god;
        }
        if(god.startsWith('0')){
            godRodjenja = '2' + god;
        }
        return godRodjenja;
        
    }

}