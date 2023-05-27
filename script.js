let open = document.getElementById('addBook');
let modalContainer = document.getElementById('modalContainer');
let closeBtn = document.getElementById('close-outline')
let library = document.getElementById('libraryContainer');
const myForm = document.getElementById('myForm');
const submitBtn = myForm.elements['submit'];

const myLibrary = [];

function closeModal () {
    modalContainer.classList.add('hidden');
}

function createBookCard () {
    myLibrary.forEach(function(book){
        let bookElement = document.createElement('div');
        let bookInfoElement = document.createElement('div');
        bookElement.classList.add('bookElement');
        bookInfoElement.classList.add('bookInfoElement');

        bookInfoElement.textContent = "Book name:" + book.bookName +
                                    " Author: " + book.author +
                                    "Pages: " + book.pages;
        bookElement.appendChild(bookInfoElement);
        libraryContainer.appendChild(bookElement);
    })
};


myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let bookNameInput = myForm.elements['book-name'].value.trim();
    let authorInput = myForm.elements['author'].value.trim();
    let pages = myForm.elements['pages'].value.trim();
    let checkbox = myForm.elements['checkbox'].value.trim();
    let newBook = {
        bookName: bookNameInput,
        author: authorInput,
        pages: pages,
        checkbox: checkbox
    };


    if (bookNameInput === '' || authorInput === '' || pages === '') {
        e.preventDefault();
        alert('Please fill in all the required fields.')
    } else {
        myLibrary.push(newBook);
        closeModal();
        myForm.reset();
        createBookCard();
    }

   
});

open.addEventListener('click', function(){
    modalContainer.classList.remove('hidden');
    document.body.style.overflow = '';
});


closeBtn.addEventListener('click', function (){
    modalContainer.classList.add('hidden');
    document.body.style.overflow = 'hidden';
});











//creates a form element