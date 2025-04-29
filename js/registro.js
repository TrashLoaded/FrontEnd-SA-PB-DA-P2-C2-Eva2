document.getElementById("formRegistro").addEventListener("submit", function (e) {
    e.preventDefault();
    if (validarRegistro()) {
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      if (usuarios.some(u => u.email === email)) {
        mostrarMensaje("mensajeRegistro", "Este correo ya está registrado.", "text-danger");
        return;
      }
  
      usuarios.push({ nombre, email, password });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      mostrarMensaje("mensajeRegistro", "¡Registro exitoso!", "text-success");
      document.getElementById("formRegistro").reset();
    }
  });
  
  function validarRegistro() {
    let valido = true;
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmar = document.getElementById("confirmarPassword").value.trim();
  
    limpiarErrores();
  
    if (!nombre) {
      mostrarError("errorNombre", "El nombre es obligatorio.");
      valido = false;
    }
    if (!email) {
      mostrarError("errorEmail", "El correo es obligatorio.");
      valido = false;
    }
    if (!password) {
      mostrarError("errorPassword", "La contraseña es obligatoria.");
      valido = false;
    }
    if (password !== confirmar) {
      mostrarError("errorConfirmar", "Las contraseñas no coinciden.");
      valido = false;
    }
  
    return valido;
  }
  
  function mostrarError(id, mensaje) {
    document.getElementById(id).textContent = mensaje;
  }
  
  function limpiarErrores() {
    ["errorNombre", "errorEmail", "errorPassword", "errorConfirmar"].forEach(id => {
      document.getElementById(id).textContent = "";
    });
  }
  
  function mostrarMensaje(id, mensaje, clase) {
    const div = document.getElementById(id);
    div.textContent = mensaje;
    div.className = `mt-3 ${clase}`;
  }
  