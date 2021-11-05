import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../../../hooks/useOnScreen";
import { Animated } from "react-animated-css";
import TestDrive from "./TestDrive";

function Security({ isMobile, seguridad }) {
  const Inicio = () => {
    const [visible, setVisible] = useState(false);
    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef);

    useEffect(() => {
      setVisible(onScreen);
    }, [onScreen]);
    return (
      <>
        {!isMobile && (
          <div ref={divRef} className="row col-12 px-0 mx-0 seccion">
            <div className="col-6 div-inicio">
              <Animated
                animationIn="fadeInLeft"
                animationInDuration={1000}
                isVisible={visible || isMobile}
              >
                <h2 className="primer-nivel"
                  dangerouslySetInnerHTML={{ __html: seguridad?.inicio?.titulo ?? '' }} />
                <p className="segundo-nivel mt-3"
                  dangerouslySetInnerHTML={{ __html: seguridad?.inicio?.subtitulo ?? '' }}>
                </p>
              </Animated>
              <Animated
                animationIn="fadeInUp"
                animationInDuration={1000}
                isVisible={visible || isMobile}
              >
                <p
                  className="texto mt-5 pr-md-3"
                  dangerouslySetInnerHTML={{ __html: seguridad?.inicio?.texto ?? '' }}
                />
              </Animated>
            </div>

            <Animated
              animationIn="fadeInRight"
              animationInDuration={1000}
              isVisible={visible || isMobile}
              className="img-inicio h-100"
            >
              <div className="col-12 float-right px-0 h-100" style={{ backgroundImage: `linear-gradient(89.98deg, #FFFFFF 3.57%, rgba(255, 255, 255, 0.9) 24.86%, rgba(255, 255, 255, 0.832887) 35.87%, rgba(255, 255, 255, 0) 85.21%), url("${seguridad?.inicio?.imagen?.url ?? ''}")`, backgroundSize: "cover", backgroundPosition: "left center" }}></div>

            </Animated>
          </div>
        )}
        {isMobile && (
          <div ref={divRef} className="row col-12 px-0 mx-0 seccion">
            <div className="col-12 px-4">
              <Animated
                animationIn="fadeInLeft"
                animationInDuration={1000}
                isVisible={visible || isMobile}
              >
                <h2 className="primer-nivel"
                  dangerouslySetInnerHTML={{ __html: seguridad?.inicio?.titulo ?? '' }} />
                <p className="segundo-nivel mt-3" dangerouslySetInnerHTML={{ __html: seguridad?.inicio?.subtitulo ?? '' }}>

                </p>
              </Animated>
              <Animated
                animationIn="fadeInUp"
                animationInDuration={1000}
                isVisible={visible || isMobile}
              >
                <p
                  className="texto mt-5 pr-md-3"
                  dangerouslySetInnerHTML={{ __html: seguridad?.inicio?.texto ?? '' }}
                />
              </Animated>
            </div>
            <div className="img-inicio">
              <div
                className={`w-100 h-100 float-right`}
                style={{
                  background: `linear-gradient(180.02deg, #FFFFFF 11.92%, rgba(255, 255, 255, 0) 71.41%), url('${seguridad?.inicio?.imagen?.url ?? ''}')`,
                  backgroundSize: `cover`,
                }}
              ></div>
            </div>
          </div>
        )}
      </>
    );
  };
  const Carroceria = () => {
    const [visible, setVisible] = useState(false);
    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef);

    useEffect(() => {
      setVisible(onScreen);
    }, [onScreen]);
    return (
      <div
        ref={divRef}
        className="row col-12 px-0 mx-0 pt-5 align-items-center seccion bg-linear"
      >
        <div className="row col-12 align-items-center mt-5 px-0 mx-0">
          <Animated
            animationIn="fadeInLeft"
            animationInDuration={1000}
            className={isMobile ? "w-40" : "w-25"}
            isVisible={visible || isMobile}
          >
            <div className="line" />
          </Animated>
          <Animated
            animationIn="fadeInRight"
            animationInDuration={1000}
            className={isMobile ? "w-60" : "w-75"}
            isVisible={visible || isMobile}
          >
            <div className="pl-lg-5 ml-lg-5 px-3 segundo-nivel" dangerouslySetInnerHTML={{ __html: seguridad?.carroceria?.titulo ?? '' }} />
          </Animated>
        </div>

        <div className="col-12 px-0 mx-auto pb-5 ">
          <div className="col-lg-6 px-0 m-auto">
            <Animated
              animationIn="fadeInRight"
              animationInDuration={1000}
              isVisible={visible || isMobile}
            >
              <p
                className="texto mt-5 ml-lg-5 px-4 pl-lg-5"
                dangerouslySetInnerHTML={{ __html: seguridad?.carroceria?.texto ?? '' }}
              />
            </Animated>
          </div>
          <div className="col-lg-6 col-10 m-auto">
            <Animated
              animationIn="fadeInUp"
              animationInDuration={1000}
              isVisible={visible || isMobile}
            >
              <img src={seguridad?.carroceria?.imagen?.url ?? ''} className="w-100"></img>
            </Animated>
          </div>
        </div>
      </div>
    );
  };
  const Airbag = () => {
    const [visible, setVisible] = useState(false);
    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef);

    useEffect(() => {
      setVisible(onScreen);
    }, [onScreen]);
    return (
      <div
        ref={divRef}
        className="row col-12 px-0 mx-0 align-items-center seccion"
      >
        <div className="row col-12 align-items-center mt-5">
          <Animated
            animationIn="fadeInRight"
            animationInDuration={1000}
            className={isMobile ? "w-100" : "w-40"}
            isVisible={visible || isMobile}
          >
            <div
              className={`segundo-nivel pt-5 mb-3 ${isMobile ? "px-4" : "pl-6 "
                }`}
              dangerouslySetInnerHTML={{
                __html: seguridad?.airbag?.titulo ?? ''
              }}
            >

            </div>
          </Animated>
        </div>
        <div className="row col-12 px-0 mx-0">
          <div className="col-lg-5 col-12 px-0">
            <Animated
              animationIn="fadeInLeft"
              animationInDuration={1000}
              isVisible={visible || isMobile}
            >
              <p className={`texto mt-0 pr-5 py-3 ${isMobile ? "px-4" : "pl-6 "}`} dangerouslySetInnerHTML={{
                __html: seguridad?.airbag?.texto ?? ''
              }} >

              </p>
              {seguridad.airbag.subtitulo != "" && (
                <div
                  className={`blue-bg subtitulo pr-md-5 py-xl-5 py-4 ${isMobile ? "py-5 px-4" : ""
                    } `}
                  dangerouslySetInnerHTML={{
                    __html: seguridad?.airbag?.subtitulo ?? ''
                  }}
                >


                </div>
              )}
            </Animated>
          </div>
          <div className="col-lg-7 col-12 px-0 overflow-hidden">
            <Animated
              animationIn="pulse"
              animationInDuration={1000}
              isVisible={visible || isMobile}
            >
              <img
                src={seguridad?.airbag?.imagen?.url ?? ''}
                className="w-100 float-right"
                alt="airbag"
              ></img>
            </Animated>
          </div>
        </div>
      </div>
    );
  };
  const Esp = () => {
    const [visible, setVisible] = useState(false);
    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef);

    useEffect(() => {
      setVisible(onScreen);
    }, [onScreen]);
    return (
      <div
        ref={divRef}
        className="row col-12 px-0 mx-0 align-items-center seccion bg-linear"
      >
        <div className="row col-12 align-items-center px-0 mx-0 mt-5">
          <Animated
            animationIn="fadeInLeft"
            animationInDuration={1000}
            className="w-40"
            isVisible={visible || isMobile}
          >
            <div className="pl-lg-5 ml-lg-5 segundo-nivel px-4" dangerouslySetInnerHTML={{ __html: seguridad?.esp?.titulo ?? '' }}></div>
          </Animated>
          <Animated
            animationIn="fadeInRight"
            animationInDuration={1000}
            className="w-60"
            isVisible={visible || isMobile}
          >
            <div className="line" />
          </Animated>
        </div>
        <div className="col-12 px-0 mx-auto pb-5 ">
          <div className="col-12 px-lg-5 px-4">
            <Animated
              animationIn="fadeInRight"
              animationInDuration={1000}
              isVisible={visible || isMobile}
              className="px-lg-5"
            >
              <p className="texto my-5 pr-3" dangerouslySetInnerHTML={{
                __html: seguridad?.esp?.texto ?? ''
              }}>

              </p>
            </Animated>
          </div>
          <div className="col-lg-6 col-10 m-auto">
            <Animated
              animationIn="fadeInUp"
              animationInDuration={1000}
              isVisible={visible || isMobile}
            >
              <img
                src={seguridad?.esp?.imagen?.url ?? ''}
                className="w-100"
                alt="esp"
              ></img>
            </Animated>
          </div>
        </div>
      </div>
    );
  };
  const Sensores = () => {
    const [visible, setVisible] = useState(false);
    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef);

    useEffect(() => {
      setVisible(onScreen);
    }, [onScreen]);
    return (
      <div
        ref={divRef}
        className="row col-12 px-0 mx-0 align-items-center seccion bg-gray"
      >
        <div className="col-lg-6 col-12 m-auto px-4">
          <Animated
            animationIn="fadeInLeft"
            animationInDuration={1000}
            className="w-100"
            isVisible={visible || isMobile}
          >
            <div className="segundo-nivel  mt-5" dangerouslySetInnerHTML={{ __html: seguridad?.sensores?.titulo ?? '' }} />
          </Animated>
        </div>
        <div className="col-12 px-0 mx-0 pb-5 py-5">
          <div className="col-lg-6 col-12 m-auto px-4">
            <Animated
              animationIn="fadeInRight"
              animationInDuration={1000}
              isVisible={visible || isMobile}
            >
              <p className="texto mt-5 pl-lg-0 pr-lg-3 px-0 m-lg-auto"
                dangerouslySetInnerHTML={{
                  __html: seguridad?.sensores?.texto ?? ''
                }}
              >

              </p>
            </Animated>
          </div>
          <div className="col-lg-6 col-10 m-auto">
            <Animated
              animationIn="fadeInUp"
              animationInDuration={1000}
              isVisible={visible || isMobile}
            >
              <img
                src={seguridad?.sensores?.imagen?.url ?? ''}
                className="w-100"
                alt="sensores"
              ></img>{" "}
            </Animated>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="security">
      <Inicio />
      {seguridad.carroceria && <Carroceria />}
      {seguridad.airbag && <Airbag />}
      {seguridad.esp && <Esp />}
      {seguridad.sensores && <Sensores />}
    </div>
  );
}

export default Security;
