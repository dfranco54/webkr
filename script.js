function teLlevoAFigma() {
    window.open("https://www.figma.com/proto/4i5WJVPlecgKI04J3UppJ7/Ubyk?node-id=128-157&t=1WuJubzoxLdydwbW-1&starting-point-node-id=128%3A157");
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburguesa = document.querySelector('.hamburguesa');
    const menuMobile = document.getElementById('menu-mobile');

    hamburguesa.addEventListener('click', () => {
        // Alternar clases "activo" en el botón y el menú
        hamburguesa.classList.toggle('activo');
        menuMobile.classList.toggle('activo');

        // Opcional: Desplazamiento suave
        if (menuMobile.classList.contains('activo')) {
            menuMobile.style.animation = 'fadeIn 0.3s ease-in-out';
        } else {
            menuMobile.style.animation = 'fadeOut 0.3s ease-in-out';
        }
    });
});

// Opcional: Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.menu-mobile a').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.hamburguesa').classList.remove('activo');
        document.getElementById('menu-mobile').classList.remove('activo');
    });
});