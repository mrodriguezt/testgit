import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../../../hooks/useOnScreen";
import { Animated } from "react-animated-css";
import Carousel from "react-multi-carousel";

function Performance({ performance, isMobile }) {
  const Inicio = () => {
    const [visible, setVisible] = useState(true);
    const divRef = useRef();
    const onScreen = useOnScreen(divRef);

    useEffect(() => {
      setVisible(onScreen);
    }, [onScreen]);
    return (
      <div ref={divRef} className="row col-12 px-0 mx-0 seccion ">
        <div className={`col-lg-6 col-12 div-inicio ${isMobile ? "px-4" : ""}`}>
          <Animated
            animationIn="fadeInLeft"
            animationInDelay={200}
            animationInDuration={1000}
            isVisible={visible || isMobile}
          >
            <h2 className="primer-nivel" dangerouslySetInnerHTML={{
              __html: performance?.inicio?.titulo ?? ''
            }}></h2>
          </Animated>
          <Animated
            animationIn="fadeInUp"
            animationInDelay={200}
            animationInDuration={1000}
            isVisible={visible || isMobile}
          >
            <p
              className="texto mt-5 pr-3"
              dangerouslySetInnerHTML={{ __html: performance?.inicio?.texto ?? '' }}
            />
          </Animated>
        </div>
        <div
          className={`img-inicio ${!isMobile ? "h-100" : ""}`}
          style={{ backgroundColor: "#EDF2F5" }}
        >
          {isMobile && (
            <div
              className={`w-100 h-100 float-right`}
              style={{
                background: `linear-gradient(180deg, #FFFFFF 7.97%, rgba(255, 255, 255, 0) 100%), url('${performance?.inicio?.imagen?.url ?? ''}')`,
                backgroundSize: `cover`,
              }}
            ></div>
          )}
          {!isMobile && (
            <div
              className={`w-100 h-100 float-right col-9  ${visible ? "animate active" : ""
                }`}
              style={{
                background: `linear-gradient(90deg, #EDF2F5 13.35%, rgba(255, 255, 255, 0) 100%), url('${performance?.inicio?.imagen?.url ?? ''}')`,
                backgroundSize: `cover`,
              }}
            ></div>
          )}
        </div>
      </div>
    );
  };
  const Motor = () => {
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
        <div className="col-lg-6 col-12 px-0">
          <Animated
            animationIn="fadeInLeft"
            animationOut={"fadeOutLeft"}
            animationDuration={1000}
            isVisible={visible || isMobile}
          >
            <div className="pl-lg-5 pl-4 segundo-nivel  "
              dangerouslySetInnerHTML={{
                __html: performance?.motor?.titulo ?? ''
              }}
            >

            </div>
            <p
              className="texto mt-3 px-lg-5 px-4"
              dangerouslySetInnerHTML={{ __html: performance?.motor?.texto ?? '' }}
            />
          </Animated>
        </div>
        <div className="col-lg-6 col-12 m-auto">
          <Animated
            animationIn="fadeInRight"
            animationOut={"fadeOutRight"}
            animationDuration={1000}
            isVisible={visible || isMobile}
            className={` overflow-hidden ${!isMobile ? "img-rectangle" : "col-10 col-sm-8 m-auto"
              }`}
          >
            <img
              src={`${performance?.motor?.imagen?.url ?? ''}`}
              className="motor"
              alt="motor"
            ></img>
            {!isMobile && <div className="rectangle"></div>}
          </Animated>
        </div>
      </div>
    );
  };
  const AllGrip = () => {
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
        <div className="row col-12 mx-0 px-0 justify-content-between align-items-center mt-5">
          <Animated
            animationIn="fadeInLeft"
            animationInDuration={1000}
            className="w-40"
            isVisible={visible || isMobile}
          >
            <div className="pl-lg-5 ml-lg-5 segundo-nivel px-4" dangerouslySetInnerHTML={{
              __html: performance?.allgrip?.titulo ?? ''
            }}/> 
          </Animated>
        </div>
        <div className="row col-12 flex-column-reverse flex-lg-column px-0 mx-0 pt-5">
          <div
            className="col-12 row px-0 mx-0 overflow-hidden"
            order={isMobile ? 1 : 0}
          >
            <div className="col-8 px-0 mx-0">
              <img
                src={`${performance?.allgrip?.imagen?.url ?? ''}`}
                className="w-100 float-right"
                alt="allgrip"
              ></img>
            </div>
            <img
              src={`/images/modelos/allgrip.png`}
              className="w-50 allgrip"
              alt="logo allgrip"
            ></img>
          </div>
          <div className="col-12 row mx-0 px-0" order={!isMobile ? 1 : 0}>
            <p
              className={`texto col-lg-8 col-12 my-lg-5 px-6  ${isMobile ? "px-4" : ""
                }`}
              dangerouslySetInnerHTML={{ __html: performance?.allgrip?.texto ?? '' }}
            />
            {!isMobile && (
              <div
                className="col-4 subtitulo-2 d-flex align-items-center text-center justify-content-center py-5 px-4 blue-bg"
                dangerouslySetInnerHTML={{
                  __html: performance?.allgrip?.subtitulo ?? ''
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  };
  const Suspension = () => {
    const [visible, setVisible] = useState(false);
    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef);

    useEffect(() => {
      setVisible(onScreen);
    }, [onScreen]);
    return (
      <div ref={divRef} className="row col-12 seccion mx-0 align-items-between py-3 py-lg-5 px-lg-0 px-4">
        <div className="row col-12 align-self-center px-0 mx-0">
          <div className={isMobile ? "col-12 px-0" : "pl-5 col-7"}>
            <Animated
              animationIn="fadeInLeft"
              animationInDuration={1000}
              isVisible={visible || isMobile}
            >
              <div className=" segundo-nivel " dangerouslySetInnerHTML={{
                __html: performance?.suspension?.titulo ?? ''
              }}>

              </div>
            </Animated>
          </div>
          <div className="col-5 align-self-center">
            {!isMobile && (
              <Animated
                animationIn="fadeInRight"
                animationInDuration={1000}
                className={isMobile ? "w-100" : "w-100"}
                isVisible={visible || isMobile}
              >
                <div className=" line" />
              </Animated>
            )}
          </div>
        </div> <div className="row mx-0 col-12 px-0 align-self-center pt-5">
          <div className={isMobile ? "col-12 px-0" : "col-7"}>
            <Animated
              animationIn="fadeInLeft"
              animationOut={"fadeOutUp"}
              animationDuration={1000}
              isVisible={visible || isMobile}
              className={` overflow-hidden ${!isMobile ? "" : "col-10 col-sm-8 m-auto"
                }`}
            >
              <img
                src={`${performance?.suspension?.imagen?.url ?? ''}`}
                className=" w-100"
              ></img>
            </Animated>
          </div>
          <div className={`px-0 ${isMobile ? "col-12 row mx-0" : "col-4 align-self-center px-md-5"}`}>
            <Animated
              animationIn="fadeInRight"
              animationOut={"fadeOutUp"}
              animationDuration={1000}
              isVisible={visible || isMobile}
            >
              <p
                className="texto mt-3  px-0 mx-0 "
                dangerouslySetInnerHTML={{
                  __html: performance?.suspension?.texto ?? ''
                }}
              />
            </Animated>
          </div>
        </div>

      </div>
    );
  };
  const Aerodinamica = () => {
    const [visible, setVisible] = useState(false);
    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef);

    useEffect(() => {
      setVisible(onScreen);
    }, [onScreen]);
    return (
      <div ref={divRef} className="container-fluid py-3 py-lg-5 px-lg-0 px-4">
        <div className="row mx-0 col-12 px-0">
          <div className="col-7 px-0 align-self-center">
            {!isMobile && (
              <Animated
                animationIn="fadeInLeft"
                animationInDuration={1000}
                className={"w-100"}
                isVisible={visible || isMobile}
              >
                <div className=" line" />
              </Animated>
            )}
          </div>
          <div className={isMobile ? "col-12 px-0" : "px-5 col-4"}>
            <Animated
              animationIn="fadeInRight"
              animationInDuration={1000}
              isVisible={visible || isMobile}
            >
              <div className=" segundo-nivel " dangerouslySetInnerHTML={{
                __html: performance?.aerodinamica?.titulo ?? ''
              }}>

              </div>
            </Animated>
          </div>
          <div className="row mx-0 xol-12 px-0 pt-lg-5">
            <div className={isMobile ? "col-12 px-0" : "col-5 align-self-center"}>
              <Animated
                animationIn="fadeInLeft"
                animationOut={"fadeOutUp"}
                animationDuration={1000}
                isVisible={visible || isMobile}
              >
                <p
                  className="texto mt-3 px-lg-5 px-0 mx-0 mx-md-4 mx-xl-5"
                  dangerouslySetInnerHTML={{
                    __html: performance?.aerodinamica?.texto ?? ''
                  }}
                />
              </Animated>
            </div>
            <div className={isMobile ? "col-12 px-0" : "col-7"}>
              <Animated
                animationIn="fadeInRight"
                animationOut={"fadeOutUp"}
                animationDuration={1000}
                isVisible={visible || isMobile}
                className={` overflow-hidden ${!isMobile ? "" : "col-10 col-sm-8 m-auto"
                  }`}
              >
                <img
                  src={`${performance?.aerodinamica?.imagen?.url ?? ''}`}
                  className=" w-100"
                  alt="aerodinamica"
                ></img>
              </Animated>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Esp = () => {
    const [visible, setVisible] = useState(false);
    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef);
    const list = ["130.png", "131.png", "132.png", "133.png", "134.png"];
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 40,
      },
    };
    useEffect(() => {
      setVisible(onScreen);
    }, [onScreen]);
    const Slider = () => {
      const items = list.map((item, index) => (
        <img
          key={`imgP-${index}`}
          className="w-100"
          src={`/images/modelos/${item}`}
          alt={`allgrip-${index}`}
        ></img>
      ));
      return (
        <div className="slider-performance col-2 px-md-3 px-2 position-absolute">
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            dotListClassName=""
            draggable
            focusOnSelect={false}
            infinite
            itemClassName=""
            keyBoardControl
            minimumTouchDrag={0}
            renderDotsOutside={false}
            showDots={false}
            slidesToSlide={1}
            swipeable
          >
            {items}
          </Carousel>
        </div>
      );
    };
    return (
      <div
        ref={divRef}
        className={`row col-12 px-0 mx-0 mt-5 align-items-center ${isMobile ? "" : "seccion"
          }`}
      >
        <Animated
          animationIn="fadeInUp"
          animationInDuration={1000}
          isVisible={visible || isMobile}
          className="w-100"
        >
          <div className="row col-12 px-0 mx-0">
            <img
              src="/images/modelos/performance-4.png"
              alt="fondo tablero"
              className="w-100"
            ></img>
            <Slider />
          </div>
        </Animated>
      </div>
    );
  };

  return (
    <div className="performance">
      <Inicio />
      <Motor />
      {performance.suspension && <Suspension />}
      {performance.aerodinamica && <Aerodinamica />}
      {performance.allgrip && <AllGrip />}
      {performance.allgrip && <Esp />}
    </div>
  );
}

export default Performance;
