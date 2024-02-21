// Call the dataTables jQuery plugin
$(document).ready(function () {
    //registrarUsuarios();
  });
  
  async function registrarUsuarios() {
    let datos = {
      nombre: document.querySelector("#nombre").value,
      apellido: document.querySelector("#apellido").value,
      password: document.querySelector("#password").value,
      email: document.querySelector("#email").value,
      telefono: document.querySelector("#telefono").value
    }

    let repetirPasword = document.querySelector("#repetirPassword").value;

    if (repetirPasword != datos.password) {
      alert("Las contraseñas no coinciden");
      return;
    }
    const request = await fetch("api/usuarios", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
    const usuarios = await request.json();

    if (request.status == 200) {
      alert("Registro Exitoso");
      window.location.href = "login.html";
    }

  }