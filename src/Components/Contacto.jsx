import React from "react";
import "../App.css";

function Contacto() {
  return (
    <section className="row" id="contacto-form">
      <div className="col-md-12">
        <form className="form">
          <p className="contact">Contacto</p>
          <div className="group">
            <input id="nombre" required class="main-input" type="text" />
            <span className="highlight-span"></span>
            <label for="nombre" className="nombre">Nombre</label>
          </div>
          <div className="group">
            <input id="email" required class="main-input" type="text" />
            <span className="highlight-span"></span>
            <label for="email" className="email">Email</label>
          </div>
          <div className="form-group">
            <label for="mensaje" className="mensaje">Mensaje</label>
            <textarea
              className="form-control"
              id="mensaje"
              rows="3"
              placeholder="Ingrese su mensaje"
            ></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn">Enviar</button>
          </div>
        </form>
      </div>
    </section>

  );
}

export default Contacto;
