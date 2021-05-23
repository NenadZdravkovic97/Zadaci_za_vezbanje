// Formirati objekat dan koji sadrži:
// Datum (string u formatu YYYY/MM/DD),
// Kiša (true/false),
// Sunce (true/false),
// Oblačno (true/false),
// Vrednosti temperature (Niz temperatura tog dana).

let dan = {
    datum: 2021/05/23,
    kisa: true,
    sunce: false,
    oblacno: false,
    temperature: [10, 15, 26, 13, -6],
    // temperature: [-1, -12, 5, -5, -15], // leden test
    // temperature: [25, 25, 24, 28, 30], //tropski test
    // 1.
    prosecna: function () {
        let sum = 0;
        this.temperature.forEach(temp => {
            sum += temp;
        });
        return sum / this.temperature.length;
    },
    // 2. 
    brojNatprosecnih: function () {
        let prosek = this.prosecna();
        let counter = 0;
        this.temperature.forEach(temp => {
            if (temp > prosek) {
                counter++;
            }
        });
        return counter;
    },
    // 3.
    maxTemp: function () {
        let max = this.temperature[0];
        for (let i = 0; i < this.temperature.length; i++) {
            if (max < this.temperature[i]) {
                max = this.temperature[i];
            }
        }
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
    // 4. 
    brojIzmedjuDveTemp: function (temp1, temp2) {
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
    minTemp: function () {
        let min = this.temperature[0];
        for (let i = 0; i < this.temperature.length; i++) {
            if (this.temperature[i] < min) {
                min = this.temperature[i];
            }            
        }
        return min;
    },
    brojMin: function () {
        let min = this.minTemp();
        let counter =0;
        this.temperature.forEach(temp => {
            if (temp == min) {
                counter++;
            }
        });
        return counter;
    },

    iznadProsekaVecinom: function () {
        let countMax = this.brojMax();
        let countMin = this.brojMin();
        return countMax > countMin;
        // let countMin = 
    },

    // 6.
    leden: function () {
        let leden = true;
        for (let i = 0; i < this.temperature.length; i++) {
            if (this.temperature[i] > 0) {
                leden = false;
                break;
            }
        }
        return leden;    
    },
    // 7. 
    tropski: function () {
        let tropski = true;
        for (let i = 0; i < this.temperature.length; i++) {
            if(this.temperature[i] < 24) {
                tropski = false;
                break;
            }            
        }
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
    // 9. 
    neuobicajen: function () {
        // bilo kiše i ispod -5 stepeni
        // bilo oblačno i iznad 25 stepeni
        //  bilo i kišovito i oblačno i sunčano
        let neuobicajen = false;
        this.temperature.forEach(temp => {
            if(this.kisa == true && temp < -5) {
                neuobicajen = true;
            }

            if (this.oblacno == true && temp > 25) {
                neuobicajen = true;
            }

            if (this.kisa == true && this.oblacno == true && this.sunce == true) {
                neuobicajen = true;
            }
        });
        return neuobicajen;
    }

}

// Metode 
// 1. Određuje i vraća prosečnu temperaturu izmerenu tog dana.

console.log(dan.prosecna());

// 2. Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
console.log(dan.brojNatprosecnih());

// 3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
console.log(dan.maxTemp());
console.log(dan.brojMax());

// 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).

console.log(dan.brojIzmedjuDveTemp(10, 18));
console.log(dan.brojIzmedjuDveTemp(18, 10));

// 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
console.log(dan.minTemp());
console.log(dan.brojMin());
console.log(dan.iznadProsekaVecinom());

// 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
console.log(dan.leden());

// 7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
console.log(dan.tropski());


// 8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
console.log(dan.nepovoljan());


// 9. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
console.log(dan.neuobicajen());
