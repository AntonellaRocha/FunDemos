import React from "react";
import "../App.css";

function Impacto() {
  return (
    <div className="container" id="impacto">
      <h2 className="fw-bold h1 mb-4 mx-auto p-5">Impacto</h2>
      <div className="fs-3">
        <p>
          10 días increíbles en los que 12 chicos y chicas de las fundaciones
          “Media Pila”, “Empujar” e “Integrar”, pudieron poner en práctica lo
          aprendido en sus cursos de programación y conocer cómo es el trabajo
          en equipo en un proyecto de tecnología como ámbito profesional.
        </p>
        <p>
          Los participantes trabajaron en un desafío preparado por los
          referentes de Grupo MSA y se llevaron una experiencia profesional
          real, pasando por todo el recorrido de desarrollo de un proyecto, trabajando en equipo con los diferentes roles de los equipos de IT MSA,
          e interactuando con todas las áreas de la compañía.
        </p>
        <p>
          Además de programar los chicos y chicas que participaron, tuvieron su
          inducción, presentaron la demo del proyecto, realizaron una retro y se
          llevaron en el feedback de cierre valiosas recomendaciones y su perfil
          conductual.
        </p>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/img/1710776089905.jpg"
              className="d-block w-100"
              alt="imagen1" />
          </div>
          <div className="carousel-item">
            <img
              src="/img/1710776101275.jpg"
              className="d-block w-100"
              alt="imagen2" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <h2 className="fw-bold h2 mb-4 mx-auto p-1">Diagnóstico, Reporte de Sustentabilidad y Programa de compensación ambiental, de Grupo MSA </h2>
      <div className="fs-4 text-start fw-bold">
        <p>
          Estamos trabajando en el diagnóstico, reporte de sustentabilidad 2025 y programa de compensación ambiental, de Grupo MSA, la empresa de tecnología Argentina que está generando un alto impacto de innovación en toda la región con sus proyectos electorales, de entretenimiento tecnológico y de diseño.
        </p>
        <p>
          De este modo acompañamos a la empresa en su objetivo de continuar innovando con su tecnología a las sociedades alrededor de la región enfocándose en reducir el impacto ambiental de sus proyectos.
        </p>
      </div>
    </div>
  );
}

export default Impacto;
