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
        <ul style="list-style-type: none; padding-left: 0;">
          <li><strong>Nombre:</strong> ${nombre}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Mensaje:</strong> ${mensaje}</li>
        </ul>
        <p>¡Tu consulta ha sido enviada exitosamente!</p>
      `;
  
      // Mostrar la alerta
      var customAlert = document.getElementById('customAlert');
      document.getElementById('alertMessage').innerHTML = alertMessage;
      customAlert.classList.remove('hidden');
  
      // Manejar el cierre de la alerta
      document.getElementById('alertClose').addEventListener('click', function() {
        customAlert.classList.add('hidden');
        // Opcional: Redireccionar o realizar alguna otra acción después de cerrar la alerta
      });
    });
  });
  