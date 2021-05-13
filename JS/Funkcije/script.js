// 1.
// Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.

let izracunajVreme = (hP, mP, hS, mS) => {
    let minutiP = (hP * 60) + mP;
    let minutiS = (hS * 60) + mS;
    let letMin = minutiS - minutiP;
    let letH = Math.floor(letMin / 60);
    let letM = letMin % 60;
    console.log(`Let je trajao ${letH} sati i ${letM} minuta`);
}

izracunajVreme(10, 20, 19, 46);


// drugi nacin, bez prevodjenja u minute i nazad

let izracunajVreme2 = (hP, mP, hS, mS) => {
    let h = hS - hP;
    let m = mS - mP;
    console.log(`Let je trajao ${h} sati i ${m} minuta`);
}

izracunajVreme(10, 20, 19, 46);


// 2.
// Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša. Napisati funkciju koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.


let jaban = (jabuka, banana) => {
    let ostecenoJ = Math.floor(jabuka - (jabuka * 0.2))
    let receptJabuka = Math.floor(ostecenoJ / 2);
    let receptBanana = Math.floor(banana / 3);
    let brojKolaca = 0;
    if (receptJabuka < receptBanana) {
        brojKolaca = receptJabuka;
    } else {
        brojKolaca = receptBanana;
    }
    return brojKolaca;
}

console.log(jaban(30, 40));
console.log(jaban(50, 60));
console.log(jaban(100, 60));
console.log(jaban(100, 125));

jaban(31, 5);

// 3.
// Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//  Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).


let praksa = (n, a) => {
    let d = 10000;
    let plata = a;
    let ukupnoNovca = 0;
    for (let i = 1; i <= n; i++) {
        ukupnoNovca += plata;
        plata += d;
    }
    return ukupnoNovca;
}

console.log(praksa(3, 20000, 10000));
console.log(praksa(4, 20000, 10000));


// 4.
// Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s
let igra = (t, p, n) => {
    let cekanje = 0;
    if(t < p || p + n <= t) {
        cekanje = 0;
    } else {
        // cekanje = p + n - t; 
        let v = t - p;
        cekanje = n - v;
    }

    return cekanje;
}
/*u else granu moze da ide i ovo cekanje = p + n - t; */

console.log(igra(15, 10, 12));
console.log(igra(15, 18, 34));