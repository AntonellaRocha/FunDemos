import React from "react";
import "../App.css";

function SobreNosotros() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold h1 mb-4">¿Quiénes somos?</h2>
      <div className="fs-3">
        <p>
          Nacimos en la provincia de Neuquén, Argentina, con el objeto de
          abocarnos a la capacitación y formación de la ciudadanía,
          desenvolviéndonos en acciones y programas educativos, de promoción,
          defensa de derechos y agendas ambientales.
        </p>
        <p>
          En 2023 hermanamos caminos con <strong>Grupo MSA</strong> para buscar
          generar un impacto significativo en materia de empleabilidad, ambiente
          y desarrollo cívico, operando a través de la industria tecnológica.
        </p>
        <p>
          Juntos trabajamos para contribuir con la inclusión y la igualdad de
          oportunidades, el desarrollo social, los derechos humanos, la
          formación ciudadana, la eficiencia energética y la sustentabilidad de
          nuestro ambiente.
        </p>
        <h2 className="fw-bold h1 pt-5">¿Qué nos mueve?</h2>
        <p className="fs-2">
          Trabajamos alineados a los ODS adoptados por las Naciones Unidas,
          enfocándonos en las áreas donde podemos realizar mayores aportes en
          relación a nuestro propósito.
        </p>
      </div>
      <div>
        <img src="/img/LOGO OBJETIVOS.png" className="w-100 mt-4" alt="objetivos"></img>
      </div>
    </div>
  );
}

export default SobreNosotros;
