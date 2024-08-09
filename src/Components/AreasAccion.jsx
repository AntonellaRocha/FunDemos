import React from "react";
import "../../styles/AreasAccion.css";

function AreasAccion() {
  return (
    <section class="row" id="areas-accion">
      <div class="col-md-12">
        <h1 class="accion">Áreas de Acción</h1>
      </div>

      <div class="container my-4">
        <div class="row justify-content-center">
          <div class="col-md-4 d-flex justify-content-center mb-4">
            <div class="card">
              <div class="card-body">
                <img
                  src="/img/PazJusticiaInstituciones.png"
                  class="card-img-top"
                  alt="..."
                />

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
                  alt="..."
                />
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
                  alt="..."
                />
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
    </section>
  );
}

export default AreasAccion;
