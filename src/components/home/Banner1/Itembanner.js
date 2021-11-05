import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from './ItemBanner.module.scss';
import LazyILoadingImage from "../../common/LazyLoadingImage";
const Imagen = (props) => {
  return (
    <div className={styles.containerImg}>
      <LazyILoadingImage className={styles.imgItemBanner} {...props} />
    </div>);
}

function Itembanner(props) {
  let izquierda = false;
  if (props.item.posicion_texto == "derecha") {
    izquierda = !izquierda;
  }

  const Boton = () => {
    return (
      <>
        <Link href={`${props?.item?.enlace ?? "#"}`}>
          <a style={{ textDecoration: "none" }}>
            <button className="btn btn-primary btn-banner">
              {props?.item?.texto_boton ?? ''}
            </button>
          </a>
        </Link>
      </>
    );
  };
  const Derecha = () => {
    return (
      <div className={`item item-banner blue-bg derecha`}>
        {!props.isMobile && (
          <>
            <div className="col-12 col-md-6 text-banner overflow-hidden">
              <div className="texto">
                <h1>{props?.item?.titulo ?? ''}</h1>
                <p>{props?.item?.descripcion ?? ''}</p>
                {props?.item?.texto_boton && <Boton />}
              </div>
            </div>
            <div className="d-flex col-12 px-0 imageBanner">
              {
                props?.item?.imagen &&
                <Imagen
                  src={`${props?.item?.imagen?.url}`}

                  alt={props?.item?.titulo ?? ''}
                />
              }
              <div
                className="w-100 h-100"
                style={{
                  position: "absolute",
                  background: `linear-gradient(90deg, var(--blueSuzuki) 14.67%, rgba(0, 44, 66, 0) 57.91%), linear-gradient(0deg, rgba(0, 44, 66, 0.1), rgba(0, 44, 66, 0.1))`,
                }}
              />
            </div>
          </>
        )}
        {props.isMobile && (
          <>
            <div className="px-0">
              <div className="texto">
                <h1>{props?.item?.titulo ?? ''}</h1>
                <p>{props?.item?.descripcion ?? ''}</p>
              </div>
            </div>
            <div className="w-100 h-100 overflow-hidden px-0 position-relative">
              <div className="col-12 imageBanner px-0">
                {
                  props?.item?.imagen &&
                  <Imagen
                    src={`${props?.item?.imagen?.formats?.small?.url ?? props?.item?.imagen?.url}`}

                    alt={props?.item?.titulo ?? ''}
                  />
                }
                <div
                  className="w-100 h-100"
                  style={{
                    position: "absolute",
                    background: `linear-gradient(180deg, var(--blueSuzuki) 11.6%, rgba(255, 255, 255, 0) 54.05%)`,
                  }}
                />
              </div>
              {props?.item?.texto_boton && <Boton />}
            </div>
          </>
        )}
      </div>
    );
  };
  const Izquierda = () => {
    return (
      <div className={`item item-banner blue-bg izquierda`}>
        {!props.isMobile && (
          <>
            <div className="d-flex col-12 px-0 imageBanner">
              {
                props?.item?.imagen &&
                <Imagen
                  src={`${props?.item?.imagen?.url}`}

                  alt={props?.item?.titulo ?? ''}
                />
              }
              <div
                className="w-100 h-100"
                style={{
                  position: "absolute",
                  background: `linear-gradient(270deg, var(--blueSuzuki) 14.67%, rgba(0, 44, 66, 0) 57.91%), linear-gradient(0deg, rgba(0, 44, 66, 0.1), rgba(0, 44, 66, 0.1))`,
                }}
              />
            </div>
            <div className="col-12 col-md-6 text-banner overflow-hidden">
              <div className="texto">
                <h1>{props?.item?.titulo ?? ''}</h1>
                <p>{props?.item?.descripcion ?? ''}</p>
                {props?.item?.texto_boton && <Boton />}
              </div>
            </div>
          </>
        )}
        {props.isMobile && (
          <>
            <div className="px-0">
              <div className="texto">
                <h1>{props?.item?.titulo ?? ''}</h1>
                <p>{props?.item?.descripcion ?? ''}</p>
              </div>
            </div>
            <div className="w-100 h-100 overflow-hidden px-0 position-relative">
              <div className="col-12 imageBanner px-0">
                {
                  props?.item?.imagen &&
                  <Imagen
                    src={`${props?.item?.imagen?.formats?.small?.url ?? props?.item?.imagen?.url}`}

                    alt={props?.item?.titulo ?? ''}
                  />
                }
                <div
                  className="w-100 h-100"
                  style={{
                    position: "absolute",
                    background: `linear-gradient(180deg, var(--blueSuzuki) 11.6%, rgba(255, 255, 255, 0) 54.05%)`,
                  }}
                />
              </div>
              {props?.item?.texto_boton && <Boton />}
            </div>
          </>
        )}
      </div>
    );
  };
  return (
    <>
      {izquierda ? <Izquierda /> : <Derecha />}
    </>
  );
}

export default Itembanner;
