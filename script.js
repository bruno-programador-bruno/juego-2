const circle = document.getElementById('circle');

circle.addEventListener('click', () => {
    circle.style.width = `${circle.offsetWidth + 20}px`;
    circle.style.height = `${circle.offsetHeight + 20}px`;
});

circle.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Previene el menú contextual del botón derecho
    if (circle.offsetWidth > 20) { // Evitar que el círculo sea más pequeño que 20px
        circle.style.width = `${circle.offsetWidth - 20}px`;
        circle.style.height = `${circle.offsetHeight - 20}px`;
    }
});
