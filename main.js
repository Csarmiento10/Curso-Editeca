
let clickCounter = 0; // Variable global para contar los clicks

// Función para cambiar el contenido según la sección seleccionada utilizando switch
function cambiarSeccion(seccion) {
    let contenido;

    switch (seccion) {
        case 'BIM Standard':
            contenido = {
                titulo: "Revisor BIM Standard",
                descripcion: "Esta aplicación ayuda a verificar los estándares BIM en los proyectos.",
                imagen: "/assets/RevisorBIMSTD.JPG"
            };
            break;
        case 'Revisor de Familias':
            contenido = {
                titulo: "Revisor Familias",
                descripcion: "Verifica la calidad y consistencia de las familias en Revit.",
                imagen: "/assets/RevisorFamilias.JPG"
            };
            break;
        case 'Diccionarios':
            contenido = {
                titulo: "Diccionarios",
                descripcion: "Herramienta para gestionar diccionarios en Revit.",
                imagen: "/assets/Diccionarios.JPG"
            };
            break;
        case 'Multieditor':
            contenido = {
                titulo: "Multieditor",
                descripcion: "Permite editar múltiples elementos simultáneamente.",
                imagen: "/assets/Multieditor.JPG"
            };
            break;
        case 'Editor de Planos':
            contenido = {
                titulo: "Editor de Planos",
                descripcion: "Facilita la edición de planos en Revit.",
                imagen: "/assets/Editor de Planos.JPG"
            };
            break;
        case 'Editor de Parámetros':
            contenido = {
                titulo: "Editor de Parámetros",
                descripcion: "Permite modificar parámetros de las familias de Revit.",
                imagen: "/assets/EditorParametros.JPG"
            };
            break;
        case 'Secuencia de Parámetros':
            contenido = {
                titulo: "Secuencia de Parámetros",
                descripcion: "Automatiza la secuencia de parámetros en Revit.",
                imagen: "/assets/SecuenciaParametros.JPG"
            };
            break;
        default:
            contenido = {
                titulo: "Aplicación no encontrada",
                descripcion: "Por favor selecciona una aplicación válida.",
                imagen: "/assets/IconoFinger135x135.png"
            };
    }

    document.getElementById('titulo-aplicacion').innerText = contenido.titulo;
    document.getElementById('descripcion-aplicacion').innerText = contenido.descripcion;
    document.getElementById('imagen-aplicacion').src = contenido.imagen;
}

// Función para agregar eventos a los botones utilizando un bucle for
function agregarEventosBotones() {
    const botones = document.querySelectorAll('.buttonColor');
    
    // Bucle for para iterar sobre los botones
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function(evento) {
            cambiarSeccion(evento.target.innerText);
            contarClicks(); // Llamada para contar el número de clicks
        });
    }
}

// Función para contar las veces que se han clickeado los botones
function contarClicks() {
    clickCounter++; // Incrementa el contador
    document.getElementById('contador-clicks').innerText = `Clicks realizados: ${clickCounter}`;
}

// Ejecutar la función cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    agregarEventosBotones();
    // Inicializar el contador en la página
    const contadorElemento = document.createElement('p');
    contadorElemento.id = 'contador-clicks';
    contadorElemento.innerText = 'Clicks realizados: 0';
    document.body.appendChild(contadorElemento); // Añadir el contador al final de la página
});
const baseUrl = "/paths";

// Funciones de navegación
function goToPortafolio() {
    window.location.href = baseUrl + "/portafolio/portafolio.html";
}

function goToProductos() {
    window.location.href = baseUrl + "/productos/productos.html";
}

function goToContacto() {
    window.location.href = baseUrl + "/contacto/contacto.html";
}

function goToQuienesSomos() {
    window.location.href = baseUrl + "/quienesSomos/quienesSomos.html";
}

function goToInicio(){
    window.location.href = "/ejercicioTags.html"
}
