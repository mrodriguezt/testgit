import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Inicio.module.scss";
import Image from "next/image";

function Inicio({ data }) {
  /*Mbile version*/
  const isMobile = useMediaQuery({ maxWidth: 550 });

  return (
    <>
      <div className={`${styles.inicio} px-0 row col-12 mx-0 px-0 mb-5`}>
        <div
          className={`px-0 row col-12 mx-0 px-0 align-items-center justify-content-center`}
          style={{
            backgroundImage: `linear-gradient(89.94deg, #FFFFFF 25.12%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0) 54.58%, #FFFFFF 90%), url(${data?.background?.url})`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        >
          <div className={`${styles.titulo} col-md-4 col-12 px-md-0 py-5 py-md-0`} dangerouslySetInnerHTML={{ __html: data?.titulo ?? '' }}></div>
          <div className={`${styles.imagen} col-md-5 col-12 mt-3`}>
            {
              data?.imagen?.url &&
              <Image
                src={data?.imagen?.url}
                alt="Auto Test"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            }
          </div>
        </div>

        <div className={`${styles.texto} ${styles.textoIni} col-md-10 col-12 px-md-0`} dangerouslySetInnerHTML={{ __html: data?.texto ?? '' }}></div>
      </div>
    </>
  );
}
export default Inicio;
