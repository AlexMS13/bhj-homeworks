

const book = document.getElementById('book');
const toggles = document.querySelectorAll('.book__control');

//const toggles = document.querySelectorAll('[class*="font-size_"');


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
        
        
        /*
        for (let i = 0; i < sel.length; i++) {

            if (sel[i].classList.contains('font-size_active')) {
                sel[i].classList.remove('font-size_active'); 
            }

            if (sel[i].classList.contains('color_active')) {
                sel[i].classList.remove('color_active');
            }
        }

        if (e.target.classList.contains('font-size')) {
            e.target.classList.add('font-size_active');
        }
        if (e.target.classList.contains('color')) {
            e.target.classList.add('color_active');
        }
        */

    })
})

















/*
toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) =>{
        e.preventDefault();
        console.log(toggle.children[2]);
*/
        /*
        let attr = e.target.attributes[2];
        //document.querySelector('.font-size_active').classList.remove('font-size_active');
        if (attr && e.target.classList.contains('font-size')) {
            //console.log(attr.name + ': ' + attr.value + ' -> ' + attr.name.replace("data-", "font-") + '_' + attr.value);
        }
        if (attr && e.target.classList.contains('color')) {
            //console.log(attr.name + ': ' + attr.value + ' -> ' + attr.name.replace("data-", "") + '_' + attr.value);
        }
        */
        
        /*
        if (toggle.classList.contains('book__control_font-size')) {
            //console.log(e.target.getAttribute('data-size'));
            
            document.querySelector('.font-size_active').classList.remove('font-size_active');
            e.target.classList.add('font-size_active');
        }
        if (toggle.classList.contains('book__control_color')) {
            console.log(e.target.getAttribute('data-text-color'));
        }
        if (toggle.classList.contains('book__control_background')) {
            console.log(e.target.getAttribute('data-bg-color'));
        }
        */
        //if () {console.log(e.target.getAttribute('data-size'));}
/*
    })
})
*/

//console.log(`${fs}`+'_active');




/*
console.log(document.querySelectorAll('[class*="font-size_"'));
console.log(document.querySelectorAll('[class*="text_color_"'));
console.log(document.querySelectorAll('[class*="bg_color_"'));
*/


/*
const book = document.getElementById('book');
const toggles = document.querySelectorAll('.book__control');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', (e) =>{
            e.preventDefault();
            if (toggle.classList.contains('book__control_font-size')) {
                document.querySelector('.font-size_active').classList.remove('font-size_active');
                e.target.classList.add('font-size_active');
                
                if (e.target.classList.contains('font-size_small')) {
                    book.classList.add('book_fs-small');
                    book.classList.remove('book_fs-big');
                } else if (e.target.classList.contains('font-size_big')) {
                    book.classList.remove('book_fs-small');
                    book.classList.add('book_fs-big');
                } else {
                    book.classList.remove('book_fs-big');
                    book.classList.remove('book_fs-small');
                }
            }
                
    })
});
*/


/*
window.addEventListener('click', (e) =>{
    e.preventDefault();
    let bookControl = e.target.closest('.book__control');
    console.log(bookControl);
})
*/


/*
const bookControls = document.querySelectorAll('.book__control');
//console.log(book);
bookControls.forEach(bookControl => {
    toggles = bookControl.children;
    console.log(toggles);
    //console.log(bookControl.lastElementChild);
});
*/



/*
const toggles = document.querySelectorAll('.book__control');

    toggles.forEach(toggle => {
        toggle.children.addEventListener('click', (e) =>{
            e.preventDefault();
    })

});
*/



