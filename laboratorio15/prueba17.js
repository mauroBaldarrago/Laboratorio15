const divs = document.querySelectorAll("div");

const cantidad = divs.length;

const resultado = document.createElement("p");
resultado.textContent = "Cantidad de div encontrados: " + cantidad;

document.body.appendChild(resultado);
