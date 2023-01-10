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

class TableroMemorin extends Tablero {
    constructor(numFilas, numColumnas) {
        super(numFilas, numColumnas);
        this.numCasillas = this.numFilas * this.numColumnas;

        this.crearArrayImagenes(`imagenes/`);

        let numImgRepes = 2;

        let arrayParejas = this.crearArrayImgRepes(numImgRepes);
        let arrayParejasDesordenadas = this.desordenarArray(arrayParejas);
        this.llenarTablero(arrayParejasDesordenadas);
    }

    crearArrayImagenes(url) {
        this.imagenes = [];
        let maxImagenes = 10;

        for (let numImagen = 1; numImagen <= maxImagenes; numImagen++) {
            this.imagenes.push(`${url}img${numImagen}.jpg`);
        }
    }

    crearArrayImgRepes(numImgRepes) {
        let arrayImgRepes = [];
        let pos = 0;
        let contCasillas = 0;

        while (contCasillas < this.numCasillas) {
            for (let numImg = 0; numImg < numImgRepes; numImg++) {
                arrayImgRepes.push(this.imagenes[pos]);
                contCasillas++;
            }

            pos++;

            if (pos == this.imagenes.length) {
                pos = 0;
            }
        }

        return arrayImgRepes;
    }

    desordenarArray(array) {
        return array.sort(() => 0.5 - Math.random());
    }

    llenarTablero(arrayImgRepes) {
        let contador = 0;

        for (let fila = 0; fila < this.numFilas; fila++) {
            for (let columna = 0; columna < this.numColumnas; columna++) {
                this.tablero[fila][columna] = `<img src="${arrayImgRepes[contador]}">`;
                contador++;
            }
        }
    }

}

window.onload = function () {
    // Iniciamos el juego.
    let juegoMemoria = new Tablero();
    juegoMemoria.dibujarTableroDOM();
}