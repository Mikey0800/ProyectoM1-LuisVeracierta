# Colorfly Studio


Colorfly Studio es una aplicación web para generar paletas de colores aleatorias y visualizar sus códigos en diferentes formatos. Está desarrollada con tecnologías web fundamentales, utilizando HTML, CSS y JavaScript puro, sin frameworks.

 # Acceso a la aplicación 

*Demo en línea:* (https://mikey0800.github.io/ProyectoM1-LuisVeracierta/)

*Gif usando el MVP:* (C:\Users\manji\Documents\Recording 2026-10-15 175652.mp4)

*Repositorio de GitHub:* (https://github.com/Mikey0800/ProyectoM1-LuisVeracierta.git)

Ejecución local: puedes descargar o clonar el repositorio y abrir el archivo index.html en tu navegador.

✨ *Características principales*

Generación aleatoria de paletas de colores.

Selección de la cantidad de colores: 6, 8 o 9.

Generación de colores mediante el modelo HSL.

Visualización de códigos de color en formatos HSL y HEX.

Renderizado dinámico de los colores mediante JavaScript y el DOM.

Interfaz interactiva con animaciones CSS sutiles.

🛠️ *Tecnologías utilizadas*

HTML5

Estructura y contenido de la aplicación.

CSS3

Estilos visuales, diseño de botones y animaciones.

JavaScript puro

Generación de colores, interacción y manipulación del DOM.

Git y cmd

Control de versiones del proyecto.

GitHub

*Alojamiento del repositorio y publicación de la demo.*

📁 Estructura del proyecto

ProyectoM1-LuisVeracierta/
docs
 ├── index.html
 ├── style.css
 ├── script.js
 └── README.md
documentación
 ├── app.gif
 └── README.md

index.html: contiene la estructura principal de la aplicación.

style.css: define los estilos, la apariencia de los botones y las animaciones.

script.js: contiene la lógica para generar colores, convertir sus códigos y actualizar dinámicamente la paleta.

README.md: documenta el proyecto, sus características y las tecnologías utilizadas.

⚙️ *Decisiones técnicas destacadas*

1. Generación de colores en HSL

Se utiliza el modelo de color HSL (Hue, Saturation, Lightness) para generar colores aleatorios mediante sus componentes:

Hue (tono): representa el matiz del color.

Saturation (saturación): determina la intensidad del color.

Lightness (luminosidad): controla qué tan claro u oscuro es.

Este modelo permite trabajar con los componentes del color de manera independiente.

2. Conversión de HSL a HEX

Los colores se generan en HSL y se convierten al formato hexadecimal para permitir su visualización en ese formato.

3. Renderizado dinámico del DOM

JavaScript crea y actualiza los elementos de la paleta según la cantidad de colores seleccionada. Esto permite adaptar la interfaz sin tener que definir manualmente todos los bloques de color en el HTML.

4. Selección de la cantidad de colores

La aplicación permite seleccionar entre 6, 8 y 9 colores. La cantidad elegida determina cuántos colores se generan y muestran en la paleta.

🎞️ *Animación CSS*

Para mejorar la interacción con los botones, se implementó un movimiento vertical sutil al pasar el cursor sobre ellos.

Las propiedades principales utilizadas son:

transform: translateY(-2px): desplaza el botón ligeramente hacia arriba.

transition: transform 0.25s ease: suaviza el movimiento durante la transición.

box-shadow: permite añadir profundidad visual mediante sombras.

Estas propiedades contribuyen a una interfaz más dinámica sin recurrir a bibliotecas externas de animación.

🤖 *Documentación del uso de inteligencia artificial*

Durante el desarrollo de Colorfly Studio se utilizó ChatGPT como herramienta de apoyo para el aprendizaje de JavaScript y CSS.

La asistencia se enfocó en:

Comprender el funcionamiento de funciones, variables, eventos y manipulación del DOM.

Resolver dudas sobre la lógica de generación y conversión de colores.

Recibir pistas y explicaciones paso a paso para comprender los conceptos.

Aprender propiedades CSS y mejorar gradualmente la interfaz de los botones.

El código fue escrito y adaptado en su mayoría por mí, salvo las funciones de convertir y el primer addEventListener, que me resultó complicado. La inteligencia artificial se utilizó como apoyo educativo, procurando comprender la lógica de las soluciones y tomar las decisiones de implementación.

👨‍💻 Autor

Luis Veracierta

GitHub: @Mikey0800
Mail: luisveracierta7w7@gmail.com 

Desarrollado como proyecto de aprendizaje Henry, de desarrollo web con HTML, CSS y JavaScript puro.
