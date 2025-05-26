const elements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () =>{
    elements.forEach(el => {
        const {top, bottom} = el.getBoundingClientRect();
        if (window.innerHeight  > top && bottom > 0 && !el.classList.contains('reveal_active')) {
            el.classList.add('reveal_active');
        }
    });    
})
