// let movie2 = {
//     director: {
//         name: "John",
//         last_name: 'dva'
//     },
//     genres: ['drama'],
//     name: 'Adventures of John Doe',
//     rating: 8,
//     release_year: 1995
// }

// let movie3 = {
//     director: {
//         name: "Tri",
//         last_name: 'Doe'
//     },
//     genres: ['history', 'comedy', 'drama'],
//     name: 'Adventures of John Doe',
//     rating: 6,
//     release_year: 2011
// };

// let movie4 = {
//     director: {
//         name: "George",
//         last_name: 'Lucas'
//     },
//     genres: ['history', 'comedy', 'drama'],
//     name: 'Adventures of John Doe',
//     rating: 10,
//     release_year: 1986
// };

// let movie5 = {
//     director: {
//         name: "George",
//         last_name: 'Lucas'
//     },
//     genres: ['horror'],
//     name: 'Adventures of John Doe',
//     rating: 7,
//     release_year: 2020
// };

// db.collection('movies').doc('movie-05')
// .set(movie5, {merge: true}).then(() => {
//     console.log('Movie added sucessfully!');
// })
// .catch(error => {
//     console.log('Error adding task:', error);
// });





// // 2. Menja podatke o nekim filmovima u bazi,
// db.collection('movies').doc('movie-01')
//     .update({
//         name: 'Nije titanik'
//     }).then(() => {
//         console.log('Success!');
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// // 3.Dodaje žanr nekom filmu,
// db.collection('movies').doc('movie-01')
//     .update({
//         genres: firebase.firestore.FieldValue.arrayUnion('catastrophe1')
//     })
//     .then(() => {
//         console.log('Genre added sucessfully');
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// // 4.Briše žanr nekom filmu,
// db.collection('movies').doc('movie-01')
//     .update({
//         genres: firebase.firestore.FieldValue.arrayRemove('catastrophe1')
//     }).then(() => {
//         console.log('Genre removed sucessfully');
//     })
//     .catch((error) => {
//         console.log(error);
//     });



// // 5 .Menja ime ili prezime nekom režiseru.
// db.collection('movies').doc('movie-01')
//     .update({
//         "director.last_name": 'Kameron sa Aliexpresa'
//     }).then(() => {
//         console.log('Director detailes changed sucessfully');
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// Iz kolekcije movies, pročitati sve filmove:
// 1. Koje je režirao George Lucas,


// db.collection('movies')
// .where('director.name', '==', 'George')
// .where('director.last_name', '==', 'Lucas')
// .get()
// .then(document => {
//     document.forEach(doc => {
//         let t = doc.data();
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });



// 2. Čija je ocena između 5 i 10,

// db.collection('movies')
// .where('rating', '>', 5)
// .where('rating', '<', 10)
// .get()
// .then(document => {
//     document.forEach(doc => {
//         let t = doc.data();
//         console.log(t.rating);
//         // console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });

// 3. Kojima je žanr komedija, tragedija ili drama,

// db.collection('movies')
// .where('genres', 'array-contains-any', ['comedy', 'tragedy', 'drama'])
// .get()
// .then(document => {
//     document.forEach(doc => {
//         let t = doc.data();
//         // console.log(t.rating);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });


// 4. Koji su izašli u 21. veku.


// db.collection('movies')
// .where('release_year', '>', 2000)
// .get()
// .then(document => {
//     document.forEach(doc => {
//         let t = doc.data();
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });


// Prikazati sve informacije o najbolje rangiranom filmu.
// db.collection('movies')
// .orderBy('rating', 'desc')
// .limit(1)
// .get()
// .then(document => {
//     document.forEach(doc => {
//         let t = doc.data();
//         console.log(t);
//     });
    
// })
// .catch(err => {
//     console.log(err);
// });


// Prikazati sve informacije o najslabije rangiranoj drami.


db.collection('movies')
.where('genres', 'array-contains', 'drama')
.orderBy('rating', 'asc')
.limit(1)
.get()
.then(document => {
    document.forEach(doc => {
        let t = doc.data();
        console.log(t);
    });
    
})
.catch(err => {
    console.log(err);
});



