const contenedor = document.getElementById("contenedor");

for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = "Párrafo " + i;
    contenedor.appendChild(p);
}

const segundo = contenedor.querySelector("p:nth-child(2)");
segundo.remove();
