// const { response } = require("express");

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
    } else {
        window.location = "?view=login";
    }
  });

  var api = new APISchema();

  $("#btnAgregar").click(function(){
    addAccess()
  });

function addAccess(){
  var fecha = $("#fecha").val();
  var status = $("#status").val();

  if( fecha === "" || status === ""){
    M.toast({html: 'No se permiten campos vacios!'});
  }else{
    fetch(api.accesos, {
      method: 'POST',
      body: JSON.stringify({
        fecha: fecha,
        status: status
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      M.toast({html: 'Acceso registrado'});
    })
    .catch(err => {
      M.toast({html: "Error: "+err});
    });
  }
}

var tablaCont = document.querySelector('#contenido')
function filtrar(){
  var status = $("#statusFiltro").val();
  var limite = $("#limite").val();
  var url= "http://localhost:3000/api/accesos/"+status+"/"+limite+""
  fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(res => res.json())
  .then(datos => {
    tabla(datos)
  })
}

function tabla(datos){
  contenido.innerHTML = ''
  for(let valor of datos){
    contenido.innerHTML += `
    <tr>
    <th scope="row ">${valor.id}</th>
    <th scope="row ">${valor.fecha}</th>
    <th scope="row ">${valor.status}</th>
    <th scope="row" class="btn btn-danger" onclick="delAccess('${valor.id}')">Eliminar</th>
    
    </tr>
    `
  }
}

function delAccess(id){
  var url="http://localhost:3000/api/accesos/"+id
  fetch(url, {
      method: 'DELETE'
}) .then(response => response.json()).then(data => {
    
  filtrar();
         
  }).catch(err => console.log(err));

}