<!DOCTYPE html>
<html>
<style>
  .mt {
    margin-top: 5.5rem;
  }
</style>

<body>
  <div class="row mt">
    <div class="col s6 m6">
      <h5>Registro de entradas</h4>

        <label for="fecha"><b>Fecha</b></label>
        <input id="fecha" type="date" name="fecha" required>

        <label for="access"><b>Tipo de acceso</b></label>
        <input id="status" type="text" placeholder="Tipo de acceso" name="status" required>

        <div>
          <button id="btnAgregar" class="btn btn-sucess">Agregar</button>
        </div>


    </div>
    <div class="col s6 m6 ">
      <div class="row">
        <div class="col m4">
          <input type="text" id="statusFiltro" placeholder="Status">
          <label for="status"><b>Status</b></label>
        </div>
        <div class="col m4">
          <input type="text" id="limite" placeholder="Limite">
          <label for="limite"><b>Limite</b></label>
        </div>
        <div class="col m4">
          <button class="btn btn-sucess" onclick="filtrar()">Filtrar</button>
        </div>

      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Fecha</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody id="contenido">

        </tbody>
      </table>
    </div>
  </div>
</body>

</html>

<script type="text/javascript" src="./scripts/usuarios.js?v1.0.0"></script>