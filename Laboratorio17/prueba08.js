function cargarUsuario(callback) {
    const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
    setTimeout(() => {
        const usuario = {
            id: 1,
            nombre: "Juancito"
        };
        callback(usuario);
    }, tiempo);
}

document.getElementById("btn").onclick = function () {
    const salida = document.getElementById("salida");
    salida.textContent = "Cargando";

    cargarUsuario((usuario) => {
        salida.textContent = 
            `Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`;
    });
};
