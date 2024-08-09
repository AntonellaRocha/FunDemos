import React from "react";
import "../../styles/Footer.css"

function Footer() {
  const [selectedItem, setSelectedItem] = React.useState("");

  const HandleClick = (item) => {
    setSelectedItem(item);
  }

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary colornavbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="./index.html" aria-label="FunDemos" id="home">
          <img class="navbar-brand-logo" src="./public/img/logo.jpg" alt="Logo" width="200" height="120"></img>
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li
              class={`nav-item ${selectedItem === "quienes-somos" ? "selected" : ""}`}
              onClick={() => HandleClick("quienes-somos")}
            >
              <a class="nav-link" href="#quienes-somos">
                ¿Quiénes somos?
              </a>
            </li>
            <li
              class={`nav-item ${selectedItem === "areas-accion" ? "selected" : ""}`}
              onClick={() => HandleClick("areas-accion")}
            >
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
            {/* <a class="footer-brand" href="./index.html" aria-label="FunDemos" id="home">
              <img class="footer-linkedin-logo" src="./public/img/linkedin-logo.png" alt="Logo" width="200" height="120"></img>
            </a> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
