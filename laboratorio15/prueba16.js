const secciones = document.querySelectorAll("section");

secciones.forEach((sec, i) => {
    sec.setAttribute("data-index", i);
    console.log("Sección:", sec.textContent.trim(), "(index:", sec.dataset.index + ")");
});

