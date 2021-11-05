import React, { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Seguro.module.scss";
import Link from "next/link";

function Seguro({ data }) {
  let { tracking, tracking_complemento, funcionalidades, alertas } = data;
  /*Mbile version*/
  const isMobile = useMediaQuery({ maxWidth: 550 });

  return (
    <div className={`${styles.seguroDiv} row col-12 py-5 px-0 mx-0`}>
      <div
        className={`${styles.seccion} row col-12 py-5 mt-3 px-0 mx-0 justify-content-end`}
        style={{
          backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0.2) 45.8%, rgba(0, 0, 0, 0) 70.74%), linear-gradient(270deg, rgba(0, 44, 66, 0.6375) 1.05%, rgba(0, 0, 0, 0) 60.96%),url(${tracking?.background?.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "900px",
        }}
      >
        <div className={`${styles.texto} col-md-6 col-12 white py-5 my-auto`}>
          <div className={`${styles.szk} col-10 px-0 mx-auto`} dangerouslySetInnerHTML={{ __html: tracking?.titulo ?? '' }}></div>
          <div className={`${styles.track} col-10 px-0 mx-auto`} dangerouslySetInnerHTML={{ __html: tracking?.subtitulo ?? '' }}>
          </div>
          <div className={`py-0 col-10 px-0 mx-auto`} dangerouslySetInnerHTML={{ __html: tracking?.texto ?? '' }}></div>
          <div className={`py-4 col-10 px-0 mx-auto`}>
            {
              tracking?.caracteristicas_lo_quieros &&
              tracking?.caracteristicas_lo_quieros.map((item, i) => (
              <div
                key={`seguro-${i}`}
                className="row col-12 mx-0 px-0 pt-3 align-items-start "
              >
                <img
                  src={item?.icono?.url ?? ''}
                  width={24}
                  className="img-fluid my-1"
                  alt={`check-${i}`}
                  style={{ border: "white 2px solid", borderRadius: "50%" }}
                />
                <div className="col-11">{item.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${styles.blueSeccion} row col-12 px-0 mx-0 mb-5 align-items-end`}
      >
        <div
          className={`${styles.segundoNivel} blue-bg col-md-5 col-12 white pl-lg-6 pr-lg-5 py-5 d-flex align-items-center`}
          style={{ minHeight: "330px" }}
          dangerouslySetInnerHTML={{ __html: tracking_complemento?.texto ?? '' }}></div>
        <div className={`${styles.texto} col-md-7 col-12 pl-md-5 pl-3 pr-lg-6 py-0`}>
          {
            tracking_complemento?.caracteristicas_lo_quieros &&
            tracking_complemento?.caracteristicas_lo_quieros.map((item, i) => (
            <div
              key={`beneficio-${i}`}
              className="row col-12 mx-0 px-0 mt-3 align-items-start "
            >
              <img
                src={item?.icono?.url ?? ''}
                width={24}
                height={24}
                className="img-fluid mt-2"
                alt={`check-${i}`}
              />
              <p className="col-11 mb-0">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.seccion} row col-12 py-3 px-0 mx-0 `}>
        <div className={`${styles} col-md-5 px-md-0 px-3`}>
          <div className={`${styles.segundoNivel} col-12 px-0`} dangerouslySetInnerHTML={{ __html: funcionalidades?.titulo ?? '' }}></div>
          <div className={`${styles.texto} col-12 px-0 py-5`}>
            {
              funcionalidades?.caracteristicas_lo_quieros &&
              funcionalidades?.caracteristicas_lo_quieros.map((item, i) => (
                <div
                  key={`beneficio-${i}`}
                  className="row col-12 mx-0 px-0 align-items-start "
                >
                  <img
                    src={item?.icono?.url ?? ''}
                    width={24}
                    height={24}
                    className="img-fluid mt-2"
                    alt={`check-${i}`}
                  />
                  <p className="col-11">{item.texto}</p>
                </div>
              ))}
          </div>
          <div className={`${styles.segundoNivel} col-12 px-0`} dangerouslySetInnerHTML={{ __html: alertas?.titulo ?? '' }}></div>
          <div className={`${styles.texto} col-12 px-0 py-5`}>
            {
              alertas?.caracteristicas_lo_quieros &&
              alertas?.caracteristicas_lo_quieros.map((item, i) => (
                <div
                  key={`beneficio-${i}`}
                  className="row col-12 mx-0 px-0 align-items-start "
                >
                  <img
                    src={item?.icono?.url ?? ''}
                    width={24}
                    height={24}
                    className="img-fluid mt-2"
                    alt={`check-${i}`}
                  />
                  <p className="col-11">{item.texto}</p>
                </div>
              ))}
          </div>
        </div>
        <div
          className={`${styles} col-md-5 col-12 px-0 text-center`}
          style={{ height: "376px" }}
        >
          <div
            className="col-10 h-100 mx-auto"
            style={{
              backgroundImage: `url(${funcionalidades?.imagen?.url})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div className={`${styles.seccion} row col-12 py-3 px-0 mx-0 `}>
        <Link href="/lo-quiero/informacion/">
          <button className="btn btn-item blue-bg mb-2 ">
            <div className="px-5 ">Más Información</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Seguro;
