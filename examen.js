class Tablero {
    constructor(numFilas, numColumnas) {
        this.numColumnas = numColumnas;
        this.numFilas = numFilas;
    }
    escribir() {
        document.write(`<table>`);
        document.write(`<td>${this.tablero[fila][columna]}</td>`);
    }
}
class TableroMemorin extends Tablero {
    constructor(numFilas, numColumnas) {
        super(numFilas, numColumnas);
        this.numCasillas = this.numFilas * this.numColumnas;
    }
    push() {
        this.imagenes = [];
        let maxImagenes = 10;

        for (let numImagen = 1; numImagen <= maxImagenes; numImagen++) {
            this.imagenes.push(`${url}img${numImagen}.jpg`);
        }
    }
    desordenarArray(array) {
        return array.sort(() => 0.5 - Math.random());
    }
}