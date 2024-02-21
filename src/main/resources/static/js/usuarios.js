// Call the dataTables jQuery plugin
$(document).ready(function () {
  cargaUsuarios();
  $("#usuarios").DataTable();
  document.getElementById("userEmail").outerHTML = localStorage.email
});

function getHeader() {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Authorization": localStorage.token,
  };
}

async function cargaUsuarios() {
  const request = await fetch("api/usuarios", {
    method: "GET",
    headers: getHeader(),
  });
  const usuarios = await request.json();
  let listadoHtml = "";
  
  for (let usuario of usuarios) {
    let botonEliminar= '<a href="#" onclick="eliminarUsuario(' + usuario.id + ')"º class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
    let usuarioHtml = `
        <tr>
        <td>${usuario.id}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.email}</td>
        <td>${usuario.telefono}</td>
        <td>
        ${botonEliminar}
            
        </td>
        `;

    listadoHtml += usuarioHtml;
  }

  document.querySelector("#usuarios tbody").outerHTML = listadoHtml;
}

async function eliminarUsuario(id) {
  if(confirm("¿Desea eliminar el usuario?")){
    const request = await fetch(`api/usuarios/${id}`, {
      method: "DELETE",
      headers: getHeader(),
    });
    location.reload();
  }
}
