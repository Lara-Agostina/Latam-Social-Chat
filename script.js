// 1. Corregimos los colores (México ahora es Verde, Blanco y Rojo)
const confetiPorPais = {
    'Argentina': ['#A2D2FF', '#FFFFFF', '#FFD166'],
    'Paraguay':  ['#FF8585', '#FFFFFF', '#85A9FF'],
    'Uruguay':   ['#BDE0FE', '#FFFFFF', '#FFEA85'],
    'México':    ['#68BB59', '#FFFFFF', '#FF4D4D'] // <-- VERDE, BLANCO Y ROJO
};

// 2. Aquí pones tus enlaces reales de Instagram
const enlacesInstagram = {
    'Argentina': 'https://ig.me/j/AbYTWNfKgOeL1bSa/',
    'Paraguay':  'https://ig.me/j/AbbYJU9SxehLVAWl/',
    'Uruguay':   'https://ig.me/j/AbYR1vHKAmnjQI5h/',
    'México':    'https://ig.me/j/AbZS9fBQM641txz-/'
};

document.querySelectorAll('.card').forEach(card => {
    const btn = card.querySelector('.join-btn');
    const pais = card.querySelector('h2').innerText;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();

        // Lanzar confeti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: confetiPorPais[pais]
        });

        // Esperar un segundo para que vean el confeti y luego redirigir
        setTimeout(() => {
            window.location.href = enlacesInstagram[pais]; 
        }, 1000); // 1000 milisegundos = 1 segundo
    });
});