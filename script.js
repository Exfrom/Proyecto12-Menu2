// Agregar un evento de clic al contenedor del menú que llamará a la función animacionMenu
document.querySelector(".menuBarra").addEventListener("click", animacionMenu);

// Seleccionar los elementos de línea del menú
let barra1 = document.querySelector(".fila1");
let barra2 = document.querySelector(".fila2");
let barra3 = document.querySelector(".fila3");

// Función para animar el menú al hacer clic
function animacionMenu() {
    barra1.classList.toggle("fila1Animacion");
    barra3.classList.toggle("fila3Animacion");
    barra2.classList.toggle("fila2Animacion");
}
