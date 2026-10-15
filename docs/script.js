console.log("javascript funcionando");
// ==================================================
// 1. FUNCIONES PARA GENERAR COLORES
// ==================================================
// Genera un color aleatorio en formato hexadecimal (#RRGGBB).
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

function generarColorHSL() {
    let tono = Math.floor(Math.random() * 361);
    let saturacion = Math.floor(Math.random() * 101);
    let luminosidad = Math.floor(Math.random() * 101);

    return {
        h: tono,
        s: saturacion,
        l: luminosidad
    };
}


function convertirHSLaHEX(h, s, l) {
    s = s / 100;
    l = l / 100;

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;

    let rojo = 0;
    let verde = 0;
    let azul = 0;

    if (h < 60) {
        rojo = c;
        verde = x;
    } else if (h < 120) {
        rojo = x;
        verde = c;
    } else if (h < 180) {
        verde = c;
        azul = x;
    } else if (h < 240) {
        verde = x;
        azul = c;
    } else if (h < 300) {
        rojo = x;
        azul = c;
    } else {
        rojo = c;
        azul = x;
    }

    rojo = Math.round((rojo + m) * 255);
    verde = Math.round((verde + m) * 255);
    azul = Math.round((azul + m) * 255);

    let hexRojo = rojo.toString(16).padStart(2, "0");
    let hexVerde = verde.toString(16).padStart(2, "0");
    let hexAzul = azul.toString(16).padStart(2, "0");

    return "#" + hexRojo + hexVerde + hexAzul;
}

function convertirHSLaRGBA(h, s, l) {
    s = s / 100;
    l = l / 100;

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;

    let rojo = 0;
    let verde = 0;
    let azul = 0;

    if (h < 60) {
        rojo = c;
        verde = x;
    } else if (h < 120) {
        rojo = x;
        verde = c;
    } else if (h < 180) {
        verde = c;
        azul = x;
    } else if (h < 240) {
        verde = x;
        azul = c;
    } else if (h < 300) {
        rojo = x;
        azul = c;
    } else {
        rojo = c;
        azul = x;
    }

    rojo = Math.round((rojo + m) * 255);
    verde = Math.round((verde + m) * 255);
    azul = Math.round((azul + m) * 255);

    return `rgba(${rojo}, ${verde}, ${azul}, 1)`;
}


function obtenerCodigoColor(color, formato) {
    if (formato === "hsl") {
        return `(${color.h}, ${color.s}%, ${color.l}%)`;
    }

    if (formato === "hex") {
        return convertirHSLaHEX(color.h, color.s, color.l);
    }

    
}
//bloque de prueba//
let colorPrueba = generarColorHSL();

console.log("Color HSL:", colorPrueba);
console.log(
    "Color HEX:",
    convertirHSLaHEX(colorPrueba.h, colorPrueba.s, colorPrueba.l)
);
console.log(
    "Color RGBA:",
    convertirHSLaRGBA(colorPrueba.h, colorPrueba.s, colorPrueba.l)
);

console.log("Código HSL:", obtenerCodigoColor(colorPrueba, "hsl"));
console.log("Código HEX:", obtenerCodigoColor(colorPrueba, "hex"));
console.log("Código RGBA:", obtenerCodigoColor(colorPrueba, "rgba"));

// ==================================================
// 2. VARIABLES Y ELEMENTOS DEL HTML
// ==================================================
// Contenedor donde se muestran los bloques de colores.
let paleta = document.querySelector(".paleta");
// Botón principal para generar la paleta.
let btngenerar = document.querySelector(".btngenerar");
// Botones para seleccionar el tamaño de la paleta.
let btn6 = document.querySelector(".btn6");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");

let selectorFormato = document.querySelector("#formato-color");
selectorFormato.addEventListener("change", () => {
    actualizarFormato();
});

// Cantidad de colores seleccionada inicialmente.
let cantidadSeleccionada = 8;
let coloresActuales = [];

// ==================================================
// 3. FUNCIÓN PRINCIPAL DE LA PALETA
// ==================================================
function generarPaleta() {
    coloresActuales = [];

    // Genera los colores en HSL.
    for (let i = 0; i < cantidadSeleccionada; i++) {
        coloresActuales.push(generarColorHSL());
    }

    // Elimina los bloques de la paleta anterior.
    paleta.replaceChildren();

    // Crea un bloque por cada color.
    coloresActuales.forEach((color) => {
        let bloque = document.createElement("div");
        bloque.classList.add("bloque-color");

        // Obtiene el código del formato seleccionado.
        let codigo = obtenerCodigoColor(color, selectorFormato.value);

        // Aplica el color de fondo.
        bloque.style.backgroundColor =
            `hsl(${color.h}, ${color.s}%, ${color.l}%)`;

        // Muestra el código del color.
        let etiquetaColor = document.createElement("span");
        etiquetaColor.textContent = codigo;

        bloque.appendChild(etiquetaColor);
        paleta.appendChild(bloque);
    });
}

function actualizarFormato() {
    if (coloresActuales.length === 0){
        return;}
    let bloquesColor = paleta.querySelectorAll(".bloque-color");

    bloquesColor.forEach((bloque, index) => {
        let color = coloresActuales[index];

        let etiquetaColor = bloque.querySelector("span");

        etiquetaColor.textContent = obtenerCodigoColor(
            color,
            selectorFormato.value
        );
    });
}
// ==================================================
// 4. EVENTO DEL BOTÓN PRINCIPAL
// ==================================================
btngenerar.addEventListener("click", () => {
    generarPaleta();
    console.log("Botón generar paleta presionado");
});
// ==================================================
// 5. EVENTOS PARA SELECCIONAR LA CANTIDAD DE COLORES
// ==================================================

// Selecciona una paleta de 6 colores.
btn6.addEventListener("click", () => {
    document.querySelectorAll(".btn8, .btn9").forEach((boton) => {
        boton.classList.remove("active");
    });
    btn6.classList.add("active");
    console.log("Botón 6 colores presionado");
    cantidadSeleccionada = 6;
    generarPaleta();
});

// Selecciona una paleta de 8 colores.
btn8.addEventListener("click", () => {
    document.querySelectorAll(".btn6, .btn9").forEach((boton) => {
        boton.classList.remove("active");
    });
    btn8.classList.add("active");
    console.log("Botón 8 colores presionado");
    cantidadSeleccionada = 8;
    generarPaleta();
});

// Selecciona una paleta de 9 colores.
btn9.addEventListener("click", () => {
    document.querySelectorAll(".btn6, .btn8").forEach((boton) => {
        boton.classList.remove("active");
    });
    btn9.classList.add("active");
    console.log("Botón 9 colores presionado");
    cantidadSeleccionada = 9;
    generarPaleta();
});
// ==================================================
// 6. CÓDIGO DE INICIALIZACIÓN ORIGINAL
// ==================================================
// Genera una lista inicial de 6 colores.
let arrayColores = [];
for (let i = 0; i < 6; i++) {
    arrayColores.push(generarColor());
}
console.log("Array de colores generado: ", arrayColores);

// Busca los bloques que ya existen en el HTML.
let bloquesColor = paleta.querySelectorAll(".bloque-color");

// Aplica los colores iniciales a esos bloques existentes.
bloquesColor.forEach((bloque, index) => {
    bloque.style.backgroundColor = arrayColores[index];
    let etiquetaColor = document.createElement("span");
    bloque.replaceChildren();
    etiquetaColor.textContent = arrayColores[index];
    bloque.appendChild(etiquetaColor);
    console.log("Bloque de color: ", bloque);
});
