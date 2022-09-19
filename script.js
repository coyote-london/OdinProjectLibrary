const bookList = [];
const getTitle = document.getElementById('getTitle');
const getAuthor = document.getElementById('getAuthor');
const bookContainer = document.getElementById('bookList');
let enterInfo = document.forms[0];
let counter = 0;

class Book {
    constructor(name, author, readState) {
        this.name = name;
        this.author = author;
        this.readState = readState;
    }
    changeReadState() {
        if (this.readState = 'Not Read') this.readState = 'Read';
        else this.readState = 'Not Read';
    }    
};

function render() {
    bookContainer.innerHTML = '';
    bookList.forEach((book) => {        

        container = document.createElement('div');        
        bookContainer.append(container);
        container.className = 'bookContainer';
            title = document.createElement('h3');
            title.innerHTML = book.name;
            container.append(title);
            
            author = document.createElement('h3');
            author.innerHTML = book.author;
            container.append(author);

            readButton = document.createElement('button')
            readButton.innerHTML = book.readState;
            container.append(readButton);
            readButton.className = 'readButton';
            readButton.id = 'readButton' + bookList.indexOf(book);
            document.getElementById('readButton' + bookList.indexOf(book)).addEventListener('click', e => {
                e.stopPropagation;
                book.changeReadState();
                console.log('button still works');
                render();
            });

            removeButton = document.createElement('button')       
            removeButton.innerHTML = 'Remove Book';        
            container.append(removeButton);
            removeButton.className = 'removeButton';        
    });
}

function clearForm() {
    getTitle.value = '';
    getAuthor.value = '';
}

document.getElementById('enterInfo').addEventListener('submit', e => {
    e.preventDefault();
    const addedBook = new Book(getTitle.value, getAuthor.value, 'Not Read');
    bookList.push(addedBook);
    render();
    clearForm();
});

render();