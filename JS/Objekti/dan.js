let dan = {
    datum: "2021/21/05",
    kisa: false,
    sunce: false,
    oblacno: true,
    // temperature: [15, 12, 26, 15, 25, 26, 25],
    // temperature: [-15, -12, -26], // leden test
    // temperature: [26, 24, 25], // tropski  test
    temperature: [-2, -15, 26], // neuobicajen  test
    // 1. 
    prosecna: function () {
        let sum = 0;
        this.temperature.forEach(temp => {
            sum += temp;
        });
        return sum / this.temperature.length;
    },
    // 2.
    natprosecna: function () {
        let prosek = this.prosecna();
        let brojac = 0;
        this.temperature.forEach(temp => {
            if (temp > prosek) {
                brojac++;
            }
        });
        return brojac;
    },
    // 3. 
    maxTemp: function () {
        let max = this.temperature[0];
        this.temperature.forEach(temp => {
            if (temp > max) {
                max = temp;
            }
        });
        return max;
    },
    brojMax: function () {
        let max = this.maxTemp();
        let counter = 0;
        this.temperature.forEach(temp => {
            if (temp == max) {
                counter++;
            }
        });
        return counter;
    },
    izmedju: function (temp1, temp2) {
        if (temp1 > temp2) {
            let tmp = temp1;
            temp1 = temp2;
            temp2 = tmp;
        }

        let counter = 0;
        this.temperature.forEach(temp => {
            if (temp > temp1 && temp < temp2) {
                counter++;
            }
        });
        return counter;
    },
    // 5. 
    iznadIspod: function () {
        let iznadProseka = this.natprosecna();
        let ispodProseka = this.temperature.length - iznadProseka;
        return iznadProseka > ispodProseka;
    },
    // 6. 
    leden: function () {
        leden = true;
        this.temperature.forEach(temp => {
            if (temp >= 0) {
                leden = false;
            }
        });
        return leden;
    },
    // 7.
    tropski: function () {
        let tropski = true;
        this.temperature.forEach(temp => {
            if (temp < 24) {
                tropski = false;
            }
        });
        return tropski;
    },
    // 8. 
    nepovoljan: function () {
        let nepovoljan = false;
        let razlika = 0;
        for (let i = 0; i < this.temperature.length - 1; i++) {
            razlika = this.temperature[i] - this.temperature[i+1];
            if (razlika > 8 || razlika < -8) {
                nepovoljan = true;
                break;
            }
        }
        return nepovoljan;
    },
    neuobicajen: function () {
        let neuobicajen = false;
        this.temperature.forEach(temp => {
            //  kiše i ispod -5 stepeni
            if (this.kisa == true && temp < -5) {
                neuobicajen = true;
            }
            //  oblačno i iznad 25 stepeni
            if (this.oblacno == true && temp > 25) {
                neuobicajen = true;
            }

            // bilo i kišovito i oblačno i sunčano
            if (this.oblacno == true && this.kisa == true && this.sunce == true) {
                neuobicajen = true;
            }
        });
        return neuobicajen;
    }
};


// 1. Određuje i vraća prosečnu temperaturu izmerenu tog dana.
console.log(dan.prosecna());

// 2. Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
console.log(dan.natprosecna());

// 3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
console.log(dan.maxTemp());
console.log(dan.brojMax());

// 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
console.log(dan.izmedju(25, 12));

// 5.Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
console.log(dan.iznadIspod());

// 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
console.log(dan.leden());


// 7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
console.log(dan.tropski());

// 8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.

console.log(dan.nepovoljan());

// 9.
// Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.

console.log(dan.neuobicajen());



