
//повышенный уровень сложности
const rotators = document.querySelectorAll('.rotator');
let interval = 1000;
let color = "#000"
window.addEventListener('load', () =>{
    rotators.forEach(rotator => {
        function loop() {
            const activeCase = rotator.querySelector('.rotator__case_active');
            color = activeCase.getAttribute('data-color');
            interval = activeCase.getAttribute('data-speed');
            activeCase.style.color = color;        
            clearInterval(int);
            //console.log(activeCase.textContent +" - "+ interval + " - " + color)
            int = setInterval(() => loop(), interval);
            if (activeCase === rotator.lastElementChild) {
                rotator.firstElementChild.classList.add('rotator__case_active');
                activeCase.classList.remove('rotator__case_active');
            } else {
                activeCase.nextElementSibling.classList.add('rotator__case_active');
                activeCase.classList.remove('rotator__case_active');
            }
        }
        let int = setInterval(() => loop(), interval);
    });
    
})



/*
//обычный уровень сложности
const rotator = document.querySelector('.rotator');
window.addEventListener('load', () =>{

setInterval(() => {
    const activeCase = rotator.querySelector('.rotator__case_active');    
    if (activeCase === rotator.lastElementChild) {
        rotator.firstElementChild.classList.add('rotator__case_active');
        activeCase.classList.remove('rotator__case_active');
    } else {
        activeCase.nextElementSibling.classList.add('rotator__case_active');
        activeCase.classList.remove('rotator__case_active');
    }
}, 1000);
})
*/

