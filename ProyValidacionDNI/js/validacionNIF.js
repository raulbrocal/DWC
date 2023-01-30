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
/**
 * Validar varios patrones
 */
function validarDatos() {
    let patrones = new Map();

    patrones.set("nombre", /^[A-Za-záéíóúüàèìòùÁÀÉÈÍÌÓÒÚÙÜñÑçÇ]{2,}$/);
    patrones.set("apellidos", /^[A-Za-záéíóúüàèìòùÁÀÉÈÍÌÓÒÚÙÜñÑçÇ]{2,}$/);
    patrones.set("email", /^+.@.+$/);
    patrones.set("telefonoNacional", /^([89][^09])|([67][0-9])[0-9]{7}$/);
    patrones.set("telefonoConPrefijo", /^\(\+[0-9]{1,3}\)([89][^09])|([67][0-9])[0-9]{7}$/);
    patrones.set("fecha", /^(^[0][1-9]|[1-2][0-9]|[3][0-1])\/([0][1-9]|[1][0-2])\/[0-9]{4}$/);
    patrones.set("codigoPostal", /^(0[0-9]|[1-4][0-9]|[5][0-2])[0-9]{3}$/);
    patrones.set("tiempo", /^([0-1][0-9]|2[0-4])(:[0-5][0-9]){2}$/);
    patrones.set("tarjetaVISA", /^4(([0-9]{12})|([0-9]{15}))$/);
    patrones.set("tarjetaMasterCard", /^5[1-5][0-9]{14}$/);
    patrones.set("tarjetaDiscover", /^(6011[0-9]{12})|(5[0-9]{14})$/);
    patrones.set("tarjetaAmericanExpress", /^(34|37)[0-9]{13}$$/);
    patrones.set("tarjetaDinersClub", /^(30[0-5][0-9]{11})|(36|38)[0-9]{12}$/);
    patrones.set("tarjetaJCB", /^((2131|1800)[0-9]{11})|(35[0-9]{14})$/);


    this.className = "";

    patrones.get("email");
    if (patrones.get(this.id).test(this.value)) {
        this.className = "verde";
    }
    console.log(patrones);
}

window.addEventListener('load', function () {
    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let email = document.getElementById('email');

    nombre.addEventListener('keyup', validarDatos);
    apellidos.addEventListener('keyup', validarDatos);
    email.addEventListener('keyup', validarDatos);
});

/**
 * Eventos, DOM y recursividad.
*/