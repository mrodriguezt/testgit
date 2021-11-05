import React from "react";
export default function Design() {
  return (
    <div className="container-fluid mt-5 ">
      <div className="pl-5 pr-0 titulo col-12 mb-0 d-flex w-100 justify-content-between align-items-center">
        Diseño
        <div className="line ml-lg-5 w-60" />
      </div>
      <p className="px-5 texto">
        El desarrollo de cada modelo de Suzuki se basa en una pregunta central:
        ¿Qué necesitan realmente las personas que conducirán este automóvil? En
        Suzuki, el diseño nunca es un arte separado de un fin en sí mismo. Pero
        el arte de desarrollar soluciones de movilidad inteligentes en una forma
        atractiva para hoy y mañana.
      </p>

      <div className="row px-5 d-flex flex-column fondo-azul pt-5">
        <p className="ml-3 subtitulo white pt-5 pb-3">Filosofía de diseño</p>
        <p className="ml-3 col-7 px-0 subtexto white mb-5">
          Cuando Suzuki diseñó el primer modelo de vehículo Suzulight a mediados
          de la década de 1950, el objetivo era desarrollar una oferta de
          movilidad moderna para las metrópolis japonesas económicamente
          prometedoras. Incluso entonces, Suzuki se basó en conceptos de
          vehículo ágiles, prácticos y bien pensados. Un enfoque que vuelve a
          estar de actualidad en la actualidad. Moderno por experiencia.
        </p>
        <div className="over mt-5 pt-2">
          <p className="texto white py-5 px-5 ">
            En momentos en los que el <b>uso responsable</b> de los recursos es
            particularmente importante y la <b>protección del clima</b> es de gran
            importancia, se demandan <b>soluciones inteligentes</b>
          </p>
        </div>
        <img className="w-100 ml-3" src="/images/suzuki/disenio.png"></img>
      </div>

      <div className="row  px-5 ">
        <div className="col-6 px-2 my-auto pr-5">
          <p className="texto ">
            En Suzuki, las personas son siempre el centro de atención, desde el
            desarrollo de los primeros prototipos hasta el diseño específico del
            vehículo y las soluciones de los detalles más pequeños. Antes de
            tomar cualquier decisión, hay preguntas:
          </p>
          <p className="subtitulo">
            ¿Qué traerán las personas que conducirán este automóvil?
          </p>
          <p className="texto mb-5">
            ¿Es una función útil o, si se mira de cerca, es innecesaria? ¿Tiene
            valor añadido emocional o es intercambiable?
          </p>
        </div>
        <div className="col-6">
          <img
            className="w-100 img-fluid"
            src="/images/suzuki/disenio2.png"
          ></img>
        </div>
      </div>
      <div className="row px-5 fondo-azul">
        <p className="col-12 subtexto white my-5">
          Eso no significa que los conductores de Suzuki tengan que renunciar a
          algo que es deseable. <b>La fuerza del diseño </b> de Suzuki radica en
          el hecho de que siempre ofrece una <b>movilidad contemporánea</b> un
          poco más sofisticada. Suzuki ya ha recibido varios premios por ello.{" "}
        </p>
      </div>
    </div>
  );
}
