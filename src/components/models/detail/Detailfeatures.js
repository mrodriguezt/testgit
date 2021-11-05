import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Tabs, Tab, Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TestDrive from './features/TestDrive';

//Features
import Outside from "./features/Outside"
import Outsidemobile from "./features/Outsidemobile";
import Connectivity from "./features/Connectivity"
import Inside from "./features/Inside"
import Versions from "./features/Versions"
import Security from "./features/Security"
import Performance from "./features/Performance"

function Detailfeatures({ modelo, data, data_api }) {
  const mediaquery = useMediaQuery({ maxWidth: 990 });
  const views = ['./features/Outside', './features/Connectivity', './features/Inside', './features/Versions', './features/Security']
  const [cont, setCont] = useState(0)
  const [isMobile, setisMobile] = useState(true);
  const [showExterior, setShowExterior] = useState(false);
  const [showInterior, setShowInterior] = useState(false);
  const [showConectividad, setShowConectividad] = useState(false);
  const [showVersiones, setShowVersiones] = useState(false);
  const [showSeguridad, setShowSeguridad] = useState(false);
  const [showDesempenio, setShowDesempenio] = useState(false);


  const handleSelecttab = (k) => {
    let index = k.substring(k.length - 1)
    let scroll_val = index * 150

    var elmnt = document.getElementsByClassName("tab-detail")
    elmnt[0].scrollLeft = scroll_val
  }
  useEffect(() => {
    if (mediaquery !== isMobile) {
      setisMobile(mediaquery)
    }
  }, [mediaquery])


  const accordionItemShow = (e, item) => {
    e.preventDefault();
    if (item != 'exterior') {
      document.getElementById('features-model').scrollIntoView({ behavior: "smooth" });
    }
    switch (item) {
      case 'exterior':
        setShowExterior(!showExterior);
        setShowInterior(false);
        setShowConectividad(false);
        setShowVersiones(false);
        setShowSeguridad(false);
        setShowDesempenio(false);
        break;
      case 'interior':
        setShowExterior(false);
        setShowInterior(!showInterior);
        setShowConectividad(false);
        setShowVersiones(false);
        setShowSeguridad(false);
        setShowDesempenio(false);
        break;
      case 'conectividad':
        setShowExterior(false);
        setShowInterior(false);
        setShowConectividad(!showConectividad);
        setShowVersiones(false);
        setShowSeguridad(false);
        setShowDesempenio(false);
        break;
      case 'versiones':
        setShowExterior(false);
        setShowInterior(false);
        setShowConectividad(false);
        setShowVersiones(!showVersiones);
        setShowSeguridad(false);
        setShowDesempenio(false);
        break;
      case 'seguridad':
        setShowExterior(false);
        setShowInterior(false);
        setShowConectividad(false);
        setShowVersiones(false);
        setShowSeguridad(!showSeguridad);
        setShowDesempenio(false);
        break;
      case 'desempenio':
        setShowExterior(false);
        setShowInterior(false);
        setShowConectividad(false);
        setShowVersiones(false);
        setShowSeguridad(false);
        setShowDesempenio(!showDesempenio);
        break;

    }

  }
  //console.log(data_api.versiones);
  return (
    <>
      {!isMobile &&
        <>
          <Tabs defaultActiveKey="tab0" id="tab-features" className="tabcomp tab-detail" onSelect={(k) => handleSelecttab(k)}>
            <Tab eventKey={"tab0"} title='Exterior'><Outside modelo={modelo} exterior={data_api.exterior} isMobile={isMobile} /></Tab>
            <Tab eventKey={"tab1"} title='Interior'> <Inside modelo={modelo} interior={data_api.interior} isMobile={isMobile} /></Tab>
            {data_api.conectividad && <Tab eventKey={"tab2"} title='Conectividad'><Connectivity isMobile={isMobile} conectivity={data_api.conectividad} /></Tab>}
            {data_api.versiones.length > 0 && data_api.versiones.length <= 2 && data_api.versiones[0].caracteristicas_versiones.length > 0 && <Tab eventKey={"tab3"} title='Versiones'><Versions isMobile={isMobile} versions={data_api.versiones} /></Tab>}
            <Tab eventKey={"tab4"} title='Seguridad'><Security seguridad={data_api.seguridad} isMobile={isMobile} /></Tab>
            <Tab eventKey={"tab5"} title='Desempeño'><Performance performance={data_api.desempenio} isMobile={isMobile} /></Tab>
          </Tabs>


        </>
      }

      {isMobile &&
        <>
          <div id="accordion" className="w-100 global">
            <div className=" mb-1">
              <div href="#exterior" className={showExterior ? " card-header background-bl text-white mx-4" : "card-header background-gris color-bl mx-4"} onClick={e => accordionItemShow(e, 'exterior')}>
                <h1 className="mb-0 text-center text-uppercase txt-size">Exterior</h1>
              </div>
              <div id="exterior" className={showExterior ? "show" : "collapse"} >
                <div className="">
                  <Outsidemobile isMobile={isMobile} modelo={modelo} exterior={data_api.exterior} />
                </div>
              </div>
            </div>
            <div className="mb-1">
              <div href="#interior" className={showInterior ? " card-header background-bl text-white mx-4" : "card-header background-gris color-bl mx-4"} onClick={e => accordionItemShow(e, 'interior')}>
                <h5 className="mb-0 text-center text-uppercase txt-size">Interior</h5>
              </div>
              <div id="interior" className={showInterior ? "show" : "collapse"} >
                <div className="">
                  <Inside interior={data_api.interior} isMobile={isMobile} />
                </div>
              </div>
            </div>
            <div className="mb-1">
              <div href="#conectividad" className={showConectividad ? " card-header background-bl text-white mx-4" : "card-header background-gris color-bl mx-4"} onClick={e => accordionItemShow(e, 'conectividad')}>
                <h5 className="mb-0 text-center text-uppercase txt-size">Conectividad</h5>
              </div>
              <div id="conectividad" className={showConectividad ? "show" : "collapse"} >
                <div className="card-body px-0">
                  {data_api.conectividad && <Connectivity isMobile={isMobile} conectivity={data_api.conectividad} />}
                </div>
              </div>
            </div>
            {data.versions && <div className="mb-1">
              <div href="#versiones" className={showVersiones ? " card-header background-bl text-white mx-4" : "card-header background-gris color-bl mx-4"} onClick={e => accordionItemShow(e, 'versiones')}>
                <h5 className="mb-0 text-center text-uppercase txt-size">Versiones</h5>
              </div>
              <div id="versiones" className={showVersiones ? "show" : "collapse"} >
                <div className="card-body px-0">
                  {data_api.versiones.length > 0 && data_api.versiones.length <= 2 && data_api.versiones[0].caracteristicas_versiones.length > 0 && <Versions isMobile={isMobile} versions={data_api.versiones} />}
                </div>
              </div>
            </div>}
            <div className="mb-1">
              <div href="#seguridad" className={showSeguridad ? " card-header background-bl text-white mx-4" : "card-header background-gris color-bl mx-4"} onClick={e => accordionItemShow(e, 'seguridad')}>
                <h5 className="mb-0 text-center text-uppercase txt-size">Seguridad</h5>
              </div>
              <div id="seguridad" className={showSeguridad ? "show" : "collapse"} >
                <div className="card-body px-0">
                  <Security seguridad={data_api.seguridad} isMobile={isMobile} />
                </div>
              </div>
            </div>
            <div className="mb-1">
              <div href="#desempenio" className={showDesempenio ? " card-header background-bl text-white mx-4" : "card-header background-gris color-bl mx-4"} onClick={e => accordionItemShow(e, 'desempenio')}>
                <h5 className="mb-0 text-center text-uppercase txt-size">Desempeño</h5>
              </div>
              <div id="desempenio" className={showDesempenio ? "show" : "collapse"} >
                <div className="card-body px-0">
                  <Performance performance={data_api.desempenio} isMobile={isMobile} />
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );

}

export default Detailfeatures;
