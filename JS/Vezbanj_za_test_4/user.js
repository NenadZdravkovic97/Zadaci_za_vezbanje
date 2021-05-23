let blog1 = {
    title: "Cesar",
    likes: 120,
    dislikes: 42
}

let blog2 = {
    title: "Genghis Khan!",
    likes: 50,
    dislikes: 210
}

let blog3 = {
    title: "Hanibal",
    likes: 150,
    dislikes: 20
}

////////////////
// 1. Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.

let user1 = {
    username: "Milica",
    age: 25,
    blogs: [blog1, blog2, blog3]
}

let user2 = {
    username: "Ksenija",
    age: 30,
    blogs: [blog3]
}

let user3 = {
    username: "Lepa Lukic",
    age: 15,
    blogs: [blog2, blog3]
}

let users = [user1, user2, user3];


// 2. Ispisati imena onih autora koji imaju ispod 18 godina

let ispisiMaloletne = (nizUsera) => {
    nizUsera.forEach(user => {
        if (user.age < 18) {
            console.log(user.username);
        }
    });
}

ispisiMaloletne(users);

// 3. Ispisati naslove onih blogova koji imaju više od 50 lajkova

let nasloviIznad50 = (nizUsera) => {
    nizUsera.forEach(user => {
        user.blogs.forEach(blog => {
            if (blog.likes > 50) {
                console.log(blog.title, user.username);
            }
        })
    });
}

nasloviIznad50(users);

// 4. Ispisati sve blogove autora čiji je username ’JohnDoe’
let blogoviUsername = (nizUsera, name) => {
    nizUsera.forEach(user => {
        if (user.username == name) {
            user.blogs.forEach(blog => {
                console.log(blog);
            });
        }
    });
}

blogoviUsername(users, "Ksenija");
blogoviUsername(users, "Milica");
blogoviUsername(users, "Lepa Lukic");

// 5. Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali

let sumLikes = (blogs) => {
    let sum = 0;
    blogs.forEach(blog => {
        sum += blog.likes;
    });
    return sum;
}

let ViseOd100 = (nizUsera) => {
    nizUsera.forEach(user => {
        let likes = sumLikes(user.blogs);
        if (likes > 100) {
            console.log(user.username);
        }
    });
}

ViseOd100(users);

// Drugi nacin

let ViseDo100a = (nizUsera) => {
    nizUsera.forEach(user => {
        let sumLikes = 0;
        user.blogs.forEach(blog => {
            sumLikes += blog.likes;
        });
        if (sumLikes > 100) {
            console.log(user.username);
        }
    });
}

ViseDo100a(users);

// 6. Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena

let nasloviNatprosecneOcene = (nizUsera) => {
    let avgGeneral = 0;
    let sumGeneral = 0;
    let countGeneral = 0;
    nizUsera.forEach(user => {
        user.blogs.forEach(blog => {
            sumGeneral += blog.likes;
            countGeneral++;
        })
    });
    avgGeneral = sumGeneral / countGeneral;

    // ispisujem naslove sa natprosecnim ocenama
    nizUsera.forEach(user => {
        user.blogs.forEach(blog => {
            if (blog.likes > avgGeneral) {
                console.log(blog.title, user.username);
            }
        });
    });
}

nasloviNatprosecneOcene(users);


// 7. Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
let natprosecnePozIispodNeg = (nizUsera) => {
    // prosek likes
    let avgGeneralLikes = 0;
    let sumGeneraLikes = 0;
    let countGeneralLikes = 0;
    nizUsera.forEach(user => {
        user.blogs.forEach(blog => {
            sumGeneraLikes += blog.likes;
            countGeneralLikes++;
        })
    });
    avgGeneralLikes = sumGeneraLikes / countGeneralLikes;
    console.log(avgGeneralLikes);

    // prosek dislikes

    let avgGeneralDislikes = 0;
    let sumGeneradislikes = 0;
    let countGeneraldislikes = 0;
    nizUsera.forEach(user => {
        user.blogs.forEach(blog => {
            sumGeneradislikes += blog.dislikes;
            countGeneraldislikes++;
        })
    });
    avgGeneralDislikes = sumGeneradislikes / countGeneraldislikes;
    console.log(avgGeneralDislikes);

    nizUsera.forEach(user => {
        user.blogs.forEach(blog => {
            if (blog.likes > avgGeneralLikes && blog.dislikes < avgGeneralDislikes) {
                console.log(blog.title, user.username);
            }
        })
    })
}



natprosecnePozIispodNeg(users);



