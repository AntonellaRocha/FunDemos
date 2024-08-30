import React from "react";
import "../App.css";

function Impacto() {
  return (
    <>
    <div className="quienes-somos">
      <div className="wave-section bg-white mx-auto"></div>

      <section className="container">
        <div className="py-5">
          <div className="row">
            {/* Contenedor de "Impacto" */}
            <div className="col-12 col-lg-4 d-flex justify-content-start justify-content-lg-end">
              <div className="bg-white p-5 py-4 rounded-3 me-3">
                <span className="fw-bold h1 m-5 text-black">Impacto</span>
              </div>
            </div>

            {/* Contenedor de Texto Principal */}
            <div className="col-12 col-lg-8 d-flex justify-content-end text-white align-items-end">
                <span className="fs-1 fw-bolder mt-1">ChallengeFunDemos / MSA</span> {/* Alineación centrada en pantallas pequeñas */}
            </div>

            <div className="mb-5 px-2">
              <div className="justify-content-center text-white"> {/* Margen más pequeño en pantallas pequeñas */}
                <p className="h3 text-align-center fw-medium lh-sm my-5"> {/* Texto más pequeño en pantallas pequeñas */}
                  10 días increíbles en los que 12 chicos y chicas de las fundaciones "Media Pila”, "Empujar" e "Integrar”, pudieron poner en práctica lo aprendido en sus cursos de programación y conocer cómo es el trabajo en equipo en un proyecto de tecnología como ámbito profesional.
                </p>
                <p className="h3 text-align-center fw-medium lh-sm mb-5">
                  Los participantes trabajaron en un desafío preparado por los referentes de Grupo MSA y se llevaron una experiencia profesional real, pasando por todo el recorrido de desarrollo de un proyecto, trabajando en equipo con los diferentes roles de los equipos de IT MSA, e interactuando con todas las áreas de la compañía.
                </p>
                <p className="h3 text-align-center fw-medium lh-sm mb-5">
                  Además de programar los chicos y chicas que participaron, tuvieron su inducción, presentaron la demo del proyecto, realizaron una retro y se llevaron en el feedback de cierre valiosas recomendaciones y su perfil conductual.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

        <div className="d-flex py-4 px-0 px-lg-4 mb-4 container-lg">
          <div className="position-relative">
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
              <div className="carousel-inner rounded-3">
                <div className="carousel-item active">
                  <img src="/img/1710776089905.jpg" className="d-block w-100" alt="img1" />
                </div>
                <div className="carousel-item">
                  <img src="/img/1710776101275.jpg" className="d-block w-100" alt="img2" />
                </div>
                <div className="carousel-item">
                  <img src="img/IMG_20240315_174910839.jpg" className="d-block w-100" alt="img3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            {/* Galería de Fotos superpuesta */}
            <div className="position-absolute end-0 bg-white px-4 py-2 rounded m-3 d-flex justify-content-center align-items-center" style={{ zIndex: 1, top: '-50px' }}>
              <span className="fw-bold h2 text-black text-nowrap pd-2">Galería de Fotos</span>
            </div>
          </div>
        </div>

      </div>
      
      <section className="diagnostico">
        <div className="container">
          <div className="fw-bold display-5 mb-4 mx-auto pt-5 mb-5 lh-1">Diagnóstico, Reporte de Sustentabilidad y Programa de compensación ambiental, de Grupo MSA </div>
          <div className="fs-2 text-start lh-sm fw-bold">
            <p className="mb-5 pt-2">
              Estamos trabajando en el diagnóstico, reporte de sustentabilidad 2025 y programa de compensación ambiental, de Grupo MSA, la empresa de tecnología Argentina que está generando un alto impacto de innovación en toda la región con sus proyectos electorales, de entretenimiento tecnológico y de diseño.
            </p>
            <p className="mb-5 pt-2" id="contacto">
              De este modo acompañamos a la empresa en su objetivo de continuar innovando con su tecnología a las sociedades alrededor de la región enfocándose en reducir el impacto ambiental de sus proyectos.
            </p>
          </div>
        </div>

      </section>
      
      </>

  );
}

export default Impacto;
