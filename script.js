// REGISTER
function registerUser() {
    let name = rname.value;
    let email = remail.value;
    let password = rpassword.value;

    if (!name || !email || !password) {
        alert("All fields required");
        return;
    }

    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    alert("Registration Successful");
    window.location.href = "login.html";
}

// LOGIN
function loginUser() {
    let email = lemail.value;
    let password = lpassword.value;
    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Please register first");
        return;
    }

    if (email === user.email && password === user.password) {
        alert("Login Successful");
        window.location.href = "books.html";
    } else {
        alert("Wrong details");
    }
}

// BOOKS
let books = [
    { name: "JavaScript Basics", author: "John Smith", img: "https://covers.openlibrary.org/b/id/10521270-L.jpg" },
    { name: "HTML & CSS", author: "Mark Allen", img: "https://covers.openlibrary.org/b/id/10909258-L.jpg" },
    { name: "Python Programming", author: "David Ross", img: "https://covers.openlibrary.org/b/id/11153241-L.jpg" }
];

function loadBooks() {
    let list = document.getElementById("bookList");
    if (!list) return;

    books.forEach(book => {
        let div = document.createElement("div");
        div.className = "book";
        div.innerHTML = `
            <img src="${book.img}">
            <h3>${book.name}</h3>
            <p>${book.author}</p>
            <button onclick="alert('Book Issued')">Issue</button>
        `;
        list.appendChild(div);
    });
}

window.onload = loadBooks;
