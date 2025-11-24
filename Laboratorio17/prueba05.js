document.getElementById("btn").onclick = function () {
    const salida = document.getElementById("resultado");
    try {
        let x = null;
        x.nombre;
    } catch (e) {
        if (e instanceof TypeError) {
            salida.textContent = "Ocurrió un TypeError: " + e.message;
        } else {
            salida.textContent = "Ocurrió otro tipo de error: " + e.message;
        }

    }
};
