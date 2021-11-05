import React, { useState, useEffect, useRef } from 'react'
import { Animated } from "react-animated-css"
import Image from 'next/image'
import useOnScreen from "../../../../hooks/useOnScreen"

function Home({ isMobile, conectivity }) {
  const [visible, setVisible] = useState(true);
  const divRef = useRef(null);
  const onScreen = useOnScreen(divRef, 0.6);
  useEffect(() => {
    setVisible(onScreen);
  }, [onScreen]);

  return (
    <div
      ref={divRef}
      className="connectivity versions my-lg-3 container-fluid space-top "
    >
      {!isMobile &&
        conectivity?.map((item, index) =>
          <div key={`item-${index}`} className="row p-top my-5"
            style={{
              order: `${item?.orden ? item?.orden : 0}`,
            }}
          >
            <div className="col-12 col-md-12 col-lg-6 col-xl-5 px-0 d-block pt-5 ">
              <div className="row space-div">
                <div className="col-9 px-0">
                  <Animated animationIn="fadeInLeft" animationInDuration={1300} isVisible={visible}>
                    <div className="primer-nivel" dangerouslySetInnerHTML={{ __html: item?.titulo ?? '' }}></div>
                  </Animated>
                </div>
                <Animated
                  animationIn="fadeInUp"
                  animationInDuration={1300}
                  isVisible={visible}
                >
                  <div className="col-12">
                    <div className="row">
                      <div className="col-9 px-0">
                        <div className="segundo-nivel" dangerouslySetInnerHTML={{ __html: item?.subtitulo ?? '' }}></div>
                      </div>
                      <div className="col-12 pl-0">
                        <div className="texto d-block mt-3 mb-0" dangerouslySetInnerHTML={{ __html: item?.texto ?? '' }}></div>
                      </div>
                    </div>
                  </div>
                </Animated>
              </div>
            </div>
            <div className=" col-12 col-md-12 col-lg-6 col-xl-7 px-0">
              <Animated
                animationOut="fadeOut"
                animationOutDuration={1300}
                isVisible={visible}
              >
                <div
                  className={visible ? "h-img degraded" : "w-100 h-img h-100"}
                >
                  <div
                    className="w-100 h-100"
                    style={{
                      background: `linear-gradient(
                      270deg,
                      rgba(255, 255, 255, 0) 27.52%,
                      #ffffff 96.01%
                    ), url('${item?.imagen?.url ?? ''}')`,
                      backgroundSize: `cover`,
                    }}
                  ></div>
                </div>
              </Animated>
            </div>
          </div>
        )
      }
      {
        isMobile &&
        conectivity.map((item, index) =>{
          <div key={`item-${index}`} className="row color-gris"
            style={{
              order: `${item?.orden ? item?.orden : 0}`,
            }}
          >
            <div className="col-12">
              <div className="primer-nivel p-top" dangerouslySetInnerHTML={{ __html: item?.titulo ?? '' }}></div>
            </div>
            <div className="col-12">
              <div className="segundo-nivel" dangerouslySetInnerHTML={{ __html: item?.subtitulo ?? '' }}></div>

            </div>
            <div className="col-12">
              <div className="texto d-block  mb-0" dangerouslySetInnerHTML={{ __html: item?.texto ?? '' }}></div>
            </div>
            <div className="col-12 px-0 pt-3">
              <img src={item?.imagen?.url ?? ''} className="img-fluid h-100  w-100 "></img>
            </div>
          </div>
        })}
    </div>
  );
}
function Features({ isMobile, conectivity }) {
  const [visible, setVisible] = useState(true);
  const divRef = useRef(null);
  const onScreen = useOnScreen(divRef, 0.4);

  useEffect(() => {
    setVisible(onScreen);
  }, [onScreen]);

  return (
    <div
      ref={divRef}
      className=" connectivity versions container px-md-5 mx-0 py-xl-3 col-12 justify-content-center"
    >
      {!isMobile && (
        <div className="row justify-content-center px-md-5 px-0 mx-0">
          {
            conectivity.map((item, i) =>
              <div key={`feature-${i}`} className="col-lg-4 col-6 px-1 pr-lg-3 "
                style={{
                  order: `${item?.orden ? item?.orden : 0}`,
                }}
              >
                <Animated animationIn={i == 0 && "fadeInLeft" || i == 1 && "fadeInUp" || i == 2 && "fadeInRight"} animationInDuration={1300} isVisible={visible}>
                  <div className="img-h w-100">
                    {
                      item?.imagen?.url && <Image src={item?.imagen?.url} layout="fill" objectFit="contain" className="img-fluid" />
                    }
                  </div>
                  <div className='col-12 px-0 my-2 d-block pt-4 pt-md-0 mr-2'>
                    <div className="d-block texto-titulo-negro" dangerouslySetInnerHTML={{ __html: item?.titulo ?? '' }}></div>
                    <div className=" texto d-block" dangerouslySetInnerHTML={{ __html: item?.texto ?? '' }}></div>
                  </div>
                </Animated>
              </div>
            )}
        </div>
      )}
      {isMobile &&
        conectivity.map((item, i) =>{

          <div key={`feature-${i}`} className={i == 0 || i == 2 ? "row pt-4 color-gris" : 'row pt-4 '}
            style={{
              order: `${item?.orden ? item?.orden : 0}`,
            }}
          >
            <div className="col-12 img-h w-100 ">
              {
                item?.imagen?.url && <Image src={item.imagen.url} layout="fill" objectFit="contain" className="img-fluid px-2" />
              }
            </div>
            <div className="col-12">
              <div className='col-12 px-0  pt-2 mr-2'>
                <div className="texto-titulo-negro" dangerouslySetInnerHTML={{ __html: item?.titulo ?? '' }}></div>
                <div className="texto pt-2 " dangerouslySetInnerHTML={{ __html: item?.texto ?? '' }}></div>
              </div>
            </div>
          </div>
        })}
    </div>
  );
}

function Connectivity({ isMobile, conectivity }) {

  const index = conectivity.filter(item => item.estilo == 'index');
  const cards = conectivity.filter(item => item.estilo == 'cards');

  return (
    <>
      {index && <Home isMobile={isMobile} conectivity={index}></Home>}
      {cards && <Features isMobile={isMobile} conectivity={cards}></Features>}

    </>
  );
}
export default Connectivity;
