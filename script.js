const bookList = [];
const getTitle = document.getElementById('getTitle');
const getAuthor = document.getElementById('getAuthor');
const bookContainer = document.getElementById('bookList');
let enterInfo = document.forms[0];
let counter = 0;

class Book {
    constructor(name, author, read) {
        this.name = name;
        this.author = author;
        this.read = read;
    }
};

function readState(state) {
    state == false ? 'Not Read' : 'Read';
}    

function render() {
    bookContainer.innerHTML = '';
    bookList.forEach((book) => {        

        book.container = document.createElement('div');        
        bookContainer.append(book.container);
        book.container.className = 'bookContainer';
            book.titleRender = document.createElement('h3');
            book.titleRender.innerHTML = book.name;
            book.container.append(book.titleRender);
            
            book.writerRender = document.createElement('h3');
            book.writerRender.innerHTML = book.author;
            book.container.append(book.author);

            book.readButton = document.createElement('button')
            book.read == false ? 
                book.readButton.innerHTML = 'Not Read'
                :
                book.readButton.innerHTML = 'Read'
            book.container.append(book.readButton);
            book.readButton.className = 'readButton';
            book.readButton.id = 'readButton' + bookList.indexOf(book);
            document.getElementById('readButton' + bookList.indexOf(book)).addEventListener('click', e => {
                e.stopPropagation;
                console.log(book.read)
                if (book.read == false) {
                    book.read = true;
                }
                else {
                    book.read = false;
                }
                console.log('button still works');
                render();
            });

            book.removeButton = document.createElement('button')       
            book.removeButton.innerHTML = 'Remove Book';        
            book.container.append(book.removeButton);
            book.removeButton.className = 'removeButton';        
            book.removeButton.id = 'removeButton' + bookList.indexOf(book);
            document.getElementById('removeButton' + bookList.indexOf(book)).addEventListener('click', e => {
                e.stopPropagation();
                bookList.splice(bookList.indexOf(book), 1);
                render();
            })
        });
}

function clearForm() {
    getTitle.value = '';
    getAuthor.value = '';
}

document.getElementById('enterInfo').addEventListener('submit', e => {
    e.preventDefault();
    const addedBook = new Book(getTitle.value, getAuthor.value, false);
    bookList.push(addedBook);
    render();
    clearForm();
});

render();