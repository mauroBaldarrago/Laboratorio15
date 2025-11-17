const parrafo = document.querySelector("p");

const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Párrafo reemplazado";

parrafo.replaceWith(nuevoDiv);
