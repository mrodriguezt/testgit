import React from "react";
export default function Eficiencia() {
  return (
    <div className="pt-5 fondo-gris">
      <div className="pl-5 pr-0 titulo col-12 mb-0 d-flex w-100 justify-content-between align-items-center">
        Eficiencia
        <div className="line ml-lg-5 w-60" />
      </div>
      <div className="row  pl-5 my-4 py-5">
        <div className="d-flex flex-column col-6 pr-5 mt-5 pt-5">
          <p className="titulo">
            Por eso Suzuki
          </p>
          <p className="mr-5 my-4 pr-5 texto">
            Hay muchas razones a favor de un Suzuki. Puramente práctico, como la idoneidad inmejorable para el uso diario de nuestros modelos, tanto en la gran ciudad como fuera de la carretera. O la tecnología híbrida Suzuki de reducción de emisiones.
            <br /> <br />Y motivos emocionales, como la sensación de libertad que resuena en cada Suzuki. O el diseño galardonado que le da a cada modelo su propio carácter personal.
          </p>
        </div>
        <img className="w-70 col-6" src="/images/suzuki/bg3.png"></img>
      </div>
    </div>
  );
}
