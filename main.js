let myLibrary = [];

function Book(name, title, pages, readStatus){
    this.name = name;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus
}

function addBookToLibrary(){

    newAuthor = prompt("Author Name");
    newTitle = prompt("Book Name");
    newPageCount = prompt("How Many Pages?");
    newReadStatus = prompt("Have You Read it?", "(Yes or No)");

    var newBook = new Book(newAuthor, newTitle, newPageCount, newReadStatus);
    myLibrary.push(newBook);

    fillLibrary();
}

function fillLibrary(){
    document.getElementById("BookTable").innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++){
        document.getElementById("BookTable").innerHTML += "<tr id=\"" + i + "\">" + 
        "<td>" + myLibrary[i].name + "</td>" + 
        "<td>" + myLibrary[i].title + "</td>" + 
        "<td>" + myLibrary[i].pages + "</td>" + 
        "<td>" + myLibrary[i].readStatus + "</td>" + 
        "<td>" + "<button onclick=\"removeBook(" + i + ", " + 1 + ")\">Remove</button>" + "</td>" +
        "</tr>"
    }
}

function removeBook(start, end){
    myLibrary.splice(start, end);
    console.log(myLibrary.length)
    fillLibrary();
}