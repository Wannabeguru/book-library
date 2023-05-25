let open = document.getElementById('addBook');
let modalContainer = document.getElementById('modalContainer');
let closeBtn = document.getElementById('close-outline')
const myForm = document.getElementById('myForm');
const submitBtn = myForm.elements['submit'];
const myLibrary = [];

function closeModal () {
    modalContainer.classList.remove('show');
}

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const bookNameInput = myForm.elements['book-name'].value;
    const authorInput = myForm.elements['author'].value;
    const pages = myForm.elements['pages'].value;
    const checkbox = myForm.elements['checkbox'].value;
    closeModal();
    myForm.reset();


});

open.addEventListener('click', function(){
    modalContainer.classList.add('show');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function (){
    modalContainer.classList.remove('show');
    document.body.style.overflow = '';
});











//creates a form element