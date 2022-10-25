class Tablero {

    constructor() {
        // Datos necesarios para crear el tablero.
        this.numFilasColumnas();
        this.crearTablero();
        this.dibujarTablero();
    }

    numFilasColumnas() {

        // Se piden los datos al usuario
        let filas = 4;//prompt('¿Cuántas filas quieres?');
        let columnas = 4;//prompt('¿Cuántas columnas quieres?');

        while (filas * columnas % 2 != 0 || filas < 2 || columnas < 2) {
            alert("No es posible tener filas y columnas impares o menores que 2.");
            filas = prompt('¿Cuántas filas quieres?');
            columnas = prompt('¿Cuántas columnas quieres?');
        };

        return this.filas = filas, this.columnas = columnas;

    }

    crearTablero() {

        // Crear array bidimensional en el que guardar las parejas.
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = new Array(this.columnas);

            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }

    }

    dibujarTablero() {

        // Crear el tablero en formato html
        document.write('<table>');

        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');

            for (let j = 0; j < this.columnas; j++) {
                document.write(`<td>${this.arrayTablero[i][j]}</td>`);
            }

            document.write('</tr>');
        }
        document.write('</table>');
    }

    modificarFilas(nuevasFilas) {
        // Modificar el número de filas y volver a crear el tablero con las filas nuevas.

        this.filas = nuevasFilas;
        this.crearTablero();

    }

    modificarColumnas(nuevasColumnas) {
        // Modificar el número de columnas y volver a crear el tablero con las columnas nuevas.

        this.columnas = nuevasColumnas;
        this.crearTablero();

    }



}

class JuegoMemoria extends Tablero {
    constructor(filas, columnas) {
        super(filas, columnas);

        this.colocarParejas();
        this.crearTablero();
    }

    colocarParejas() {
        let parejas = ['&#10084;&#65039', '&#129505','&#10084;&#65039;&#8205;&#128293', '&#128155', '&#128154', '&#128153', '&#128156', '&#129294', '&#128420', '&#129293'];
        let posFila;
        let posColumna;
        let numParejas = 0;

        let contador;

        for (let i = 0; i < parejas.length; i++) {
            for (let j = 0; j < parejas.length; j++) {
                this.arrayTablero[i][j] = parejas[contador];
                contador++;
            }
        }


        // while (numParejas < this.filas*this.columnas) {
        //     posFila = Math.floor(Math.random() * this.filas);
        //     posColumna = Math.floor(Math.random() * this.columnas);

        //     if (this.arrayTablero[posFila][posColumna] = '') {
        //         this.arrayTablero[posFila][posColumna] = parejas[1];
        //         numParejas++;
        //     };
        // };

        return this.arrayTablero
    }
}

let juegoMemoria = new Tablero();
console.log(juegoMemoria);