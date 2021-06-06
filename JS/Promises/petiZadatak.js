// Nadovezati se na prethodni zadatak i nakon ispisane liste voća u paragrafu ispisati ukupnu težina svog voća u kilogramima. Zatim, ispod liste povrća u paragrafu ispisati ukupnu težinu povrća u kilogramima. Postaviti da asinhrona funkcija vraća zbir količina voća i povrća u kilogramima. Pri pozivu asinhrone funkcije, ispisati  ovu vrednost.


// let getFruits = async () => {
//     let response = await fetch("./JSON/fruits.json");
//     let data;
//     if (response.status != 200) {
//         throw new Error('Ne mogu da dohvatim podatke');
//     } else {
//         data = await response.json();
//         let lista = document.createElement('ul');
//         let p = document.createElement('p');
//         let h3 = document.createElement('h3');
//         h3.textContent = 'Voce';
//         let sum = 0;
//         data.forEach(element => {
//             let li = document.createElement('li');
//             li.textContent = element.name;
//             lista.appendChild(li)
//             sum += parseInt(element.tezina);
//         });
//         p.textContent = `Ukupna tezina voca je ${sum}`;
//         document.body.appendChild(h3);
//         document.body.appendChild(lista);
//         document.body.appendChild(p);
//         return sum;
//     }
// }

// let getVegetables = async () => {
//     let response = await fetch("./JSON/vegetables.json");
//     let data;
//     if (response.status != 200) {
//         throw new Error('Ne mogu da dohvatim podatke');
//     } else {
//         data = await response.json();
//         let lista = document.createElement('ul');
//         let p = document.createElement('p');
//         let h3 = document.createElement('h3');
//         h3.textContent = 'Povrce';
//         let sum = 0;
//         data.forEach(element => {
//             let li = document.createElement('li');
//             li.textContent = element.name;
//             lista.appendChild(li)
//             sum += parseInt(element.tezina);
//         });
//         p.textContent = `Ukupna tezina povrca je ${sum}`;
//         document.body.appendChild(h3);
//         document.body.appendChild(lista);
//         document.body.appendChild(p);
//         return sum;
//     }
// }


// let writeAndSum = (fruits, vegetables) => {
//     let ukupna = null;
//     fruits().then(sum => {
//         ukupna = sum;
//         return vegetables();
//     }).then(sum => {
//         ukupna += sum;
//         let h1 = document.createElement('h1');
//         h1.textContent = `Ukpuna tezina voca i povrca je ${ukupna}`;
//         document.body.appendChild(h1);
//     }).catch(err => {
//         console.log(err);
//     })
// }

// writeAndSum(getFruits, getVegetables);

let fruitAndVegSum = async () => {
    let response = await fetch("./JSON/fruits.json");
    let data;
    let sum = 0
    if (response.status != 200) {
        throw new Error('Ne mogu da dohvatim podatke');
    } else {
        data = await response.json();
        let lista = document.createElement('ul');
        let p = document.createElement('p');
        let h3 = document.createElement('h3');
        h3.textContent = 'Voce';
        let sumVoce = 0;
        data.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element.name;
            lista.appendChild(li)
            sum += parseInt(element.tezina);
            sumVoce += parseInt(element.tezina);
        });
        p.textContent = `Ukupna tezina voca je ${sumVoce}`;
        document.body.appendChild(h3);
        document.body.appendChild(lista);
        document.body.appendChild(p);
    }

    response = await fetch("./JSON/vegetables.json");
    if (response.status != 200) {
        throw new Error('Ne mogu da dohvatim podatke');
    } else {
        data = await response.json();
        let lista = document.createElement('ul');
        let p = document.createElement('p');
        let h3 = document.createElement('h3');
        h3.textContent = 'Povrce';
        let sumPovrce = 0;
        data.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element.name;
            lista.appendChild(li)
            sum += parseInt(element.tezina);
            sumPovrce += parseInt(element.tezina);
        });
        p.textContent = `Ukupna tezina voca je ${sumPovrce}`;
        document.body.appendChild(h3);
        document.body.appendChild(lista);
        document.body.appendChild(p);
    }
    return sum;

}

fruitAndVegSum().then(sum => {
    let h1 = document.createElement('h1');
    h1.textContent = `Ukupna tezina voca i povrca je ${sum}`;
    document.body.appendChild(h1);
}).catch(err => {
    console.log(err);
});