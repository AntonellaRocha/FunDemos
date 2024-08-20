import React from "react";
import "../App.css"

const Footer = () => {
  return (
    <footer className="d-flex justify-content-around justify-content-evenly bg-white p-3">
      <div className="d-flex justify-content-around align-items-baseline">
        <img
          src="/img/LOGO FUNDEMOS.png"
          alt="FunDemos"
          className="ms-5 mx-4"
          style={{ width: '150px', height: 'auto' }} // Ajustar tamaño
        />
        <img
          src="/img/GRUPO MSA.png"
          alt="Grupo MSA"
          className="ms-5 mx-4"
          style={{ width: '150px', height: 'auto' }} // Ajustar tamaño
        />
        <div className="nav align-items-center p-3 h5">
          <a href="#quienes-somos" className="nav-link mx-0 mx-lg-1 text-dark">¿Quiénes somos?</a>
          <a href="#areas-de-accion" className="nav-link mx-0 mx-lg-1 text-dark me-3">Áreas de Acción</a>
          <a href="#autoridades" className="nav-link mx-0 mx-lg-1 text-dark me-3">Autoridades</a>
          <a href="#impacto" className="nav-link mx-0 mx-lg-1 text-dark me-3">Impacto</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/linkedin-logo.png"
              alt="LinkedIn"
              className="ms-5 mx-4 p-2"
              style={{ width: '70px', height: 'auto' }} // Ajustar el tamaño
            />
          </a>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
