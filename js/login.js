document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();
  if (validarLogin()) {
    const email = document.getElementById("emailLogin").value.trim();
    const password = document.getElementById("passwordLogin").value.trim();

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (usuario) {
      const bienvenidaModal = new bootstrap.Modal(document.getElementById("bienvenidaModal"));
      bienvenidaModal.show();

      const modalElement = document.getElementById("bienvenidaModal");
      modalElement.addEventListener("hidden.bs.modal", () => {
        window.location.href = "home.html";
      });
    } else {
      mostrarMensaje("mensajeLogin", "Credenciales incorrectas.", "text-danger");
    }
  }
});

function validarLogin() {
  let valido = true;
  const emailLogin = document.getElementById("emailLogin").value.trim();
  const passwordLogin = document.getElementById("passwordLogin").value.trim();

  limpiarErroresLogin();

  if (!emailLogin || !passwordLogin) {
    mostrarMensaje("mensajeLogin", "Por favor, complete todos los campos.", "text-danger");
    valido = false;
  }

  return valido;
}

function mostrarMensaje(id, mensaje, clase) {
  const div = document.getElementById(id);
  div.textContent = mensaje;
  div.className = `mt-3 ${clase}`;
}

function limpiarErroresLogin() {
  ["errorEmailLogin", "errorPasswordLogin"].forEach(id => {
    document.getElementById(id).textContent = "";
  });
}
