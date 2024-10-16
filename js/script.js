// script.js

// Selecciona el botón
const button = document.querySelector('.Btn-insta');

// Añade un evento de clic para agregar el efecto de movimiento
button.addEventListener('mousedown', () => {
    button.style.transform = 'translate(2px, 2px)'; // Mover el botón al hacer clic
});

// Restaura la posición original al soltar el clic
button.addEventListener('mouseup', () => {
    button.style.transform = 'translate(0, 0)'; // Restaurar la posición original
});

// También puedes agregar un evento de mouseleave para restaurar si se sale del botón
button.addEventListener('mouseleave', () => {
    button.style.transform = 'translate(0, 0)'; // Restaurar la posición original
});
