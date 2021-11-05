import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Breadcrumbs from "../../common/Breadcrumbs";
import NumberFormat from "react-number-format";
import Detailfeatures from "./Detailfeatures.js";
import MediaPlayer from "./VideoPlayer.js";
import TestDrive from "./features/TestDrive";
import Image from "next/image";

import Viewer360 from "../../Viewer360";

function Detailmobile({ modelo, data, routes, data_api }) {
  const [selected, setSelected] = useState(0);
  const [model, setModel] = useState(data);

  const handleClick = (index) => setSelected(index);
  const model_seleted = model.galeria[selected];

  useEffect(() => {
    setModel(data);
  }, [data]);

  const Vehiculo = () => {
    return (
      <div className="seccion">
        <div
          className="detail-outside pt-5 "
          style={{
            backgroundImage: `linear-gradient(rgb(255, 255, 255) 0%, transparent 10%,transparent 60%, rgb(255, 255, 255) 100%), url(${model.exterior.vehiculo.fondo})`,
          }}
        >
          <div className="row col-12 justify-content-end pl-md-5 px-0 pr-0 mx-0 my-5">
            <div className="row col-12  align-items-center pr-0 mx-0">
              <div className="col-12 px-0 ">
                <label
                  className="primer-nivel"
                  dangerouslySetInnerHTML={{
                    __html: data_api?.exterior?.vehiculo?.titulo ?? "",
                  }}
                />
                <p
                  className="segundo-nivel d-block"
                  dangerouslySetInnerHTML={{
                    __html: data_api?.exterior?.vehiculo?.subtitulo ?? "",
                  }}
                />
              </div>
              {data_api?.exterior?.vehiculo?.imagen?.url && (
                <div className="col-12">
                  <img
                    src={data_api?.exterior?.vehiculo?.imagen?.url ?? ""}
                    className="w-100 h-100 img-fluid"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container px-md-5 row col-12 justify-content-center pb-3 mx-0">
          <div className="col-12 d-flex justify-content-center px-lg-5 px-0 mx-0">
            <div className="row col-12 align-items-center px-0 mx-0 ">
              <div className="col-12 mt-0 pt-0 mb-0">
                <p
                  className="texto mr-lg-5 ml-lg-5 pr-lg-5 pl-lg-5 mt-0 pt-0 mb-0 d-block"
                  dangerouslySetInnerHTML={{
                    __html: data_api?.exterior?.vehiculo?.texto ?? "",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Breadcrumbs routes={routes} />
      <MediaPlayer data={modelo}></MediaPlayer>
      <div className="pt-3 mb-4 overflow-hidden">
        <div className="my-5 pt-3">
          <div className="row col-12 py-lg-5 mt-3 mx-0 px-0 justify-content-center">
            <div className="container mt-lg-5 col-12 px-0">
              <Viewer360 model={modelo.id_view360} />
              <div
                className="col-12 pt-3"
                style={{
                  fontSize: "14px",
                  lineHeight: "140%",
                  maxWidth: "880px",
                }}
              >
                <label>
                  * Imágenes, accesorios, equipamientos y colores referenciales.
                  Únicamente versiones GL+ Y GLX disponibles en Ecuador. Techo
                  panorámico no aplica para Ecuador.
                </label>
              </div>
            </div>
            <div className="col-12 px-4">
              <div className="row justify-content-end">
                <div className="col-12 text-center px-xl-5 mt-4">
                  <div
                    className="col-12 text-center mx-auto px-0 mt-5 "
                    style={{ minHeight: "60px" }}
                  >
                    {modelo.logo && (
                      <Image
                        className="d-block "
                        src={modelo?.logo?.url}
                        layout="fill"
                        objectFit="contain"
                      />
                    )}
                  </div>
                  {/*<label className="d-block labelDesde mt-2">Desde </label>
                  <label className="price-detail title1 d-block mb-4 labelPrecio">
                    <NumberFormat
                      value={modelo.precio}
                      thousandSeparator="."
                      decimalSeparator=","
                      displayType={"text"}
                      prefix={"$"}
                    />
                  </label>*/}
                  {/* <Link href={`/cotizacion/${modelo.slug}`}>
                    <a>
                      <button className="btn btn-primary w-100">
                      Suzuki Driving Experience 
                      </button>
                    </a>
                  </Link> */}
                  <div
                    className="row botones  mt-3 mx-0 justify-content-center position-relative"
                    style={{ bottom: "0" }}
                  >
                    <a
                      href="/lo-quiero/test-drive"
                      style={{ textDecoration: "none" }}
                    >
                      <button
                        className={`btn test-principal2 mt-1 mt-sm-3 w-100 pr-3 ${modelo.modelo == "Vitara" ? "bg-orange" : ""
                          }`}
                      >
                        <img src="/images/icons/volante.svg" alt="Volante" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Vehiculo />
      <div id="features-model" className="bg-white pt-5">
        <div className="row col-12 px-0 mx-0">
          <Detailfeatures data={data} modelo={modelo} data_api={data_api} />

          <TestDrive
            modelo={modelo.modelo}
            id={modelo.slug}
            isMobile={true}
            test={{
              img: modelo?.test_imagen?.url,
              fondo: modelo?.test_background?.url,
              fichaTecnica: modelo?.ficha_tecnica?.url,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Detailmobile;
