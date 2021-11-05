import React from "react";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";

function Outside({ exterior, modelo }) {
  const Faros = () => {
    return (
      <div className="col-12 px-0 seccion mt-4">
        <div className="col-12 px-0">
          <div className="row col-12 px-0 mx-0 align-items-center">
            <div className="row col-12 mx-0 align-items-center px-0">
              <div className="col-7 col-sm-6 row px-0 mx-0">
                <label
                  className="segundo-nivel mb-0 col-12 col-sm-6 px-4"
                  style={{ paddingLeft: "18px" }}
                  dangerouslySetInnerHTML={{
                    __html: exterior?.faros?.titulo ?? "",
                  }}
                ></label>
              </div>
              <span className="col-5 col-sm-6 line-faros mx-0" />
            </div>
          </div>
          <div className="row col-12 px-4 mx-0">
            <p
              className="texto ml-lg-4 pt-3"
              dangerouslySetInnerHTML={{
                __html: exterior?.faros?.subtitulo ?? "",
              }}
            ></p>
          </div>
        </div>
        <div className="col-12 mt-2 px-4">
          <div className="row mx-0">
            <div className="col-12 px-0">
              <img
                src={exterior?.faros?.imagen?.url ?? ""}
                alt="exterior vehiculo"
                className="w-100"
              />
            </div>
          </div>
        </div>
        {exterior?.faros?.texto != "" && (
          <div className="col-12 px-4">
            <div className="row col-12 blue-bg px-4 mx-0">
              <label
                className="acentos-primer-nivel mt-5 mb-5 white"
                dangerouslySetInnerHTML={{
                  __html: exterior?.faros?.texto ?? "",
                }}
              ></label>
            </div>
          </div>
        )}
      </div>
    );
  };

  const Luces = () => {
    return (
      <div className="row col-12 px-0 mx-0 mb-5 seccion">
        <div className="col-12 px-0">
          <div className=" col-12 px-4 align-items-end">
            <div className="col-12 px-0">
              <label className="d-block segundo-nivel mt-5"
                dangerouslySetInnerHTML={{
                  __html: exterior?.luces?.titulo ?? "",
                }}
              ></label>
              <p
                className="texto d-block mt-3 mb-0 "
                dangerouslySetInnerHTML={{
                  __html: exterior?.luces?.texto ?? "",
                }}
              />
            </div>
            <div className="col-12 px-0">
              <img
                src={exterior?.luces?.imagen?.url ?? ""}
                with="800px"
                height="700px"
                className="mt-5 w-100 h-100"
                alt="exterior luces"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Insignia = () => {
    return (
      <div className="row col-12 px-0 mx-0 mt-5 seccion">
        <div className="col-12 px-0 mt-5">
          <div className="row col-12 px-0 mx-0 align-items-center">
            <label className="segundo-nivel mb-0 pl-md-5 px-4 col-6"
              dangerouslySetInnerHTML={{
                __html: exterior?.insignia?.titulo ?? "",
              }}
            ></label>
            <span className="line-faros mx-0 col-6 " />
          </div>
        </div>
        <div>
          <div className="row mx-0">
            <div className="col-lg-7 col-12 offset-lg-0 px-0">
              <img
                src={exterior?.insignia?.imagen?.url ?? ""}
                className="w-100 h-100 fill-object"
                alt="exterior insignia"
              />
            </div>
            <div className="col-12 col-lg-5 offset-lg-0 pr-lg-5 px-4 ">
              <p
                className="texto d-block mb-0"
                dangerouslySetInnerHTML={{
                  __html: exterior?.insignia?.texto ?? "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Ruedas = () => {
    return (
      <div className="row col-12 px-0 mx-0 seccion">
        <div className="col-12 mt-5">
          <div className="row align-items-center ">
            <div className="row col-12 align-items-center">
              <span className="line-faros-left col-6 pr-5 mx-0" />
              <label
                className="segundo-nivel col-6 mx-0"
                dangerouslySetInnerHTML={{
                  __html: exterior?.ruedas?.titulo ?? "",
                }}
              ></label>
            </div>
          </div>
        </div>
        <div className="col-12 px-0 mt-2">
          <div className="row px-0 mx-0 col-12">
            <div className="mx-5 px-5 mt-4">
              <img
                src={exterior?.ruedas?.imagen?.url ?? ""}
                className=" img-fluid position-relative w-100 h-100"
                alt="exterior ruedas"
              />
            </div>
            <div className="row col-12 px-0 mx-0 justify-content-end align-items-center">
              <label className="row col-10 px-0 mx-0 align-items-center blue-bg subtitle-faros py-5">
                <p
                  className="ml-5 my-0 segundo-nivel white"
                  dangerouslySetInnerHTML={{
                    __html: exterior?.ruedas?.subtitulo ?? "",
                  }}
                />
                <p
                  className="ml-5 my-0 primer-nivel white"
                  dangerouslySetInnerHTML={{
                    __html: exterior?.ruedas?.texto ?? "",
                  }}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Aros = () => {
    return (
      <div className="row col-12 px-0 mx-0 mb-5 seccion">
        <div className="col-12 px-0 mt-2">
          <div className="row col-12 mx-0 px-0">
            <div className="px-5 mx-5 mt-4">
              <img
                src={exterior?.aros?.imagen?.url ?? ""}
                className=" w-100 h-100 position-relative"
                alt="exterior aros"
              />
            </div>
            <div className="row col-12 px-0 mx-0 align-items-center justify-content-start">
              <label
                className="row col-10 px-0 mx-0 align-items-center subtitle-faros py-5"
                style={{
                  backgroundColor: "#4b5e65",
                }}
              >
                <p
                  className="pl-5 my-0 segundo-nivel white"
                  dangerouslySetInnerHTML={{
                    __html: exterior?.aros?.subtitulo ?? "",
                  }}
                />
                <p
                  className="pl-5 my-0 primer-nivel white"
                  dangerouslySetInnerHTML={{
                    __html: exterior?.aros?.texto ?? "",
                  }}
                ></p>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Faros />
      <Luces />
      {exterior?.insignia && <Insignia />}
      <Ruedas />
      {exterior?.aros && <Aros />}
    </>
  );
}

export default Outside;
