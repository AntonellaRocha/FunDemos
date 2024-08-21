import React from "react";
import "../App.css";

function Autoridades() {
  return (
    <>
      <div className="" id="autoridades">
        <div className="d-flex">
          <div className="bg-dark mx-auto px-5 py-3 rounded-3" style={{ marginTop: -55 }}>
            <span className="fs-1 fw-bold text-white">Autoridades</span>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {/* Columna izquierda: Texto */}
          <div className="col-3 d-flex align-items-center justify-content-center">
            <span className="fs-3 fw-bold text-center">Concejo de Administración</span>
          </div>

          {/* Separador vertical */}
          <div className="col-1 d-flex justify-content-center">
            <div
              className="border-end border-black"
              style={{
                height: "600px",
              }}
            ></div>
          </div>

          {/* Columna derecha: Imagen y Acordeón */}
          <div className="col-8">
            <div className="row no-gutters">
              {/* Imagen */}
              <div className="col-4 d-flex flex-column justify-content-center p-0">
                <img src="/img/IMG_20240315_174910839.jpg" className=" float-start w-100" alt="img1" />
              </div>

              {/* Acordeón */}
              <div className="col-8 p-0">
                <div className="accordion accordion-flush accordion-custom" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header fw-semibold">
                      <button
                        className="accordion-button collapsed no-outline"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Juan Pablo Prezzoli
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is intended to
                        demonstrate the <code>.accordion-flush</code> class. This is
                        the first item's accordion body.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default Autoridades;