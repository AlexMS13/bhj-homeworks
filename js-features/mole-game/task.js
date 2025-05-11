let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let countDead = 0;
let countLost = 0;
//let hole1 = document.getElementById("hole1");

function updateCount() {
  countDead = 0;
  countLost = 0;
  dead.textContent = countDead;
  lost.textContent = countLost;
}

function getHole(num) {
  return document.getElementById(`hole${num}`);
}


for (let i = 1; i < 10; i++) {
    getHole(i).onclick = () => {
        if (getHole(i).className.includes("hole_has-mole")) {
            countDead++;
            dead.textContent = countDead;
        } else {
            countLost++;
            lost.textContent = countLost;
        }

        if (countDead === 10) {
            alert("Вы выиграли!");
            updateCount();
        }else if (countLost === 5) {
            alert("Игра окончена, попробуйте заново!");
            updateCount();
        }
        //alert("hole"+i+" нажата");
    };
}
