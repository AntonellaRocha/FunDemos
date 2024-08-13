import React from "react";
import "../../styles/Footer.css"

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="logos">
              <a
                class="footer-brand"
                href="./index.html"
                aria-label="FunDemos"
                id="home"
              >
                <img class="logo"
                  src="/img/LOGO FUNDEMOS.png"
                  alt="Logo"
                ></img>
              </a>
              <img src="logo2.png" alt="Logo 2" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-8">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" href="#">Quienes somos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Áreas de acción</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Autoridades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Impacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.linkedin.com/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
