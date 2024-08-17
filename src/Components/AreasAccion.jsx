import React from "react";
import "../App.css";

function AreasAccion() {
  return (
    <>
      <section className="py-5 action-section text-white">

        <div className="d-flex mb-5">

          <div className="bg-white mx-auto px-5 py-3 rounded-3">
            <span className="fs-1 fw-bold text-black">Areas de Acción</span>
          </div>
        </div>

        <div class="container py-5">

          {/* <!-- Formación Cívica --> */}
          <div className="row text-start text-white">
            <div className="col-12">
              <h3 className="fs-1 fw-bold">Formación Cívica</h3>
            </div>
          </div>

          {/*   <!-- Desarrollo Cívico --> */}
          <div className="row justify-content-end mb-4">
            <div className="col-md-8 col-lg-6 d-flex">
              <div className="bg-white text-dark p-3 rounded shadow-sm">
                <h5 className="fw-bold">Desarrollo cívico</h5>
                <p>¿Qué hacemos respecto de la complejidad del impacto tecnológico en el ecosistema electoral?</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <hr className="border-white" />
            </div>
          </div>


          {/*  <!-- Desarrollo Sustentable --> */}
          <div className="row text-start text-white">
            <div className="col-12">
              <h3 className="fs-1 fw-bold">Desarrollo Sustentable</h3>
            </div>
          </div>

          {/* <!-- Empleabilidad --> */}
          <div className="row justify-content-end mb-4">
            <div className="col-md-8 col-lg-6 mb-3">
              <div className="bg-white text-dark p-3 rounded shadow-sm">
                <h5 className="fw-bold">Empleabilidad</h5>
                <p>¿Qué hacemos respecto de la complejidad del impacto tecnológico en el mundo del empleo?</p>
              </div>
            </div>
          </div>

          {/* <!-- Ambiente --> */}
          <div className="row justify-content-end mb-4">
            <div className="col-md-8 col-lg-6 mb-3">
              <div className="bg-white text-dark p-3 rounded shadow-sm">
                <h5 className="fw-bold">Ambiente</h5>
                <p>¿Qué hacemos respecto de la complejidad del impacto tecnológico en el planeta tierra?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12"></div>
        <div className="container my-4">
          <div className="row justify-content-center">
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="/img/PazJusticiaInstituciones.png"
                    className="card-img-top"
                    alt="..." />

                  <h3 className="card-title">Formación civica</h3>
                  <h4>Tecnología y elecciones</h4>
                  <ul className="card-text">
                    <li> Capacitación en Tecnología y Elecciones al ecosistema electoral</li>
                    <li> Difusión y observatorio electoral</li>
                    <li>Acciones con la ciudadanía</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="/img/IndustriaInnovacion.png"
                    className="card-img-top"
                    alt="..." />
                  <h3 className="card-title">Empleabilidad</h3>
                  <h4>Tecnología y empleo</h4>
                  <ul className="card-text">
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
            <div className="col-md-4 d-flex justify-content-center mb-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="/img/AccionPorElClima.png"
                    className="card-img-top"
                    alt="..." />
                  <h3 className="card-title">Ambiente</h3>
                  <h4>Tecnología y planeta tierra</h4>
                  <ul className="card-text">
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




    </>
  );
}

export default AreasAccion;
