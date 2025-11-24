document.getElementById("btn").onclick = function () {
    try {
        JSON.parse("{ invalido: }");
    } catch (e) {
        document.getElementById("msg").textContent = e.name + ": " + e.message;
    }
};
