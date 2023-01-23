function validarNombre() {
    let patron = /^[A-Za-záéíóúüàèìòùÁÀÉÈÍÌÓÒÚÙÜñÑçÇ]{2,}$/;

    let esValido = patron.test('AA');
}

document.addEventListener('load', function () {
    let nombre = document.getElementById('nombre');
    nombre.addEventListener('keyup', validarNombre);
});