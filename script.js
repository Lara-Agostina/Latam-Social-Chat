// 1. Corregimos los colores (México ahora es Verde, Blanco y Rojo)
const confetiPorPais = {
    'Chat General': ['#FF99C8', '#FCF6BD', '#D0F4DE', '#A9DEF9'], // Arcoiris Pastel
    'Argentina': ['#A2D2FF', '#FFFFFF', '#FFD166'],
    'Paraguay':  ['#FF8585', '#FFFFFF', '#85A9FF'],
    'Uruguay':   ['#BDE0FE', '#FFFFFF', '#FFEA85'],
    'México':    ['#68BB59', '#FFFFFF', '#FF4D4D'], // <-- VERDE, BLANCO Y ROJO
    'Colombia':     ['#FFEA85', '#85A9FF', '#FF8585'], // Amarillo, Azul y Rojo
    'Venezuela':    ['#FFEA85', '#85A9FF', '#FF8585'], // Amarillo, Azul y Rojo
    'Cuba':         ['#FF8585', '#FFFFFF', '#85A9FF'], // Rojo, Blanco y Azul
    'Puerto Rico':  ['#FF8585', '#FFFFFF', '#85A9FF'], // Rojo, Blanco y Azul
    'Panamá':       ['#85A9FF', '#FFFFFF', '#FF8585'], // Azul, Blanco y Rojo
    'Estados Unidos': ['#85A9FF', '#FFFFFF', '#FF8585']  // Azul, Blanco y Rojo
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

// Abrir el modal
function openModal() {
    document.getElementById("countryModal").style.display = "block";
}

// Cerrar el modal
function closeModal() {
    document.getElementById("countryModal").style.display = "none";
}

// Enviar sugerencia con efecto de éxito
function sendSuggestion() {
    const country = document.getElementById("countryInput").value;
    
    if (country.trim() === "") {
        alert("¡Por favor, escribe el nombre de un país! 😊");
        return;
    }

    // Disparar confeti de celebración
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#A2D2FF', '#FFB7CE', '#CAFFBF', '#FFEA85']
    });

    // Mensaje de agradecimiento
    alert(`¡Muchas gracias! Hemos anotado tu sugerencia para ${country}. ¡Pronto llegará a SocialChat! `);
    
    // Limpiar y cerrar
    document.getElementById("countryInput").value = "";
    closeModal();
}

// Cerrar si el usuario hace clic fuera de la cajita blanca
window.onclick = function(event) {
    const modal = document.getElementById("countryModal");
    if (event.target == modal) {
        closeModal();
    }
}