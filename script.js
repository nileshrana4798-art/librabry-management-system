// REGISTER
function registerUser() {
    let user = {
        name: rname.value,
        email: remail.value,
        password: rpassword.value
    };

    if (!user.name || !user.email || !user.password) {
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successful");
    window.location.href = "login.html";
}

// LOGIN
function loginUser() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Register first");
        return;
    }

    if (lemail.value === user.email && lpassword.value === user.password) {
        alert("Login Successful");
        window.location.href = "books.html";
    } else {
        alert("Wrong details");
    }
}

// BOOK DATA
let books = [
    {
        name: "JavaScript Basics",
        author: "John Smith",
        img: "https://covers.openlibrary.org/b/id/10521270-L.jpg"
    },
    {
        name: "HTML & CSS",
        author: "Mark Allen",
        img: "https://covers.openlibrary.org/b/id/10909258-L.jpg"
    },
    {
        name: "Python Programming",
        author: "David Ross",
        img: "https://covers.openlibrary.org/b/id/11153241-L.jpg"
    }
];

function loadBooks() {
    let list = document.getElementById("bookList");
    if (!list) return;

    books.forEach(b => {
        list.innerHTML += `
            <div class="book">
                <img src="${b.img}">
                <h3>${b.name}</h3>
                <p>${b.author}</p>
            </div>
        `;
    });
}

window.onload = loadBooks;
