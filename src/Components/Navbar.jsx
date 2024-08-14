import React from "react";
import "../../styles/Navbar.css";

function Navbar() {
  return (
  <><nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div class="logo-position">
            <a
          class="navbar-brand"
          href="./index.html"
          aria-label="FunDemos"
          id="home"
        >
          <img class="logo"
            src="/img/LOGO FUNDEMOS.png"
            alt="Logo"
          ></img>
        </a>
        </div>  
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link" href="#" id="quienes-somos">¿Quiénes somos?</a></li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link" href="#a" id="areas-accion">Áreas de Acción </a></li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link" href="#" id="autoridades">Autoridades</a></li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link" href="#" id="impacto">Impacto</a></li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link" href="#" id="contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
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
              src="/img/1710775739372.jpg"
              class="d-block w-100"
              alt="imagen1" />
          </div>
          <div class="carousel-item">
            <img
              src="/img/1710774255295.jpg"
              class="d-block w-100"
              alt="imagen2" />
          </div>
          <div class="carousel-item">
            <img
              src="/img/1710775756498.jpg"
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
      </div></>
  );
}

export default Navbar;
