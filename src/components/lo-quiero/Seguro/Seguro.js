import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Seguro.module.scss";
import Link from "next/link";

function Seguro({ data }) {
  let { seguro, beneficios, contrato } = data;
  /*Mbile version*/
  const isMobile = useMediaQuery({ maxWidth: 550 });
  return (
    <div className={`${styles.seguroDiv} row col-12 py-5 px-0 mx-0`}>
      <div className={`${styles} col-5 px-0 line`}></div>
      <div className={`${styles.titulo} col-7 pl-md-5`} dangerouslySetInnerHTML={{ __html: seguro?.titulo ?? '' }}></div>
      <div className={`${styles.seccion} row col-12 py-5 my-3 px-0 mx-0 `}>
        <div
          className={`${styles.bgGray} ${styles.segundoNivel} col-md-5 py-5 col-12 white d-flex align-items-center`}
          style={{ minHeight: "220px" }}
          dangerouslySetInnerHTML={{ __html: seguro?.subtitulo ?? '' }}
        >
        </div>
        <div className={`${styles.texto} col-md-7 col-12 pl-md-5 pr-lg-6 py-3`} dangerouslySetInnerHTML={{ __html: seguro?.texto ?? '' }}></div>
      </div>
      <div className={`${styles.seccion} row col-12 py-3 px-0 mx-0 `}>
        <div className={`${styles} col-md-5 col-12 px-0 `}>
          <div className={`${styles.segundoNivel} col-md-10 col-12 mx-auto`} dangerouslySetInnerHTML={{ __html: beneficios?.titulo ?? '' }}></div>
          <div className={`${styles.texto} col-md-10 col-12 mx-auto pt-5`}>
            {
              beneficios?.caracteristicas_lo_quieros &&
              beneficios?.caracteristicas_lo_quieros.map((item, i) => (
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
          className={`${styles} col-md-7 col-12 pl-md-5 px-0 pr-0`}
          style={{ height: "472px" }}
        >
          <div
            className="col-12 h-100"
            style={{
              backgroundImage: `url(${beneficios?.imagen?.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center bottom"
            }}
          ></div>
        </div>
      </div>
      <div className={`${styles.seccion} row col-12 py-5 my-3 px-0 mx-0 `}>
        <div
          className={`${styles} col-md-5 col-12 px-0 text-center`}
          style={{ height: "376px" }}
        >
          <div
            className="col-12 h-100 mx-auto"
            style={{
              backgroundImage: `url(${contrato?.imagen?.url})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className={`${styles} col-md-5 col-12 px-md-0 pl-md-5 px-3`}>
          <div className={`${styles.segundoNivel} col-12 px-0`} dangerouslySetInnerHTML={{ __html: contrato?.titulo ?? '' }}>
          </div>
          <div className={`${styles.texto} col-12 pt-5 px-0`} dangerouslySetInnerHTML={{ __html: contrato?.texto ?? '' }}></div>
          <div className={`${styles.texto} col-12 px-0`} >
            {
              contrato?.caracteristicas_lo_quieros &&
              contrato?.caracteristicas_lo_quieros.map((item, i) => (
                <div
                  key={`seguro-${i}`}
                  className="row col-12 mx-0 px-0 pt-3 align-items-start "
                >
                  <img
                    src={item?.icono?.url ?? ''}
                    width={24}
                    height={24}
                    className="img-fluid mt-2"
                    alt={`check-${i}`}
                  />
                  <div className="col-11">{item.texto}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={`${styles.seccion} row col-12 py-5 my-3 px-0 mx-0 `}>
        <Link href="/lo-quiero/contratar-seguro/">
          <button className="btn btn-item blue-bg mb-2 ">
            <div className="px-5 ">Contratar</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Seguro;
