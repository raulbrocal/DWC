class Tablero {

    constructor() {
        // Datos necesarios para crear el tablero.
        this.numFilasColumnas();
        this.crearTablero();
    }

    numFilasColumnas() {

        // Se piden los datos al usuario
        let filas = prompt('¿Cuántas filas quieres?');
        let columnas = prompt('¿Cuántas columnas quieres?');

    }


}

let juegoMemoria = new Tablero();