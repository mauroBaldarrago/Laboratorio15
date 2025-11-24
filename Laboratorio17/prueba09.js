function dividirAsync(a, b, callback) {
    setTimeout(() => {
        if (b === 0) {
            callback(new Error("No se puede dividir entre cero"), null);
        } else {
            callback(null, a / b);
        }
    }, 1500);
}

document.getElementById("btn").onclick = function () {
    const salida = document.getElementById("salida");
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);

    salida.textContent = "Procesando...";

    dividirAsync(a, b, (error, resultado) => {
        if (error) {
            salida.textContent = error.message;
        } else {
            salida.textContent = "Resultado: " + resultado;
        }
    });
};
