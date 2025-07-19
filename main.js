console.log("HI DOM");

//identifico l'immagine con la lampadina spenta
const lampOffEl = document.getElementById("lamp-off");
console.log(lampOffEl);


//identifico l'immagine con la lampadina accesa
const lampOnEl = document.getElementById("lamp-on");
console.log(lampOnEl);

//identifico il bottone
const buttonEl = document.querySelector("button");
console.log(buttonEl);
console.log(buttonEl.innerText);


//creo l'evento 

buttonEl.addEventListener("click",
    function () {
        if (buttonEl.innerText === "Accendi") {
            lampOffEl.style.display = "none"
            lampOnEl.style.display = "block"
            buttonEl.innerText = "Spegni"
        } else if (buttonEl.innerText === "Spegni") {
            lampOffEl.style.display = "block"
            lampOnEl.style.display = "none"
            buttonEl.innerText = "Accendi"
        }
    }
    //quando premo una lampada va block e l'altra va none
)
