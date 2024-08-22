document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');

    var images = document.querySelectorAll('.preview-image');
    
    images.forEach(function(img) {
        img.addEventListener('click', function() {
            modalImg.src = this.src;
        });
    });
});
