let blog1 = {
    title: "Lazanja!",
    likes: 29,
    dislikes: 15
}

let blog2 = {
    title: "Pica!",
    likes: 50,
    dislikes: 69
}

let blog3 = {
    title: "Pasulj",
    likes: 160,
    dislikes: 40
}

let arrBlogs = [blog1, blog2, blog3];


// 1. Napisati foreach petlju koja ispisuje sve naslove iz niza objekata

arrBlogs.forEach(blog => {
    console.log(blog.title);
});

// 2. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let sumLikes = (nizObj) => {
    let sum = 0;
    nizObj.forEach(element => {
        sum += element.likes;
    });
    return sum;
}

console.log(sumLikes(arrBlogs));

// 3.
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosekLikes = (nizObj) => {
    let sum = sumLikes(nizObj);
    let prosek = sum / nizObj.length;
    return prosek;
}

console.log(prosekLikes(arrBlogs));

// 4. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let pozitivne = (nizObj) => {
    nizObj.forEach(blog => {
        if (blog.likes > blog.dislikes) {
            console.log(blog.title);
        }
    });
}

pozitivne(arrBlogs);

// 5. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let duploViseLikes = (nizObj) => {
    nizObj.forEach(element => {
        if (element.likes >= element.dislikes * 2) {
            console.log(element.title);
        }
    });
}

duploViseLikes(arrBlogs);

// 6. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom


let uzvicnik = (nizObj) => {
    nizObj.forEach(element => {
        if (element.title.endsWith("!")) {
            console.log(element.title);
        }
    }); 
}

uzvicnik(arrBlogs);