import React from "react";
import "../../styles/Contacto.css";

function Contacto() {
  return (
    <section class="row" id="contacto">
      <div class="col-md-12">
        <form class="form">
          <p class="contact">Contacto</p>
          <div class="group">
            <input required="true" class="main-input" type="text" />
            <span class="highlight-span"></span>
            <label class="nombre">Nombre</label>
          </div>
          <div class="container-1">
            <div class="group">
              <input required="true" class="main-input" type="text" />
              <span class="highlight-span"></span>
              <label class="email">Email</label>
            </div>
            <div class="form-group">
              <label class ="mensaje"></label>
              <textarea
                class="form-control"
                id="mensaje"
                rows="3"
                placeholder="Ingrese su mensaje"
              ></textarea>
            </div>
            <button type="button" class="btn">Enviar</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contacto;
