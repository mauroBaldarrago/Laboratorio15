function nivel2() {
    try {
        x + 1;
    } catch (e) {
        document.getElementById("salida").innerHTML += 
            "Nivel 2 atrapó el error: " + e.message + "<br>";
        throw e;
    }
}
function nivel1() {
    try {
        nivel2();
    } catch (e) {
        document.getElementById("salida").innerHTML += 
            "Nivel 1 recibió el error: " + e.message + "<br>";
        throw e;
    }
}
document.getElementById("btn").onclick = function () {
    const salida = document.getElementById("salida");
    salida.innerHTML = "";
    try {
        nivel1();
    } catch (e) {
        salida.innerHTML += 
            "ERROR FINAL capturado en el nivel superior: " + e.message;
    }
};
