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

//creo l'evento 

buttonEl.addEventListener("click",
    function () {
        lampOffEl.style.display = "none"
        lampOnEl.style.display = "block"
    }
    //quando premo una lampada va block e l'altra va none
)
