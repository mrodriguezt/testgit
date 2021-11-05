import React from "react";

export default function Tech() {
  function AllGrip() {
    return (
      <div className="pt-5 mb-5 pb-5">
        <div className="row col-12 px-0 mx-0 justify-content-between align-items-center my-3">
          <div className="line w-50 pr-xl-5" />
          <label className="titulo pl-5 mb-0 px-xl-5 d-block w-40">
            Tecnología
          </label>
        </div>
        <div className="fondo-grip text-uppercase mt-5">
          <label className="text-uppercase font-weight-bold text-white py-2 my-0">
            All Grip
          </label>
        </div>
        <div className="row  pl-5 align-items-start">
          <div className="d-flex flex-column col-6 pr-5 mt-5 pt-5">
            <p className="titulo">ALLGRIP tracción total</p>
            <p className="mr-5 my-4 pr-5 texto">
              Suzuki ha desarrollado cuatro modernas tracción total ALLGRIP,
              cada una de las cuales se adapta perfectamente a nuestros modelos.
              ALLGRIP es sinónimo de propiedades de agarre óptimas en cada
              situación de conducción:
            </p>
            <div className="row col-12">
              <div className="col-1 px-0 py-2">
                <img
                  src="/images/icons/icono-check.svg"
                  width="20"
                  height="20"
                  className=""
                />
              </div>
              <div className="col-11 px-0">
                <p className="texto">
                  Sobre superficies resbaladizas o heladas
                </p>
              </div>
              <div className="col-1 px-0 py-1">
                <img
                  src="/images/icons/icono-check.svg"
                  width="20"
                  height="20"
                  className=""
                />
              </div>
              <div className="col-11 px-0">
                <p className="texto">
                  Al conducir dinámicamente en carreteras sinuosas
                </p>
              </div>
              <div className="col-1 px-0 py-1">
                <img
                  src="/images/icons/icono-check.svg"
                  width="20"
                  height="20"
                  className=""
                />
              </div>
              <div className="col-11 px-0">
                <p className="texto">Al arrancar en pendientes</p>
              </div>
              <div className="col-1 px-0 py-1">
                <img
                  src="/images/icons/icono-check.svg"
                  width="20"
                  height="20"
                  className=""
                />
              </div>
              <div className="col-11 px-0">
                <p className="texto">Al conducir fuera de la carretera</p>
              </div>
            </div>
          </div>
          <img className="w-70 col-6" src="/images/suzuki/grip 1.png"></img>
        </div>
        <div className="position-absolute fondo-gris-g w-70 g-pt">
          <p className="col-12 subtexto pl-5 py-3">
            La tracción total es parte del <b>ADN de Suzuki</b>. Y casi todos
            nuestros modelos pueden equiparse con una variante de nuestra
            tecnología ALLGRIP. Está diseñado de tal manera que se corresponde
            con el
            <b> carácter del vehículo</b> y su uso previsto. Décadas de
            experiencia en tracción total para un mayor placer de conducción.
          </p>
        </div>
      </div>
    );
  }

  function AllGripSelect() {
    return (
      <div className="pt-5 mb-5 pb-5">
        <div className="fondo-grip text-uppercase mt-5">
          <label className="text-uppercase font-weight-bold text-white py-2 my-0">
            All Grip Select
          </label>
        </div>
        <div className="row">
          <img className="w-25 h-25 col-5" src="/images/suzuki/bg3.png"></img>
          <div className=" col-7 px-5 my-5 py-5">
            <p className="px-5 py-5 texto">
              El sistema ALLGRIP SELECT fue especialmente diseñado para el SX4
              S-Cross2 y el Vitara3. Se pueden seleccionar cuatro
              configuraciones diferentes para diferentes propósitos usando un
              control giratorio fácil de usar:
            </p>
          </div>
        </div>

        <div className="row fondo-azul py-3 pr-4">
          <div className=" col-7 px-5 my-5 py-5 ">
            <label className="titulo  white pl-5 mb-0 px-xl-5 d-block w-40">
              Auto
            </label>
            <p className="px-5 py-4  white texto mb-0">
              En el modo de conducción "Auto", la atención se centra en la mayor
              eficiencia de combustible posible. La potencia se le da
              principalmente al eje delantero. Parte de la fuerza motriz solo se
              transfiere al eje trasero al arrancar y si no hay suficiente
              agarre.
            </p>
          </div>
          <img className="w-25 h-25 col-5" src="/images/suzuki/bg3.png"></img>
        </div>

        <div className="row fondo-azul py-3 pr-4 mt-2">
          <img
            className="w-25 h-25 col-5 px-5 ml-5"
            src="/images/suzuki/bg3.png"
          ></img>
          <div className="col-6 my-5">
            <label className="titulo white mb-0 d-block w-40 pt-5">Sport</label>
            <p className="texto white py-4">
              El modo "Sport" está diseñado para una conducción dinámica en
              carreteras sinuosas. El sistema interviene automáticamente en la
              distribución del par entre los ejes delantero y trasero. Esto
              aumenta la estabilidad en las curvas.
            </p>
          </div>
        </div>

        <div className="row fondo-azul py-3 pr-4 mt-2">
          <div className=" col-7 px-5 my-5 py-5 ">
            <label className="titulo  white pl-5 mb-0 px-xl-5 d-block w-40">
              Nieve
            </label>
            <p className="px-5 py-4  white texto mb-0">
              El ajuste "Nieve" optimiza la tracción y la estabilidad con poco
              agarre. Incluso las carreteras resbaladizas o sin pavimentar no
              son un problema en este modo.{" "}
            </p>
          </div>
          <img className="w-25 h-25 col-5" src="/images/suzuki/bg3.png"></img>
        </div>

        <div className="row fondo-azul py-3 pr-4 mt-2">
          <img
            className="w-25 h-25 col-5 px-5 ml-5"
            src="/images/suzuki/bg3.png"
          ></img>
          <div className="col-6 my-5">
            <label className="titulo white mb-0 d-block w-40 pt-5">Lock</label>
            <p className="texto white py-4">
              El modo "Bloqueo" activa un bloqueo del diferencial 50:50. Es
              especialmente adecuado para avanzar en superficies difíciles o
              para limpiar el vehículo de nieve, barro o arena si es necesario.
            </p>
          </div>
        </div>

        <div className="row py-3 pr-4 pt-5 mt-5">
          <div className="col-6 my-5 px-5">
            <p className="texto  py-4 px-5">
              En los cuatro ajustes, el comportamiento de conducción se optimiza
              automáticamente interviniendo en la gestión del motor y los
              frenos. La tecnología 4x4 integrada prácticamente descarta un
              manejo incorrecto por parte del conductor.
            </p>
          </div>
          <img
            id="acomillas"
            width="6%"
            height="12%"
            className="position-absolute"
            src="/images/suzuki/acomillas.png"
          ></img>
          <div className="col-5 my-5 px-5 fondo-gris-g position-static">
            <p className="texto font-weight-bold pt-5 pl-5 mt-4">
              ALLGRIP SELECT no solo aumenta la diversión al conducir, sino
              también la seguridad en cualquier superficie”
            </p>
          </div>
          <img
            id="ccomillas"
            width="6%"
            height="12%"
            className="position-absolute"
            src="/images/suzuki/ccomillas.png"
          ></img>
        </div>
      </div>
    );
  }

  function AllGripPro() {
    return (
      <div className="pt-5 mb-5 pb-5">
        <div className="fondo-grip text-uppercase mt-5">
          <label className="text-uppercase font-weight-bold text-white py-2 my-0">
            All Grip Pro
          </label>
        </div>
        <div className="row  pl-5 align-items-start">
          <div className="d-flex flex-column col-7 pr-5 mt-5 pt-5">
            <p className="mr-5 my-4 texto">
              Durante más de cuatro décadas, Suzuki ha estado utilizando el
              exitoso concepto de conducción, que convierte un vehículo de
              tracción trasera en un vehículo 4x4 al acoplar el eje delantero.
            </p>
          </div>
          <img
            width="616px"
            height="447px"
            className=" col-5"
            src="/images/suzuki/grip 1.png"
          ></img>
        </div>
        <div className="fondo-gris-g w-70 mt-5">
          <p className="col-12 subtexto pl-5 py-3 mb-0">
            El principio básico de la tecnología, que se produjo por primera vez
            en 1970, todavía se utiliza hoy, adecuadamente modernizado, en el
            Jimny actual. Si el Jimny está en funcionamiento normal, es decir,
            con tracción trasera, la tracción delantera se puede activar con una
            segunda palanca de cambios.
          </p>
        </div>

        <div className="pl-5 ml-5">
          <div className="fondo-grip d-flex justify-content-end g-pt">
            <p className="subtexto text-white py-3 px-5">
              A continuación, los ejes delantero y trasero se conectan entre sí
              en la caja de transferencia y, al mismo tiempo, se establece la
              conexión por fricción entre las ruedas delanteras y sus árboles de
              transmisión.
            </p>
          </div>
        </div>

        <img
          className="col-12 w-100  h-100 px-0 mt-5 pt-5 mb-5"
          src="/images/suzuki/bgg.png"
        ></img>

        <div className="row col-11 px-5 mx-5 my-5">
          <p className="texto">
            Las ventajas del sistema de tracción total conmutable son
            particularmente notables fuera de la carretera. La rígida
            distribución del par motor, junto con la amplia distancia al suelo y
            la corta distancia entre ejes, hacen del Jimny un verdadero artista
            en términos de tracción y control. <br />
            <br />
            Cuando se activa la reducción todoterreno, se envía más potencia a
            las ruedas en todas las marchas para garantizar la potencia
            suficiente en terrenos accidentados y subidas empinadas.
          </p>
        </div>
      </div>
    );
  }

  function AllGripFQ() {
    return (
      <div className="pt-5 mb-5 pb-5">
        <div className="fondo-grip text-uppercase mt-5">
          <label className="text-uppercase font-weight-bold text-white py-2 my-0">
            ALLGRIP FQ&A
          </label>
        </div>
        <div className="row col-12 mt-5 pt-5 pl-0">
          <img
            with="434px"
            className="h-100 col-4 pr-5"
            src="/images/suzuki/bgfq.png"
          ></img>
          <div className="col-8 my-5 py-5">
            <label className="titulo">¿Qué es la tracción total?</label>
            <p className="py-4 subtexto mb-0">
              La tracción total es un tipo de tracción en la que la fuerza
              motriz del motor se transmite a las cuatro ruedas al mismo tiempo.
              Por el contrario, hay vehículos en los que solo se accionan las
              ruedas del eje delantero (tracción delantera) o del eje trasero
              (tracción trasera).
            </p>

            <label className="titulo">
              ¿Qué es una tracción total seleccionable?
            </label>
            <p className="py-4 subtexto mb-0">
              En un vehículo con tracción total conmutable, solo se acciona un
              eje durante la conducción normal. El segundo eje solo se enciende
              manual o automáticamente cuando la situación de conducción lo
              requiere y el vehículo debe transferir más potencia a la
              carretera, por ejemplo, en pendientes o superficies de carreteras
              con menos adherencia.
            </p>

            <label className="titulo">
              ¿Cuáles son las ventajas de la tracción total?
            </label>
            <p className="py-4 subtexto mb-0">
              Los vehículos con tracción en las cuatro ruedas pueden transferir
              mejor la potencia del motor a la carretera. Esto da como resultado
              una mayor tracción, una estabilidad de conducción mejorada,
              especialmente en las curvas, así como la capacidad de moverse con
              confianza fuera de la carretera (es decir, en carreteras empinadas
              o sin pavimentar).
            </p>

            <label className="titulo">
              ¿Qué distingue a la tracción total Suzuki?
            </label>
            <p className="py-4 subtexto mb-0">
              Las cuatro unidades de tracción en las cuatro ruedas Suzuki
              obtienen lo mejor de los diferentes tipos de tracción en las
              cuatro ruedas:
              <br /><br />
              La tracción total ALLGRIP PRO conmutable manualmente permite que
              Jimny mantenga la tracción y el control en todo momento, incluso
              fuera de la carretera. La tracción total ALLGRIP SELECT en el SX4
              S-Cross3 y Vitara aumentan tanto el placer de conducir como la
              seguridad en cualquier superficie, de forma completamente
              automática.
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <AllGrip />
      <AllGripSelect />
      <AllGripPro />
      <AllGripFQ />
    </>
  );
}
