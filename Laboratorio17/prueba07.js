function cargarMensaje(callback) {
    setTimeout(() => {
        callback("Mensaje cargado");
    }, 1000);
}

document.getElementById("btn").onclick = function () {
    const salida = document.getElementById("salida");
    salida.textContent = "Cargando...";

    cargarMensaje((mensaje) => {
        salida.textContent = mensaje;
    });
};
