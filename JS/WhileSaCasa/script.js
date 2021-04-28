// 1.
// Ispisati brojeve od 1 do 20:
// Svaki u istom redu
// Svaki u novom redu


// Svaki u istom redu
let i = 1;
while (i <= 20) {
    console.log(i);
    i++;
}

// Svaki u novom redu
i = 1;
let k = "";
while ( i <= 20) {
    k = k +" "+i;
    i++;
}
console.log(k);

// 2.
// Ispisati brojeve od 20 do 1.
i = 20;
while (i >= 1) {
    console.log(i);
    i--;
}
console.log("treci zadatak");
// 3.
// Ispisati parne brojeve od 1 do 20.
i = 1;
while (i <= 20) {
    if (i%2 == 0) {
        console.log(i);
    }
    i++;
}

// 4.
// Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje
i = 1;
let n = 9;

/*
1 % 3 == 1;
2 % 3 == 2;
3 % 3 == 0;
4 % 3 == 1;
5 % 3 == 2;


*/

while (i <= n) {
    if (i % 3 == 1) {
        document.body.innerHTML += `<p style="color: red;">Ovo je ${i} paragraf</p>`;
    } else if (i % 3 == 2) {
        document.body.innerHTML += `<p style="color: green;">Ovo je ${i} paragraf</p>`;
    } else {
        document.body.innerHTML += `<p style="color: blue;">Ovo je ${i} paragraf</p>`;
    }
    
    i++;
}

// 5.
// Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
i= 1;
n = 20;
/**
1 % 2 = 1;
2 % 2 = 0;
3 % 2 = 1;
4 % 2 = 0;
5 % 2 = 1;
 */


while (i <= n) {
    if (i % 2 == 1) {
        document.body.innerHTML += `<img class="dotted" src="slike/1.jpg" >`;
    } else {
        document.body.innerHTML += `<img class="solid" src="slike/1.jpg" >`;
    }
    i++;
}

// 6.
// Odrediti sumu brojeva od 1 do 100

i = 0;
let sum = 0; // Neutralan broj pri sabiranju
while (i <= 100) {
    sum = sum + i;
    i++;
}
console.log(sum);

// 7.
// Odrediti sumu brojeva od 1 do n

i = 1;
n = 50;
sum = 0;
while (i <= n) {
    sum = sum +i;
    i++;
}
console.log(sum);

// 8.
// Odrediti sumu brojeva od n do m
n = 50;
m = 100;
sum = 0;
while (n <= m) {
    sum = sum + n;
    n++;
}
console.log(sum);

// 9.
// Odrediti proizvod brojeva od n do m
n = 1;
m = 5;
let proizvod = 1; // neutralan u mnozenju
while (n <= m) {
    proizvod = proizvod * n;
    n++;
}
console.log(proizvod);

// 10.
// Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 1;
m = 5;
let sumaKvadrataP = 0;
let sumaKubN = 0;
while (n <= m) {
    if (n % 2 == 0) {
        sumaKvadrataP = sumaKvadrataP + n**2;
    } else {
        sumaKubN = sumaKubN + n**3;
    }


    n++;
}

console.log(sumaKvadrataP);
console.log(sumaKubN);

// 11.
// Odrediti sa koliko brojeva je deljiv uneti broj k

k = 10;
i = 1;
let brojac = 0;
while ( i <= k) {
    if ( k % i == 0) {
        brojac++;
    }
    i++;
}
console.log(brojac);

// 12.
// Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.





