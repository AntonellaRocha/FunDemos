import React from "react";
import "../App.css";

function SobreNosotros() {
  return (
    <><section className="quienes-somos">
      <div className="container text-center text-lg-start py-5">
        <div className="fw-bold h1 mb-4 text-white">¿Quiénes somos?</div>
        <div className="fs-3 text-white lh-s">
          <p>
            Nacimos en la provincia de Neuquén, Argentina, con el objeto de
            abocarnos a la capacitación y formación de la ciudadanía,
            desenvolviéndonos en acciones y programas educativos, de promoción,
            defensa de derechos y agendas ambientales.
          </p>
          <p>
            En 2023 hermanamos caminos con <strong className="text-black">Grupo MSA</strong> para buscar
            generar un impacto significativo en materia de empleabilidad, ambiente
            y desarrollo cívico, operando a través de la industria tecnológica.
          </p>
          <p>
            Juntos trabajamos para contribuir con la inclusión y la igualdad de
            oportunidades, el desarrollo social, los derechos humanos, la
            formación ciudadana, la eficiencia energética y la sustentabilidad de
            nuestro ambiente.
          </p>
        </div>
      </div>
    </section><section className="que-nos-mueve pb-5">
        <div className="container text-center text-lg-start">
          <div className="fw-bold h1 pt-5">¿Qué nos mueve?</div>
          <p className="fs-2 lh-s">
            Trabajamos alineados a los ODS adoptados por las Naciones Unidas,
            enfocándonos en las áreas donde podemos realizar mayores aportes en
            relación a nuestro propósito.
          </p>
          <div className="text-center">
            <img src="/img/LOGO OBJETIVOS.png" className="w-75 mt-4" alt="objetivos"></img>
          </div>
        </div>
      </section></>


  );
}

export default SobreNosotros;
