class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;

        this.crearTablero();
    }

    crearTablero() {
        // Crear array bidimensional para guardar las minas
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }

    dibujarTablero() {
        // Creamos el tablero en html
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

    dibujarTableroDOM() {
        document.addEventListener("DOMContentLoaded", function (event) {

            let contenedor = document.documentElement;

            let tabla = document.createElement("table");

            let tr = document.createElement("tr");
            let td = document.createElement("td");
            let tdText = document.createTextNode("");

            for (let i = 0; i < this.filas; i++) {
    
                for (let j = 0; j < this.columnas; j++) {
                    td = document.createElement("td");
                    tdText = document.createTextNode(this.arrayTablero[i][j]);
                    td.appendChild(tdText);
                    tr.appendChild(td);
                }

            }

            td.appendChild(tdText);
            tr.appendChild(td);

            td = document.createElement("td");
            tdText = document.createTextNode("2");
            td.appendChild(tdText);
            tr.appendChild(td);

            td = document.createElement("td");
            tdText = document.createTextNode("3");
            td.appendChild(tdText);
            tr.appendChild(td);

            tabla.appendChild(tr);

            tr = document.createElement("tr");

            td = document.createElement("td");
            tdText = document.createTextNode("4");
            td.appendChild(tdText);
            tr.appendChild(td);

            td = document.createElement("td");
            tdText = document.createTextNode("5");
            td.appendChild(tdText);
            tr.appendChild(td);

            td = document.createElement("td");
            tdText = document.createTextNode("6");
            td.appendChild(tdText);
            tr.appendChild(td);

            tabla.appendChild(tr);

            tr = document.createElement("tr");

            td = document.createElement("td");
            tdText = document.createTextNode("7");
            td.appendChild(tdText);
            tr.appendChild(td);

            td = document.createElement("td");
            tdText = document.createTextNode("8");
            td.appendChild(tdText);
            tr.appendChild(td);

            td = document.createElement("td");
            tdText = document.createTextNode("9");
            td.appendChild(tdText);
            tr.appendChild(td);

            tabla.appendChild(tr);

            contenedor.appendChild(tabla);
        });

    }

    modificarFilas(nuevasFilas) {
        // Modificar el número de filas y volver a crear el tablero con las filas nuevas
        this.filas = nuevasFilas;

        this.crearTablero();
    }

    modificarColumnas(nuevasColumnas) {
        // Modificar el número de columnas y volver a crear el tablero con las columnas nuevas
        this.columnas = nuevasColumnas;

        this.crearTablero();
    }


}

class Buscaminas extends Tablero {
    constructor(filas, columnas, numMinas) {
        super(filas, columnas);
        this.numMinas = numMinas;

        this.colocarMinas();
        this.colocarNumMinas();
    }

    colocarMinas() {
        let contadorMinas = 0;
        let posFila;
        let posColumna;


        while (contadorMinas < this.numMinas) {
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);

            if (this.arrayTablero[posFila][posColumna] != 'MINA') {
                this.arrayTablero[posFila][posColumna] = 'MINA';
                contadorMinas++;
            };
        };
    }

    colocarNumMinas() {
        let numMinasAlrededor;

        for (let fila = 0; fila < this.filas; fila++) {
            for (let columna = 0; columna < this.columnas; columna++) {
                numMinasAlrededor = 0;
                if (this.arrayTablero[fila][columna] != 'MINA') {
                    for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                        if (cFila >= 0 && cFila < this.filas) {
                            for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                                if (cColumna >= 0 && cColumna < this.columnas &&
                                    this.arrayTablero[cFila][cColumna] == 'MINA') {
                                    numMinasAlrededor++;
                                }
                            }
                        }
                        this.arrayTablero[fila][columna] = numMinasAlrededor;
                    }
                }
            }
        }
    }
}

let buscaminas1 = new Buscaminas(5, 5, 5);
console.log(buscaminas1.arrayTablero);
buscaminas1.dibujarTableroDOM();