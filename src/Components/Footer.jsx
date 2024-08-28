import React from "react";
import "../App.css"

const Footer = () => {
  return (
    <footer className="bg-white p-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0">
          <img
            src="/img/LOGO FUNDEMOS.png"
            alt="FunDemos"
            className="ms-5 mx-4"
            style={{ maxWidth: '20vh', height: 'auto' }}
          />
          <img
            src="/img/GRUPO MSA.png"
            alt="Grupo MSA"
            className="ms-5 mx-4"
            style={{ maxWidth: '20vh', height: 'auto' }}
          />
        </div>

        <nav className="nav flex-column flex-md-row align-items-center h5">
          <a href="#quienes-somos" className="nav-link text-dark">¿Quiénes somos?</a>
          <a href="#areas-de-accion" className="nav-link text-dark me-3">Áreas de Acción</a>
          <a href="#autoridades" className="nav-link text-dark me-3">Autoridades</a>
          <a href="#impacto" className="nav-link text-dark me-3">Impacto</a>
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
    </footer>



  );
};

export default Footer;
