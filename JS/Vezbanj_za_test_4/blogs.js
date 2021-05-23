let blog1 = {
    title: "Cesar",
    likes: 120,
    dislikes: 42
}

let blog2 = {
    title: "Genghis Khan!",
    likes: 200,
    dislikes: 210
}

let blog3 = {
    title: "Hanibal",
    likes: 140,
    dislikes: 69
}

let blogs = [blog1, blog2, blog3];

// 1. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let ispisiPozitivne = (nizBlogova) => {
    nizBlogova.forEach(blog => {
        if (blog.likes > blog.dislikes) {
            console.log(blog.title);
        }
    });
}
ispisiPozitivne(blogs);

// 2.Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let duploViseLikes = (nizBlogova) => {
    nizBlogova.forEach(blog => {
        if (blog.likes > blog.dislikes * 2) {
            console.log(blog.title);
        }
    });
}
duploViseLikes(blogs);

// 3. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = (nizBlogova) => {
    nizBlogova.forEach(blog => {
        if (blog.title.endsWith('!')) {
            console.log(blog.title)
        }
    });
}

uzvicnik(blogs);
