// 1.
// Ispisati sve elemente niza od 5 stringova.
let ispisi5 = (niz) => {
    niz.forEach(element => {
        console.log(element);
    });
}

let niz = ['ja', 'sam', 'prvi', 'zadatak', 'tralala'];
ispisi5(niz);

// 2.
// Odrediti zbir elemenata celobrojnog niza.


let brojevi = [1, 2, 3, 4, 5, 6];

let zbirNiz = (niz) => {
    let sum = 0;
    niz.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(zbirNiz(brojevi));

// 3.
// Odrediti proizvod elemenata celobrojnog niza.
let proizvodNiz = (niz) => {
    let proizvod = 1;
    niz.forEach(element => {
        proizvod *= element;
    });
    return proizvod;
}

console.log(proizvodNiz(brojevi));

// 4.
// Odrediti srednju vrednost elemenata celobrojnog niza.

let srednjaVrednost = (niz) => {
    let sum = 0;
    let counter = 0
    niz.forEach(element => {
        sum += element;
        counter++;
    });
    let arsr = sum / counter;
    return arsr;
}

console.log(srednjaVrednost(brojevi));

// 5.
// Odrediti maksimalnu vrednost u celobrojnom nizu.
let maxNiz = (niz) => {
    let max = niz[0];
    for (let i = 0; i < niz.length; i++) {
        if (max < niz[i]) {
            max = niz[i];
        }        
    }
    return max; 
}

brojevi = [5, 80, 15, 170, 2, 1];
console.log(maxNiz(brojevi));

// 6.
// Odrediti minimalnu vrednost u celobrojnom nizu.
let minNiz = (niz) => {
    let min = niz[0];
    for (let i = 0; i < niz.length; i++) {
        if (min > niz[i]) {
            min = niz[i];
        }        
    }
    return min; 
}

console.log(minNiz(brojevi));


// 7.
// Odrediti indeks maksimalnog elementa celobrojnog niza.
let indexMaxNiz = (niz) => {
    let max = niz[0];
    let index = 0
    for (let i = 0; i < niz.length; i++) {
        if (max < niz[i]) {
            max = niz[i];
            index = i;
        }        
    }
    return index; 
}

console.log(indexMaxNiz(brojevi));


// 8.
// Odrediti indeks minimalnog elementa celobrojnog niza.
brojevi = [5, 1, 15, 170, 2, 10];

let indexMinNiz = (niz) => {
    let min = niz[0];
    let index = 0;
    niz.forEach((el, i) => {
        if (min > el) {
            min = el;
            index = i;
        }
    });
    return index;
}
console.log(indexMinNiz(brojevi));


// 9.
// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
//vec imam inzad funkciju koja odredjuje srendju vrednost pa necu da je dupliram
brojevi = [1, 20, 10, 14, 5, 2, 11, 12];

let veceOdSrednjeV = (niz, srednjaVF) => {
    let counter = 0;
    niz.forEach((e) => {
        if (e > srednjaVF) {
            counter++;
        }
    });
    return counter;
}

console.log(`Broj brojeva koji su veci od srednje vrednosti je ${veceOdSrednjeV(brojevi, srednjaVrednost(brojevi))}`);

// 10.
// Izračunati zbir pozitivnih elemenata celobrojnog niza.

brojevi = [-1, 20, 10, -14, 5, -2, 11, 12, 2, -15, 12, 13];

let sumaPoz = (niz) => {
    let sum = 0;
    niz.forEach((e) => {
        if(e > 0) {
            sum += e;
        }
    });
    return sum;
}

console.log(sumaPoz(brojevi));


// 11.
// Odrediti broj parnih elemenata u celobrojnom nizu.

let brojParnih = (niz) => {
    let counter = 0;
    niz.forEach((e) => {
        if (e % 2 == 0) {
            counter++;
        }
    });
    return counter;
}

console.log(brojParnih(brojevi));


// 12.
// Odrediti broj parnih elemenata sa neparnim indeksom.
brojevi = [-1, 20, 10, -14, 5, -2, 11, 12, 2, -15, 12, 13, 12, 40, 10];
//          0   1   2   3   4   5   6   7   8   9   10  11

let parni_sa_neparnim_indexom = (niz) => {
    let counter = 0;
    niz.forEach((e, i) => {
        if(e % 2 == 0 && i % 2 != 0) {
            counter++;
        }
    });
    return counter;
}

console.log(parni_sa_neparnim_indexom(brojevi));


// 13.
// Izračunati sumu elemenata niza sa parnim indeksom.

let suma_sa_parnim_indexom = (niz) => {
    let sum = 0;
    niz.forEach((e, i) => {
        if (i % 2 == 0) {
            sum += e;
        }
    });
    return sum;
}

console.log(suma_sa_parnim_indexom(brojevi));

// 14.
// Promeniti znak svakom elementu celobrojnog niza.

brojevi = [1, 2, -5, 8, -9, 12];

let promeniZnak = (niz) => {
    for (let i = 0; i < niz.length; i++) {
        niz[i] = -niz[i];
    }
    return niz;
}
        
console.log(promeniZnak(brojevi));

// 15.
// Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
let promeniSvakiNeparni = (niz) => {
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 != 0 && i % 2 == 0) {
            niz[i] = -niz[i]
        }        
    }
    return niz;
}

brojevi = [1, 2, -5, 8, -9, 12];
//          0  1  2  3   4   5
console.log(promeniSvakiNeparni(brojevi));

// 16.
// Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.


let ispisiListu = (niz) => {
    let tabela = `<ul>`;
    niz.forEach((e) => {
        tabela += `<li>${e}</li>`;
    });
    tabela += '</ul>';
    document.body.innerHTML += tabela;
}
let kupovina = ['jagode', 'jabuke', 'mesina', 'cvarci', 'kavurma', 'jos cvaraka'];
ispisiListu(kupovina);

// 17.
// Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let napraviTabelu = (niz) => {
    let table = `<table>`;
    niz.forEach((e) => {
        table += `<tr><td>${e}</td></tr>`;
    });
    table += `</table`;
    document.body.innerHTML += table;
}

let timovi = ['Nuggets', 'LA', 'Raptors', 'Boston'];

napraviTabelu(timovi);


// 18.
// Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let ispisiSlike = (niz) => {
    niz.forEach((e) => {
        document.body.innerHTML += `<img src="${e}" >`;
    });
}


let putanje = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/male.jfif', 'img/female.png'];

ispisiSlike(putanje);


// 19.
// Ispisati dužinu svakog elementa u nizu stringova. 

let duzinaEl = (niz) => {
    niz.forEach((e) => {
        console.log(`Duzina elementa ${e} je ${e.length}`);
    })
}
timovi = ['Nuggets', 'LA', 'Raptors', 'Boston'];

duzinaEl(timovi);

// 20.
// Odrediti element u nizu stringova sa najvećom dužinom.

let najduziEl = (niz) => {
    najduzi = niz[0].length;
    element = niz[0];
    niz.forEach((e) => {
        if (najduzi < e.length) {
            najduzi = e.length;
            element = e;
        }
    })
    return element;
}
timovi = ['Nuggets', 'LaaaaaaaaaaaaA', 'Raptors', 'Boston'];


console.log(najduziEl(timovi));

// 21.
// Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let brojEluStr = (niz) => {
    let sum = 0;
    niz.forEach((e) => {
        let duzina = e.length;
        sum += duzina;
    });
    let arsr = sum / niz.length;
    let counter = 0;
    niz.forEach((e) => {
        if (e.length > arsr) {
            counter++
        }
    });
    return counter;
}

timovi = ['Nuggets', 'La', 'Raptors', 'Boston', 'Miami', '12345678'];

console.log(brojEluStr(timovi));

// 22.
// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

let find_letter_a = (niz) => {
    let counter = 0;
    niz.forEach((e) => {
        if (e.includes('a')) {
            counter++;
        }
    });
            
    return counter;
}
let slovoA = ['Jabuka', 'Knjiga', 'Tresnja', 'Red', 'Zelen', 'Atlas'];
console.log(`Broj reci koje sadrze slovo 'a' je ${find_letter_a(slovoA)}`);
// find_letter_a(slovoA);


// 23.
// Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 

let find_letter_a_or_A = (niz) => {
    let counter = 0;
    niz.forEach((e) => {
        // console.log(`duzina je ${e.length}`)
        if (e[0].includes('a') || e[0].includes('A')) {
            counter++;
        }
        
    });
    return counter;
}


slovoA = ['JabukA', 'KnjigA', 'Aprililili', 'Red', 'Zelen', 'atlas', 'Agencija'];
console.log(`Broj reci koje sadrze slovo 'a' je ${find_letter_a_or_A(slovoA)}`);
// find_letter_a_or_A(slovoA);


// 24.
// niz a = a[0], a[1], ... a[n-1];
// niz b =  a[0], a[1], ... a[b-1];
// niz c = a[0], b[0] ...

let zadatak24 = (niz1, niz2, niz3) => {
    niz3 = [];
    for (let i = 0; i < niz1.length; i++) {
        niz3.push(niz1[i]);
        niz3.push(niz2[i]);
    }
    return niz3;
}



let A = [1, 2, 3, 4, 5];
let B = [1, 2, 3, 4, 5];

console.log(zadatak24(A, B))


// 25.
// niz a = a[0], a[1], ... a[n-1];
// niz b =  a[0], a[1], ... a[b-1];
// niz c = a[0] * b[0] ...

let zadatak25 = (niz1, niz2, niz3) => {
    niz3 = [];
    for (let i = 0; i < niz1.length; i++) {
        niz3.push(niz1[i] * niz2[i]);
        
    }
    return niz3;
}

console.log(zadatak25(A, B));


// 26.
// Na osnovu niza a = a[0], a[1], ... a[n-1]; formirati niz a[0], a[1], ... a[b-1]; po formuli b[i] = (a[i] + a[2n - 1 - i]) / 2;


let zadatak26 = (niz1) => {
    niz2 = [];
    let n = niz1.length;
    for (let i = 0; i < niz1.length/2; i++) {
        firstNum = niz1[i];
        secondNum = niz1[n - 1 - i];
        let sum = (firstNum + secondNum) / 2;
        niz2.push(sum);
    }
    return niz2;
    
}

let a = [3, 5, 9, 6, 7, 1];
console.log(zadatak26(a));