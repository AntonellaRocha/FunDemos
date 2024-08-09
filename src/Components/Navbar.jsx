import React from "react";
import "../../styles/Navbar.css";

function Navbar() {
  return (
  <><nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div class="container">
      <a
          class="navbar-brand"
          href="./index.html"
          aria-label="FunDemos"
          id="home"
        >
          <img
            class="navbar-brand-logo"
            src="./public/img/logo.jpg"
            alt="Logo"
            width="200"
            height="120"
          ></img>
        </a>
        <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link" href="#quienes-somos" id="quienes-somos">¿Quiénes somos?</a></li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link" href="#areasAccion" id="areas-accion">Áreas de Acción </a></li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link" href="#autoridades" id="autoridades">Autoridades</a></li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link" href="#impacto" id="impacto">Impacto</a></li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link" href="#contacto" id="contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="row">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="img/PazJusticiaInstituciones.png"
                class="d-block w-100"
                alt="imagen1" />
            </div>
            <div class="carousel-item">
              <img
                src="img/IndustriaInnovacion.png"
                class="d-block w-100"
                alt="imagen2" />
            </div>
            <div class="carousel-item">
              <img
                src="img/AccionPorElClima.png"
                class="d-block w-100"
                alt="imagen3" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section></>
  );
}

export default Navbar;
