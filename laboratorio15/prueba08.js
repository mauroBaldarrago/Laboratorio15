const nuevoH3 = document.createElement("h3");
nuevoH3.textContent = "Título insertado con JS";

const primerParrafo = document.querySelector("p");

document.body.insertBefore(nuevoH3, primerParrafo);
