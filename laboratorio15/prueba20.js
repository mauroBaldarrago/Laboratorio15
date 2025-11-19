const section = document.getElementById("mi-section");

const h2Original = section.querySelector("h2");
if (h2Original) {
    h2Original.remove();
}

const h2Nuevo = document.createElement("h2");
h2Nuevo.textContent = "Título nuevo";
section.appendChild(h2Nuevo);

const p = document.createElement("p");
p.textContent = "Descripción generada";
section.appendChild(p);

const ul = document.createElement("ul");

for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Ítem " + i;
    ul.appendChild(li);
}

section.appendChild(ul);
