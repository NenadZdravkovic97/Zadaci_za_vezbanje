// 1.
// Za dva uneta broja ispisati koji je veći a koji je manji.
let num1 = 30;
let num2 = 20;
if ( num1 > num2 ) {
    console.log(`Broj ${num1} je veci od ${num2}`);
} else {
    console.log(`Broj ${num2} je veci od ${num1}`);
}


// 2.
// Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.

let temperatura = -5;

if ( temperatura >= 0) {
    console.log("plus");
} else {
    console.log("minus");
}

// 3.
// U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar.

let pol = "f";
let maleImg = "male.jfif";
let femaleImg = "female.png";

if ( pol == "m") {
    document.body.innerHTML += `<img src="${maleImg}">`;
} else {
    document.body.innerHTML += `<img src="${femaleImg}">`;
}

// 4.
// U odnosu na preuzete vrednosti AM i PM sa svog računara, ispisati da li je trenutno jutro ili popodne.

let d = new Date();
let h = d.getHours();
if ( h < 12) {
    console.log("jutro");
} else {
    console.log("podne");
}

// 5.
// Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.

let tGodina = d.getFullYear();
let osoba = 2003;
let osobaGodina = tGodina - osoba;
if (osobaGodina >= 18) {
    console.log(`Osoba je punoletna i ima ${osobaGodina}`);
} else {
    console.log(`Osoba je maloletna i ima ${osobaGodina}`);
}

// 6.
// Odrediti najveći od tri uneta broja

let x = 40;
let y = 50;
let z = 20;

if ( x > y && x > z) {
    console.log(`X je najveci ${x}`);
} else if ( y > x && y > z) {
    console.log(`Y je najveci ${y}`);
} else {
    console.log(`Z je najveci ${z}`);
}

// 7.
// Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit.
// Za više od 50 poena učenik dobija ocenu 6,
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8,
// za više od 80 poena učenik dobija ocenu 9 i
// za više od 90 poena učenik dobija ocenu 10.

let poeni = 49;

if ( poeni >= 50 && poeni <= 59) {
    console.log("6");
} else if (poeni >= 60 && poeni <= 69 ) {
    console.log("7");
} else if (poeni >= 70 && poeni <= 79 ) {
    console.log("8");
} else if (poeni >= 80 && poeni <= 89 ) {
    console.log("9");
} else if (poeni >= 90) {
    console.log("10");
} else {
    console.log("pao");
}

// 8.
// Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.

let dan = d.getDay();
// console.log(dan) 0 nedelja
if ( dan == 0 || dan == 6 ) {
    console.log("Vikend");
} else {
    console.log("Radni dan")
}

// 9.
// Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati popodne i u ostalim  slučajevima ispisati dobro veče.

// h je definisan iznad 
if ( h < 12) {
    console.log("Jutro");
} else if ( h > 12 && h < 18) {
    console.log("Popodne");
} else {
    console.log("Vece");
}

// 10. 
// Uporediti dva uneta datuma i ispisati koji od njih je raniji.

let datum1 = "2019-04-15";
let datum2 = "2019-04-10";

if ( datum1 > datum2) {
    console.log(`${datum2} je ranije od ${datum1}`);
} else {
    console.log(`${datum1} je ranije od ${datum2}`);
}


// 11.
// Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

let pocetak = 9;
let kraj = 17;
console.log(`Sada je ${h} sati`)

if ( h >= pocetak && h < kraj ) {
    console.log("Radi");
} else {
    console.log("Zatvoreno");
}

// 12.
// Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.

let p1 = 9;
let k1 = 15;
let p2 = 8;
let k2 = 14;

if ( k1 <= p2 || k2 <= p1) {
    console.log("Ne preklapaju se");
} else {
    console.log("Preklapaju se");
}

// 13.
// Za uneti broj ispitati da li je paran ili nije.

let paran = 9;
if( paran % 2 == 0) {
    console.log("Paran");
} else {
    console.log("Neparan");
}

// 14.
// Za uneti broj ispisati da li je deljiv sa 3 ili ne.
let deljivSaTri = 2728;
if ( deljivSaTri % 3 == 0){
    console.log("Deljiv sa 3");
} else {
    console.log("Nije deljiv sa 3");
}

// 15.
// Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

let broj1 = 45;
let broj2 = 30;
let res;
if ( broj1 > broj2 ) {
    res = broj1 - broj2;
    console.log(res);
} else {
    res = broj2 - broj1;
    console.log(res);
}

// 16.
// Za uneti broj ispitati da li je on manji ili veći od nule. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.

let broj3 = 50;

if ( broj3 <= 0 ) {
    broj3--
    console.log(broj3);
} else {
    broj3++
    console.log(broj3);
}

// 17.
// Za tri uneta broja ispisati koji od njih ne najveći, koji od njih je srednji, a koji od nih je najmanji. 
let x1 = 20;
let y1 = 30;
let z1 = 10;

//min
let min = x1;

if ( min > y1) {
    min = y1;
}
if ( min > z1) {
    min = z1;
}

console.log(`Najmanji broj je ${min}`);

// max 
let max = x1;

if ( max < y1 ) {
    max = y1;
} 

if ( max < z1 ) {
    max = z1;
}

console.log(`Najveci broj je ${max}`);

//srednji

let srednji = ( x1 + y1 + z1 ) - ( min + max);
console.log(`Srednji broj je ${srednji}`);

// 18.
// Za učitani broj ispitati da li je ceo.

let ceo = 0;

if ( ceo % 1 == 0) {
    console.log("Ceo broj");
} else {
    console.log("Decimalan broj");
}

// 19.
// Učitati dva cela broja i ispitati da li je veći od njih paran.

let x2 = 41;
let y2 = 50;

if ( x2 > y2) {
    if ( x2 % 2 == 0) {
        console.log(`broj x2 ${x2} je veci i paran`);
    } else {
        console.log(`broj x2 ${x2} je veci i neparan`);
    }
} else {
    if( y2 % 2 == 0){
        console.log(`broj y2 ${y2} je veci i paran`);
    } else {
        console.log(`broj y2 ${y2} je veci i neparan`);
    }
}

// 20.
// Naći koji je najveći od tri uneta broja $a, $b i $c.
let a = 50;
let b = 80;
let c = 40;

let najveciB = Math.max(a, b ,c);

let najmanjiB = Math.min(a, b ,c);

let srednjiB = ( a + b + c ) - ( najveciB + najmanjiB );

console.log(najveciB);
console.log(srednjiB);
console.log(najmanjiB);

// 21.
// Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih  i veća od 40 stepeni Celzijusovih.

let temperatura2 = -16;

if ( temperatura2 < -15 || temperatura2 > 40 ) {
    console.log(`Ekstremna temperatura, sada je ${temperatura2} stepeni`);
} else {
    console.log(`Sada je ${temperatura2} stepeni`);
}

// 22.
// Ispitati da li je godina prestupna. (Godinu preuzeti sa vremena na Vašem računaru). Prestupna je ona godina koja je deljiva sa 4, ako nije deljiva sa 100, mada ipak jeste deljiva sa 400.

let prestupna = d.getFullYear();

if ( prestupna % 4 == 0 && prestupna % 100 != 0 || prestupna % 400 == 0 ) {
    console.log("prestupna");
} else {
    console.log("nije prestupna");
}

// 23.
// Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.


let butikD = new Date();
let bDan = butikD.getDay(); // 0 nedelja
let bVreme = butikD.getHours();

let pocetakR = 9;
let krajR = 20;

let pocetakV = 10;
let krajV = 18;

if ( bDan == 0 || bDan == 6 ) {
    if ( bVreme >= pocetakV && bVreme < krajV ) {
        console.log("Otvoreno");
    } else {
        console.log("zatvoreno");
    }
} else {
    if ( bVreme >= pocetakR && bVreme < krajR) {
        console.log("Otvoreno")
    } else {
        console.log("Zatvoreno");
    }
}



