const lista = document.querySelector("ul");

const ultimoLi = lista.lastElementChild;

lista.insertBefore(ultimoLi, lista.firstElementChild);
