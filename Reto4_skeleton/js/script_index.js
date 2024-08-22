/*Java en el inicio*/
document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos
});


/*Java en la galeria*/
document.addEventListener("DOMContentLoaded", function() {
    // Aquí puedes agregar cualquier funcionalidad adicional que desees para tu galería de arte.
    
    // Ejemplo de manejo de clic en el zoom (si estás usando un plugin o alguna funcionalidad similar)
    const zoomLinks = document.querySelectorAll(".zoom");
    zoomLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            // Aquí puedes agregar lógica para hacer zoom en la imagen, abrir una lightbox, etc.
            alert("Zoom en la imagen (funcionalidad a implementar).");
        });
    });
});




/*es para saber donde estoy cuando hago click en inicio,galeria,artista, contacto, evento o login*/

document.addEventListener('DOMContentLoaded', function() {
    // Obtén la URL actual
    var currentPath = window.location.pathname;

    // Selecciona todos los enlaces de la barra de navegación
    var navLinks = document.querySelectorAll('.navbar-links a');

    navLinks.forEach(function(link) {
        // Obtén el href del enlace
        var linkPath = link.getAttribute('href');

        // Compara el href con la URL actual
        if (currentPath === linkPath) {
            link.classList.add('active');
        }
    });
});

