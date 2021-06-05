// 1. Iz fajla fruits.json dohvatiti i u konzoli ispisati svo voće koje u svom nazivu sadrži reč “berries” (koristiti fatch)

let getBerries = async () => {
    let response = await fetch("./JSON/fruits.json");
    let data = undefined;
    if (response.status != 200) {
        throw new Error('Ne mogu da dohvatim podatke');
    } else {
        data = await response.json();
    }

    return data;
}

getBerries().then( (data) => {
    data.forEach(element => {
        let name = element.name.toLowerCase();
        if (name.includes('berries')) {
            console.log(element.name);
        }
    });
}).catch((err) => {
    console.log('rejected', err);
});

// 2.U fajlu fruits.json prebojati i u konzoli ispisati koliko naziva voća ne sadrži u svom imenu reč “berries (koristiti fatch)

getBerries().then(data => {
    let counter = 0;
    data.forEach(element => {
        let name = element.name.toLowerCase();
        if (!name.includes('berries')) {
            counter++;
        }
    });
    console.log(`${counter} voca ne sadrzi naziv 'berries`);
}).catch(err => {
    console.log('rejected', err);
});

// 3.Ispisati u konzoli najpre sve nazive voća iz fajla fruits.json, zatim u konzoli ispisati sve nazive povrća iz fajla vegetables.json (koristiti DOM, async i await).


// 1. nacin
let writeFruitsAndVegetables = async() => {
    let response = await fetch("./JSON/fruits.json");
    let data = undefined;
    if (response.status != 200) {
        throw new Error('Ne mogu da dohvatim podatke');
    } else {
        data = await response.json();
        let lista = document.createElement('ul');
        data.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element.name;
            lista.appendChild(li);
            document.body.appendChild(lista);
        });
    }

    response = await fetch("./JSON/vegetables.json");
    if (response.status != 200) {
        throw new Error('Ne mogu da dohvatim podatke');
    } else {
        data = await response.json();
        let lista = document.createElement('ul');
        data.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element.name;
            lista.appendChild(li);
            document.body.appendChild(lista);
        });
    }
}

writeFruitsAndVegetables();


// 2. Nacin
// let getFruits = async () => {
//     let response = await fetch("./JSON/fruits.json");
//     let data;
//     if (response.status != 200) {
//         throw new Error('Ne mogu da dohvatim podatke');
//     } else {
//         data = await response.json();
//     }

//     return data;
// }

// let getVegetables = async () => {
//     let response = await fetch("./JSON/vegetables.json");
//     let data;
//     if (response.status != 200) {
//         throw new Error('Ne mogu da dohvatim podatke');
//     } else {
//         data = await response.json();
//     }
//     return data;
// }

// getFruits().then(data => {
//     let lista = document.createElement('ul');
//         data.forEach(element => {
//             let li = document.createElement('li');
//             li.textContent = element.name;
//             lista.appendChild(li);
//             document.body.appendChild(lista);
//         });
// }).catch(err => {
//     console.log('rejected', err);
// })


// getVegetables().then(data => {
//     let lista = document.createElement('ul');
//         data.forEach(element => {
//             let li = document.createElement('li');
//             li.textContent = element.name;
//             lista.appendChild(li);
//             document.body.appendChild(lista);
//         });
// }).catch(err => {
//     console.log('rejected', err);
// })

// 4. Ispisati naslov treće veličine (h3) “Fruits”, zatim iza njega u neuređenoj listi ispisati sve nazive voća iz fruits.json fajla. Potom ispisati naslov “Vegetables” iza koga sledi neuređena lista sa nazivima povrća iz vegetables.json fajla. (koristiti DOM, async i await).




