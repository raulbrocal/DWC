class Tablero {

    constructor() {
        // Datos necesarios para crear el tablero.
        this.numFilasColumnas();
        this.crearTablero();
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
        debugger;
        this.colocarParejas();
        this.dibujarTablero();
    }

    colocarParejas() {
        debugger;
        let parejas = ['&#10084;&#65039', '&#129505', '&#10084;&#65039;&#8205;&#128293', '&#128155', '&#128154', '&#128153', '&#128156', '&#129294', '&#128420', '&#129293'];

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


            } while (contadorParejas % 2 == 0);

            contador++;

            if (contador == parejas.length) {
                contador = 0;
            }

        };

        return this.arrayTablero
    }
}

let juegoMemoria = new JuegoMemoria();
console.log(juegoMemoria);