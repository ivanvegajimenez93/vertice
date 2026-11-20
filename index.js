//MENSAJE DE BIENVENIDA

let bienvenida = document.createElement("p");
let textoDestacado = document.createElement("span")
bienvenida.textContent = "¡Bienvenido a Vértice!";
textoDestacado.textContent = " Descubre lo que pasa en tu ciudad";
bienvenida.appendChild(textoDestacado);
let contenedor = document.querySelector(".cont");
contenedor.insertAdjacentElement("beforebegin", bienvenida);
textoDestacado.style.fontWeight = "normal";
bienvenida.style.backgroundColor = "#FF6B35";
bienvenida.style.color = "white";
bienvenida.style.margin = "0";
bienvenida.style.padding = "20px";
bienvenida.style.textAlign = "center";
bienvenida.style.fontWeight = "bold";
bienvenida.style.fontSize = "30px";

//INTERCAMBIO DE COLORES

let contenedor2 = document.querySelector(".cont");
let titulo = contenedor2.querySelector("h3");

const colorContenedor2 = getComputedStyle(contenedor2).backgroundColor;
const colorTitulo = getComputedStyle(titulo).color;


contenedor2.addEventListener("mouseenter", () => {
    contenedor2.style.backgroundColor = colorTitulo;
    titulo.style.color = colorContenedor2;
});

contenedor2.addEventListener("mouseleave", () => {
    contenedor2.style.backgroundColor = colorContenedor2;
    titulo.style.color = colorTitulo;
});


let seleccionCards = document.querySelectorAll(".evento");


seleccionCards.forEach((card) => {

    let colorFondoEvento = getComputedStyle(card).backgroundColor;
    let colorTextoEvento = getComputedStyle(card).color;

    card.addEventListener("mouseenter", () => {
        card.style.backgroundColor = "#36C9B3";
        card.style.color = "#151B2B"
    });

    card.addEventListener("mouseleave", () => {
        card.style.backgroundColor = colorFondoEvento;
        card.style.color = colorTextoEvento;
    });

});

let seleccionAct = document.querySelectorAll(".actividad");


seleccionAct.forEach((card) => {

    let colorFondoAct = getComputedStyle(card).backgroundColor;
    let colorTextoAct = getComputedStyle(card).color;

    card.addEventListener("mouseenter", () => {
        card.style.backgroundColor = "white";
        card.style.color = "#151B2B"
    });

    card.addEventListener("mouseleave", () => {
        card.style.backgroundColor = colorFondoAct;
        card.style.color = colorTextoAct;
    });
});



//AUMENTO DE TABLA

let tabla = document.querySelector("table");
let fondo = document.createElement("div");

tabla.addEventListener("mouseenter", () => {
    tabla.style.boxShadow = "0 0 20px rgba(255, 107, 53, 0.6)";
});

tabla.addEventListener("mouseleave", () => {
    tabla.style.boxShadow = "none";
});



tabla.addEventListener("click", () => {
    if (tabla.classList.contains("tabla-ampliada")) return;
    fondo.classList.add("fondo-desenfocado");
    document.body.appendChild(fondo);
    tabla.classList.add("tabla-ampliada");

});

fondo.addEventListener("click", () => {
    tabla.classList.remove("tabla-ampliada");
    fondo.remove();
});

//CABIO DE ELEMENTOS TABLA

let celdas = tabla.getElementsByTagName("td");
let limite = celdas.length;
for (let i = 0; i < limite; i++) {
    celdas[i].style.border = "1px solid #FF6B35";
};

let primeraFila = tabla.getElementsByTagName("tr")[0];


let primeraCelda = primeraFila.children[0];
primeraCelda.style.backgroundColor = "#151B2B";

//AUMENTOBOTONES

let descripcionEventos = document.getElementsByClassName("descripcionEvento");




