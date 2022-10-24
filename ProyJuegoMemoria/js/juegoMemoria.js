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
                this.arrayTablero[fila][columna] = '.';
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

        this.colocarParejas()
    }

    colocarParejas() {
        let parejas = ["./imgs/corazonAmarillo.png", "./imgs/corazonAzul.png", "./imgs/corazonAmarillo.png", "./imgs/corazonBlanco.png", "./imgs/corazonMarron.png"];
        let posFila;
        let posColumna;
        let numParejas = 0;


        while (numParejas < 4) {
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);

            if (this.arrayTablero[posFila][posColumna] = '.') {
                this.arrayTablero[posFila][posColumna] = parejas[0];
                numParejas++;
            };
        };

        return this.arrayTablero
    }
}

let juegoMemoria = new Tablero();
console.log(juegoMemoria);