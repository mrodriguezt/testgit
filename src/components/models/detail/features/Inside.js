import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../../../hooks/useOnScreen";
import useScrollDirection from "../../../../hooks/useScrollDirection";
import { Animated } from "react-animated-css";

function Inside({ interior, isMobile }) {
  const Inicio = () => {
    const [visible, setVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);

    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef, 0.25);
    const scrollFunction = useScrollDirection();

    useEffect(() => {
      setVisible(onScreen);
      setScrollDirection(scrollFunction);
    }, [onScreen, scrollFunction]);

    return (
      <div
        ref={divRef}
        className="row align-items-center mt-lg-5 mx-0 min-vh-50 seccion"
        style={{
          order: `${interior?.index?.orden ? interior?.index?.orden : 0
            }`,
        }}
      >
        <div
          className={
            isMobile ? "mx-4 mt-4 px-0" : "col-12 col-lg-5 pr-lg-5 my-0 px-5"
          }
        >
          <Animated
            animationIn={!isMobile ? "fadeInUp" : ""}
            animationOut={!isMobile ? "slideOutDown" : ""}
            animationOut={!isMobile ? "fadeOutDown" : ""}
            animationInDuration={1000}
            isVisible={!isMobile ? visible : true}
          >
            <div className={isMobile ? "col-12 px-0" : "col-12  d-block mt-5"}>
              <label
                className="primer-nivel text-left col-12 px-0"
                dangerouslySetInnerHTML={{ __html: interior?.index?.titulo ?? '' }}
              />
              <p className="segundo-nivel text-left mt-2 col-12 px-0"
                dangerouslySetInnerHTML={{ __html: interior?.index?.subtitulo ?? '' }}
              >

              </p>
            </div>

            <p
              className={
                isMobile
                  ? "texto  col-12 px-0"
                  : "texto d-block mb-0 ml-3 text-left"
              }
              dangerouslySetInnerHTML={{ __html: interior?.index?.texto ?? '' }}
            />
          </Animated>
        </div>
        <div className={"col-lg-7 col-12 offset-lg-0 py-5 px-0"}>
          <Animated
            animationIn={
              scrollDirection == "down" && !isMobile
                ? "slideInUp"
                : !isMobile
                  ? "slideInUp"
                  : ""
            }
            animationOut={
              scrollDirection == "down" && !isMobile ? "slideOutUp" : ""
            }
            animationInDuration={1500}
            isVisible={!isMobile ? visible : true}
          >
            <img
              src={interior?.index?.imagen?.url ?? ''}
              alt="interior vehiculo"
              className={
                isMobile ? " w-100 h-100 px-4" : "w-100 h-100 ml-5 mt-5 pt-5"
              }
            />
          </Animated>
        </div>
      </div>
    );
  };

  const Instrumentos = () => {
    const [visible, setVisible] = useState(false);

    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef, 0.25);

    useEffect(() => {
      setVisible(onScreen);
    }, [onScreen]);
    return (
      <div
        ref={divRef}
        className="row col-12 mx-0 px-0 bg-intrumentos seccion min-vh-50 pb-4"
        style={{
          order: `${interior?.instrumentos?.orden
            ? interior?.instrumentos?.orden
            : 0
            }`,
        }}
      >
        <div className={`col-12 px-0 mx-0 ${isMobile ? "mb-4" : "mt-5 pt-5"}`}>
          <div className="row col-12 mx-0 px-0 align-items-center">
            <Animated
              animationIn={!isMobile ? "slideInLeft" : ""}
              animationInDuration={1000}
              isVisible={!isMobile ? visible : true}
              className="row col-6 mx-0 px-0 mt-2 align-items-center"
            >
              <span className="line-faros-left mr-5 " />
            </Animated>
            <Animated
              animationIn={!isMobile ? "slideInRight" : ""}
              animationInDuration={1000}
              isVisible={!isMobile ? visible : true}
              className="row col-6 mx-0 px-0 pr-4 pr-lg-0 mt-2 align-items-center"
            >
              <label
                className={
                  isMobile
                    ? "segundo-nivel ml-md-5 px-md-5 mb-0 "
                    : "segundo-nivel mb-0 ml-md-2 ml-2 px-4"
                }
                dangerouslySetInnerHTML={{
                  __html: interior?.instrumentos?.titulo ?? ''
                }}
              />
            </Animated>
          </div>
        </div>
        <Animated
          animationIn={!isMobile ? "slideInUp" : ""}
          animationInDuration={1000}
          isVisible={!isMobile ? visible : true}
        >
          {!isMobile && (
            <div className="row">
              <div className="mt-5 col-sm-6">
                <img
                  src={interior?.instrumentos?.imagen?.url ?? ''}
                  alt="interior instrumentos"
                  className={"w-100 h-100"}
                />
              </div>
              <div className="col-6">
                <div className="col row">
                  <p className="subtitulo_ d-block mt-4 ml-sm-3"
                    dangerouslySetInnerHTML={{
                      __html: interior?.instrumentos?.subtitulo ?? ''
                    }}
                  >

                  </p>
                </div>
                <div className="col">
                  <p
                    className="texto d-block mt-2"
                    dangerouslySetInnerHTML={{
                      __html: interior?.instrumentos?.texto ?? ''
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {isMobile && (
            <div className="">
              <div className="col-12 px-4 ">
                <div className="col-12 row px-0 mx-0">
                  <p className="textos d-block mt-2 ml-3"
                    dangerouslySetInnerHTML={{
                      __html: interior?.instrumentos?.subtitulo ?? ''
                    }}
                  >

                  </p>
                </div>
                <div className="col-12 px-0">
                  <p
                    className="texto d-block mt-1"
                    dangerouslySetInnerHTML={{
                      __html: interior?.instrumentos?.texto ?? ''
                    }}
                  />
                </div>
              </div>
              <div className="mt-2 col-sm-6 px-4 container">
                <img
                  src={interior?.instrumentos?.imagen?.url ?? ''}
                  alt="interior instrumentos"
                  className={"w-100 h-100"}
                />
              </div>
            </div>
          )}
        </Animated>
      </div>
    );
  };

  const Lcd = () => {
    const [visible, setVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);

    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef, 0.25);
    const scrollFunction = useScrollDirection();

    useEffect(() => {
      setVisible(onScreen);
      setScrollDirection(scrollFunction);
    }, [onScreen, scrollFunction]);
    return (
      <div
        ref={divRef}
        className="lcd row col-12 px-0 mx-0 align-items-center min-vh-50 "
        style={{
          order: `${interior?.lcd?.orden ? interior?.lcd?.orden : 0}`,
        }}
      >
        <Animated
          animationIn={
            scrollDirection == "down" && !isMobile ? "slideInUp" : ""
          }
          animationInDuration={1000}
          isVisible={!isMobile ? visible : true}
          className="w-100"
        >
          <div className="row col-12 mx-0 px-4">
            <p
              className={`segundo-nivel white-t mx-0 ${
                isMobile ? "mt-5 px-0 col-12" : "ml-5 mt-5 pl-5"
              }`}

              dangerouslySetInnerHTML={{
                __html: interior?.lcd?.titulo ?? ''
              }}
            >

            </p>
            {interior?.lcd?.subtitulo && interior?.lcd?.subtitulo != "" && (
              <p
              className={`texto white-t mx-0 px-0 ${
                isMobile ? "col-12" : "col-10 ml-5 my-5 pl-5"
              }`}
                dangerouslySetInnerHTML={{
                  __html: interior?.lcd?.subtitulo ?? ''
                }}
              >

              </p>
            )}
          </div>
          {isMobile && interior?.lcd?.texto && interior?.lcd?.texto != "" && (
            <div className="bg-lcd py-3">
              <label className="col-12 d-block acentos-primer-nivel white subtitle-faros mt-3 mb-3 mx-0 px-4"
                dangerouslySetInnerHTML={{
                  __html: interior?.lcd?.texto ?? ''
                }}
              >

              </label>
            </div>
          )}
          <div
            className={`container col-10 my-5 text-center ${interior?.lcd?.texto && interior?.lcd?.texto != "" ? "h-410" : "tec-h"
              }`}
            style={{
              backgroundImage: `radial-gradient(50.79% 50.79% at 48.54% 55.84%, rgba(0, 44, 66, 0) 46.88%, var(--blueSuzuki) 100%),url("${interior?.lcd?.imagen?.url ?? ''}")`,
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          ></div>
        </Animated>
        {!isMobile && interior?.lcd?.texto && interior?.lcd?.texto != "" && (
          <div className="inside-over ">
            <div className="row col-12 mx-0 px-0">
              <label className="d-block acentos-primer-nivel m-5 pr-3"
              dangerouslySetInnerHTML={{
                __html: interior?.lcd?.texto ?? ''
              }}
            >

            </label>
            </div>
          </div>
        )}
      </div>
    );
  };

  const Asientos = () => {
    const [visible, setVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);

    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef, 0.25);
    const scrollFunction = useScrollDirection();

    useEffect(() => {
      setVisible(onScreen);
      setScrollDirection(scrollFunction);
    }, [onScreen, scrollFunction]);
    return (
      <div
        ref={divRef}
        className="row mb-0 mb-md-5 min-vh-50 seccion"
        style={{
          order: `${interior?.asientos?.orden ? interior?.asientos?.orden : 0
            }`,
        }}
      >
        <Animated
          animationIn={
            scrollDirection == "down" && !isMobile ? "slideInUp" : ""
          }
          animationInDuration={1000}
          isVisible={!isMobile ? visible : true}
          className={isMobile ? "mt-4" : "row align-items-center"}
        >
          <div
            className={`col-12 col-lg-5 offset-lg-0 pr-lg-5 ${
              isMobile ? "my-0" : "py-md-5 my-0 pt-xs-5 mt-xs-5"
            }`}
          >
            <div className={isMobile ? "col-12 px-0 " : " d-block mt-5 "}>
              <label
                className={`segundo-nivel col-12 ${
                  isMobile ? "px-4" : "ml-5 pl-5 mt-5 pt-5 "
                }`}
                dangerouslySetInnerHTML={{
                  __html: interior?.asientos?.titulo ?? ''
                }}
              >

              </label>
            </div>
            <p
              className={
                isMobile
                  ? "texto col-12 px-4"
                  : "texto d-block mb-0 ml-5 pl-5 mt-4"
              }
              dangerouslySetInnerHTML={{ __html: interior?.asientos?.texto ?? '' }}
            />
          </div>
          <div
            className={
              isMobile
                ? "px-4"
                : "col-lg-7 col-12 col-md-12  offset-lg-0   col-sm-12 px-0 mb-5 mt-5 pt-5"
            }
          >
            <img
              src={interior?.asientos?.imagen?.url ?? ''}
              alt="interior asientos"
              className={isMobile ? "w-100 h-100 px-3" : "w-100 h-100 pt-5 mt-5"}
            />
          </div>
        </Animated>
      </div>
    );
  };
  const Reloj = () => {
    const [visible, setVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);

    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef);
    const scrollFunction = useScrollDirection();

    useEffect(() => {
      setVisible(onScreen);
      setScrollDirection(scrollFunction);
    }, [onScreen, scrollFunction]);
    return (
      <div
        ref={divRef}
        className="mb-5 led pt-3"
        style={{
          order: `${interior?.reloj?.orden ? interior?.reloj?.orden : 0
            }`,
        }}
      >
        <div className={isMobile ? "col-12 px-0 mb-4" : "col-12 mt-5 "}>
          <div className="row align-items-center ">
            <div className="row col-12 align-items-center">
              <Animated
                animationIn={!isMobile ? "slideInLeft" : ""}
                animationInDuration={1000}
                isVisible={!isMobile ? visible : true}
                className="row col-6 align-items-center"
              >
                <span className="line-faros-left pr-5" />
              </Animated>
              <Animated
                animationIn={!isMobile ? "slideInRight" : ""}
                animationInDuration={1000}
                isVisible={!isMobile ? visible : true}
                className="row col-6 align-items-center"
              >
                <label className="segundo-nivel mb-0 pl-5 "
                  dangerouslySetInnerHTML={{
                    __html: interior?.reloj?.titulo ?? ''
                  }}
                >

                </label>
              </Animated>
            </div>
          </div>
        </div>

        <div className={isMobile ? "row col-12 px-0 mx-0" : "row col-12"}>
          <Animated
            animationIn={!isMobile ? "slideInLeft" : ""}
            animationInDuration={1000}
            isVisible={!isMobile ? visible : true}
            className="row col-12"
          >
            <div className={isMobile ? "col-12 px-4" : "col-12 m-reloj"}>
              <p className="texto d-block pl-0 pl-lg-3 ml-0 mt-sm-4 ml-sm-3 mb-sm-4"
                dangerouslySetInnerHTML={{
                  __html: interior?.reloj?.subtitulo ?? ''
                }}
              >
              </p>
            </div>
          </Animated>
          <Animated
            animationIn={
              scrollDirection == "down" && !isMobile ? "slideInUp" : ""
            }
            animationInDuration={1000}
            isVisible={!isMobile ? visible : true}
            className={isMobile ? "row col-12 px-0 mx-0" : "row col-12"}
          >
            <div className="col-12 px-0">
              <img src={interior?.reloj?.imagen?.url ?? ''} alt="interior reloj" className={"w-100 h-100"} />
            </div>
            <div className={isMobile ? "col-12 px-4 bg-reloj" : "inside-over-reloj"}>
              <label className="d-block acentos-primer-nivel mt-5 ml-lg-5 mx-0 mb-5"
                dangerouslySetInnerHTML={{
                  __html: interior?.reloj?.texto ?? ''
                }}
              >

              </label>
            </div>
          </Animated>
        </div>
      </div>
    );
  };
  const Bolsillo = () => {
    const [visible, setVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);

    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef, 0.25);
    const scrollFunction = useScrollDirection();

    useEffect(() => {
      setVisible(onScreen);
      setScrollDirection(scrollFunction);
    }, [onScreen, scrollFunction]);
    return (
      <div
        ref={divRef}
        className={`row my-5 min-vh-50 seccion align-items-center ${isMobile ? "flex-column-reverse" : ""
          }`}
        style={{
          order: `${interior?.bolsillo?.orden ? interior?.bolsillo?.orden : 0
            }`,
        }}
      >
        <Animated
          animationIn="slideInLeft"
          animationOut="slideOutLeft"
          animationInDuration={1000}
          isVisible={!isMobile ? visible : true}
          className={isMobile ? "row col-12 mx-0 px-0" : "row col-7 mx-0 px-0"}
        >
          <div
            className={`tec-h col-12 mx-0`}
            style={{
              backgroundImage: `url("${interior?.bolsillo?.imagen?.url ?? ''}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Animated>
        <Animated
          animationIn="slideInRight"
          animationOut="slideOutRight"
          animationInDuration={1000}
          isVisible={!isMobile ? visible : true}
          className={isMobile ? "row col-12 mx-0 px-3" : "row col-5 mx-0 px-3"}
        >
          <div className={`col-12 ${isMobile ? "text-left" : "text-center"}`}>
            <label className={`segundo-nivel col-12 ${isMobile ? "ml-3" : ""}`}
              dangerouslySetInnerHTML={{
                __html: interior?.bolsillo?.titulo ?? ''
              }}
            >

            </label>
            <p
              className={
                isMobile
                  ? "texto col-12 px-4"
                  : "texto d-block mb-0 ml-5 pl-5 mt-4"
              }
              dangerouslySetInnerHTML={{ __html: interior?.bolsillo?.texto ?? '' }}
            />
          </div>
        </Animated>
      </div>
    );
  };
  const Maletero = () => {
    const [visible, setVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);

    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef, 0.25);
    const scrollFunction = useScrollDirection();

    useEffect(() => {
      setVisible(onScreen);
      setScrollDirection(scrollFunction);
    }, [onScreen, scrollFunction]);
    return (
      <div
        ref={divRef}
        className={`row col-12 px-0 mx-0 min-vh-50 seccion ${isMobile ? "mb-4" : "mt-5 pt-5"
          }`}
        style={{
          order: `${interior?.maletero?.orden ? interior?.maletero?.orden : 0
            }`,
        }}
      >
        <div className="row w-100 col-12 align-items-center mt-5 mx-0 px-0">
          <Animated
            animationIn={!isMobile ? "slideInLeft" : ""}
            animationInDuration={1000}
            isVisible={!isMobile ? visible : true}
            className="row col-6 mx-0 px-0 align-items-center"
          >
            <label className="segundo-nivel mb-0 ml-md-5 ml-4"
              dangerouslySetInnerHTML={{
                __html: interior?.maletero?.titulo ?? ''
              }}
            >

            </label>
          </Animated>
          <Animated
            animationIn={!isMobile ? "slideInRight" : ""}
            animationInDuration={1000}
            isVisible={!isMobile ? visible : true}
            className="row col-6 mx-0 pr-0 align-items-center"
          >
            <span className=" line-faros mx-0" />
          </Animated>
        </div>
        <Animated
          animationIn={
            scrollDirection == "down" && !isMobile ? "slideInUp" : ""
          }
          animationInDuration={1000}
          isVisible={!isMobile ? visible : true}
        >
          <div className="row col-12 align-items-center">
            <p className="col-12 col-md-6 texto mx-4 mr-3 ml-md-5 mr-lg-5 mt-4 px-0" dangerouslySetInnerHTML={{ __html: interior?.maletero?.texto ?? '' }} />
          </div>
        </Animated>
        <Animated
          animationIn={!isMobile ? "slideInUp" : ""}
          animationInDuration={1000}
          isVisible={!isMobile ? visible : true}
          className={`row col-12 mx-0 px-0`}
        >
          <div
            className={`row col-12 my-5 mx-0 px-0 text-center tec-h`}
            style={{
              backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 36.92%), linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 31.19%),url("${interior?.maletero?.imagen?.url ?? ''}")`,
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          />
        </Animated>
      </div>
    );
  };

  const Aire = () => {
    const [visible, setVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);

    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef, 0.25);
    const scrollFunction = useScrollDirection();

    useEffect(() => {
      setVisible(onScreen);
      setScrollDirection(scrollFunction);
    }, [onScreen, scrollFunction]);
    return (
      <div
        ref={divRef}
        className={`col-12 mx-0 px-0 min-vh-50 seccion ${isMobile ? "mb-4" : "mt-5 pt-5"
          }`}
        style={{
          order: `${interior?.aire?.orden ? interior?.aire?.orden : 0
            }`,
        }}
      >
        <div className="row col-12 mx-0 px-0 align-items-center mt-5 ">
          <div className="row col-12 mx-0 px-0 align-items-center">
            <Animated
              animationIn={!isMobile ? "slideInLeft" : ""}
              animationInDuration={1000}
              isVisible={!isMobile ? visible : true}
              className="row col-7 col-sm-6 mx-0 pr-0 pl-4 pl-md-5 pl-lg-0 align-items-center"
            >
              <label

                className={`segundo-nivel ${isMobile ? "" : "mb-0 ml-md-5 mr-3"
                  }`}
                dangerouslySetInnerHTML={{ __html: interior?.aire?.titulo ?? '' }}
              />
            </Animated>
            <Animated
              animationIn={!isMobile ? "slideInRight" : ""}
              animationInDuration={1000}
              isVisible={!isMobile ? visible : true}
              className="row col-5 col-sm-6 mx-0 pr-0 align-items-center"
            >
              <span className="line-faros" />
            </Animated>
          </div>
        </div>
        <Animated
          animationIn={!isMobile ? "slideInUp" : ""}
          animationInDuration={1000}
          isVisible={!isMobile ? visible : true}
        >
          <div
            className={`container col-12 col-lg-8 my-5 px-0 text-center ${interior?.aire?.texto && interior?.aire?.texto != "" ? "h-410" : "tec-h"
              }`}
            style={{
              backgroundImage: `url("${interior?.aire?.imagen?.url ?? ''}")`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Animated>
      </div>
    );
  };

  const Reposabrazos = () => {
    const [visible, setVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);

    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef, 0.25);
    const scrollFunction = useScrollDirection();

    useEffect(() => {
      setVisible(onScreen);
      setScrollDirection(scrollFunction);
    }, [onScreen, scrollFunction]);
    return (
      <div
        ref={divRef}
        style={{
          order: `${interior?.reposabrazos?.orden
            ? interior?.reposabrazos?.orden
            : 0
            }`,
        }}
      >
        <Animated
          animationIn={
            scrollDirection == "down" && !isMobile ? "fadeInDown" : ""
          }
          animationInDuration={1000}
          isVisible={!isMobile ? visible : true}
        >
          <div className="repo-front mt-5">
            <div className="row mx-0">
              <div
                className={
                  isMobile
                    ? "mt-4 col-11 mb-4 px-0"
                    : "col-12 col-lg-5 offset-lg-0 py-md-5 pr-lg-5 my-0 pt-5 mt-5"
                }
              >
                <Animated
                  animationIn={
                    scrollDirection == "down" && !isMobile ? "fadeInLeft" : ""
                  }
                  animationInDuration={1000}
                  isVisible={!isMobile ? visible : true}
                >
                  <div
                    className={isMobile ? "col-12 px-4" : "col-12  d-block mt-5 "}
                  >
                    <label className="segundo-nivel white-t"
                      dangerouslySetInnerHTML={{
                        __html: interior?.reposabrazos?.titulo ?? ''
                      }}
                    >

                    </label>
                  </div>
                  <p className="texto white-t d-block mb-0 ml-3 mx-4"
                    dangerouslySetInnerHTML={{
                      __html: interior?.reposabrazos?.subtitulo ?? ''
                    }}
                  >

                  </p>
                </Animated>
              </div>

              <div
                className={
                  "col-lg-7 col-12 col-md-12  offset-lg-0   col-sm-12 px-0"
                }
              >
                <Animated
                  animationIn={
                    scrollDirection == "down" && !isMobile ? "fadeInRight" : ""
                  }
                  animationInDuration={1000}
                  isVisible={!isMobile ? visible : true}
                >
                  <img
                    src={interior?.reposabrazos?.imagen?.url ?? ''}
                    alt="interior repozabrazos"
                    className="h-100 w-100"
                  />
                </Animated>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    );
  };

  const Confort = () => {
    const [visible, setVisible] = useState(false);

    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef);

    useEffect(() => {
      setVisible(onScreen);
    }, [onScreen]);
    const imagenes = interior?.confort?.carousel?.map((item, index) => {
      return (
        <Animated
          animationIn="slideInUp"
          animationInDuration={1000}
          key={`imagen-${index}`}
          isVisible={!isMobile ? visible : true}
          className="row col-4 px-2 mx-0"
        >
          <div
            className="col-12 tec-h"
            style={{
              backgroundImage: `url("${item?.url}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </Animated>
      );
    });
    return (
      <div
        ref={divRef}
        className="mb-5 pt-3 min-vh-50 seccion"
        style={{
          order: `${interior.confort.orden != undefined ? interior.confort.orden : 0
            }`,
        }}
      >
        <div
          className={
            isMobile
              ? "row col-12 px-0 mx-0 mb-4 align-items-center"
              : "row col-12 mx-0 pr-0 mt-5 "
          }
        >
          <div className="row col-12 px-0 mx-0 align-items-center">
            <Animated
              animationIn={!isMobile ? "slideInLeft" : ""}
              animationInDuration={1000}
              isVisible={!isMobile ? visible : true}
              className="row col-6 mx-0 align-items-center"
            >
              <label className="segundo-nivel mb-0  pl-2 ml-1 ml-sm-0 pl-sm-4 pl-md-5 "
              dangerouslySetInnerHTML={{
              __html: interior?.confort?.titulo  ?? ''
                }}
              >
                
              </label>
            </Animated>
            <Animated
              animationIn={!isMobile ? "slideInRight" : ""}
              animationInDuration={1000}
              isVisible={!isMobile ? visible : true}
              className="row col-6 px-0 mx-0 align-items-center"
            >
              <span className="line-faros pl-5" />
            </Animated>
          </div>
        </div>

        <div className="row col-12 px-0 py-5 mx-0">{imagenes}</div>
      </div>
    );
  };

  return (
    <div className="mobiliario">
      <Inicio />
      <Instrumentos />
      <Lcd />
      <Asientos />
      {interior.reloj && <Reloj />}
      {interior.bolsillo && <Bolsillo />}
      <Maletero />
      <Aire />
      <Reposabrazos />
      {interior.confort && <Confort />}
    </div>
  );
}

export default Inside;
