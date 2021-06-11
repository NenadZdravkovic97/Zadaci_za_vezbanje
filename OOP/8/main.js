import {Student} from "./classes/student.js";

let student1 = new Student('0103997228156', 'lala', 'rara', [8, 8, 8, 7, 7]);
let student2 = new Student('1545000568512', 'lala', 'rara', [8, 7, 8, 9]);
let student3 = new Student('1234010891023', 'lala', 'rara', [10, 10, 8]);
let student4 = new Student('1234965891023', 'lalAaaaa', 'rara', [6, 7, 7, 7, 7, 7]);
let arrStudenti = [student1, student2, student3, student4];
// Napraviti funkciju imePrezime kojoj se prosleđuje ime i prezime, a funkcija vraća broj studenata sa tim imenom i prezimenom.

let imePrezime = (ime, prezime) => {
    let counter = 0;
    arrStudenti.forEach(student => {
        if (student.ime.toLowerCase() == ime.toLowerCase() && student.prezime.toLowerCase() == prezime.toLowerCase()) {
            counter++;
        }
    });
    return counter;
}

console.log(imePrezime('lala', 'rara'));

// Napraviti funkciju srednjaOcena koja ispisuje koja je preosečna ocena svih ocena studenata.

let srednjaOcena = (niz) => {
    let sum = 0;
    let counter = 0;
    niz.forEach(student => {
        student.nizOcena.forEach(ocena => {
            sum += ocena;
            counter++;
        });
    });
    let arsr = sum / counter;
    
    return arsr;
}
console.log(`Prosecna ocena svih studenata je ${srednjaOcena(arrStudenti)}`);

// Napraviti funkciju osrednji koja ispisuje studenta koji ima prosek najbliži srednjoj oceni svih studenata

let osrednji = (niz) => {
    let srednja = srednjaOcena(niz);
    let najblizi = niz[1];
    let najbliziRazlika =Math.abs(najblizi.prosecna - srednja);
    niz.forEach(student => {
        let trenutnaRazlika = Math.abs(student.prosecna - srednja);
        if (trenutnaRazlika < najbliziRazlika) {
            najblizi = student;
        }
    });
    najblizi.ispis();
}

osrednji(arrStudenti)


// Napraviti ocenu najmanjaOcenaNajboljeg koja određuje najboljeg studenta i na ekranu ispisuje njegovu najslabiju ocenu.
let najboljiStudent = (niz) => {
    let max = niz[0];
    for (let i = 0; i < niz.length; i++) {
        let element = niz[i];
        if (element.prosecna > max.prosecna) {
            element = max;
        }
    }
    return max;
}

let najmanjaOcenaNajboljeg = (niz) => {
    let najbolji = najboljiStudent(niz);
    return najbolji.najmanjaOcena();
}

console.log(najmanjaOcenaNajboljeg(arrStudenti));


// Napisati funkciju najmanjaOcena koja vraća koja je najmanja ocena, uzimajući u obzir ocene svih ocena koje su studenti dobijali.

let najmanjaOcena = (niz) => {
    let min = niz[0];
    niz.forEach(student => {
        if (min.najmanjaOcena() > student.najmanjaOcena()) {
            min = student;
        }
    });
    return min.najmanjaOcena();
}

console.log(najmanjaOcena(arrStudenti));

najmanjaOcena(arrStudenti)

// Napisati funkciju najcescaOcena koja vraća ocenu koju su studenti najčešće dobijali. 
let najcescaOcena = (niz) => {
    let arr = [];
    niz.forEach(student => {
        student.nizOcena.forEach(ocena => {
            arr.push(ocena);
        });
    });
    // arr je napunjen
    // definisi objekat
    let count = {};
    let max = arr[0];
    arr.forEach(element => {
        if (count[element] != undefined) {
            count[element]++
        } else {
            count[element] = 1;
        }

        if (count[element] > count[max]) {
            max = count[element]
        }
    });
    // console.log(count);
    // console.log(max);
    return max;
}

console.log(`najcesca ocena je ${najcescaOcena(arrStudenti)}`);

// Napisati funiciju rodjeniGodine kojoj se prosleđuje godina, a funkcija na ekranu ispisuje sve studente koji su rodjeni te godine. Godinu rođenja preuzeti (odrediti) iz JMBG-a studenta.
// student1.godinaRodjenja()
// student2.godinaRodjenja()
// student3.godinaRodjenja()
// student4.godinaRodjenja()

let rodjeniGodine = (godina) => {
    arrStudenti.forEach(student => {
        if(student.godinaRodjenja() == godina) {
            console.log(student);
            console.log(student.godinaRodjenja());
        }
        // console.log(student.godinaRodjenja());
    });
}


rodjeniGodine(2000)



