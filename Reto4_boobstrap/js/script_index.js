document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item");

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

document.addEventListener("DOMContentLoaded", function() {
    const zoomLinks = document.querySelectorAll(".zoom");
    zoomLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Zoom en la imagen (funcionalidad a implementar).");
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var currentPath = window.location.pathname;
    var navLinks = document.querySelectorAll('.navbar-links a');

    navLinks.forEach(function(link) {
        var linkPath = link.getAttribute('href');
        if (currentPath === linkPath) {
            link.classList.add('active');
        }
    });
});
