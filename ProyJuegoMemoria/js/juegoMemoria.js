document.write('<h1>Juego de memoria</h1>');
document.write('<br>');
document.write('<h2>Raúl Brocal</h2>');
document.write('<br>');


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
        
        while (filas * columnas % 2 != 0 || filas < 2 || columnas < 2 || filas * columnas > 100) {

            switch (filas * columnas % 2 != 0 || filas < 2 || columnas < 2 || filas * columnas > 100) {
                case (filas < 2 || columnas < 2):
                    alert("No es posible tener un número de filas o columnas menores que 2.");
                    break;
                case filas * columnas > 100:
                    alert("No es posible crear un tablero mayor de 100 parejas.");
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

}

class JuegoMemoria extends Tablero {
    constructor(filas, columnas) {
        super(filas, columnas);
        //debugger;
        this.colocarParejas();
        this.dibujarTablero();
    }

    colocarParejas() {
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


            } while (contadorParejas % 2 != 0 || contadorParejas == 1);

            contador++;

            if (contador == parejas.length) {
                contador = 0;
            }

        };

        return this.arrayTablero
    }

    // max 100 filas y columnas.
    // No se podrán cambiar el número de filas ni de columnas durante el juego.
    // Poner una interfaz bonita.
    // Mínimo dos parejas.
    // Pregunta sobre la Clase Number.
    // README debe ir en la carpeta del proyecto, debe contenre instrucciones y normas.
}


let juegoMemoria = new JuegoMemoria();
console.log(juegoMemoria);