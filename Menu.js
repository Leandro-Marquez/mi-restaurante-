// Añadimos el evento al formulario de reserva
document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    if (nombre && email && fecha && hora) {
        alert(`Gracias, ${nombre}. Tu reserva para el ${fecha} a las ${hora} ha sido confirmada.`);
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Añadimos el evento al botón "Ver Menú"
document.getElementById('verMenuBtn').addEventListener('click', function(event) {
    event.preventDefault();  // Prevenir la acción por defecto del enlace

    // Hacemos scroll hacia la sección del menú
    document.getElementById('menu').scrollIntoView({
        behavior: 'smooth',  // Esto hace que el scroll sea suave
        block: 'start'       // Asegura que la sección del menú esté en la parte superior
    });
});
