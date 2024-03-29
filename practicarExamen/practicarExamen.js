window.onload = function () {
    let nodoDiv = document.getElementById("info");
    let nodosLink = document.getElementsByTagName('a');
    let nodoP1 = document.createElement('p');
    nodoP1.innerHTML = `Nombre d'enllaços de la pàgina = ${nodosLink.length}`
    nodoDiv.appendChild(nodoP1);

    let nodosParrafo = document.getElementsByTagName('p');
    let parrafosDiv = nodoDiv.getElementsByTagName('p');
    let nodoP2 = document.createElement('p');
    let numeroParrafos = parseInt(nodosParrafo.length) - parseInt(parrafosDiv.length)
    nodoP2.innerHTML = `Nombre de paràgrafs = ${numeroParrafos}`;
    nodoDiv.appendChild(nodoP2);

    let nodoP3 = document.createElement('p');
    nodoP3.innerHTML = `El penúltim enllaç apunta a = ${nodosLink[nodosLink.length - 2]}`;
    nodoDiv.appendChild(nodoP3);

    let nodoP4 = document.createElement('p');
    nodoP4.innerHTML = `L'últim enllaç apunta a = ${nodosLink[nodosLink.length - 1]}`;
    nodoDiv.appendChild(nodoP4);

    let contadorEnlaces = 0;
    for (enlace of nodosLink) {
        if (enlace.href == 'http://prueba/') {
            contadorEnlaces++;
        }
    }

    let nodoP5 = document.createElement('p');
    nodoP5.innerHTML = `${contadorEnlaces} enllaços apunten a http://prueba/`;
    nodoDiv.appendChild(nodoP5);


    let nodoP6;
    let enlacesParrafo;
    let parrafo;
    for (let i = 0; i < numeroParrafos; i++) {
        parrafo = nodosParrafo[i + parseInt(parrafosDiv.length)];
        enlacesParrafo = parrafo.getElementsByTagName('a');
        nodoP6 = document.createElement('p');
        nodoP6.innerHTML = `Nombre d'enllaços del paràgraf = ${i + 1} = ${enlacesParrafo.length}`;
        nodoDiv.appendChild(nodoP6);
    }

    let nodoP7 = document.createElement('p');
    nodoP7.id = 1;
    nodoP7.innerHTML = "casa";
    nodoDiv.appendChild(nodoP7);
    let nodo = document.getElementById(1);
    nodo.addEventListener("click", pintar);

    function pintar() {
        this.style.color = 'white';
    }

}



function cambiarColorDiv3(elemento) {
    if (elemento.style.borderColor == 'silver') {
        elemento.style.borderColor = 'black';
    } else if (elemento.style.borderColor == 'black') {
        elemento.style.borderColor = 'silver';
    }

}

/*
 dibujarTableroDOM(){
        super.dibujarTableroDOM();

        let celda;

        this.despejar = this.despejar.bind(this);
        this.marcar = this.marcar.bind(this);

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++){
                celda = document.getElementById(`f${i}_c${j}`);

                celda.addEventListener('click', this.despejar);
                celda.addEventListener('contextmenu', this.marcar);
            }
        }
        console.log(this.arrayTablero);
    }

    despejar(elEvento) {
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;
        
        this.despejarCelda(celda);
    }

    despejarCelda(celda) {
        celda.removeEventListener('click', this.despejar);
        this.despejarCelda(celdaNueva);
    }
*/