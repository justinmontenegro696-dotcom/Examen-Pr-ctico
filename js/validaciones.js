document.getElementById("formRegistro").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombreInput = document.getElementById("nombre");
    let correoInput = document.getElementById("correo");
    let edadInput = document.getElementById("edad");
    let lenguajeInput = document.getElementById("lenguaje");

    let nombre = nombreInput.value.trim();
    let correo = correoInput.value.trim();
    let edad = edadInput.value.trim();
    let lenguaje = lenguajeInput.value;

    let errorNombre = document.getElementById("errorNombre");
    let errorCorreo = document.getElementById("errorCorreo");
    let errorEdad = document.getElementById("errorEdad");
    let errorLenguaje = document.getElementById("errorLenguaje");

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorEdad.textContent = "";
    errorLenguaje.textContent = "";

    let valido = true;

    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;

    if (nombre.length < 3) {
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
        nombreInput.focus();
        valido = false;
    } else if (!soloLetras.test(nombre)) {
        errorNombre.textContent = "El nombre solo debe contener letras, no números.";
        nombreInput.focus();
        valido = false;
    }

    let validadCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valido && !validadCorreo.test(correo)) {
        errorCorreo.textContent = "Ingrese un correo electrónico válido.";
        correoInput.focus();
        valido = false;
    }

    edad = Number(edad);
    if (valido && (isNaN(edad) || edad < 18 || edad > 99)) {
        errorEdad.textContent = "La edad debe estar entre 18 y 99.";
        edadInput.focus();
        valido = false;
    }

    if (valido && lenguaje === "") {
        errorLenguaje.textContent = "Debe seleccionar un lenguaje obligatorio.";
        lenguajeInput.focus();
        valido = false;
    }

    if (valido) {
        alert("Registro exitoso");
        this.reset();
    }   else {
        alert("Complete todos lo campos");
    }
});


