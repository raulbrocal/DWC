class Tablero {

    constructor() {
        // Datos necesarios para crear el tablero.
        this.numFilasColumnas();
        this.crearTablero();
    }

    numFilasColumnas() {

        // Se piden los datos al usuario
        this.filas = prompt('¿Cuántas filas quieres?');
        this.columnas = prompt('¿Cuántas columnas quieres?');

        return this.filas, this.columnas;
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

}

let juegoMemoria = new Tablero();
console.log(juegoMemoria);