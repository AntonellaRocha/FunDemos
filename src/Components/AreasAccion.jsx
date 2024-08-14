import React from "react";
import "../../styles/AreasAccion.css";

function AreasAccion() {
  return (

    <><section class="action-section">
      <div class="container">
        <h2>Áreas de Acción</h2>

        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="category-title">Formación Cívica</div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Desarrollo cívico</h5>
                <p class="card-text">¿Qué hacemos respecto de la complejidad del impacto tecnológico en el ecosistema electoral?</p>
              </div>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="category-title">Desarrollo Sustentable</div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Empleabilidad</h5>
                <p class="card-text">¿Qué hacemos respecto de la complejidad del impacto tecnológico en el mundo del empleo?</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Ambiente</h5>
                <p class="card-text">¿Qué hacemos respecto de la complejidad del impacto tecnológico en el planeta tierra?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><section class="action-section">
        <div class="col-md-12"></div>

        <div class="container my-4">
          <div class="row justify-content-center">
            <div class="col-md-4 d-flex justify-content-center mb-4">
              <div class="card">
                <div class="card-body">
                  <img
                    src="/img/PazJusticiaInstituciones.png"
                    class="card-img-top"
                    alt="..." />

                  <h3 class="card-title">Formación civica</h3>
                  <h4>Tecnología y elecciones</h4>
                  <ul class="card-text">
                    <li> Capacitación en Tecnología y Elecciones al ecosistema electoral</li>
                    <li> Difusión y observatorio electoral</li>
                    <li>Acciones con la ciudadanía</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center mb-4">
              <div class="card">
                <div class="card-body">
                  <img
                    src="/img/IndustriaInnovacion.png"
                    class="card-img-top"
                    alt="..." />
                  <h3 class="card-title">Empleabilidad</h3>
                  <h4>Tecnología y empleo</h4>
                  <ul class="card-text">
                    <li> Igualdad de Oportunidades: acceso a
                      población vulnerable al mundo de la
                      tecnología.
                    </li>
                    <li> Programas de Empleabilidad en TEC</li>
                    <li>Apoyo a capacitación en TEC</li>
                    <li>Inserción laboral en el mundo de la TEC</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center mb-4">
              <div class="card">
                <div class="card-body">
                  <img
                    src="/img/AccionPorElClima.png"
                    class="card-img-top"
                    alt="..." />
                  <h3 class="card-title">Ambiente</h3>
                  <h4>Tecnología y planeta tierra</h4>
                  <ul class="card-text">
                    <li>  Medición y Compensación del impacto
                      ambiental de proyectos tecnológicos, y
                      reportes de sustentabilidad
                    </li>
                    <li>  Programas de reciclaje de tecnología y
                      campañas de concienciación
                    </li>
                    <li>Soluciones tecnológicas para reducir la huella de carbono</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>
  );
}

export default AreasAccion;
