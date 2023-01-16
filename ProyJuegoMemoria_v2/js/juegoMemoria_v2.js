document.write('<h1>Juego de memoria</h1>');
document.write('<br>');
document.write('<h2>Raúl Brocal</h2>');
document.write('<br>');
document.write('<b>Puntuación: 0/0</b>');
document.write('<br><br>');

class Tablero {

    constructor() {
        // Datos necesarios para crear el tablero.
        this.numFilasColumnas();
        this.crearTableroVacio();
    }

    numFilasColumnas() {

        // Se piden los datos al usuario
        let filas = prompt('¿Cuántas filas quieres?');
        let columnas = prompt('¿Cuántas columnas quieres?');

        // Casos en los que no se puede crear el tablero.
        while (filas * columnas % 2 != 0 || filas < 2 || columnas < 2 || filas > 100 || columnas > 100) {

            switch (filas * columnas % 2 != 0 || filas < 2 || columnas < 2 || filas * columnas > 100) {
                case filas < 2 || columnas < 2:
                    alert("No es posible tener un número de filas o columnas menores que 2.");
                    break;
                case filas > 100 || columnas > 100:
                    alert("No es posible crear un tablero con más de 100 filas o columnas.");
                    break;
                case filas != Number(filas) || columnas != Number(columnas):
                    alert("Sólo se admiten valores numéricos.");
                    break;
                case filas * columnas % 2 != 0:
                    alert("No es posible generar parejas al tener ambos números impares.");
                    break;
            }

            filas = prompt('¿Cuántas filas quieres?');
            columnas = prompt('¿Cuántas columnas quieres?');

        }

        return this.filas = filas, this.columnas = columnas;

    }

    crearTableroVacio() {
        // Crear array bidimensional para guardar las parejas
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }

    dibujarTableroDOM() {
        // Creamos el tablero en DOM
        let tabla = document.createElement('table');
        let fila;
        let columna;

        for (let i = 0; i < this.filas; i++) {
            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let j = 0; j < this.columnas; j++) {
                columna = document.createElement('td');
                columna.id = `f${i}_c${j}`;
                columna.dataset.fila = i;
                columna.dataset.columna = j;
                columna.dataset.despejado = false;
                fila.appendChild(columna);
            }
        }

        document.body.appendChild(tabla);
    }

}

class JuegoMemoria extends Tablero {
    constructor(filas, columnas) {
        super(filas, columnas);
        this.colocarParejas();
        this.dibujarTableroDOM();
    }

    colocarParejas() {
        // Array de emojis que formaran las parejas
        let parejas = ['&#10084;&#65039', '&#129505', '&#10084;&#65039;&#8205;&#128293', '&#128155', '&#128154', '&#128153', '&#128156', '&#129294', '&#128420', '&#129293'];

        // Colocamos de forma aleatoria las parejas necesarias.
        let contadorParejas = 0;
        let posFila;
        let posColumna;
        let contador = 0;

        while (contadorParejas < (this.filas * this.columnas)) {

            do {

                posFila = Math.floor(Math.random() * this.filas);
                posColumna = Math.floor(Math.random() * this.columnas);

                if (!this.arrayTablero[posFila][posColumna].startsWith('&')) {
                    this.arrayTablero[posFila][posColumna] = parejas[contador];
                    contadorParejas++;
                    if (contadorParejas == (this.filas * this.columnas)) {
                        break;
                    };
                };


            } while (contadorParejas % 2 != 0 || contadorParejas == 1);

            contador++;

            if (contador == parejas.length) {
                contador = 0;
            }

        };

        console.log(this.arrayTablero);

        return this.arrayTablero
    }

    dibujarTableroDOM() {
        super.dibujarTableroDOM();
        let celda;

        this.despejar = this.despejar.bind(this);

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                celda = document.getElementById(`f${i}_c${j}`);
                celda.addEventListener('click', this.despejar);
            }
        }
    }

    despejar(elEvento) {
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;

        this.despejarCelda(celda);
    }

    despejarCelda(celda) {
        let fila = parseInt(celda.dataset.fila);
        let columna = parseInt(celda.dataset.columna);

        // Marcar la celda despejada
        celda.style.backgroundColor = "lightgrey";

        let valorCelda = this.arrayTablero[fila][columna];

        if (this.primerEmoji === undefined) {
            celda.innerHTML = valorCelda;
            this.celda1 = celda;
            this.celda1.removeEventListener('click', this.despejar);
            this.primerEmoji = valorCelda;
        } else {
            celda.innerHTML = valorCelda;
            this.celda2 = celda;
            this.segundoEmoji = valorCelda;
            this.celda1.addEventListener('click', this.despejar);
        }

        console.log(this.segundoEmoji);

        if (this.primerEmoji == this.segundoEmoji) {

            this.primerEmoji = undefined;
            this.segundoEmoji = undefined;
            this.celda1.removeEventListener('click', this.despejar);
            this.celda2.removeEventListener('click', this.despejar);

        } else if (this.segundoEmoji === undefined) {
            return;
        } else {

            this.celda1.style.backgroundColor = "darkslategray";
            this.celda2.style.backgroundColor = "darkslategray";

            this.celda1.innerHTML = '';
            this.celda2.innerHTML = '';

            this.primerEmoji = undefined;
            this.segundoEmoji = undefined;
        }

    }

    puntuacion(emoji1, emoji2){

    }

}

window.onload = function () {
    // Iniciamos el juego.
    let juegoMemoria = new JuegoMemoria();
}