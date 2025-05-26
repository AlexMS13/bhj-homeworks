

const book = document.getElementById('book');
const toggles = document.querySelectorAll('.book__control');

toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) =>{
        e.preventDefault();
        let sel = toggle.children;
        let attr = e.target.attributes[2];
        for (let i = 0; i < sel.length; i++) {            
            let prop = e.target.classList[0];                
            if (sel[i].classList.contains(`${prop}`+'_active')) {
                sel[i].classList.remove(`${prop}`+'_active');
                e.target.classList.add(`${prop}`+'_active');
                }
        }
        if (e.target.parentElement.classList.contains('book__control_font-size') /*|| e.target.classList.contains('color')*/) {                    
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');            
            if (attr) {book.classList.add('book_fs-' + attr.value.replace("size", ""));}
        }
        if (e.target.parentElement.classList.contains('book__control_color')) {
            book.classList.remove('book_color-gray');
            book.classList.remove('book_color-whitesmoke');
            book.classList.remove('book_color-black');
            book.classList.add('book_color-' + attr.value);
        }
        if (e.target.parentElement.classList.contains('book__control_background')) {
            book.classList.remove('book_bg-black');
            book.classList.remove('book_bg-gray');
            book.classList.remove('book_bg-white');
            book.classList.add('book_bg-' + attr.value);
        }        
    })
})