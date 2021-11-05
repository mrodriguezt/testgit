import React, { useState, useEffect, useRef, useCallback } from "react";
import Itembanner from "./Itembanner.js";
import { useMediaQuery } from "react-responsive";
const useIntervalWithStop = (callback, delay) => {
  const savedCallback = useRef();
  const intervalId = useRef(null);
  const [currentDelay, setDelay] = useState(delay);

  const clear = useCallback(() => clearInterval(intervalId.current), []);

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (intervalId.current) clear();

    if (currentDelay !== null) {
      intervalId.current = setInterval(tick, currentDelay);
    }

    return clear;
  }, [currentDelay, clear]);

  return [!!currentDelay];
};

const RenderDot = ({ active, index }) => {
  var content;
  content = (
    <>
      <svg height="4" width="200" className="line-dot">
        <line
          x1="0"
          y1="0"
          x2="200"
          y2="0"
          stroke="#E0E0E0"
          strokeWidth="10"
          fill="#E0E0E0"
        />
        <line
          x1="0"
          y1="0"
          x2="200"
          y2="0"
          stroke="#E0E0E0"
          strokeWidth="10"
          fill="#E0E0E0"
          className={active ? "line-active" : ""}
        />
      </svg>
    </>
  );

  return (
    <div className={`d-none d-md-flex mr-3 ${active ? "active" : ""}`}>
      {content}
    </div>
  );
};

const Banner = ({ slideInterval }) => {
  const [width, setWidth] = useState(0);
  const transitionRef = useRef();
  const resizeRef = useRef();
  const containerRef = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 550 });
  const slides = [
    {
      id: 1,
      image: "019.jpg",
      titulo: "Nuevo SUZUKI Vitara AllGrip",
      boton: "Descúbrelo",
      href: "/modelos/vitara",
      description: "El verdadero SUV de nacimiento",
    },
    {
      id: 2,
      image: "302.jpg",
      titulo: "SX4 S-CROSS",
      boton: "Descúbrelo",
      href: "/modelos/scross",
      description: "Un aventurero listo para cualquier viaje",
    },
    {
      id: 3,
      image: "taller.jpg",
      titulo: "Bienvenido a casa.",
      boton: "Agenda tu cita taller",
      cta: true,
      href: "/encuentranos#talleres",
      description: "Tu SUZUKI en manos expertas",
    },
    {
      id: 4,
      image: "mapa.jpg",
      titulo: "Llegamos con casa propia",
      boton: "Ver Mapa",
      href: "/encuentranos",
      description: "Nuevos SZK Stores, ¿Ya los conoces?",
    },
  ];
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: width,
    transition: 0.7,
    _slides: [lastSlide, firstSlide, secondSlide],
  });
  const { activeSlide, translate, _slides, transition } = state;

  const handleResize = () => {
    setState({ ...state, translate: width, transition: 0 });
  };

  const smoothTransition = () => {
    let _slidesClone = [];

    if (activeSlide === slides.length - 1) {
      _slidesClone = [slides[slides.length - 2], lastSlide, firstSlide];
    } else if (activeSlide === 0) {
      _slidesClone = [lastSlide, firstSlide, secondSlide];
    } else _slidesClone = slides.slice(activeSlide - 1, activeSlide + 2);

    setState({
      ...state,
      _slides: _slidesClone,
      transition: 0,
      translate: width,
    });
  };

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + width,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });

  if (slideInterval) {
    useIntervalWithStop(() => {
      nextSlide();
    }, slideInterval * 1000);
  }

  useEffect(() => {
    setWidth(containerRef.current.clientWidth);

    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    setState({ ...state, translate: containerRef.current.clientWidth });
    const smooth = (e) => {
      if (e.target.className.includes("SliderContent")) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = window.addEventListener("transitionend", smooth);
    const transitionCEnd = window.addEventListener("webkitTransitionEnd", smooth);
    const onResize = window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("webkitTransitionEnd", transitionCEnd);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.7 });
  }, [transition]);

  return (
    <div
      ref={containerRef}
      className="slider relative w-100 overflow-hidden p-0 m-0"
    >
      <div
        className="slider-wrapper SliderContent"
        style={{
          transition: `transform ease ${transition}s`,
          transform: ` translateX(-${translate}px)`,
          width: `${width * _slides.length}px`,
          display: `flex`,
        }}
      >
        {_slides.map((item, index) => (
          <div key={index} className="slide" style={{ width: `${width}px` }}>
            <Itembanner item={item} isMobile={isMobile} />
          </div>
        ))}
      </div>

      <div className={`progress-container d-md-flex d-none`}>
        {slides.map((item, index) => (
          <RenderDot key={`line-${index}`} active={activeSlide === index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
