let blog1 = {
    title: "Lazanja!",
    likes: 29,
    dislikes: 15
}

let blog2 = {
    title: "Pica!",
    likes: 51,
    dislikes: 69
}

let blog3 = {
    title: "Pasulj",
    likes: 160,
    dislikes: 40
}


// Users
let user1 = {
    username: "Nenad",
    age: "24",
    blogs: [blog1, blog2, blog3]
}

let user2 = {
    username: "Milica",
    age: "21",
    blogs: [blog1, blog2]
}

let user3 = {
    username: "Svarog",
    age: "15",
    blogs: [blog1, blog3]
}

/* 1. Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat. */

let users = [user1, user2, user3];

// 2. Ispisati imena onih autora koji imaju ispod 18 godina

users.forEach(user => {
    let age = user.age;
    if (age < 18) {
        console.log(user.username);
    }
});


// 3. Ispisati naslove onih blogova koji imaju više od 50 lajkova

users.forEach(user => {
    user.blogs.forEach(blog => {
        if (blog.likes > 50) {
            console.log(blog.title, user.username)
        }
    });
});


// 4. Ispisati sve blogove autora čiji je username ’JohnDoe’
users.forEach(user => {
    if (user.username == "Svarog") {
        user.blogs.forEach(blog => {
            console.log(blog);
        });
    }
});
            
    

