// script.js
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos todos los elementos con la clase 'dropdown'
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        // Añadimos un evento para mostrar el menú desplegable
        dropdown.addEventListener('mouseover', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });

        // Añadimos un evento para ocultar el menú desplegable
        dropdown.addEventListener('mouseout', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('file-upload');
    const fileList = fileInput.files;

    const documentList = document.getElementById('document-list');
    
    for (const file of fileList) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = file.name;
        link.textContent = file.name;
        listItem.appendChild(link);
        documentList.appendChild(listItem);
    }

    // Reset the file input
    fileInput.value = '';
});
