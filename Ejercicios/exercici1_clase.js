window.onload = function () {
    let div = document.getElementById('info');

    let link = document.getElementsByTagName("a");
    let p1 = document.createElement('p');
    p1.innerHTML = `Nombre d'enllaços de la pàgina = ${link.length}`;
    div.appendChild(p1);

    let parrafo = document.getElementsByTagName('p');
    let parrafoDiv = div.getElementsByTagName('p');
    let p2 = document.createElement('p');
    p2.innerHTML = `Nombre de paràgrafs = ${parrafo.length - parrafoDiv.length}`;
    div.appendChild(p2);

    let p3 = document.createElement('p');
    p3.innerHTML = `El penúltim enllaç apunta a = ${link[link.length - 2]}`;
    div.appendChild(p3);

    let p4 = document.createElement('p');
    p3.innerHTML = `L'últim enllaç apunta a = ${link[link.length - 1]}`;
    div.appendChild(p4);

    let contadorEnlaces = 0;
    for(enlace of link){
        if (enlace.href == 'http://prueba/') {
            contadorEnlaces++;
        }
    }
    let p5 = document.createElement('p');
    p5.innerHTML = `${contadorEnlaces} enllaços apunten a 'http://prueba/'`;
    div.appendChild(p5);

    let p6;
    for(let i = 0; i < numeroParrafos; i++){
        n6.innerHTML = `Nombre d'enllaços`;
    }
}