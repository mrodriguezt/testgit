import React, { useEffect, useState, useRef } from "react";
import useOnScreen from "../../../../hooks/useOnScreen";
import { Modal } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { Animated } from "react-animated-css";

const TestDrive = (props) => {
  let redirect;
  props.redirect === undefined
    ? (redirect = props.id)
    : (redirect = props.redirect);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = React.useState(false);
  const divRef = useRef(null);
  const onScreen = useOnScreen(divRef, 0.8);

  useEffect(() => {
    setVisible(onScreen);
  }, [onScreen]);

  return (
    <div className="bg-testdrive w-100 h-100" style={{ background: "linear-gradient(270deg, #EEEEEE 8.91%, rgba(238, 238, 238, 0) 74.34%)" }}>
      <div
        className="pt-5 pb-4 bg-image test"
        style={{
          backgroundImage: `linear-gradient(270deg, #EEEEEE 8.91%, rgba(238, 238, 238, 0) 74.34%), url('${props.test != undefined
            ? props.test.fondo
            : "/images/modelos/fondo_test.png"
            }')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom"
        }}
      >
        <div
          ref={divRef}
          className={`pt-lg-5 mt-lg-5 info-test row col-12 px-0 mx-0 overflow-lg-hidden justify-content-center justify-content-lg-start align-items-start`}
        >
          <div className="col-lg-5 mt-5 mt-md-0 col-12 car-img px-0">
            <Animated
              animationIn="fadeInLeft"
              animationInDuration={1000}
              isVisible={visible || props.isMobile}
            >
              <div className="col-12 car-img px-0 mx-0">
                {
                  props.test.img &&
                  <Image
                    src={
                      props.test != undefined
                        ? props.test.img
                        : "/images/modelos/Rectangle 82V.png"
                    }
                    layout="fill"
                    objectFit={"contain"}
                    alt="imagen vehiculo"
                    objectPosition={`${props.isMobile ? "bottom" : "center"}`}
                  />

                }
              </div>
            </Animated>
          </div>

          <div className="row col-lg-6 mx-0 col-12 px-0 justify-content-lg-between justify-content-center botones overflow-lg-hidden">
            <Animated
              animationIn="fadeInRight"
              animationInDuration={1000}
              isVisible={visible || props.isMobile}
            >
              <div className="row col-12 px-0 mx-0">
                <div className="col-12 my-3 mx-0 d-flex align-items-center justify-content-center">
                  <Link href={"/lo-quiero/test-drive"}>
                    <button
                      className={`btn test-principal my-0 mt-sm-3 w-100 ${props.modelo == "Vitara" ? "bg-orange" : ""
                        }`}
                    >
                      <img src="/images/icons/volante.svg" alt="volante" />
                    </button>
                  </Link>
                </div>
                <div className="col-6 text-center">
                  <Link href={"/cotizacion/" + redirect}>
                    <button className="btn test my-0 mt-sm-3 w-100">
                      <img src="/images/icons/cotizar.svg" alt="cotizar" />
                      Cotizar
                    </button>
                  </Link>
                </div>
                {/*
              <div className="col-4 text-center">
                <button className="btn test mt-1 mt-sm-3 w-100 " onClick={() => setOpen(true)}>
                  <img src="/images/icons/calendario.svg" /> Agenda tu cita</button>
              </div>
                */}

                <div className="col-6 text-center ">
                  <a
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    href={`${props?.test?.fichaTecnica}`}

                  >
                    <button className="btn test my-0 mt-sm-3 w-100 ">
                      <img src="/images/icons/download.svg" alt="descargar" />
                      Ficha técnica
                    </button>
                  </a>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDrive;
