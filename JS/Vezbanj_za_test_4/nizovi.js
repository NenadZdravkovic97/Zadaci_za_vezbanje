// 1.
// Ispisati sve elemente niza od 5 stringova.
let ispisiNiz = (niz) => {
    niz.forEach(element => {
        console.log(element);
    });
}


let niz = ['prvi', 'drugi', 'treci', 'cetvrti', 'peti'];
ispisiNiz(niz);


// 2.
// Odrediti zbir elemenata celobrojnog niza.
let zbir = (nizBrojeva) => {
    let sum = 0;
    nizBrojeva.forEach(broj => {
        sum += broj;
    });
    return sum;
}

niz = [1, 2, 3, 4, 5, 6];
console.log(zbir(niz));


// 3. 
// Odrediti proizvod elemenata celobrojnog niza.

let proizvod = (nizBrojeva) => {
    let proizvod = 1;
    nizBrojeva.forEach(broj => {
        proizvod *= broj;
    });
    return proizvod;
}

console.log(proizvod(niz));

// 4.
// Odrediti srednju vrednost elemenata celobrojnog niza.

let arsr = (nizBrojeva) => {
    let sum = zbir(nizBrojeva);
    let arsr = sum / nizBrojeva.length;
    return arsr;
}

console.log(arsr(niz));

// 5. 
// Odrediti maksimalnu vrednost u celobrojnom nizu.

let max = (nizBrojeva) => {
    let max = nizBrojeva[0];
    nizBrojeva.forEach(broj => {
        if (broj> max) {
            max = broj;
        }
    });
    return max;
}

niz = [5, 15, 22, 4, 44];
console.log(max(niz));

// 6. 
// Odrediti minimalnu vrednost u celobrojnom nizu.

let min = (nizBrojeva) => {
    let min = nizBrojeva[0];
    nizBrojeva.forEach(broj => {
        if (broj < min) {
            min = broj;
        }
    });
    return min;
}

niz = [5, 2, 58, 4, 44];
console.log(min(niz));


// 7. 
// Odrediti indeks maksimalnog elementa celobrojnog niza.
let indexMax = (nizBrojeva) => {
    let maks = max(nizBrojeva);
    let index = 0;
    nizBrojeva.forEach((broj, i) => {
        if (broj == maks) {
            index = i;
        }
    });
    return index;
}

console.log(indexMax(niz));


// 8.
// Odrediti indeks minimalnog elementa celobrojnog niza.

let indexMin = (nizBrojeva) => {
    let minimal = min(nizBrojeva);
    let index = 0;
    nizBrojeva.forEach((broj, i) => {
        if (broj == minimal) {
            index = i;
        }
    });
    return index;
}

console.log(indexMin(niz));


// 9.
// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let brojVecihOdArsr = (nizBrojeva) => {
    let srednja = arsr(nizBrojeva);
    let counter = 0;
    nizBrojeva.forEach(broj => {
        if (broj > srednja) {
            counter++;
        }
    });
    return counter;
}
niz = [25, 12, 25, 14, 44];

console.log(brojVecihOdArsr(niz));

// 10. 
// Izračunati zbir pozitivnih elemenata celobrojnog niza.

let zbirPoz = (nizBrojeva) => {
    let sum = 0;
    nizBrojeva.forEach(broj => {
        if (broj > 0) {
            sum += broj;
        }
    });
    return sum;
}
niz = [1, -2, 3, 4, 5];
console.log(zbirPoz(niz));

// 11.
// Odrediti broj parnih elemenata u celobrojnom nizu.

let numEven = (nizBrojeva) => {
    let counter = 0;
    nizBrojeva.forEach(broj => {
        if (broj % 2 == 0) {
            counter++;
        }
    });
    return counter;
}

niz = [1, 2, 3, 4, 5, 6, 6, 8, 10, 10];
console.log(numEven(niz));

// 12.
// Odrediti broj parnih elemenata sa neparnim indeksom.
let evenNumUnevenIndex = (nizBrojeva) => {
    let counter = 0;
    nizBrojeva.forEach((broj, i) => {
        if (broj % 2 == 0 && i % 2 != 0) {
            counter++;
        }
    });
    return counter;
}

console.log(evenNumUnevenIndex(niz));

// 13.
// Izračunati sumu elemenata niza sa parnim indeksom.

let zbirParniIndex = (nizBrojeva) => {
    let sum = 0;
    nizBrojeva.forEach((broj, i) => {
        if (i % 2 == 0) {
            sum +=broj;
        }
    });
    return sum;
}
niz = [1, 2, 3, 4, 5, 6, 6, 8, 10, 10, 1];

console.log(zbirParniIndex(niz));

// 14.
// Promeniti znak svakom elementu celobrojnog niza.


let promeniZnak = (nizBrojeva) => {
    for (let i = 0; i < nizBrojeva.length; i++) {
        nizBrojeva[i] = -nizBrojeva[i];
    }
    console.log(nizBrojeva);   
}

promeniZnak(niz);


// 15
//  Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let promeniZnakOdd = (nizBrojeva) => {
    for (let i = 0; i < nizBrojeva.length; i++) {
        if(nizBrojeva[i] % 2 != 0 && i % 2 == 0) {
            nizBrojeva[i] = -nizBrojeva[i];
        }        
    }
    console.log(nizBrojeva);
}

niz = [0, 3, 5, 4, 5, 7];
promeniZnakOdd(niz);

// 16.
// Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let listaKupovina = (korpa) => {
    let lista = `<ul>`;
    korpa.forEach(elem => {
        lista += `<li>${elem}</li>`;
    });
    lista += `</ul>`;
    return lista;
}

let items = ["jabuke", "kruske", "sljive"];
let ispisi = listaKupovina(items);
document.body.innerHTML += ispisi;

// 17.
// Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let ispisiTabelu = (niz) => {
    let tabela = `<table>`;
    niz.forEach(element => {
        tabela += `<tr><td>${element}</td></tr>`;
    });
    tabela += `</table>`;
    return tabela;
}

let imena = ["Boston", "Dallas", "Nuggets"];
ispisi = ispisiTabelu(imena);
document.body.innerHTML += ispisi;

// 18.
// Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let ispisiSlike = (putanje) => {
    putanje.forEach(putanja => {
        document.body.innerHTML += `<img src="${putanja}" >`;
        console.log(putanja)
    });
}

let imagesPath = [`img/1.jpg`, `img/2.jpg`, `img/3.jpg`];
ispisiSlike(imagesPath);

// 19.
// Ispisati dužinu svakog elementa u nizu stringova. 

let ispisiDuzinu = (niz) => {
    niz.forEach(element => {
        console.log(element.length);
    });
}

niz = ['1', '123', '123456', '1234'];
ispisiDuzinu(niz);