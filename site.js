
let nombre = prompt("Cuál es tu nombre?").toUpperCase();
while (nombre.length < 3) {
  nombre = prompt(
    "Mmmm, tu nombre no puede ser tan corto, ingresa al menos 3 letras",
  ).toUpperCase();
}
const span = document.getElementById("nombre");
span.textContent = `Hola, ${nombre}`;
const i = document.querySelector("i");
i.setAttribute("class", "fa fa-ticket"); 