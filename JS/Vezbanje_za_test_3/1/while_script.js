// 1.
// Ispisati brojeve od 1 do 20:
// a. Svaki u istom redu
// b. Svaki u novom redu

// a 

let i = 1;
let k = "";
while (i <= 20) {
    k = k + " " +  i;
    i++;
}

console.log(k);



// b.

i = 1;
while (i <= 20) {
    console.log(i);
    i++;
}


// 2.
// Ispisati brojeve od 20 do 1.

i = 20;

while (i >= 1) {
    console.log(i);
    i--
}


// 3.
// Ispisati parne brojeve od 1 do 20.

i = 1;
while (i <= 20) {
    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}


// 4.
// Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

i = 0;
let n = 11;

/*
1 % 3 1
2 % 3 2
3 % 3 0
4 % 3 1 
5 % 3 2


*/

while (i<=n) {
    if (i % 3 == 0) {
        document.body.innerHTML += `<p style="color:red;">Lorem</p>`;
    }
    
    if(i % 3 == 1) {
        document.body.innerHTML += `<p style="color:green;">Lorem</p>`;
    } 
    
    if(i % 3 == 2) {
        document.body.innerHTML +=`<p style="color:blue;">Lorem</p>`;
    }
    i++;
}


// 5.
// Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
i = 1;
n = 10;

while (i <= n) {
    if (i % 2 == 0) {
        document.body.innerHTML += `<img class="okvir1" src="img/female.png" >`;
    } else {
        document.body.innerHTML += `<img class="okvir2" src="img/male.jfif" >`;
    }

        
    i++;
}


// /Ciklicno prikazivanje tri slike
// 120120120
i = 1;
n = 10;
while (i <= n) {
    let ost = i % 3;
    console.log(ost);
    document.body.innerHTML += `<img src="img/${ost + 1}.jpg" >`
    i++
}


// 6.
// Odrediti sumu brojeva od 1 do 100
i = 1;
let sum = 0;
while (i <= 100) {
    sum = sum + i;
    i++;
}
console.log(sum);

// 7.
// Odrediti sumu brojeva od 1 do n
i = 1;
n = 100;
sum = 0;
while (i <= n) {
    sum = sum + i;
    i++;
}
console.log(sum);

// 8.
// Odrediti sumu brojeva od n do m
n = 1;
let m = 100;
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
let proizvod = 1;

while (n <= m) {
    proizvod = proizvod * n;
    n++;
}

console.log(proizvod);

// 10.
// Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m
i = 1;
let sumKvadrataP = 0;
let sumKubovaN = 0;

while (i <= 5) {
    if (i % 2 == 0) {
        sumKvadrataP = sumKvadrataP + i**2;
    } else {
        sumKubovaN = sumKubovaN + i**3;
    }



    i++;
}

console.log(sumKvadrataP);
console.log(sumKubovaN);

// 11.
// Odrediti sa koliko brojeva je deljiv uneti broj k
i = 1;
k = 11;
let brojac = 0;

while (i <= 100) {
    if (i % k == 0) {
        brojac++;
    }

    i++;
}

console.log(brojac);


// 12.
// Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
i = 2; // 1 deli svaki broj zbog toga pocinjemo sa 2
n = 41;

while (i <= n/2) {
    if (n % i == 0) {
        console.log(`broj ${n} nije prost`);
        break;
    }
    i++;
}

if (i > n/2) { // proverava da li smo uostete usli u petlju
    console.log(`broj ${n} je prost`);
}











