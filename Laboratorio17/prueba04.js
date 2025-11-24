function validarEdad(edad) {
    if (isNaN(edad) || edad < 0) {
        throw new Error("Edad inválida");
    }
    return "Edad válida";
}

document.getElementById("btn").onclick = function () {
    const valor = document.getElementById("edad").value;
    const salida = document.getElementById("resultado");

    try {
        const mensaje = validarEdad(Number(valor));
        salida.textContent = mensaje;
    } catch (e) {
        salida.textContent = e.message;
    }
};
