import React from "react";
import "../../styles/Contacto.css";

function Contacto() {
  return (
    <section class="row" id="contacto-form">
      <div class="col-md-12">
        <form class="form">
          <p class="contact">Contacto</p>
          <div class="group">
            <input id="nombre" required class="main-input" type="text" />
            <span class="highlight-span"></span>
            <label for="nombre" class="nombre">Nombre</label>
          </div>
          <div class="group">
            <input id="email" required class="main-input" type="text" />
            <span class="highlight-span"></span>
            <label for="email" class="email">Email</label>
          </div>
          <div class="form-group">
            <label for="mensaje" class="mensaje">Mensaje</label>
            <textarea
              class="form-control"
              id="mensaje"
              rows="3"
              placeholder="Ingrese su mensaje"
            ></textarea>
          </div>
          <button type="submit" class="btn">Enviar</button>
        </form>
      </div>
    </section>

  );
}

export default Contacto;
