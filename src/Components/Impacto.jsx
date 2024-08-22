import React from "react";
import "../App.css";

function Impacto() {
  return (

    <><section className="quienes-somos">
      <div className="container py-5">
        <div className="d-inline-flex mb-5">
          <div className="bg-white mb-5 p-5 py-3 rounded-3">
            <span className="fw-bold h1 m-5 text-black">Impacto</span>
          </div>
        </div>

        <div className="row text-end text-white">
          <div className="mb-5">
            <span className="fs-1 fw-bold">ChallengeFunDemos / MSA</span>
          </div>
        </div>


        <div className="fs-3 text-white mb-5 lh-s">
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

        <div className="d-flex">
          <div className="bg-white mx-auto px-5 py-3 rounded p-2">
            <span className="fw-bold h2 text-black p-2">Galería de Fotos</span>
          </div>
        </div>


        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/1710776089905.jpg" class="d-block w-100" alt="img1" />
            </div>
            <div className="carousel-item">
              <img src="/img/1710776101275.jpg" class="d-block w-100" alt="img2" />
            </div>
            <div className="carousel-item">
              <img src="img/IMG_20240315_174910839.jpg" class="d-block w-100" alt="img3" />
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
      </div>


    </section><section className="diagnostico">
        <div className="container">
          <div className="fw-bold h1 mb-4 mx-auto pt-5 mb-5">Diagnóstico, Reporte de Sustentabilidad y Programa de compensación ambiental, de Grupo MSA </div>
          <div className="fs-2 text-start fw-bold lh-s">
            <p>
              Estamos trabajando en el diagnóstico, reporte de sustentabilidad 2025 y programa de compensación ambiental, de Grupo MSA, la empresa de tecnología Argentina que está generando un alto impacto de innovación en toda la región con sus proyectos electorales, de entretenimiento tecnológico y de diseño.
            </p>
            <p>
              De este modo acompañamos a la empresa en su objetivo de continuar innovando con su tecnología a las sociedades alrededor de la región enfocándose en reducir el impacto ambiental de sus proyectos.
            </p>
          </div>
        </div>
      </section></>

  );
}

export default Impacto;
