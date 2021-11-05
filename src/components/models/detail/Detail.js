import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Breadcrumbs from "../../common/Breadcrumbs";
import Detailfeatures from "./Detailfeatures.js";
import NumberFormat from "react-number-format";
import MediaPlayer from "./VideoPlayer.js";
import useOnScreen from "../../../hooks/useOnScreen";
import { Animated } from "react-animated-css";
import { useMediaQuery } from "react-responsive";
import TestDrive from "./features/TestDrive";
import Image from "next/image";

import Viewer360 from "../../Viewer360";

function Detail({ modelo, routes, data, data_api, isMobile }) {
  const mediaquery = useMediaQuery({ maxWidth: 900 });
  const [selected, setSelected] = useState(0);
  const [model, setModel] = useState(modelo);
  const handleClick = (index) => setSelected(index);
  //const model_seleted = model.galeria[selected];
  const [visible, setVisible] = useState(true);
  const divRef = useRef(null);
  const onScreen = useOnScreen(divRef, 0.4);

  const [mobile, setisMobile] = useState(true);

  useEffect(() => {
    setVisible(onScreen);
  }, [onScreen]);

  useEffect(() => {
    setModel(modelo);
  }, [modelo]);

  useEffect(() => {
    if (mediaquery !== mobile) {
      setisMobile(mediaquery);
    }
  }, [mediaquery]);

  return (
    <div>
      <Breadcrumbs routes={routes} />
      <MediaPlayer data={model}></MediaPlayer>

      <div className="pt-3 overflow-hidden">
        <div ref={divRef} className="mt-2">
          <div className="row col-12 w-100 mx-0 px-0 justify-content-center align-items-start">
            <div className="px-3 justify-content-center">
              {/* vitara/jimny/s-cross */}
              <Animated
                isVisible={visible}
                className="container col-12 justify-content-center w-100"
              >
                <Viewer360 model={model.id_view360} />
              </Animated>
              <div
                className="col-12 pt-3"
                style={{ fontSize: "14px", lineHeight: "140%", maxWidth: "880px" }}
              >
                <label>
                  * Imágenes, accesorios, equipamientos y colores referenciales.
                  Únicamente versiones GL+ Y GLX disponibles en Ecuador. Techo
                  panorámico no aplica para Ecuador.
                </label>
              </div>
            </div>

            <div className="mt-lg-5 pt-lg-5 px-3">
              <div
                className="col-10 text-center mx-auto px-0 mt-5 model-img"
                style={{ minHeight: "60px" }}
              >
                {model.logo && (
                  <Image
                    className="d-block "
                    src={model?.logo?.url}
                    layout="fill"
                    objectFit="contain"
                    alt={`logo-${model.modelo}`}
                  />
                )}
              </div>
              <div className="d-flex text-center w-100 h-100 justify-content-center align-items-center">
                <div className="my-4">
                 {/* <label className="subtitle2 d-block">Desde </label>
                  <label className="price-detail title1 d-block mb-4">
                    <NumberFormat
                      value={model.precio}
                      thousandSeparator="."
                      decimalSeparator=","
                      displayType={"text"}
                      prefix={"$"}
                    />
                  </label>*/}
                  {/* <Link href={'/cita/test-drive'}>
                    <a style={{ textDecoration: "none" }}>
                      <button className="btn btn-primary w-100">
                        Suzuki Driving Experience
                      </button>
                    </a>
                  </Link> */}
                  <div className="bg-image">
                    <div className="  test ">
                      <div className="row   botones ">
                        <div className="col-12 ">
                          <Link href={"/lo-quiero/test-drive"}>
                            <a style={{ textDecoration: "none" }}>
                              <button
                                className={`btn test-principal2 mt-1 mt-sm-3 w-100 pr-3 ${model.modelo == "Vitara" ? "bg-orange" : ""
                                  }`}
                              >
                                <img src="/images/icons/volante.svg" alt="Volante" />
                              </button>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className={mobile ? "" : "mt-2 pt-5"}>
          <div id="features-model" className="row col-12 px-0 mx-0 ">
            <Detailfeatures data={data} modelo={modelo} data_api={data_api} />
          </div>
        </div>
        <TestDrive
          modelo={model.modelo}
          id={model.slug}
          isMobile={isMobile}
          test={{
            img: model?.test_imagen?.url,
            fondo: model?.test_background?.url,
            fichaTecnica: model?.ficha_tecnica?.url,
          }}
        />
      </div>
    </div>
  );
}

export default Detail;
