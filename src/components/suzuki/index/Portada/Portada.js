import React from "react";
export default function Portada() {
  return (
    <div className=" container-fluid mx-0 px-0 mb-5">
      <div className="row col-12 mx-0 px-0">
        <div className="mx-0 px-0 col-12">
          <img className="w-100" src="/images/suzuki/bg.png"></img>
        </div>
        <div className="flotante-primer-nivel title col-12">
          Suzuki <br />
          en un vistazo
        </div>
      </div>
      <div className="row mt-4 pb-5">
        <div className="col-6">
          <img className="w-100" src="/images/suzuki/bg2.png"></img>
        </div>
        <div className="col-6 mt-sm-5">
          <p className="my-sm-4 py-sm-4 texto px-5 ">
            Existen muchas razones para hablar de SUZUKI. Calidad japonesa, funcionalidad, accesibilidad con un espíritu joven. La eficiencia, la tecnología y el diseño se encuentran para desafiar el día a día y mover a las personas hacia un gran futuro. Damos la bienvenida a una nueva alternativa de movilidad que llevará la experiencia de conducción a un siguiente nivel.
          </p>
        </div>
      </div>
      <div className="outside-over"></div>
    </div>
  )
}
