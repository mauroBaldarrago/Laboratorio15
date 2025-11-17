const primerArticle = document.querySelector("article");

const clon = primerArticle.cloneNode(true);

const main = document.querySelector("main");

main.appendChild(clon);
