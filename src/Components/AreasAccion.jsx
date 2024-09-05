import React from "react";
import "../App.css";

function AreasAccion() {
  return (
    <div className="action-section">
      <div className="wave-section bg-white mx-auto"></div>
      <section className="container py-5">

        <div className="d-flex mb-5">

          <div className="bg-white mx-lg-auto px-5 py-3 rounded-3">
            <span className="fs-1 fw-bold text-black">Areas de Acción</span>
          </div>

        </div>

        <div className="py-5">

          {/* <!-- Formación Cívica --> */}
          <div className="row align-items-center text-white">
            <h3 className="fs-1 fw-bold col-12 col-md-4">Formación Cívica</h3>

            <div className="col-12 col-md-8 mt-4 mt-md-0">
              <div className="text-dark p-3 shadow-sm card mb-3">
                <h5 className="fw-bold">Desarrollo cívico</h5>
                <p className="fs-5 fw-lighter">¿Qué hacemos respecto de la complejidad del impacto tecnológico en el ecosistema electoral?</p>
              </div>
            </div>
          </div>



          <div className="row justify-content-center my-4">
            <div className="col-12">
              <div class="pb-2 mb-4 border-bottom border-white"></div>
            </div>
          </div>


          {/*  <!-- Desarrollo Sustentable --> */}
          <div className="row align-items-center text-white">
            <h3 className="fs-1 fw-bold col-12 col-md-4">Desarrollo Sustentable</h3>


            <div className="col-12 col-md-8 mt-4 mt-md-0">
              <div className="text-dark p-3 shadow-sm card mb-3">
                <h5 className="fw-bold">Empleabilidad</h5>
                <p className="fs-5 fw-lighter">¿Qué hacemos respecto de la complejidad del impacto tecnológico en el mundo del empleo?</p>
              </div>
              <div className="text-dark p-3 shadow-sm card">
                <h5 className="fw-bold">Ambiente</h5>
                <p className="fs-5 fw-lighter">¿Qué hacemos respecto de la complejidad del impacto tecnológico en el planeta tierra?</p>
              </div>
            </div>
          </div>
        </div>



        <div className="col-md-12"></div>
        <div className="container my-4">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-4 d-flex justify-content-center mb-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="/img/PAZ-JUSTICIA-INSTITUCIONES.png"
                    className="card-img-top"
                    alt="..." />

                  <h3 className="text-center pt-4">Formación civica</h3>
                  <h4 className="text-center">Tecnología y elecciones</h4>
                  <ul className="d-flex flex-column mb-3 text-muted">
                    <li className="p-2"> Capacitación en Tecnología y Elecciones al ecosistema electoral</li>
                    <li className="p-2"> Difusión y observatorio electoral</li>
                    <li className="p-2">Acciones con la ciudadanía</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center mb-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="/img/INDUSTRIA-INNOVACION.png"
                    className="card-img-top"
                    alt="..." />
                  <h3 className="text-center pt-4">Empleabilidad</h3>
                  <h4 className="text-center">Tecnología y empleo</h4>
                  <ul className="d-flex flex-column mb-3 text-muted">
                    <li className="p-2"> Igualdad de Oportunidades: acceso a población vulnerable al mundo de la tecnología.</li>
                    <li className="p-2"> Programas de Empleabilidad en TEC</li>
                    <li className="p-2">Apoyo a capacitación en TEC</li>
                    <li className="p-2">Inserción laboral en el mundo de la TEC</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center mb-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="/img/ACCION-POR-EL-CLIMA.png"
                    className="card-img-top"
                    alt="..." />
                  <h3 className="text-center pt-4">Ambiente</h3>
                  <h4 className="text-center">Tecnología y planeta tierra</h4>
                  <ul className="d-block p-2 ms-4 text-muted">
                    <li className="p-2">Medición y Compensación del impacto ambiental de proyectos tecnológicos, y reportes de sustentabilidad </li>
                    <li className="p-2">Programas de reciclaje de tecnología y campañas de concienciación</li>
                    <li className="p-2"  id="autoridades">Soluciones tecnológicas para reducir la huella de carbono</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>







  );
}

export default AreasAccion;
