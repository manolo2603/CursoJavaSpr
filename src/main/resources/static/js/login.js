$(document).ready(function () {
    //registrarUsuarios();
  });

async function inciarSesion() {
    let datos = {
      password: document.querySelector("#password").value,
      email: document.querySelector("#email").value,
    }

    const request = await fetch("api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    const response = await request.text();

    if(response != "FAIL"){
        localStorage.token = response;
        localStorage.email = datos.email;
        console.log(response);
        window.location.href = "usuarios.html";
    }else{
        alert("Usuario o contraseña incorrectos");
    }
  }