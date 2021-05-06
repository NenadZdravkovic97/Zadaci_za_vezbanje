// 1.
// Za dva uneta broja ispisati koji je veći a koji je manji.

let x = 5;
let y = 6;

if (x > y) {
    console.log(`${x} > ${y}`);
} else {
    console.log(`${y} > ${x}`);
}


// 2.
// Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.

let t = 30;

if (t < 0) {
    console.log("minus");
} else {
    console.log("plus");
}


// 3.
// U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar.

let pol = "z";


if (pol == "m") {
    document.body.innerHTML += `<img src="img/male.jfif" >`;
}
if(pol == "z") {
    document.body.innerHTML += `<img src="img/female.png" >`;
}

// 4.
// U odnosu na preuzete vrednosti AM i PM sa svog računara, ispisati da li je trenutno jutro ili popodne.

let d = new Date();
let hours = d.getHours();

let AmOrPm = hours >= 12 ? "pm" : "am";

hours = (hours % 12) || 12;

let minutes = d.getMinutes();

let finalTime = `${hours}:${minutes} ${AmOrPm}"`;

console.log(finalTime);

if (hours < 12) {
    console.log(`jutro je sada je ${finalTime}`);
} else {
    console.log(`vece je sada je ${finalTime}`);
}

// 5.
// Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.

let god = d.getFullYear();
let osobaGodR = 2004;

let osobaGod = god - osobaGodR;


if (osobaGod >= 18) {
    console.log("punpletna");
} else {
    console.log("maloletna");
}

// 6.
// Odrediti najveći od tri uneta broja

x = 5;
y = 4;
let z = 3;
let najveci = x;

if (y > x && y > z) {
    najveci = y;
} 

if (z > x && z > y) {
    najveci = z;
}

console.log(najveci);


// 7.
// Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit.
// Za više od 50 poena učenik dobija ocenu 6,
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8,
// za više od 80 poena učenik dobija ocenu 9 i
// za više od 90 poena učenik dobija ocenu 10.

let poeni = 50;

switch (true) {
    case poeni > 90:
        console.log("10");
        break;

    case poeni > 80 && poeni <= 90:
        console.log("9");
        break;

    case poeni > 70 && poeni <= 80:
        console.log("8");
        break;

    case poeni > 60 && poeni <= 70:
        console.log("7");
        break;

    case poeni > 50 && poeni <= 60:
        console.log("6");
        break;


    default:
        console.log("Pao si");
        break;
}

// 8.
// Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.

let dan = d.getDay();

if (dan == 0 || dan == 6) {
    console.log("Vikend");
} else {
    console.log("Radni dan");
}

// 9.
// Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati popodne i u ostalim  slučajevima ispisati dobro veče.

let h = d.getHours();

if (h < 12) {
    console.log("Dobro jutro");
} else if( h > 12 && h < 18) {
    console.log("Dobar dan");
} else {
    console.log("Dobro vece");
}

// 10.
// Uporediti dva uneta datuma i ispisati koji od njih je raniji.

let datum1 = "2020-05-06";
let datum2 = "2020-05-08";

if (datum1 > datum2) {
    console.log("Datum2 je raniji");
} else {
    console.log("Datum 1 je raniji");
}

// 11.
// Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

let pocetak = 9;
let kraj = 17;

if(h >= pocetak && h < kraj) {
    console.log("radi");
} else {
    console.log("Ne radi");
}

// 12.
// Za uneto početno i krajnje radno vreme dva lekara, ispitati koliko sati i minuta se njihove smene preklapaju.

// Ulaz (vrednosti koje samostalno dodeljujete promenljivama) : 
    // Početak radnog vremena u satima i minutima za prvog lekara (pocSatLek1 i pocMinLek1)
    // Kraj radnog vremena u satima i minutima za prvog lekara (krajSatLek1 i krajMinLek1)
    // Počezak radnog vremena u satima i minutima za drugog lekara (pocSatLek2 i pocMinLek2)
    // Kraj radnog vremena u satima i minutima za drugog lekara (krajSatLek1 i krajMinLek1)

// Izlaz (vrednosti koje treba ispisati na ekranu i proizvoljno ih stilizovati) :
    // Početak radnog vremena prvog lekara (izraženo u satima i minutima)
    // Kraj radnog vremena prvog lekara (izraženo u satima i minutima)
    // Početak radnog vremena drugog lekara (izraženo u satima i minutima)
    // Kraj radnog vremena drugog lekara (izraženo u satima i minutima)
    // Vreme koje su prvi lekar i drugi lekar zajedno proveli na poslu (izraženo u satima i minutima). Ukoliko nema preklapanja u radnim vremenima ova dva lekara, na ekranu ispisati da nema preklapanja.

let pocSatLek1 = "12";
let pocMinLek1 = "00";
let krajSatLek1 = "17";
let krajMinLek1 = "10";

let pocSatLek2 = "13";
let pocMinLek2 = "00";
let krajSatLek2 = "18";
let krajMinLek2 = "20";

let pocetakLek1 = `${pocSatLek1}:${pocMinLek1}`;
document.body.innerHTML += `<h2 class="prvi">Pocetak radnog vremena prvog lekara je ${pocetakLek1}</h2>`;

let krajLek1 = `${krajSatLek1}:${krajMinLek1}`;
document.body.innerHTML += `<h2 class="prvi">Kraj radnog vremena prvog lekara je ${krajLek1}</h2>`;

let pocetakLek2 = `${pocSatLek2}:${pocMinLek2}`;
document.body.innerHTML += `<h2 class="drugi">Pocetak radnog vremena prvog lekara je ${pocetakLek2}</h2>`;

let krajLek2 = `${krajSatLek2}:${krajMinLek2}`;
document.body.innerHTML += `<h2 class="drugi">Kraj radnog vremena prvog lekara je ${krajLek2}</h2>`;

// Vreme koje su prvi lekar i drugi lekar zajedno proveli na poslu (izraženo u satima i minutima). Ukoliko nema preklapanja u radnim vremenima ova dva lekara, na ekranu ispisati da nema preklapanja.

// Ovde pretvaram vreme iz string-a u integer da bih mogao da vrsim racunanje
let intpocSatLek1 = parseInt(pocSatLek1); 
let intpocMinLek1  = parseInt(pocMinLek1 ); 
let intkrajSatLek1 = parseInt(krajSatLek1); 
let intkrajMinLek1 = parseInt(krajMinLek1); 


let intpocSatLek2 = parseInt(pocSatLek2); 
let intpocMinLek2 = parseInt(pocMinLek2); 
let intkrajSatLek2 = parseInt(krajSatLek2); 
let intkrajMinLek2 = parseInt(krajMinLek2); 

// vreme od ponoci za oba lekara

let prviPocetakOdPonoci = intpocSatLek1 * 60 + intpocMinLek1;
// console.log(prviPocetakOdPonoci)

let prviKrajOdPonoci = intkrajSatLek1 * 60 + intkrajMinLek1;
// console.log(prviKrajOdPonoci);

let drugiPocetakOdPonoci = intpocSatLek2 * 60 + intpocMinLek2;
// console.log(drugiPocetakOdPonoci)

let drugiKrajOdPonoci = intkrajSatLek2 * 60 + intkrajMinLek2;
// console.log(drugiKrajOdPonoci);

let proveliZajedno = 0;
// let minutiUsate = proveliZajedno / 60;
// let rsati = Math.floor(minutiUsate);
// let minuti = (minutiUsate - rsati) *60;
// let rminuti = Math.round(minuti);

if ((prviKrajOdPonoci <= drugiPocetakOdPonoci) || (drugiKrajOdPonoci <= prviPocetakOdPonoci)) {
    document.body.innerHTML += `<h1>Ne preklapaju se</h1>`;
}

if ((prviPocetakOdPonoci < drugiPocetakOdPonoci) && (prviKrajOdPonoci < drugiKrajOdPonoci)) {
    proveliZajedno = prviKrajOdPonoci - drugiPocetakOdPonoci;
}

if ((prviPocetakOdPonoci < drugiPocetakOdPonoci) && (prviKrajOdPonoci > drugiKrajOdPonoci)) {
    proveliZajedno = drugiKrajOdPonoci - drugiPocetakOdPonoci;
}

if ((drugiPocetakOdPonoci < prviPocetakOdPonoci) && (drugiKrajOdPonoci < prviKrajOdPonoci)) {
    proveliZajedno = drugiKrajOdPonoci - prviPocetakOdPonoci;
}

if ((drugiPocetakOdPonoci < prviPocetakOdPonoci) && (drugiKrajOdPonoci > prviPocetakOdPonoci)) {
    proveliZajedno = prviKrajOdPonoci - prviPocetakOdPonoci;
}

let minutiUsate = proveliZajedno / 60;
let rsati = Math.floor(minutiUsate);
let minuti = (minutiUsate - rsati) *60;
let rminuti = Math.round(minuti);
// console.log(`proveli su zajendo ${rsati} i ${rminuti} minuta`)
document.body.innerHTML += `<h1>Proveli su zajendo ${rsati} i ${rminuti} minuta</h1>`;


// 13.
// Za uneti broj ispitati da li je paran ili nije.

let paran = 19;

if(paran % 2 == 0) {
    console.log("paran");
} else {
    console.log("nije");
}

// 14.
// Za uneti broj ispisati da li je deljiv sa 3 ili ne.

let deljivSa3 = 27;

if(deljivSa3 % 3 == 0) {
    console.log("Da");
} else {
    console.log("Ne");
}

// 15.
// Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.
x = 45;
y = 20;
let res;
if(x > y) {
    res = x - y;
} else {
    res = y - x;
}

console.log(res);

// 16.
// Za uneti broj ispitati da li je on manji ili veći od nule. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.
z = -20;
if (z <= 0) {
    z--;
} else {
    z++;
}
console.log(z);

// 17.
// Za tri uneta broja ispisati koji od njih ne najveći, koji od njih je srednji, a koji od nih je najmanji. 
x = 40;
y = 50;
z = 30;

// maks

let max = x;

if(z > max) {
    max = z;
}

if(y > max) {
    max = y;
}

//min

let min = x;

if(z < min) {
    min = z;
}

if(y < min) {
    min = y;
}

//mid

let mid = (x + y + z) - (min + max);

console.log(max);
console.log(mid);
console.log(min);


// 18.
// Za učitani broj ispitati da li je ceo.

x = -50;

if (x % 1 == 0) {
    console.log("ceo");
} else {
    console.log("nije ceo");
}

// 19.
// Učitati dva cela broja i ispitati da li je veći od njih paran. 

x = 4;
y = 30;
if (x % 1 == 0 && y % 1 == 0) {
    if(x > y) {
        if(x % 2 == 0) {
            console.log(`${x} je veci od ${y} i paran je`);
        }
    }else if(y > x) {
        if(y % 2 == 0) {
            console.log(`${y} je veci od ${x} i paran je`);
        }
    }
}

// 20.
// Naći koji je najveći od tri uneta broja $a, $b i $c.

let a = 50;
let b = 40;
let c = 30;

if (a > b && a > c) {
    console.log(a);
} else if (b > c && b > a) {
    console.log(b);
} else {
    console.log(c);
}

// 21.
// Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih  i veća od 40 stepeni Celzijusovih.

t = -16;

if ( t < -15 || t > 40) {
    console.log("ekstremna temperatura");
}


// 22.
// Ispitati da li je godina prestupna. (Godinu preuzeti sa vremena na Vašem računaru). Prestupna je ona godina koja je deljiva sa 4, ako nije deljiva sa 100, mada ipak jeste deljiva sa 400.

let year = d.getFullYear();

if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("prestupna");
}


// 23.
// Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.
let hB = d.getHours();
let dayB = d.getDay();

let startR = 9;
let endR = 20;

let startV = 10;
let endV = 18;

if (dayB == 0 || dayB == 6) {
    if(hB >= startV && hB < endV) {
        console.log("otvoreno");
    } else {
        console.log("zatvoreno");
    }
} else {
    if(hB >= startR && hB < endR) {
        console.log("otvoreno");
    } else {
        console.log("zatvoreno");
    }
}
