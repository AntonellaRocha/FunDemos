import React from "react";
import "../App.css";

function Navbar() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-white text-uppercase fixed-top" id="mainNav">
        <div className="logo-position">
          <a className="navbar-brand" href="./index.html" aria-label="FunDemos" id="home">
            <img className="logo mx-5 ms-5 px-3 img-fluid"
              src="/img/LOGO FUNDEMOS.png"
              alt="Logo"
            ></img>
          </a>
        </div>
        <div className="">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-3 border-bottom"><a className="nav-link text-dark fw-medium" href="#quienes-somos">¿Quiénes somos?</a></li>
              <li className="nav-item mx-0 mx-lg-3 border-bottom"><a className="nav-link text-dark fw-medium" href="#areas-accion">Áreas de Acción </a></li>
              <li className="nav-item mx-0 mx-lg-3 border-bottom"><a className="nav-link text-dark fw-medium" href="#autoridades">Autoridades</a></li>
              <li className="nav-item mx-0 mx-lg-3 border-bottom"><a className="nav-link text-dark fw-medium" href="#impacto">Impacto</a></li>
              <li className="nav-item btn-contact me-md-2 rounded-3 mx-0 mx-lg-4 px-4"><a className="nav-link text-white fw-medium" href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid px-5">
        <a className="navbar-brand" href="./index.html" aria-label="FunDemos" id="home">
            <img className="logo p-0 mx-0 img-fluid"
              src="/img/LOGO FUNDEMOS.png"
              alt="Logo"
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-3 border-bottom"><a className="nav-link text-dark fw-medium" href="#quienes-somos">¿Quiénes somos?</a></li>
              <li className="nav-item mx-0 mx-lg-3 border-bottom"><a className="nav-link text-dark fw-medium" href="#areas-accion">Áreas de Acción </a></li>
              <li className="nav-item mx-0 mx-lg-3 border-bottom"><a className="nav-link text-dark fw-medium" href="#autoridades">Autoridades</a></li>
              <li className="nav-item mx-0 mx-lg-3 border-bottom"><a className="nav-link text-dark fw-medium" href="#impacto">Impacto</a></li>
              <li className="nav-item btn-contact me-md-2 rounded-3 mx-0 mx-lg-4 px-4"><a className="nav-link text-white fw-medium" href="#contacto">Contacto</a></li>
            {/* TODO: Boton largo */}
            </ul>
          </div>
        </div>
      </nav>


      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
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
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/img/1710775739372.jpg"
              className="d-block w-100"
              alt="imagen1" />
          </div>
          <div className="carousel-item">
            <img
              src="/img/1710774255295.jpg"
              className="d-block w-100"
              alt="imagen2" />
          </div>
          <div className="carousel-item">
            <img
              src="/img/1710775756498.jpg"
              className="d-block w-100"
              alt="imagen3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden" id="quienes-somos">Next</span>
        </button>

      </div></>

  );
}

export default Navbar;
