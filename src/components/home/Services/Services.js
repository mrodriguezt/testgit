import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Animated } from "react-animated-css";
import useOnScreen from "../../../hooks/useOnScreen";
import Image from "next/image";
import Link from "next/link";
import LazyLoadingImage from '../../common/LazyLoadingImage';
const Imagen = ({ classNameContainer, classNameImage, ...otherProps }) => {
  return (
    <div className={`${classNameContainer}`}>
      <LazyLoadingImage className={`${classNameImage}`} {...otherProps} />
    </div>
  );
}

function Store({ isMobile }) {
  const [visible, setVisible] = useState(true);
  const divRef = useRef();
  const onScreen = useOnScreen(divRef, 0.5);

  useEffect(() => {
    setVisible(onScreen);
  }, [onScreen]);
  return (
    <div
      ref={divRef}
      className="container-fluid services bg-white img-background"
    >
      {!isMobile && (
        <Animated
          animationIn="fadeInUp"
          animationInDuration={1300}
          isVisible={visible}
        >
          <div
            className="row  justify-content-center align-items-center minh"
            style={{
              backgroundImage: 'url("./images/services/store.webp")',
              backgroundPosition: "center",
              // backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 44, 66, 0) 0%, var(--blueSuzuki) 100%), linear-gradient(0deg, rgba(0, 44, 66, 0.6), rgba(0, 44, 66, 0.6)), url("./images/services/store.png") ',
            }}
          >
            <div className=" col-lg-5 col-8  text align-self-center ">
              <h1 className="title-s">SZK Store</h1>
              <p className="text-left px-3 mt-5 subtitle-s pb-3">
                Un nuevo concepto de concesionario. La{" "}
                <strong>experiencia única</strong> y{" "}
                <strong>original SUZUKI </strong> por primera vez en Ecuador.
              </p>
              <Link href="/encuentranos">
                <a style={{ textDecoration: "none" }}>
                  <button className="btn btn-white  mx-auto ">Visítanos</button>
                </a>
              </Link>
            </div>
          </div>
        </Animated>
      )}
      {isMobile && (
        <div
          className="row justify-content-center align-items-center  "
          style={{
            backgroundImage: 'url("./images/services/store.webp")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "500px",
            // backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 44, 66, 0) 0%, var(--blueSuzuki) 100%), linear-gradient(0deg, rgba(0, 44, 66, 0.6), rgba(0, 44, 66, 0.6)), url("./images/services/store.png") ',
          }}
        >
          <div className=" col-12  text align-self-center ">
            <h1 className="title-s">SZK Store</h1>
            <p className="text-left px-sm-5 px-3 mt-5 subtitle-s pb-3">
              Un nuevo concepto de concesionario. La{" "}
              <strong>experiencia única</strong> y{" "}
              <strong>original SUZUKI </strong> por primera vez en Ecuador.
            </p>
            <Link href="/encuentranos">
              <a style={{ textDecoration: "none" }}>
                <button className="btn btn-white btn-banner mx-auto ">
                  Visítanos
                </button>
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
function ServiceOriginalSuzuki({ isMobile }) {
  const [visible, setVisible] = useState(true);
  const divRef = useRef();
  const onScreen = useOnScreen(divRef, 0.5);

  useEffect(() => {
    setVisible(onScreen);
  }, [onScreen]);
  return (
    <div ref={divRef} className="original-s">
      {!isMobile && (
        <div className="row imgh px-0 justify-content-center ">
          <div className="row col-12   justify-content-center">
            <div className="col-6 pl-5 d-flex align-items-center ">
              <Animated
                animationIn="fadeInRight"
                animationInDuration={1300}
                isVisible={visible}
              >
                <div className="row">
                  <div className="col">
                    <p className="title-o mb-4 grey-light">
                      Servicio Original SUZUKI
                    </p>
                    <p className="subtitle-o mb-2 black pr-3">
                      Tu vehículo SUZUKI en perfecto estado. Manos expertas,
                      servicio personalizado y partes originales cerca de ti.
                    </p>
                    <Link href="/posventa">
                      <a style={{ textDecoration: "none" }}>
                        <button className="btn btn-primary w-80 mt-5 mb-3">
                          CONOCE MÁS
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </Animated>
            </div>
            <div className="col-6 pl-3" style={{ position: "relative" }}>
              <Imagen
                src="/images/services/service.png"
                alt="Imagen servicio"
                classNameContainer='containerImageService'
                classNameImage='ImageService'
              />
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className=" container-fluid">
          <div className="row pt-4">
            <div className="col-12 pb-3">
              <p className="title-o mb-4 ">Servicio Original SUZUKI</p>
              <p className="subtitle-o mb-2 pr-3 text-justify">
                Tu vehículo SUZUKI en perfecto estado. Manos expertas, servicio
                personalizado y partes originales cerca de ti.
              </p>
            </div>
            <div
              className="col-12 px-0"
              style={{ position: "relative", height: "440px" }}
            >
              <Imagen
                src="/images/services/movil/service.png"
                alt="Imagen servicio"
                classNameContainer='containerImageServiceMobile'
                classNameImage='ImageServiceMobile'
              />

            </div>
            <div className="col-12 pt-5 pb-4">
              <Link href="/posventa">
                <a style={{ textDecoration: "none" }}>
                  <button className="btn btn-primary w-100">Conoce más</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Next({ isMobile }) {
  const [visible, setVisible] = useState(true);
  const divRef = useRef();
  const onScreen = useOnScreen(divRef, 0.5);

  useEffect(() => {
    setVisible(onScreen);
  }, [onScreen]);
  return (
    <div ref={divRef} className="next-l original-s container-fluid  minh">
      {!isMobile && (
        <div className="row imgh px-0 justify-content-center ">
          <div className="row col-12 px-0 justify-content-center">
            <div className="col-6 pr-3" style={{ position: "relative" }}>
              <Imagen
                src="/images/services/next.png"
                alt="Imagen next"
                classNameContainer='containerImageNextService'
                classNameImage='ImageNextService'
              />

              <div
                className="w-100 h-100"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 255, 255, 0) 27.52%, #ecf1f4 96.01%)",
                  position: "absolute",
                }}
              ></div>
            </div>
            <div className="col-6 pl-5 d-flex overflow-hidden align-items-center ">
              <Animated
                animationIn="fadeInLeft"
                animationInDuration={1300}
                isVisible={visible}
              >
                <div className="row">
                  <div className="col">
                    <p className="title-o mb-4 grey-light">The Next Level</p>
                    <p className="subtitle-o mb-2 pr-5">
                      <strong>
                        Calidad japonesa, eficiencia, tecnología y diseño.
                      </strong>{" "}
                      Nos movemos al siguiente nivel.
                    </p>
                    <Link href="/encuentranos">
                      <a style={{ textDecoration: "none" }}>
                        <button className="btn btn-primary w-80 mt-5 mb-3">
                          Descubre más
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="container-fluid px-0">
          <div className="row pt-4">
            <div className="col-12 pb-3">
              <p className="title-o mb-4 grey-light">The Next Level</p>
              <p className="subtitle-o mb-2 pr-5">
                <strong>
                  Calidad japonesa, eficiencia, tecnología y diseño.
                </strong>{" "}
                Nos movemos al siguiente nivel.
              </p>
            </div>
            <div className="col-12 px-0" style={{ position: "relative", height: "440px" }}
            >
              <Imagen
                src="/images/services/next.png"
                alt="Imagen next"
                classNameContainer='containerImageNextServiceMobile'
                classNameImage='ImageNextServiceMobile'
              />
            </div>
            <div className="col-12 pt-5 pb-4">
              <Link href="/encuentranos">
                <a style={{ textDecoration: "none" }}>
                  <button className="btn btn-primary w-100">
                    Descubre más
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Services({isMobile}) {

  return (
    <div className="bg-white">
      <Store isMobile={isMobile}></Store>
      <ServiceOriginalSuzuki isMobile={isMobile}></ServiceOriginalSuzuki>
      <Next isMobile={isMobile}></Next>
    </div>
  );
}
