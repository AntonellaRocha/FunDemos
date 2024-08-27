import React from "react";
import "../App.css";

function Impacto() {
  return (
    <>
      {/* <section className="wave-section"></section> */}

      <section className="quienes-somos" id="impacto">
        <div className="container-fluid py-5">
          <div className="row">
            {/* Contenedor de "Impacto" */}
            <div className="col-md-4 d-flex justify-content-end">
              <div className="bg-white mb-5 p-5 py-4 rounded-3 me-3">
                <span className="fw-bold h1 m-5 text-black">Impacto</span>
              </div>
            </div>

            {/* Contenedor de Texto Principal */}
            <div className="col-md-8">
              <div className="d-flex justify-content-center text-white mt-5">
                <span className="fs-1 fw-bolder ms-5 mt-1 text-center text-md-start">ChallengeFunDemos / MSA</span> {/* Alineación centrada en pantallas pequeñas */}
              </div>
            </div>

            <div className="container mb-5">
              <div className="justify-content-center text-white px-5"> {/* Margen más pequeño en pantallas pequeñas */}
                <p className="ms-5 me-md-5 px-2 px-md-5 h3 text-align-center p-4 fw-bold lh-sm"> {/* Texto más pequeño en pantallas pequeñas */}
                  10 días increíbles en los que 12 chicos y chicas de las fundaciones Media Pila”, Empujar e Integrar”, pudieron poner en práctica lo aprendido en sus cursos de programación y conocer cómo es el trabajo en equipo en un proyecto de tecnología como ámbito profesional.
                </p>
                <p className="ms-5 me-md-5 px-2 px-md-5 h3 text-align-center p-4 fw-bold lh-sm">
                  Los participantes trabajaron en un desafío preparado por los referentes de Grupo MSA y se llevaron una experiencia profesional real, pasando por todo el recorrido de desarrollo de un proyecto, trabajando en equipo con los diferentes roles de los equipos de IT MSA, e interactuando con todas las áreas de la compañía.
                </p>
                <p className="ms-5 me-md-5 px-2 px-md-5 h3 text-align-center p-4 fw-bold lh-sm">
                  Además de programar los chicos y chicas que participaron, tuvieron su inducción, presentaron la demo del proyecto, realizaron una retro y se llevaron en el feedback de cierre valiosas recomendaciones y su perfil conductual.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-flex p-4 mb-4">
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
      </section><section className="diagnostico">
        <div className="container">
          <div className="fw-bold display-5 mb-4 mx-auto pt-5 mb-5 lh-1">Diagnóstico, Reporte de Sustentabilidad y Programa de compensación ambiental, de Grupo MSA </div>
          <div className="fs-2 text-start lh-sm fw-bold">
            <p className="mb-5 pt-2">
              Estamos trabajando en el diagnóstico, reporte de sustentabilidad 2025 y programa de compensación ambiental, de Grupo MSA, la empresa de tecnología Argentina que está generando un alto impacto de innovación en toda la región con sus proyectos electorales, de entretenimiento tecnológico y de diseño.
            </p>
            <p className="mb-5 pt-2">
              De este modo acompañamos a la empresa en su objetivo de continuar innovando con su tecnología a las sociedades alrededor de la región enfocándose en reducir el impacto ambiental de sus proyectos.
            </p>
          </div>
        </div>
      </section></>


  );
}

export default Impacto;
