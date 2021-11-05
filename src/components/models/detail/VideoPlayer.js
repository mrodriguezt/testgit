import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import useOnScreen from "../../../hooks/useOnScreen";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const MediaPlayer = ({ data }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const divRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoOnScreen = useOnScreen(containerRef, 0.2);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    gsap.set(divRef.current, { yPercent: 100 });
    const t = gsap.to(divRef.current, {
      autoAlpha: 1,
      yPercent: 0,
      scrollTrigger: {
        id: "videoScroll",
        trigger: containerRef.current,
        start: "top top",
        pin: true,
        end: "+=100%",
        scrub: 1,
        refreshPriority: 1,
        snap: 1,
        invalidateOnRefresh: true,
      },
    });
    return () => {
      t.kill();
      ScrollTrigger.getAll().forEach((e) => e.kill());
    };
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    isPlaying ? video.pause() : video.play();
    setIsPlaying(!isPlaying);
  };
  return (
    <div ref={containerRef} className="videoContainer">
      <section className={`vh-full d-flex overflow-hidden align-items-start `}>
        {data.video && (
          <video
            ref={videoRef}
            src={`${data.video.url}`}
            className="lazy"
            loop
            autoPlay
            muted
            playsInline
            onClick={handlePlay}
          ></video>
        )}
      </section>
      <section
        ref={divRef}
        className={`vh-full overflow-hidden d-flex align-items-center bg-blur`}
      >
        <div className=" col-lg-6 col-sm-8 col-10 text-center m-auto">
          <h1 className="segundo-nivel white-t mb-3">
            {data.titulo_personalidad}
          </h1>
          <div
            className="texto white-t"
            dangerouslySetInnerHTML={{ __html: data.descripcion_personalidad }}
          />
        </div>
      </section>
    </div>
  );
};

export default MediaPlayer;
