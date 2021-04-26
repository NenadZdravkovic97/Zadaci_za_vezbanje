// 1.
// Za uneto vreme u satima i minutima, izračunati koliko minuta je prošlo od ponoći 

let s = 12;
let m = 56;

let odPonoci = ( s * 60 ) + m;
console.log(`Od ponoci je proslo ${odPonoci} minuta`);

let doPonoci = 24*60 - odPonoci;
console.log(doPonoci);

// 2.
// Za uneto vreme u satima i minutima, izračunati koliko minuta je prošlo od ponoći 
// g - 12-hour format of an hour (1 to 12)
// G - 24-hour format of an hour (0 to 23)
// h - 12-hour format of an hour (01 to 12)
// H - 24-hour format of an hour (00 to 23)
//         	i - Minutes with leading zeros (00 to 59)
// date_default_timezone_set('Europe/Belgrade'); - promena vremenske zone

//  $sati = date('G');
//  $minuti = date('i');

let d = new Date();
let sati = d.getHours('G')
let minuti = d.getMinutes('i');

let odPonoci2 = ( sati * 60 ) + minuti;
console.log(odPonoci2);

let doPonoci2 = 24*60 - odPonoci2;
console.log(doPonoci2);

// 3.
// Za unetu cenu robe, unetu novčanicu kojom kupac plaća račun ispisati koliki kusur kasirka treba da mu vrati.

let cena = 500;
let novac = 1000;

let kusur = novac - cena;
console.log(kusur);

// 4.
// Konverzija valute iz evra u dinare (i obrnuto).

//evri u dinare
let evro = 5;
let dinari = 11700;
let kursEvra = 117;

let eUd = evro * kursEvra;
console.log(eUd);
let dUe = dinari / kursEvra;
console.log(dUe);

// 5.
// Konverzija kursa iz dolara u evre, ako znamo dinarsku protivvrednost dolara i dinarsku protivvrednost evra 

let dolar = 5;
let kursDolara = 100;
let nKursEvra = 118;

let dUdin = dolar * kursDolara;
// 500
let dinUEvr = dUdin / nKursEvra;
console.log(`${dolar} dolara je ${dinUEvr} evra`);


// 6.
// Temperatura iz Celzijusa u Farenhajte i obrnuto
// f = c * 1.8 +32

let c = 30;

let cUf = c * 1.8 + 32;
console.log(cUf);

let fUc = (cUf - 32 ) / 1.8;
console.log(fUc)

// 7.
// Temperatura iz Celzijusa u Kelvine i obrnuto.
// k = c +273.15
let cUk = c + 273.15;
console.log(cUk);
let kUc = cUk - 273.15;
console.log(kUc);

// 8.
// Izvršiti konverziju zapremine iz galona u litre i obratno, ako važi da je:
// 1 galon = 3.785 litara.

let galon = 10;
let litar = 10;

let gUl = galon * 3.785;
console.log(gUl);

let lUg = litar / 3.785;
console.log(lUg);



