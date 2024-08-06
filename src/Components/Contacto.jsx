import React from "react";

function Contacto() {
  return (
    <section class="row">
    <div class="col-md-12">
      <h2>Contacto</h2>
      <form>
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" class="form-control" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" class="form-control" />
        </div>
        <div class="form-group">
          <label for="mensaje">Mensaje</label>
          <textarea id="mensaje" class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </section>

  );
}

export default Contacto;