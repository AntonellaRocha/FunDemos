import React from "react";
import "../App.css"

function Footer() {
  return (
    <footer className="footer bg-white text-secondary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <a
              className="footer-brand"
              href="./index.html"
              aria-label="FunDemos"
              id="home"
            >
              <img
                className="logo"
                src="/img/LOGO FUNDEMOS.png"
                alt="Logo"
              />
            </a>
          </div>

          <div className="col-md-8">
            <ul className="nav justify-content-end">
              <li className="nav-item mx-0 mx-lg-1"><a className=" nav-link text-dark" href="#quienes-somos">¿Quiénes somos?</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link text-dark" href="#areas-accion">Áreas de Acción </a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link text-dark" href="#autoridades">Autoridades</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link text-dark" href="#impacto">Impacto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>


  );
}

export default Footer;
