const lista = document.createElement("ul");

for (let i = 1; i <= 5; i++) {

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = "Nivel interno";

    li.appendChild(span);

    lista.appendChild(li);
}

document.body.appendChild(lista);
