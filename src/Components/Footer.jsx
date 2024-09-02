import React from "react";
import "../App.css"

const Footer = () => {
  return (
    <footer className="bg-white p-3">
      <div className="container-fluid px-5">
        <div className="row justify-content-around justify-content-xxl-center mt-5 align-items-center">
          <div className="col-12 col-lg-auto col-xxl-4">
            <div className="d-flex align-items-center justify-content-around mb-4 mb-lg-0">
              <img
                src="/img/LOGO FUNDEMOS.png"
                alt="FunDemos"
                className="ms-3 mb-2"
                style={{ maxWidth: '20vh', height: 'auto' }}
              />
              <img
                src="/img/GRUPO MSA.png"
                alt="Grupo MSA"
                className="ms-3 mb-2"
                style={{ maxWidth: '20vh', height: 'auto' }}
              />
            </div>
          </div>
          <div className="col-12 col-lg-auto col-xxl-6 mt-2 mt-lg-0 mb-4 mb-lg-0">
            <nav className="nav d-flex justify-content-between align-items-center h5 text-center">
              <a href="#quienes-somos" className="nav-link text-dark mb-2 col-12 col-lg-auto">¿Quiénes somos?</a>
              <a href="#areas-de-accion" className="nav-link text-dark mb-2 col-12 col-lg-auto">Áreas de Acción</a>
              <a href="#autoridades" className="nav-link text-dark mb-2 col-12 col-lg-auto">Autoridades</a>
              <a href="#impacto" className="nav-link text-dark mb-2 col-12 col-lg-auto">Impacto</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="col-12 col-lg-auto">
                <img
                  src="/img/linkedin-logo.png"
                  alt="LinkedIn"
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
