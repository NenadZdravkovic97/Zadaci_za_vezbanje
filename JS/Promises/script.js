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
        data.forEach(element => {
            console.log(element.name);
        });
    }

    response = await fetch("./JSON/vegetables.json");
    if (response.status != 200) {
        throw new Error('Ne mogu da dohvatim podatke');
    } else {
        data = await response.json();
        data.forEach(element => {
            console.log(element.name);
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

let getFruits = async () => {
    let response = await fetch("./JSON/fruits.json");
    let data;
    if (response.status != 200) {
        throw new Error('Ne mogu da dohvatim podatke');
    } else {
        data = await response.json();
    }

    return data;
}

let getVegetables = async () => {
    let response = await fetch("./JSON/vegetables.json");
    let data;
    if (response.status != 200) {
        throw new Error('Ne mogu da dohvatim podatke');
    } else {
        data = await response.json();
    }
    return data;
}


// getFruits().then(data => {
//     let h3 = document.createElement('h3');
//     h3.textContent = 'Fruits';
//     let lista = document.createElement('ul');
//     let p = document.createElement('p');
//     let sumVoce = 0;
//     data.forEach(element => {
//         let li = document.createElement('li');
//         li.textContent = element.name;
//         lista.appendChild(li);
//         sumVoce += parseInt(element.tezina);
//     });
//     p.textContent = `Ukunpa tezina voca je ${sumVoce} kg`;
//     document.body.appendChild(h3);
//     document.body.appendChild(lista);
//     document.body.appendChild(p);
//     return getVegetables(); 
// }).then(data =>{
//     let h3 = document.createElement('h3');
//     h3.textContent = 'Vegetables';
//     let lista = document.createElement('ul');
//     let p = document.createElement('p');
//     let sumPovrce = 0;
//     data.forEach(element => {
//         let li = document.createElement('li');
//         li.textContent = element.name;
//         lista.appendChild(li);
//         sumPovrce += parseInt(element.tezina);
//     });
//     p.textContent = `Ukunpa tezina voca je ${sumPovrce} kg`;
//     document.body.appendChild(h3);
//     document.body.appendChild(lista);
//     document.body.appendChild(p);
//     let allP = document.querySelectorAll('p');
//     let sumVocePovrce = 0;
//     allP.forEach(p => {
//         let regex = /\d+/g;
//         let string = p.textContent;
//         let strNum = string.match(regex);  
//         let num = parseInt(strNum);
//         sumVocePovrce += num;
//     });
//     let h1 = document.createElement('h1');
//     h1.textContent = `Zbir kg voca i povrca je ${sumVocePovrce}`;
//     document.body.appendChild(h1);
// }).catch(err => {
//     console.log('reject', err);
// });


