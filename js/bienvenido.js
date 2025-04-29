const emailSesion = localStorage.getItem("sesionActiva");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

if (!emailSesion) {
  window.location.href = "login.html";
} else {
  const usuario = usuarios.find(u => u.email === emailSesion);
  if (!usuario) {
    window.location.href = "login.html";
  } else {
    document.getElementById("saludoUsuario").textContent = `Hola, ${usuario.nombre}!`;
  }
}

function cerrarSesion() {
  localStorage.removeItem("sesionActiva");
  window.location.href = "login.html";
}
