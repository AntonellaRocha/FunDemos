import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" id="home">
          FunDemos
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#quienes-somos">
                ¿Quiénes somos?
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#areas-accion" id="areas-accion">
                Áreas de Acción
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#autoridades" id="autoridades">
                Autoridades
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#impacto" id="Impacto">
                Impacto
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacto" id="contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
