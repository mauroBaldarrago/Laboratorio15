const elementos = document.querySelectorAll("li");

elementos.forEach(item => {
    item.classList.add("resaltado");
    item.classList.remove("oculto");
});
