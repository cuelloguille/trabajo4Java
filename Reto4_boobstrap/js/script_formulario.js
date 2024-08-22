document.addEventListener('DOMContentLoaded', function() {
  // Cargar datos desde localStorage si existen
  var registroGuardado = localStorage.getItem('registro');
  if (registroGuardado) {
    var registro = JSON.parse(registroGuardado);

    // Rellenar el formulario con los datos guardados
    document.getElementById('usuario').value = registro.usuario;
    document.getElementById('pass').value = registro.pass;
    document.getElementById('correo').value = registro.correo;
  }

  document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    // Obtener valores del formulario
    var usuario = document.getElementById('usuario').value;
    var pass = document.getElementById('pass').value;
    var correo = document.getElementById('correo').value;

    // Verificar que los campos no estén vacíos
    if (usuario === "" || pass === "" || correo === "") {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Crear un objeto con los datos del formulario
    var registro = {
      usuario: usuario,
      pass: pass,
      correo: correo
    };

    // Guardar el objeto en localStorage como una cadena JSON
    localStorage.setItem('registro', JSON.stringify(registro));

    // Crear el contenido de la alerta en forma de lista
    var alertMessage = `
      <ul class="list-unstyled">
        <li><strong>Usuario:</strong> ${usuario}</li>
        <li><strong>Correo Electrónico:</strong> ${correo}</li>
      </ul>
      <p>¡Te has registrado correctamente!</p>
    `;
    var alertElement = document.getElementById('alertMessage');
    if (alertElement) {
      alertElement.innerHTML = alertMessage;
    }

    var customAlert = document.getElementById('customAlert');
    if (customAlert) {
      customAlert.classList.remove('d-none');
    }

    // Añadir el event listener para el botón de cierre
    var alertCloseButton = document.getElementById('alertClose');
    if (alertCloseButton) {
      alertCloseButton.addEventListener('click', function() {
        customAlert.classList.add('d-none');
        window.location.href = "/index.html";
      });
    }
  });
});
