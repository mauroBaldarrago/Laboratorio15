const colores = ["lightblue", "lightgreen", "pink", "orange"];

const divs = document.querySelectorAll("div");

let index = 0;

for (const caja of divs) {
    caja.style.backgroundColor = colores[index];
    index++;
}
