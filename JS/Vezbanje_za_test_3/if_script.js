// 1.
// Za dva uneta broja ispisati koji je veći a koji je manji.

let n = 3;
let m = 2;

if (n > m) {
    console.log(`${n} > ${m}`);
} else  {
    console.log(`${m} > ${n}`);
}


// 2.
// Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.

let t = -10;

if (t > 0) {
    console.log("vise od 0");
} else {
    console.log("manje od 0");
}

// 3.
// U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar. 

let pol = "z";

if(pol == 'm') {
    document.body.innerHTML += `<img src="img/male.jfif" >`;
} else {
    document.body.innerHTML += `<img src="img/female.png">`;
}

// 4.
// U odnosu na preuzeto trenutno vreme sa računara, ispisati da li je trenutno jutro ili popodne.

let d = new Date();
let h = d.getHours();

if (h < 12) {
    console.log("jutro");
} else {
    console.log("podne");
}


// 5.
// Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.

let year = d.getFullYear();
let osoba = 2004;
let godinaOsobe = year - osoba;
if (godinaOsobe >= 18) {
    console.log("Punoletna osoba");
} else {
    console.log("Maloletna osoba");
}

// 6.
// Odrediti najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).


let x = 9;
let y = 8;
let z = 7;

let maks = x;  // pretpostavka da je najveci 1. broj
if(y > maks) {
    maks = y; // pretpostavka mora se updatuje ako je pretpostavka losa
}
if (z > maks) {
    maks = z;
}
console.log(maks);

// 7.
// Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit. 
// Za više od 50 poena učenik dobija ocenu 6, 
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8, 
// za više od 80 poena učenik dobija ocenu 9 i 
// za više od 90 poena učenik dobija ocenu 10.

let poeni = 49;

if (poeni >= 50 && poeni < 60) {
    console.log("Ocena 6");
} else if (poeni >= 60 && poeni < 70) {
    console.log("Ocena 7");
} else if (poeni >= 70 && poeni < 80) {
    console.log("Ocena 8");
} else if (poeni >= 80 && poeni < 90) {
    console.log("Ocena 9");
} else if (poeni >= 90) {
    console.log("Ocena 10");
} else {
    console.log("Pao");
}

// 8.
// Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 

let dan = d.getDay();
if (dan == 0 || dan == 6) {
    console.log("vikend");
} else {
    console.log("radni dan");
}

// 9.
// Za vreme preuzeto sa računara ispisati 
// dobro jutro za vreme manje od 12 sati ujutru, 
// dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče.

h = d.getHours();

if (h < 12) {
    console.log("Dobro jutro");
} else if (h < 18) {
    console.log("Dobar dan");
} else {
    console.log("Dobro vece");
}

// 10.
// Uporediti dva uneta datuma i ispisati koji od njih je raniji. 

let datum1 = "2020-04-10";
let datum2 = "2020-04-9";

if (datum2 < datum1) {
    console.log(datum2);
} else {
    console.log(datum1);
}


// 11.
// Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

let start = 9;
let end = 17;
h = d.getHours();
console.log(h)

if (h >= start && h < end) {
    console.log("Otvoreno");
} else {
    console.log("zatvoreno");
}

// 12.
// Za unet sat početka i sat kraja radnog vremena dva lekara,  
// ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.
// (Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, ovo se podrazumeva i ne ispitivati doatno)

let p1 = 15;
let k1 = 23;

let p2 = 10;
let k2 = 17;

if (k1 < p2 || k2 < p1) {
    console.log("NE");
} else {
    console.log("DA");
}


// 13.
// Za uneti broj ispitati da li je paran ili nije. 
let num = 192;

if (num % 2 == 0) {
    console.log("Paran");
} else {
    console.log("Neparan");
}

// 14.
// Za uneti broj ispisati da li je deljiv sa 3 ili ne.

if (num % 3 == 0) {
    console.log("Deljiv");
} else {
    console.log("nije deljiv");
}

// 15.
// Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

let a1 = 35;
let a2 = 40;
let sum = 0;

if (a1 > a2) {
    sum = a1 - a2;
} else {
    sum = a2 - a1;
}

console.log(sum);


// 16.
// Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
// Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.

let num1 = 20;

if (num1 <= 0) {
    num1--;
} else {
    num1++;
}

console.log(num1);

// 17.
// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture. 

let x1 = 10;
let y1 = 20;
let z1 = 40;
let max = x1;
let min = x1;

//max 

if(y1 > max) {
    max = y1;
}

if (z1 > max) {
    max = z1;
}

// min

if (min > y1) {
    min = y1;
}

if (min > z1) {
    min = z1;
}


// middle
let middle = (x1 + y1 + z1) - (min + max);

console.log(min);
console.log(middle);
console.log(max);


// 18.
// Za učitani broj ispitati da li je ceo.

let num3 = 10.5;

if (num3 % 1 == 0) {
    console.log("Ceo broj");
} else {
    console.log("nije")
}

// 19.
// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.

let x2 = 41;
let y2 = 42;
let z2 = 40;
max = x2;
min = x2;


if (x2 > y2) {
    if(x2 > z2) {
        console.log(`${x2} je najveci`);
    }
} 
if(x2 > y2) {
    if (x2 < z2) {
        console.log(`${x2} je srednji`);
    } 
} 
if (x2 < y2) {
    if (x2 > z){
        console.log(`${x2} je srednji`);
    }
}
if (x2 < y2) {
    if (x2 < z2){
        console.log(`${x2} je najmanji`);
    }
}



// BRoj y

if (y2 > x2) {
    if(y2 > z2) {
        console.log(`${y2} je najveci`);
    }
} 
if(y2 < x2) {
    if (y2 > z2) {
        console.log(`${y2} je srednji`);
    } 
} 
if (y2 > x2) {
    if (y2 < z2){
        console.log(`${y2} je srednji`);
    }
}

if (y2 < x2) {
    if (y2 < z2){
        console.log(`${y2} je najmanji`);
    }
}

// BRoj Z

if (z2 > x2) {
    if(z2 > y2) {
        console.log(`${z2} je najveci`);
    }
} 
if(z2 < x2) {
    if (z2 > y2) {
        console.log(`${z2} je srednji`);
    } 
} 
if (z2 > x2) {
    if (z2 < y2){
        console.log(`${z2} je srednji`);
    }
}

if (z2 < x2) {
    if (z2 < y2){
        console.log(`${z2} je najmanji`);
    }
}

// 20.
// Učitati dva cela broja i ispitati da li je veći od njih paran. 

let broj1 = 31;
let broj2 = 22;

if (broj1 > broj2) {
    if(broj1 % 2 == 0) {
        console.log(`${broj1} > ${broj2} i paran je`);
    }
}

if (broj2 > broj1) {
    if(broj2 % 2 == 0) {
        console.log(`${broj2} > ${broj1} i paran je`);
    }
}

// 21.
// Naći koji je najveći od tri uneta broja 
// a, b i c, korišćenjem logičkih operatora. 
let a = 50;
let b = 40;
let c = 30;

if (a > b && a > c) {
    console.log(`a:${a} je najveci`);
} else if(b > a && b > c) {
    console.log(`b:${b} je najveci`);
} else {
    console.log(`c:${c} je najveci`);
}

// 22.
// Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

let temp = -15;

if(temp < -15 || temp > 40) {
    console.log("Ekstremna temperatura")
}

// 23.
// Ispitati da li je godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).
// Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.
let prestupna = d.getFullYear();
if ((prestupna % 4 == 0 && prestupna % 100 != 0) || prestupna % 400 == 0) {
    console.log("prestupna");
} else {
    console.log("nije prestupna");
}

// 24.
// Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.

let rStart = 9;
let rEnd = 20;

let vStart = 10;
let vEnd = 18;

let time = d.getHours();
let day = d.getDay();
//0 nedelja 6 subota

if(day == 0 || day == 6) {
    if(time >= vStart && time < vEnd) {
        console.log("Otvoreno");
    } else {
        console.log("Zatvoreno");
    }
} else {
    if(time >= rStart && time < rEnd) {
        console.log("Otvoreno");
    } else {
        console.log("Zatvoreno");
    }
}












