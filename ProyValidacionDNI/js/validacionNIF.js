/**
 * Función para validar el nombre y apellidos del formulario
 */
function validarNombre() {
    let patron = /^[A-Za-záéíóúüàèìòùÁÀÉÈÍÌÓÒÚÙÜñÑçÇ]{2,}$/;

    let esValido = patron.test(this.value);

    this.className = "";

    if (esValido) {
        this.className.set("verde");
    }
}

/**
 * Función para validar el email del formulario
 */
function validarEmail() {
    let patron = /^[A-Za-záéíóúüàèìòùÁÀÉÈÍÌÓÒÚÙÜñÑçÇ]{2,}.@.[A-Za-záéíóúüàèìòùÁÀÉÈÍÌÓÒÚÙÜñÑçÇ]{2,}$/;
    
    let esValido = patron.test(this.value);

    this.className = "";

    if (esValido) {
        this.className.set("verde");
    }
}

window.addEventListener('load', function () {
    let nombre = document.getElementById('nombre');
    nombre.addEventListener('keyup', validarNombre());
});