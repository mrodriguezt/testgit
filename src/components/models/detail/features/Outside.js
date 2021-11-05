import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../../../hooks/useOnScreen";
import useScrollDirection from "../../../../hooks/useScrollDirection";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import { Animated } from "react-animated-css";

function Outside({ isMobile, exterior, modelo }) {
  const Vehiculo = () => {
    const [visible, setVisible] = useState(false);

    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef, 0.25);

    useEffect(() => {
      setVisible(onScreen);
    }, [onScreen]);

    return (
      <div ref={divRef} className="seccion">
        <Animated
          animationIn="fadeInUp"
          className="bg-light"
          isVisible={visible}
        >
          <div
            className={`detail-outside pt-5 row col-12 justify-content-end ${exterior?.vehiculo?.imagen != ""
              ? "align-items-center"
              : "align-items-end"
              }`}
            style={{
              backgroundImage: `linear-gradient(rgb(255, 255, 255) 0%,transparent 30%, transparent 70%, rgb(255, 255, 255) 100%), url(${exterior?.vehiculo?.background?.url})`,
            }}
          >
            <div
              className={`row col-12 pl-md-5 px-0 pr-0 mx-0 pt-5 ${exterior?.vehiculo?.imagen != ""
                ? "align-items-center"
                : "align-items-start"
                }`}
            >
              <div
                className={
                  isMobile ? "col-12 px-0 " : "col-5 pr-0 mb-5 d-block "
                }
              >
                <label
                  className="primer-nivel"
                  dangerouslySetInnerHTML={{
                    __html: exterior?.vehiculo?.titulo ?? ''
                  }}
                />
                {exterior?.vehiculo?.subtitulo != "" && (
                  <p
                    className="segundo-nivel d-block"
                    dangerouslySetInnerHTML={{
                      __html: exterior?.vehiculo?.subtitulo ?? ''
                    }}
                  />
                )}
              </div>
              <div className={`h-100 h-410 ${isMobile ? "col-12 " : "col-7 "}`}>
                {exterior?.vehiculo?.imagen != "" && (
                  <Animated
                    animationIn="fadeInDown"
                    animationInDuration={1000}
                    isVisible={visible}
                    className="h-100"
                  >
                    <img src={exterior?.vehiculo?.imagen?.url} className="img-fluid" />
                  </Animated>
                )}
              </div>
            </div>
          </div>

          <div className="container px-md-5 row col-12 justify-content-center pb-5 mb-5 mx-0 bg-white">
            <div className="col-12 d-flex justify-content-center px-0 mx-0">
              <div className="row col-12 align-items-center px-0 mx-0 ">
                <div className="col-12 mt-0 pt-0 mb-0">
                  <p
                    className="texto mr-lg-5 ml-lg-5 pr-lg-5 pl-lg-5 mt-2 pt-5 mb-0 d-block"
                    dangerouslySetInnerHTML={{
                      __html: exterior?.vehiculo?.texto ?? ''
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    );
  };

  const Faros = () => {
    const [visible, setVisible] = useState(false);

    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef, 0.25);

    useEffect(() => {
      setVisible(onScreen);
    }, [onScreen]);

    return (
      <div className="row col-12 px-0 mx-0 seccion">
        <div className={`col-12 px-0 ${isMobile ? "mb-4" : ""}`}>
          {!isMobile && (
            <div className="row align-items-center w-100 mx-0 px-0">
              <div className="row col-12 align-items-center w-100 mx-0 px-0">
                <Animated
                  animationIn="slideInLeft"
                  animationInDelay={200}
                  animationInDuration={1000}
                  isVisible={visible}
                  className="row col-6 align-items-center mx-0"
                >
                  <label className="segundo-nivel mb-0 pl-md-3 mr-3" dangerouslySetInnerHTML={{
                    __html: exterior?.faros?.titulo ?? '',
                  }}>

                  </label>
                </Animated>
                <Animated
                  animationIn="slideInRight"
                  animationInDelay={200}
                  animationInDuration={1000}
                  isVisible={visible}
                  className="row col-6 align-items-center mx-0 px-0"
                >
                  <span className="line-faros w-100 ml-5 mr-0" />
                </Animated>
              </div>
            </div>
          )}
          <Animated
            animationIn="slideInRight"
            animationInDelay={200}
            animationInDuration={1000}
            className="row col-12 align-items-center"
            isVisible={visible}
          >
            <div className="row col-12 align-items-center">
              <p className="texto mr-lg-5 ml-lg-4 mt-4 pl-lg-2 "
                dangerouslySetInnerHTML={{
                  __html: exterior?.faros?.subtitulo ?? '',
                }}>

              </p>
            </div>
          </Animated>
        </div>
        <div ref={divRef} className="col-12 px-0 mt-2">
          <Animated
            animationIn="slideInUp"
            animationInDelay={200}
            animationInDuration={1000}
            isVisible={visible}
          >
            <div className="row">
              <div
                className={`col-12 ${isMobile ? "p-0" : "pt-2"} ${exterior?.faros?.texto != "" ? "ml-5 pl-5" : ""
                  }`}
              >
                <img
                  src={exterior?.faros?.imagen?.url}
                  className={`w-100 ${exterior?.faros?.texto != "" ? "ml-5 pl-5" : ""
                    }`}
                />
              </div>
              {exterior?.faros?.texto && exterior?.faros?.texto != "" && (
                <div
                  className={
                    isMobile
                      ? "col-12 bg-black white"
                      : "outside-over px-4 margin-faros d-flex justify-content-center align-items-center"
                  }
                >
                  <label className="d-block segundo-nivel white my-3 mx-4" dangerouslySetInnerHTML={{
                    __html: exterior?.faros?.texto ?? '',
                  }}>

                  </label>
                </div>
              )}
            </div>
          </Animated>
        </div>
      </div>
    );
  };

  const Luces = () => {
    const [visible, setVisible] = useState(false);

    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef, 0.25);

    useEffect(() => {
      setVisible(onScreen);
    }, [onScreen]);

    return (
      <div ref={divRef} className="led row col-12 px-0 mx-0 seccion">
        <div className="pl-lg-5 px-0 pr-0 col-12 justify-content-center pb-5 ">
          <div className="row col-12 justify-content-end pl-md-5 px-0 pr-0 mx-0 my-5">
            <div className="row col-12  align-items-end pr-0 mx-0 pt-5">
              <div
                className={
                  isMobile ? "col-6 px-0 mt-2 pt-2 " : "col-6 d-block mt-5 pt-5"
                }
              >
                <label className="d-block segundo-nivel mt-5"
                  dangerouslySetInnerHTML={{ __html: exterior?.luces?.titulo ?? '' }}
                >

                </label>
                <p
                  className="texto d-block mt-3 mb-0 pr-5"
                  dangerouslySetInnerHTML={{ __html: exterior?.luces?.texto ?? '' }}
                />
              </div>
              <div className="side-over"></div>
              <div
                className={
                  visible ? "col-6 h-410 h-100 degraded" : "col-6 h-410 h-100"
                }
              >
                <img
                  src={exterior?.luces?.imagen?.url}
                  with="800px"
                  height="700px"
                  className="pt-5 mt-5"
                  alt="exterior luces"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Insignia = () => {
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
      <div className="row col-12 px-0 mx-0 seccion">
        <div className={isMobile ? "col-12 px-0 mb-4" : "col-12 mt-5"}>
          {!isMobile && (
            <div className="row col-12 mx-0 px-0 align-items-center">
              <Animated
                animationIn="slideInLeft"
                animationInDelay={200}
                animationInDuration={1000}
                isVisible={visible}
                className="row col-6 mx-0 px-0 align-items-center"
              >
                <label className="segundo-nivel mb-0 pl-md-5 mr-3" dangerouslySetInnerHTML={{
                  __html: exterior?.insignia?.titulo ?? ''
                }}>

                </label>
              </Animated>
              <Animated
                animationIn="slideInRight"
                animationInDelay={200}
                animationInDuration={1000}
                isVisible={visible}
                className="row col-6 mx-0 px-0 align-items-center"
              >
                <span className="line-faros ml-5 mr-0" />
              </Animated>
            </div>
          )}
        </div>
        <div ref={divRef}>
          <Animated
            animationIn={
              scrollDirection == "down" ? "slideInUp" : "slideInDown"
            }
            animationInDelay={100}
            animationInDuration={1000}
            isVisible={visible}
          >
            <div className="row mx-0">
              <div
                className={
                  "col-lg-7 col-12 col-md-12  offset-lg-0   col-sm-12 px-0"
                }
              >
                <img
                  src={exterior?.insignia?.imagen?.url}
                  className={"w-100 h-100 fill-object"}
                  alt="exterior insignia"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12  col-lg-5  offset-lg-0  py-lg-5 py-md-5 pr-lg-5 my-0 pt-5 mt-5">
                <p
                  className="texto d-block mt-5 mb-0 pr-5 pt-5"
                  dangerouslySetInnerHTML={{ __html: exterior?.insignia?.texto ?? '' }}
                />
              </div>
            </div>
          </Animated>
        </div>
      </div>
    );
  };

  const Ruedas = () => {
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
      <div className="row col-12 px-0 mx-0 seccion">
        <div
          ref={divRef}
          className={isMobile ? "col-12 px-0 mb-4" : "col-12 mt-5"}
        >
          {!isMobile && (
            <div className="row align-items-center ">
              <div className="row col-12 align-items-center">
                <Animated
                  animationIn="slideInLeft"
                  animationInDelay={200}
                  animationInDuration={1000}
                  isVisible={visible}
                  className="row col-6 px-0 mx-0 mt-2"
                >
                  <span className="line-faros-left mr-5" />
                </Animated>
                <Animated
                  animationIn="slideInRight"
                  animationInDelay={200}
                  animationInDuration={1000}
                  isVisible={visible}
                  className="row col-6 px-0 mx-0 mt-2"
                >
                  <label className="segundo-nivel pl-md-5 ml-5 " dangerouslySetInnerHTML={{
                    __html: exterior?.ruedas?.titulo ?? ''
                  }}>

                  </label>
                </Animated>
              </div>
            </div>
          )}
        </div>
        <Animated
          animationIn={scrollDirection == "down" ? "slideInUp" : "slideInDown"}
          animationInDelay={200}
          animationInDuration={1000}
          isVisible={visible}
          className="col-12 px-0 mt-2"
        >
          <div className="col-12 px-0 mt-2">
            <div className="row">
              <div
                className={
                  isMobile
                    ? "col-12 bg-black white"
                    : "outside-over-r margin-faros mr-5 d-flex align-items-center"
                }
              >
                <label className="row align-items-center subtitle-faros my-0">
                  <p
                    className="ml-5 my-0 segundo-nivel white"
                    dangerouslySetInnerHTML={{
                      __html: exterior?.ruedas?.subtitulo ?? ''
                    }}
                  />
                  <p
                    className="ml-5 my-0 primer-nivel white"
                    dangerouslySetInnerHTML={{ __html: exterior?.ruedas?.texto ?? '' }}
                  />
                </label>
              </div>
              <div className={isMobile ? "col-12 p-0" : "ml-5 pl-3 py-4"}>
                <img
                  src={exterior?.ruedas?.imagen?.url}
                  className=" img-fluid position-relative"
                  alt="exterior ruedas 1"
                />
              </div>
            </div>
          </div>
        </Animated>
      </div>
    );
  };

  const Aros = () => {
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
      <div className="row col-12 px-0 mx-0 seccion">
        <div ref={divRef} className="col-12 px-0 mt-2">
          <Animated
            animationIn={
              scrollDirection == "down" ? "slideInUp" : "slideInDown"
            }
            animationInDelay={200}
            animationInDuration={1000}
            isVisible={visible}
            className="col-12 px-0 mt-2"
          >
            <div className="row">
              <figure>
                <div
                  className={
                    isMobile
                      ? "col-12 bg-black white"
                      : "outside-over-l margin-faros d-flex align-items-center"
                  }
                >
                  <label className="row align-items-center subtitle-faros my-0">
                    <p
                      className="mr-5 my-0 segundo-nivel white"
                      dangerouslySetInnerHTML={{
                        __html: exterior?.aros?.subtitulo ?? ''
                      }}
                    />
                    <p className="pl-3 my-0 primer-nivel white" dangerouslySetInnerHTML={{
                      __html: exterior?.aros?.texto ?? ''
                    }}>

                    </p>
                  </label>
                </div>
                <div
                  className={
                    isMobile ? "col-12 p-0" : "ml-5 pl-5 mx-5 py-4 margin"
                  }
                >
                  <img
                    src={exterior?.aros?.imagen?.url}
                    className=" w-10 position-relative"
                    alt="exterior ruedas 2"
                  />
                </div>
              </figure>
            </div>
          </Animated>
        </div>
      </div>
    );
  };

  return (
    <>
      <Vehiculo />
      <Faros />
      <Luces />
      {exterior?.insignia && <Insignia />}
      <Ruedas />
      {exterior?.aros && <Aros />}
    </>
  );
}

export default Outside;
