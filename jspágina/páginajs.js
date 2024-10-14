
function filterProjects() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const projectCards = document.querySelectorAll('.project-card');
    const suggestionsList = document.getElementById('suggestions-list');

    // Limpiar la lista de sugerencias
    suggestionsList.innerHTML = '';

    let hasResults = false; // Bandera para controlar si hay resultados

    // Filtrar proyectos y actualizar la vista
    projectCards.forEach(card => {
        const projectName = card.getAttribute('data-name').toLowerCase();
        if (projectName.includes(filter)) {
            card.style.display = ''; // Mostrar tarjeta
            hasResults = true;
            // Agregar sugerencia a la lista
            const suggestion = document.createElement('div');
            suggestion.textContent = card.getAttribute('data-name');
            suggestion.onclick = () => {
                input.value = card.getAttribute('data-name'); // Al hacer clic, llenar el input con el nombre del proyecto
                suggestionsList.style.display = 'none'; // Ocultar sugerencias
                filterProjects(); // Volver a filtrar
            };
            suggestionsList.appendChild(suggestion);
        } else {
            card.style.display = 'none'; // Ocultar tarjeta
        }
    });

    // Mostrar u ocultar la lista de sugerencias
    suggestionsList.style.display = hasResults && filter ? 'block' : 'none'; // Mostrar solo si hay resultados y el input no está vacío
}

function performSearch() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const projectCards = document.querySelectorAll('.project-card');

    // Filtrar proyectos al hacer clic en el botón de búsqueda
    projectCards.forEach(card => {
        const projectName = card.getAttribute('data-name').toLowerCase();
        card.style.display = projectName.includes(filter) ? '' : 'none'; // Mostrar solo coincidencias
    });
}

function setModalContent(button) {
    const projectCard = button.parentElement.parentElement.parentElement; // Tarjeta del proyecto
    const title = projectCard.getAttribute('data-name'); // Obtener el nombre del proyecto
    const description = projectCard.getAttribute('data-description'); // Obtener la descripción del proyecto

    // Establecer contenido del modal
    document.getElementById('projectModalLabel').innerText = title; // Título del modal
    document.getElementById('projectDescription').innerText = description; // Descripción del proyecto
}

// Manejar el evento de clic fuera de la lista de sugerencias para ocultarla
window.addEventListener('click', function (event) {
    const suggestionsList = document.getElementById('suggestions-list');
    const searchInput = document.getElementById('searchInput');
    if (!suggestionsList.contains(event.target) && event.target !== searchInput) {
        suggestionsList.style.display = 'none'; // Ocultar la lista si se hace clic fuera de ella
    }
});