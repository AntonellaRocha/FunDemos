import React from "react";
import "../App.css";

function Autoridades() {
  return (
    <>
      <div className="">
        <div className="d-flex">
          <div className="bg-dark mx-auto px-5 py-3 rounded-3" style={{ marginTop: -42 }}>
            <span className="fs-2 fw-bold text-white">Autoridades</span>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row px-lg-5">

          {/* Columna izquierda: Texto */}
          <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center pb-4 pb-lg-0">
            <span className="fs-3 fw-bold text-center text-lg-start mb-4">Concejo de Administración</span>
          </div>

          {/* Separador vertical */}
          <div className="col-1 d-flex justify-content-center align-items-center">
            <div
              className="border-end border-black"
              style={{
                height: "600px",
              }}
            ></div>
          </div>

          <hr className="col-12 d-block d-lg-none" />

          {/* Columna derecha: Imagen y Acordeón */}
          <div className="col-12 col-lg-8">
            <div className="row g-0 acordeon-height py-5">
              <div className="mb-5 row">

                {/* Imagen */}
                <div className="col-12 col-lg-4 team-images auto1"></div>

                {/* Acordeón */}
                <div className="col-12 col-lg-8 p-0 user-info rounded-bottom-4 rounded-bottom-sm-0 rounded-end-4 px-5 py-4">
                  <h4 className="mt-3 mb-3">Juan Pablo Prezzoli</h4>
                  <h6 className="mb-3 text-secondary">Presidente</h6>
                  <p className="mt-4 mb-0 fs-6">Papá, docente universitario, consultor y abogado con especialidad en Derecho Público. He transitado diversos trayectos en el sector público y privado, siempre entusiasmado e involucrado en iniciativas vinculadas a la ampliación de derechos, participación ciudadana, debate de ideas y expresiones plurales.</p>
                </div>
              </div>

              <div className="mb-5 row">
                {/* Imagen */}
                <div className="col-12 col-lg-4 team-images auto2">
                </div>

                {/* Acordeón */}
                <div className="col-12 col-lg-8 p-0 user-info rounded-bottom-4 rounded-bottom-sm-0 rounded-end-4 px-5 py-4">
                  <h4 className="mt-3 mb-3">Tomás Lanzillotta</h4>
                  <h6 className="mb-3 text-secondary">Secretario</h6>
                  <p className="mt-4 mb-0 fs-6">Apasionado profesional con orígenes en el mundo del marketing, y marcada orientación a la gestión de personas, la comunicación, la construcción de estrategia organizacional y el desarrollo de negocios. Desde diferentes roles, llevo más de 20 años trabajando en múltiples desafíos de comunicación, desarrollo organizacional, posicionamiento y transformación cultural con diferentes empresas, equipos y profesionales. He liderado procesos de start up y profesionalización de áreas de Marketing, RRHH y Fundaciones, en diferentes organizaciones.</p>
                </div>
              </div>

              <div className="mb-5 row">

                {/* Imagen */}
                <div className="col-12 col-lg-4 team-images auto3"></div>

                {/* Acordeón */}
                <div className="col-12 col-lg-8 p-0 user-info rounded-bottom-4 rounded-bottom-sm-0 rounded-end-4 px-5 py-4">
                  <h4 className="mt-3 mb-3">Mariela Garcia</h4>
                  <h6 className="mb-3 text-secondary">Tesorera</h6>
                  <p className="mt-4 mb-0 fs-6">Soy Licenciada en Economía con 10 años de experiencia en la optimización de metodologías de trabajo y la administración eficiente de recursos. He desarrollado mi carrera en sectores transversales de la compañía, como compras, planificación y recursos humanos. Actualmente, me enfoco en dejar mi huella en el control de gestión regional. Confiable, responsable y comprometida, siempre busco dar lo mejor de mí en todo lo que hago. Disfruto de compartir buenos momentos con amigos y familiares, especialmente alrededor de un mate y una buena charla. Valoro la honestidad y la comunicación abierta, y me encanta conectar con las personas a través de conversaciones significativas.</p>
                </div>
              </div>

            </div>
          </div>


          {/* Columna izquierda: Director Ejecutivo */}
          <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center pb-4 pb-lg-0">
            <span className="fs-3 fw-bold text-center text-lg-start mb-4">Director Ejecutivo de Formación Cívica</span>
          </div>

          {/* Separador vertical */}
          <div className="col-1 d-flex justify-content-center align-items-center">
            <div
              className="border-end border-black"
              style={{
                height: "300px",
              }}
            ></div>
          </div>

          <hr className="col-12 d-block d-lg-none" />

          {/* Columna derecha: Imagen y Acordeón */}
          <div className="col-12 col-lg-8">
            <div className="row g-0 acordeon-height py-5">

              {/* Imagen */}
              <div className="col-12 col-lg-4 team-images auto4"></div>

              {/* Acordeón */}
              <div className="col-12 col-lg-8 p-0 rounded-bottom-4 rounded-bottom-sm-0 rounded-end-4 px-5 py-4" style={{ backgroundColor: '#f7e4e8' }}>
                <h4 className="mt-3 mb-3" id="impacto">Nicolás Deane</h4>
                <h6 className="mb-3 text-secondary">Secretario</h6>
                <p className="mt-4 mb-0 fs-6">Abogado, especialista en administración y modernización judicial con un título en la materia expedido por la Universidad Carlos III de Madrid. Ha sido Secretario de Actuación Electoral de la Cámara Nacional Electoral, cargo con jerarquía de juez nacional de primera instancia. En el ejercicio de ese cargo, entre otras funciones, ha sido responsable del Registro Nacional de Electores, Miembro de la Comisión de Investigación de Nuevas Tecnologías Electorales y Coordinador de la Comisión de Gestión de la Justicia Nacional Electoral. Ha participado como observador internacional en numerosos procesos electorales de América latina y ha integrado el Comité Técnico 176 para la elaboración de una norma ISO para procesos electorales organizado por la Organización de Estados Americanos. Hoy es miembro del board y Director de Relaciones Institucionales de MSA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}

export default Autoridades;