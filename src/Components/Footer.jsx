import React from "react";
import "../App.css"

const Footer = () => {
  return (
    <footer className="bg-white p-3">
      <div className="container-fluid px-5">
      <div className="row justify-content-around mt-5 align-items-center">
        <div className="col-12 col-lg-5">
        <div className="d-flex align-items-center justify-content-around mb-3 mb-md-0">
          <img
            src="/img/LOGO FUNDEMOS.png"
            alt="FunDemos"
            className="ms-5"
            style={{ maxWidth: '20vh', height: 'auto' }}
          />
          <img
            src="/img/GRUPO MSA.png"
            alt="Grupo MSA"
            className="ms-5"
            style={{ maxWidth: '20vh', height: 'auto' }}
          />
        </div>
        </div>
        <div className="col-12 col-lg-5 mt-5 mt-lg-0">
        <nav className="nav d-flex justify-content-between align-items-center h5 text-center">
          <a href="#quienes-somos" className="nav-link text-dark">¿Quiénes somos?</a>
          <a href="#areas-de-accion" className="nav-link text-dark">Áreas de Acción</a>
          <a href="#autoridades" className="nav-link text-dark">Autoridades</a>
          <a href="#impacto" className="nav-link text-dark">Impacto</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/linkedin-logo.png"
              alt="LinkedIn"
              className="mx-2"
              style={{ maxWidth: '8vh', height: 'auto' }}
            />
          </a>
        </nav>
        </div>
      </div>
      </div>
    </footer>



  );
};

export default Footer;
