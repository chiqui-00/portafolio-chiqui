document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    if (query) {
        // Simulando una búsqueda en la web
        alert('Buscando: ' + query);
    } else {
        alert('Por favor, ingresa una consulta de búsqueda.');
    }
});