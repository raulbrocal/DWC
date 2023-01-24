/**
 * Función para validar el nombre y apellidos del formulario
 */
function validarNombre() {
    let patron = /^[A-Za-záéíóúüàèìòùÁÀÉÈÍÌÓÒÚÙÜñÑçÇ]{2,}$/;

    let esValido = patron.test(this.value);

    this.className = "";

    if (esValido) {
        this.className = "verde";
    }
}

/**
 * Función para validar el email del formulario
 */
function validarEmail() {
    let patron = /^+.@.+$/;

    let esValido = patron.test(this.value);

    this.className = "";

    if (esValido) {
        this.className = "verde";
    }
}

window.addEventListener('load', function () {
    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let email = document.getElementById('email');

    nombre.addEventListener('keyup', validarNombre);
    apellidos.addEventListener('keyup', validarNombre);    
    email.addEventListener('keyup', validarEmail);
});