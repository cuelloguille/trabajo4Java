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
});

document.getElementById('registroForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario

  // Obtener valores del formulario
  var usuario = document.getElementById('usuario').value;
  var pass = document.getElementById('pass').value;
  var correo = document.getElementById('correo').value;

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
    <ul style="list-style-type: none; padding-left: 0;">
      <li><strong>Usuario:</strong> ${usuario}</li>
      <li><strong>Correo Electrónico:</strong> ${correo}</li>
    </ul>
    <p>¡Te has registrado correctamente!</p>
  `;
  document.getElementById('alertMessage').innerHTML = alertMessage;
  document.getElementById('customAlert').classList.remove('hidden');

  // Redireccionar después de cerrar la alerta
  document.getElementById('alertClose').addEventListener('click', function() {
    document.getElementById('customAlert').classList.add('hidden');
    window.location.href = "/index.html";
  });
});

