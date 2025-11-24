document.getElementById("btn").onclick = function () {
    try {
        consoe.log("Esto genera error");
    } catch (e) {
        document.getElementById("msg").textContent = "falló";
    } finally {
        document.getElementById("final").textContent = "siempre se ejecuta";
    }
};
