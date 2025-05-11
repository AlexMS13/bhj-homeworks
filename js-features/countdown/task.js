const timer = document.getElementById("timer");
let start = timer.textContent;


function countdown() {
    if (start > 0) {
        start--;
        timer.textContent = start;
        setTimeout(countdown, 1000);
    } 
    else {
        alert("Вы победили в конкурсе!");
    }    
}

countdown();