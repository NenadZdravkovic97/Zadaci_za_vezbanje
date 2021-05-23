let dan1 = {
    datum: "2021/05/23",
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [10, 15, 26, 13]
}

let dan2 = {
    datum: "2021/05/24",
    kisa: true,
    sunce: true,
    oblacno: false,
    temperature: [10, 15, 14, 13, 10, 18]
}

let dan3 = {
    datum: "2021/05/25",
    kisa: true,
    sunce: false,
    oblacno: false,
    temperature: [10, 15, 26, 13]
}

let dan4 = {
    datum: "2021/05/26",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [10, 15, 26, 23, 20, 15]
}

// 1. Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)

let dani = [dan1, dan2, dan3, dan4];

// 2. Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
// Ispisati prvi od njih
let najviseMerenjaPrvi = (nizDana) => {
    let najvise = nizDana[0].temperature.length;
    let datum = nizDana[0].datum;
    for (let i = 0; i < nizDana.length; i++) {
        if (najvise < nizDana[i].temperature.length) {
            najvise = nizDana[i].temperature.length;
            datum = nizDana[i].datum;
        }
    }
    return datum;
}

console.log(najviseMerenjaPrvi(dani));

// Ispisati poslednji od njih


let najviseMerenjaPoslednji = (nizDana) => {
    let najvise = nizDana[0].temperature.length;
    let datum = nizDana[0].datum;
    for (let i = 0; i < nizDana.length; i++) {
        if (najvise < nizDana[i].temperature.length) {
            najvise = nizDana[i].temperature.length;
        }
    }

    for (let i = 0; i < nizDana.length; i++) {
        if (najvise == nizDana[i].temperature.length) {
            datum = nizDana[i].datum;
        }
        
    }

    return datum;
}

console.log(najviseMerenjaPoslednji(dani));


// 3. Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

let brojSvojstvo = (nizDana) => {
    let brKisnih = 0;
    let brSuncanih = 0;
    let brOblacnih = 0;
    for (let i = 0; i < nizDana.length; i++) {
        if (nizDana[i].kisa == true) {
            brKisnih++;
        }

        if (nizDana[i].sunce == true) {
            brSuncanih++;
        }

        if (nizDana[i].oblacno == true) {
            brOblacnih++;
        }
    }
    console.log(`Broj kisnih dana je ${brKisnih}`);
    console.log(`Broj suncanih dana je ${brSuncanih}`);
    console.log(`Broj oblacnih dana je ${brOblacnih}`);
}


brojSvojstvo(dani);

// 4. Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom

let prosecnaGlobalno = (nizDana) => {
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < nizDana.length; i++) {
        for (let j = 0; j < nizDana[i].temperature.length; j++) {
            sum += nizDana[i].temperature[j];
            counter++;
        }
    }
    return sum / counter;
}

let danaNatprosecnih = (nizDana) => {
    let prosek = prosecnaGlobalno(nizDana);
    let countAbove = 0;
    // racunanje prosecne temperature za svaki dan posebno
    for (let i = 0; i < nizDana.length; i++) {
        let sum = 0;
        let counter = 0;
        for (let j = 0; j < nizDana[i].temperature.length; j++) {
            sum += nizDana[i].temperature[j];
            counter++;
        }
        let prosekDana = sum / counter;
        if (prosekDana > prosek) {
            countAbove++;
        }
    }
    return countAbove;
}
console.log(danaNatprosecnih(dani));