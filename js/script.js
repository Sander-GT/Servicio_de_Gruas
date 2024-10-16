// script.js

// Selecciona el botón
const button = document.querySelector('.Btn-insta');

// Añade un evento de clic para agregar el efecto de movimiento
button.addEventListener('mousedown', () => {
    button.style.transform = 'translate(2px, 2px)'; // Mover el botón al hacer clic
});

// Función para restaurar la posición original del botón
function resetButton() {
    button.style.transform = 'translate(0, 0)'; // Restaurar la posición original
}

// Añade un evento de clic para abrir el enlace
button.addEventListener('click', () => {
    // Restaura la posición del botón después de un breve momento
    setTimeout(resetButton, 150); // Ajusta el tiempo según sea necesario (150 ms aquí)
    
    // Abre el enlace de Instagram en una nueva pestaña
    window.open('https://www.instagram.com/gruas.myc/', '_blank');
});

// También puedes agregar un evento de mouseleave para restaurar si se sale del botón
button.addEventListener('mouseleave', resetButton);
