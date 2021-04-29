// 1.
// Ispisati brojeve od 1 do 20 
let i;
for( i = 1; i <= 20; i++) {
    console.log(i);
}

// 2.
// Ispisati brojeve od 20 do 1 
for(i = 20; i >=1; i--) {
    console.log(i);
}

// 3.
// Ispisati parne brojeve od 1 do 20 

for( i = 1; i <= 20; i++) {
    if ( i % 2 == 0) {
        console.log(i);
    }
}

// 4.
// Ispisati dvostruku vrednost brojeva od 5 do 15

for( i = 5; i <= 15; i++) {
    console.log(i*2);
}

// 5.
// Odrediti sumu brojeva od 1 do n

let sum = 0;
let n = 10;

for(i=1; i <= n; i++) {
    sum += i;
}
console.log(sum);

// 6.
// Odrediti sumu brojeva od n do m

sum = 0;
n = 1;
let m = 10;

for(i=n; i <= m; i++) {
    sum += i;
}
console.log(sum);


// 7.
// Odrediti proizvod brojeva od n do m
n = 1;
m = 5;
let proizvod = 1;
for (i=n; i <=m; i++) {
    proizvod *= i;
}
console.log(proizvod);

// 8.
// Odrediti sumu kvadrata brojeva od n do m *
n = 1;
m = 6;
sum = 0;
for (i=n; i <=m; i++) {
    sum += i**2;
}
console.log(sum);

// 9.
// Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
n=10
for (i = 1; i <= n; i++){
    let ost = i % 3; /* 0, 1, 2, 3 */
    document.body.innerHTML += `<img src="slike/${ost + 1}.jpg" >`;
}

// 10.
// Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *
proizvod = 1;
for (i = 20; i <= 100; i++) {
    if(i % 11 == 0) {
        proizvod *= i;
    }
}

console.log(`Proizvod brojeva od 20 do 100 deljivih sa 11 je  ${proizvod}`);

// 11.
// Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
let brojac = 0;
for (i = 5; i <= 150; i++) {
    if(i % 13 == 0) {
        brojac++;
    }
}

console.log(brojac);

// 12.
// Ispisati aritmetičku sredinu brojeva od n do m.

n = 1;
m = 7;
sum = 0;
brojac = 0

for (i = n; i <= m; i++) {
    sum +=i;
    brojac++
}

let arsr = sum/brojac;
console.log(arsr);

// 13.
// Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *

n = -20;
m = 50; 
let brojPoz = 0;
let brojNeg = 0;
for (i = n; i <= m; i++) {
    if (i == 0) {
        console.log(`Nula je neutralan broj`);
    } else if ( i < 0) {
        brojNeg++;
    } else {
        brojPoz++;
    }
}

console.log(`broj pozitivnih brojeva je ${brojPoz}`);
console.log(`broj negativnih brojeva je ${brojNeg}`);

// 14.
// Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *
brojac = 0;
for (i = 5; i <= 50; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        brojac++;
    }
}

console.log(brojac);


// 15.
// Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.

n = 1;
m = 50;
brojac = 0;
sum = 0;

for (i = n; i <= m; i++) {
    if(i % 10 == 4 && i % 2 == 0) {
        sum += i;
        brojac++;
        console.log(i)
    }
}
console.log(`Suma je ${sum}`);
console.log(`Brojac je ${brojac}`);

// 16.
// Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

n = 1;
m = 10;
a = 3;
sum = 0;

for(i = n; i <= m; i++) {
    if(i % a != 0) {
        sum += i;
    }
}
console.log(sum);


// 17.
// Odrediti proizvod brojeva od n do m koji su deljivi brojem a *
n = 1;
m = 5;
a = 3;
proizvod = 1;

for(i = n; i <= m; i++) {
    if(i % a != 0) {
        proizvod *= i;
    }
}
console.log(proizvod);

// 18.
// Napraviti tabelu sa 6 redova.
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 

document.write("<table>")

for(i = 1; i <= 6; i++) {
    if( i % 2 == 0) {
        
    document.write(`
        <tr class="obojen">
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>`)
    } 
    if ( i % 2 != 0) {
        document.write(`
        <tr>
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>`)
    }
}




document.write("</table>")


// 19.
// Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.



document.write("<ul>")

for (i = 1; i <=10; i++){
    document.write(`
        <li>Element ${i}</li>
        `);

    if ( i % 3 == 0) {
        document.write("<ul>");
            document.write(`
            <li class="obojen2">Element ${i}</li>
            ` );
        document.write("</ul>");
    }
    }
    


document.write("</ul>")

// 20.
// Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju.

document.write("<div>")

for (i = 1; i <= 64; i++) {
    if ( i >=1 && i <= 8) {
        document.write(`<span>${i}</span>`)
        if( i == 8) {
            document.write(`<br>`)
            document.write(`<br>`)
        }
    } else if (i > 8 && i <= 16) {
        document.write(`<span>${i}</span>`)
        if( i == 16) {
            document.write(`<br>`)
            document.write(`<br>`)
        }
    } else if (i > 16 && i <= 24) {
        document.write(`<span>${i}</span>`)
        if( i == 24) {
            document.write(`<br>`)
            document.write(`<br>`)
        }
    } else if (i > 24 && i <= 32) {
        document.write(`<span>${i}</span>`)
        if( i == 32) {
            document.write(`<br>`)
            document.write(`<br>`)
        }
    } else if (i > 32 && i <= 40) {
        document.write(`<span>${i}</span>`)
        if( i == 40) {
            document.write(`<br>`)
            document.write(`<br>`)
        }
    } else if (i > 40 && i <= 48) {
        document.write(`<span>${i}</span>`)
        if( i == 48) {
            document.write(`<br>`)
            document.write(`<br>`)
        }
    } else if (i > 48 && i <= 56) {
        document.write(`<span>${i}</span>`)
        if( i == 56) {
            document.write(`<br>`)
            document.write(`<br>`)
        }
    } else {
        document.write(`<span>${i}</span>`)
    }


}

// document.write(`<span>${i}</span>`)
document.write("</div>")


// 21.
// Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table. 
// U realizaciji ovog zadatka koristiti for petlju.








