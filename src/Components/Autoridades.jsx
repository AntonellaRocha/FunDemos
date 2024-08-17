import React from "react";
import "../App.css";

function Autoridades() {
  return (
    <div className="" id="autoridades">
      <div className="d-flex">

        <div className="bg-dark mx-auto px-5 py-3 rounded-3" style={{ marginTop: -55 }}>
          <span className="fs-1 fw-bold text-white">Autoridades</span>
        </div>
      </div>

      <div className="container py-5">

        {/* titulo del acordeon */}
        <div className="row text-start">
          <div className="col-12">
            <h3 className="fs-1 fw-bold">Concejo de Administración</h3>
          </div>
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <hr className="border-black" />
          </div>
        </div>

        {/* acordeon */}
        <div className="accordion" id="accordionEjemplo">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button class="accordion-button d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                {/* <img src="/img/JUAN PABLO PREZZOLI.jpg" className="img-fluid border shadow" alt="Foto 1" /> */}
                Juan Pablo Prezzoli <span className="ms-auto text-muted">Presidente</span>
              </button>
            </h2>
          </div>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Papá, docente universitario, consultor y abogado con especialidad en Derecho Público. He transitado diversos trayectos en el sector público y privado, siempre entusiasmado e involucrado en iniciativas vinculadas a la ampliación de derechos, participación ciudadana, debate de ideas y expresiones plurales.
            </div>
          </div>
        </div>



      </div>

    </div>
  );
}

export default Autoridades;