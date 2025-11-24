document.getElementById("btn").onclick = function () {
    try {
        variableFalsa++;
    } catch (e) {
        document.getElementById("mensaje").textContent = e.message;
    }
};
