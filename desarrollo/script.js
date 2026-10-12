console.log("javascript funcionando");
// Función para generar un color aleatorio en formato hexadecimal
function generarColor() {
    let rojo = Math.floor(Math.random() * 256);
    let verde = Math.floor(Math.random() * 256);
    let azul = Math.floor(Math.random() * 256);
    let hex = rojo.toString(16).padStart(2, "0")
        + verde.toString(16).padStart(2, "0")
        + azul.toString(16).padStart(2, "0");
    let resultado = "#" + hex;
    return resultado;
}
let arrayColores = [];
for (let i = 0; i < 6; i++) {
    arrayColores.push(generarColor());
}
console.log("Array de colores generado: ", arrayColores);

let paleta = document.querySelector(".paleta");
let bloquesColor = paleta.querySelectorAll(".bloque-color");
bloquesColor.forEach((bloque, index) => {
    bloque.style.backgroundColor = arrayColores[index];
    let etiquetaColor = document.createElement("span");
    bloque.replaceChildren();
    etiquetaColor.textContent = arrayColores[index];
    bloque.appendChild(etiquetaColor);
    console.log("Bloque de color: ", bloque);
});

let btngenerar = document.querySelector(".btngenerar");
btngenerar.addEventListener("click", () => {
    generarPaleta();
    console.log("Botón generar paleta presionado");
})
function generarPaleta() {
    let arrayColores = [];
    for (let i = 0; i < cantidadSeleccionada; i++) {
    arrayColores.push(generarColor());
}
    paleta.replaceChildren();
    for (let i = 0; i < arrayColores.length; i++) {
    let bloque = document.createElement("div");
    bloque.classList.add("bloque-color");
    bloque.style.backgroundColor = arrayColores[i];
    paleta.appendChild(bloque)
}


    for (let i = 0; i < cantidadSeleccionada; i++) {
        arrayColores.push(generarColor());

    }
    let bloquesColor = paleta.querySelectorAll(".bloque-color");
    bloquesColor.forEach((bloque, index) => {
        bloque.style.backgroundColor = arrayColores[index];
        let etiquetaColor = document.createElement("span");
        bloque.replaceChildren();
        etiquetaColor.textContent = arrayColores[index];
        bloque.appendChild(etiquetaColor);
    });
}
let cantidadSeleccionada = 8;
let btn6 = document.querySelector(".btn6");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");

btn6.addEventListener("click", () => {
    document.querySelectorAll(".btn8, .btn9").forEach((boton) => {
    boton.classList.remove("active");
});
    btn6.classList.add("active");
    console.log("Botón 6 colores presionado");
    cantidadSeleccionada = 6;
    generarPaleta();
});
btn8.addEventListener("click", () => {
    document.querySelectorAll(".btn6, .btn9").forEach((boton) => {
        boton.classList.remove("active")
    });
    btn8.classList.add("active");
    console.log("Botón 8 colores presionado");
    cantidadSeleccionada = 8;
    generarPaleta();
});
btn9.addEventListener("click", () => {
    document.querySelectorAll(".btn6, .btn8").forEach((boton) => {
        boton.classList.remove("active")
    });
    btn9.classList.add("active");
    console.log("Botón 9 colores presionado");
    cantidadSeleccionada = 9;
    generarPaleta();
});

