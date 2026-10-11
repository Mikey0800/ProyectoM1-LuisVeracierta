console.log("javascript funcionando");
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
    textContent = document.createElement("span");
    textContent.textContent = arrayColores[index];
    bloque.appendChild(textContent);
    console.log("Bloque de color: ", bloque);
});
