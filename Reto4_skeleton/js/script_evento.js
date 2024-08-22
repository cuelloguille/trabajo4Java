document.addEventListener('DOMContentLoaded', function() {
    // Manejar el envío del formulario de registro para eventos
    document.querySelector('#registro-tickets form').addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario
  
      // Obtener los valores del formulario
      var nombre = document.getElementById('nombre').value;
      var email = document.getElementById('email').value;
      var evento = document.getElementById('evento').value;
      var boletos = document.getElementById('boletos').value;
  
      // Crear el contenido de la alerta
      var alertMessage = `
        <ul style="list-style-type: none; padding-left: 0;">
          <li><strong>Nombre:</strong> ${nombre}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Evento:</strong> ${evento}</li>
          <li><strong>Cantidad de Boletos:</strong> ${boletos}</li>
        </ul>
        <p>¡Te has registrado exitosamente para el evento!</p>
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
  