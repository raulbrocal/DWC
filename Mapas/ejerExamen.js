const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`, `Benítez E. (154811767) -> Av.Argentina, 5`]
]);

let contador = 1;
let text = "{";
registroPacientes.forEach(function (value, key) {
    let datos = value.split([' ']);
    text += 'Paciente ' + contador + ' => <br>&emsp;&emsp;&emsp;`numeroRegistro: ' + key + ',<br>&emsp;&emsp;&emsp;nombreCompleto: ' + datos[0] + ' ' + datos[1] + ',<br>&emsp;&emsp;&emsp;numeroSS: ' + datos[2].replace(/\((\w+)\)/g, "$1") + ',<br>&emsp;&emsp;&emsp;direccion: ' + datos[4] + ' ' + datos[5] + '`<br>';
    contador++;
})
text += '}'

console.log(registroPacientes);

document.getElementById("demo").innerHTML = text;