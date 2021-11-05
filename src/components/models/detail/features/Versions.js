import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Animated } from "react-animated-css"
import useOnScreen from "../../../../hooks/useOnScreen"
import { useMediaQuery } from 'react-responsive';

function Page({ model, versions }) {
  let isMobile = model;
  const [visible, setVisible] = useState(true);
  const divRef = useRef(null);
  const onScreen = useOnScreen(divRef, 0.1);
  useEffect(() => {
    setVisible(onScreen);
  }, [onScreen]);
  return (
    <div ref={divRef} className="versions container-fuid">
      {!isMobile &&
        <div className="row col-12 align-items-center mt-5 px-0 mx-0 pt-5">
          <div className="col-12 pt-5 text-center font-weight-bold blue-t description-l">
            <label className="pt-3">Compara las características haciendo scroll en cada versión.</label>
          </div>
          <div className="col-6 text-center px-0 mt-3">
            <Animated animationIn="fadeInLeft" animationInDuration={1300} isVisible={visible}>
              <h2 className="segundo-nivel" dangerouslySetInnerHTML={{
                __html: versions[0]?.nombre ?? ''
              }}></h2>
              <hr className="line-left mt-2 " />
            </Animated>
            <div className="col-12  pr-5 px-0">
              <Animated animationIn="fadeInLeft" animationInDuration={1300} isVisible={visible}>
                <div className="img-design w-100">
                  <img src={versions[0].imagen.url} className="img-fluid" />
                </div>
              </Animated>
            </div>
          </div>
          <div className="col-6 text-center px-0  mt-3">
            <Animated animationIn="fadeInRight" animationInDuration={1300} isVisible={visible}>
              <div className="offset-2">
                <h2 className="segundo-nivel"
                  dangerouslySetInnerHTML={{
                    __html: versions[1]?.nombre ?? ''
                  }}
                ></h2>
                <hr className="line-right mt-2 " />
              </div>
            </Animated>
            <div className="col-12  pl-5 px-0">
              <Animated animationIn="fadeInRight" animationInDuration={1300} isVisible={visible}>
                <div className=" w-100 ">
                  <img src={versions[1]?.imagen?.url ?? ''} className="img-fluid" />
                </div>
              </Animated>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
const orderFeatures = (data) => {

  if (data) {
    const res = data.filter(item => item.Tipo == 'check');
    const res2 = data.filter(item => item.Tipo == 'plus');
    return res.concat(res2);
  }
  return []
}
function Features({ feature, versions }) {

  const version1 = orderFeatures(versions[0].caracteristicas_versiones);
  const version2 = orderFeatures(versions[1].caracteristicas_versiones);

  let isMobile = feature;
  const divRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const onScreen = useOnScreen(divRef, 0.3);

  useEffect(() => {
    setVisible(onScreen);
  }, [onScreen]);

  let aux = 15;
  function comparate(i) {
    if (i == 2 || i == 7) {
      return "col-1 offset-2  pt-3"
    }
    if (i == 5 || i == 9) {
      return "col-1 offset-2  pt-3"
    }
    if (i == aux) {
      aux = aux + 6;
      return "col-1 offset-2  pt-4"
    }
    return "col-1 offset-2 ";
  }
  let aux2 = 15;
  function comparate2(i) {
    if (i == 2 || i == 7) {
      return "col-7  texto pt-3 "
    }
    if (i == 5 || i == 9) {
      return "col-7  texto pt-3 "
    }
    if (i == aux2) {
      aux2 = aux2 + 6;
      return "col-7  texto pt-4 "
    }
    return "col-7  texto ";
  }
  return (

    <div ref={divRef}>
      {!isMobile &&
        <div className=" versions  global container-fluid h-c pb-5 ">
          <Animated animationIn="fadeInUp" animationInDuration={1300} isVisible={visible}>
            <div className="row a content">
              <div className="col-6 ">
                <div className="row">
                  {version1 &&
                    version1.map((item, i) =>
                      <div key={`version1-${i}`} className="row col-12">
                        <div className={comparate(i)}>
                          {item.Tipo && <img src={item.Tipo == 'check' ? '/images/modelos/check.png' : '/images/modelos/plus.png'} width={20} height={20} className="img-fluid" />}
                        </div>
                        <div className={comparate2(i)} >
                          <p dangerouslySetInnerHTML={{
                            __html: item.descripcion ?? ''
                          }} ></p>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
              <div className="col-6 pl-5">
                <div className="row pl-3">
                  {version2 &&
                    version2.map((item, i) =>
                      <div key={`version2-${i}`} className="row col-12">
                        <div className={comparate(i)}>
                          {item.Tipo && <img src={item.Tipo == 'check' ? '/images/modelos/check.png' : '/images/modelos/plus.png'} width={20} height={20} className="img-fluid" />}
                        </div>
                        <div className={comparate2(i)} >
                          <p dangerouslySetInnerHTML={{
                            __html: item.descripcion ?? ''
                          }}></p>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </Animated>
        </div>
      }
      {
        isMobile &&
        <div className=" versions container-fuid">
          <div className="row align-items-center px-0 mx-0 ">
            <div className="col-12  px-0 pt-3">
              <div className="row align-items-center">
                <div className="col-6">
                  <hr className="line-left mt-2 " />
                </div>
                <div className="col-6 pl-0">
                  <h2 className="primer-nivel" dangerouslySetInnerHTML={{
                    __html: versions[0]?.nombre ?? ''
                  }}></h2>
                </div>
              </div>
              <div className="col-12">
                <div className="img-design w-100">
                  <img src={versions[0]?.imagen?.url} className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="row pt-3 container pl-5 px-md-5">
              {version1 &&
                version1.map((item, i) =>
                  <>
                    <div key={`version1m-${i}`} className="col-2 ">
                      {item.Tipo && <center><img src={item.Tipo == 'check' ? '/images/modelos/check.png' : '/images/modelos/plus.png'} width={20} height={20} className="img-fluid" /></center>}
                    </div>
                    <div className="col-9 texto px-0" >
                      <p dangerouslySetInnerHTML={{
                        __html: item?.descripcion ?? ''
                      }}></p>
                    </div>
                  </>
                )
              }
            </div>
            <div className="col-12 px-0 pt-3">
              <div className="row align-items-center text-right">
                <div className="col-7">
                  <h2 className="primer-nivel" dangerouslySetInnerHTML={{
                    __html: versions[1]?.nombre ?? ''
                  }}></h2>
                </div>
                <div className="col-5 pl-0">
                  <hr className="line-right mt-2 " />
                </div>
              </div>
              <div className="col-12  px-0">
                <div className=" w-100 ">
                  <img src={versions[1]?.imagen?.url} className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="row pt-3 pb-4 container pl-5 px-md-5">
              {version2 &&
                version2.map((item, i) =>
                  <>
                    <div key={`version2m-${i}`} className="col-2 ">
                      {item.Tipo && <center><img src={item.Tipo == 'check' ? '/images/modelos/check.png' : '/images/modelos/plus.png'} width={20} height={20} className="img-fluid" /></center>}
                    </div>
                    <div className="col-9 texto px-0" >
                      <p dangerouslySetInnerHTML={{
                        __html: item?.descripcion ?? ''
                      }}></p>
                    </div>
                  </>
                )
              }
            </div>

          </div>
        </div>
      }
    </div>
  )
}
const PageFeature = ({ feature, versions }) => {
  const divRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const onScreen = useOnScreen(divRef, 0.2);
  let isMobile = feature;

  let aux = 15;
  function comparate(i) {
    if (i == 2 || i == 7) {
      return "col-1  offset-3  pt-3 "
    }
    if (i == 5 || i == 9) {
      return "col-1 offset-3  pt-3"
    }
    if (i == aux) {
      aux = aux + 6;
      return "col-1 offset-3  pt-4"
    }
    return "col-1 offset-3 ";
  }
  let aux2 = 15;
  function comparate2(i) {
    if (i == 2 || i == 7) {
      return "col-6  texto pt-3 pl-0 "
    }
    if (i == 5 || i == 9) {
      return "col-6  texto pt-3 pl-0"
    }
    if (i == aux2) {
      aux2 = aux2 + 6;
      return "col-7  texto pt-4 pl-0 "
    }
    return "col-7  texto pl-0";
  }
  useEffect(() => {
    setVisible(onScreen);
  }, [onScreen]);

  const version1 = orderFeatures(versions[0].caracteristicas_versiones);
  return (
    <div ref={divRef} className=" versions container-fuid  pb-5">
      <div className="row align-items-center p-top px-0 mx-0 ">
        <div className="col-12  text-center font-weight-bold blue-t description-l">
          <label className="pt-3">Mira las características de esta versión haciendo scroll.</label>
        </div>
        <div className="col-12  px-0 pt-3">
          <div className="row">
            {isMobile &&
              <>
                <div className="col-6 pt-4">
                  <hr className="line-left mt-2 " />
                </div>
                <div className="col-6 pl-0">
                  <h2 className='primer-nivel' dangerouslySetInnerHTML={{
                    __html: versions[0]?.nombre ?? ''
                  }}></h2>
                </div>
                <div className="img-design w-100">
                  <img src={versions[0]?.imagen?.url} className="img-fluid" />
                </div>
              </>
            }
            {!isMobile &&
              <>
                <div className="col-12 text-center px-0">
                  <Animated animationIn="fadeInLeft" animationInDuration={1300} isVisible={visible}>
                    <h2 className="segundo-nivel" dangerouslySetInnerHTML={{
                      __html: versions[0]?.nombre ?? ''
                    }}></h2>
                    <hr className="line-left mt-2 w-100 " />
                  </Animated>
                </div>
                <div className="offset-md-2 col-md-8">
                  <Animated animationIn="fadeInRight" animationInDuration={1300} isVisible={visible}>
                    <div className="img-design w-100">
                      <img src={versions[0]?.imagen?.url} className="img-fluid" />
                    </div>
                  </Animated>
                </div>
              </>
            }
          </div>
        </div>
        {!isMobile && <div ref={divRef} className=" versions  global container-fluid h-c pb-5 ">
          <Animated animationIn="fadeInUp" animationInDuration={1300} isVisible={visible}>
            <div className="row a content">
              <div className="col-12 ">
                <div className="row">
                  {version1 &&
                    version1.map((item, i) =>
                      <div key={`version-${i}`} className="row col-12">
                        <div className={comparate(i)}>
                          <div className='pl-3'
                          >
                            <center><img src={item.Tipo == 'check' ? '/images/modelos/check.png' : '/images/modelos/plus.png'} width={20} height={20} className="img-fluid" /></center>
                          </div>
                        </div>
                        <div className={comparate2(i)} >
                          <p dangerouslySetInnerHTML={{
                            __html: item?.descripcion ?? ''
                          }}></p>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </Animated>
        </div>}
        {isMobile && <div className="row pt-3 container pl-5 px-md-5">
          {version1 &&
            version1.map((item, i) =>
              <>
                <div key={`version-${i}`} className="col-2 ">
                  {item.Tipo && <center><img src={item.Tipo == 'check' ? '/images/modelos/check.png' : '/images/modelos/plus.png'} width={20} height={20} className="img-fluid" /></center>}
                </div>
                <div className="col-9 texto px-0" >
                  <p dangerouslySetInnerHTML={{
                    __html: item?.descripcion ?? ''
                  }}></p>
                </div>
              </>
            )
          }
        </div>}
      </div>
    </div>
  )
}
function Versions({ versions }) {
  const mediaquery = useMediaQuery({ maxWidth: 990 });
  const [movile, setisMobile] = useState(true);
  useEffect(() => {
    if (mediaquery !== movile) {
      setisMobile(mediaquery)
    }
  }, [mediaquery])
  return (
    <>
      {versions.length == 2 &&
        <>
          <Page model={movile} versions={versions}></Page>
          <Features feature={movile} versions={versions}></Features>
        </>
      }
      {versions.length == 1 && <PageFeature feature={movile} versions={versions}></PageFeature>}

    </>
  )
}

export default Versions