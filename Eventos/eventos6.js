function mostraMissatge() {
    event.type = "click"
    console.log("Has clicat el ratolí");
   }

function mostraAltreMissatge() {
    console.log("Has clicat el ratolí i per això se mostren aquests missatge");
}

document.addEventListener("DOMContentLoaded", function() {
    let elDiv1 = document.getElementById("div_principal");
    let elDiv2 = document.getElementById("div_secundario");
    elDiv1.addEventListener("click", mostraMissatge, true);
    elDiv2.addEventListener("click", mostraAltreMissatge, true);
})

window.onload = function () {
    let nodoRaiz = document.body;
    let div = document.createElement('div');
    div.innerHTML = "casa";
    div.dataset.fila = '2';
    nodoRaiz.appendChild(div);
    // replaceChild()
    // insertBfore()
    div.addEventListener("click", color);
    // click, bdlclick, focus, keydown up press, load/unload
    function color(){
        if (this.style.color == "white") {
            this.style.color = "black";
        } else {
        this.style.color = "white";
        }
    }
};