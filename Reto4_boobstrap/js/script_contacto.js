document.addEventListener('DOMContentLoaded', function() {
  // Manejar el envío del formulario de contacto
  document.querySelector('#formulario-contacto form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;


    // Crear el contenido de la alerta
    var alertMessage = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <ul style="list-style-type: none; padding-left: 0;">
        <li><strong>Nombre:</strong> ${nombre}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Mensaje:</strong> ${mensaje}</li>
      </ul>
      <p>¡Tu consulta ha sido enviada exitosamente!</p>
      <button type="button" class="btn-close" id="alertClose" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  // Mostrar la alerta
  var customAlertContainer = document.getElementById("customAlert");
  customAlertContainer.innerHTML = alertMessage;

  // No es necesario manejar el cierre manualmente, Bootstrap se encarga del cierre con data-bs-dismiss
  });
});