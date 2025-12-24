function addBook() {
    let bookName = document.getElementById("bookName").value;
    let authorName = document.getElementById("authorName").value;

    if (bookName === "" || authorName === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("bookList");

    let row = table.insertRow();
    row.insertCell(0).innerText = bookName;
    row.insertCell(1).innerText = authorName;
    row.insertCell(2).innerText = "Available";

    let actionCell = row.insertCell(3);

    let issueBtn = document.createElement("button");
    issueBtn.innerText = "Issue";
    issueBtn.className = "issue";
    issueBtn.onclick = function () {
        if (row.cells[2].innerText === "Available") {
            row.cells[2].innerText = "Issued";
            issueBtn.innerText = "Return";
        } else {
            row.cells[2].innerText = "Available";
            issueBtn.innerText = "Issue";
        }
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function () {
        table.deleteRow(row.rowIndex - 1);
    };

    actionCell.appendChild(issueBtn);
    actionCell.appendChild(deleteBtn);

    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
}
