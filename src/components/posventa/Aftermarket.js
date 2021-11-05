import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Modal } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Accordion, Card } from "react-bootstrap";
import Image from "next/image";
import Repuesto from "../forms/Repuesto";
import ModalMessage from "../common/ModalMessage";

import LoaderForm from "../common/LoaderForm";

function Contenido({data}) {
  const { repuestos, planesM, contenido, servicios } = data;
  const [movil, setisMobile] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 464 });
  const [textModal, setTextModal] = useState(
    "Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos."
  );
  const [modal, setModal] = useState(false);
  const [showLoader, setShowLoader] = React.useState(false);

  useEffect(() => {
    if (isMobile !== movil) {
      setisMobile(isMobile);
    }
  }, [isMobile]);

  let res = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
    },
  };
  function Servicio(props) {
    const isMobile = props.movil;
    const [open, setOpen] = React.useState(false);

    return (
      <div className=" aftermarket container-fluid">
        {!isMobile && (
          <div className="row">
            <div className="col-12 px-0">
              {
                contenido?.banner?.imagen &&
                <img
                  src={contenido?.banner?.imagen?.url}
                  className="img-fluid w-100 img-h-a"
                  alt="posventa"
                ></img>
              }
            </div>
            <div className="flotante-primer-nivel white-t" dangerouslySetInnerHTML={{ __html: contenido?.banner?.titulo ?? '' }}></div>
            <div className="flotante-segundo-nivel white-t" dangerouslySetInnerHTML={{ __html: contenido?.banner?.subtitulo ?? '' }}></div>
            <div className="col-12">
              <div className="row align-items-center ">
                <div className="col-6 texto paddin-x pr-0 py-5" dangerouslySetInnerHTML={{ __html: contenido?.texto?.texto ?? '' }}></div>
                <div className="col-6 px-0 pt-2">
                  <Link href={"/taller/agendarcitataller"}>
                    <button className="btn btn-primary m-auto">
                      Agenda tu cita aquí
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {isMobile && (
          <div className="row movile">
            <div className="col-12 px-0">
              <img
                src="/images/posventa/movil/servicio.png"
                className="img-fluid w-100 img-h-a"
                alt="posventa"
              ></img>
            </div>
            <div className="flotante-primer-nivel white-t" dangerouslySetInnerHTML={{ __html: contenido?.banner?.titulo ?? '' }}>
            </div>
            <div className="flotante-segundo-nivel white-t " dangerouslySetInnerHTML={{ __html: contenido?.banner?.subtitulo ?? '' }}>
            </div>
            <div className="col-12 pt-4 text-description " dangerouslySetInnerHTML={{ __html: contenido?.texto?.texto ?? '' }}>
            </div>
            <div className="col-12">
              <div className="col-12">
                <Link href={"/taller/agendarcitataller"}>
                  <button
                    className={
                      isMobile
                        ? "btn btn-primary mb-3"
                        : "btn btn-primary  mb-3"
                    }
                  >
                    Agenda tu cita aquí
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  function Planes(props) {
    const movil = props.movil;
    const [open, setOpen] = React.useState(false);
    const visible = useMediaQuery({ maxWidth: 576 });
    return (
      <div className="container-fluid plans">
        {!movil && (
          <div className="row align-items-center ">
            <div className={movil ? "row align-items-center" : "col-7 col-sm-9 col-md-9 col-lg-8 col-xl-9 px-0"}>
              <hr className="line-left mt-2 " />
            </div>
            <div className="col-3 col-sm-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 pr-4">
              <p className=" segundo-nivel" dangerouslySetInnerHTML={{ __html: contenido?.mantenimiento?.titulo ?? '' }}></p>
            </div>
          </div>
        )}
        {movil && (
          <div className="row align-items-center">
            <div className=" col-6 pl-4 ">
              <p className=" segundo-nivel" dangerouslySetInnerHTML={{ __html: contenido?.mantenimiento?.titulo ?? '' }}></p>
            </div>
            <div className="col-5 col-xs-6 offset-1 offset-sm-0 px-0 pb-2">
              <hr className="line-left mt-2 " />
            </div>
          </div>
        )}
        <div></div>

        <div className="row pt-5 justify-content-center">
          {
            planesM?.length > 0 &&
            planesM.map((item, index) => {
              return (
                <div
                  key={`folleto-${index}`}
                  className={`col-12 col-md-6 my-3 col-lg-4 ${!movil && !visible && index + 1 < planesM.length
                    ? "border-p"
                    : ""
                    }`}
                >
                  <div className="col-12 pb-3">
                    <center>
                      {
                        item?.imagen &&
                        <Image
                          width="320"
                          height="223"
                          src={item.imagen.url}
                          className="img-fluid"
                          alt={item.nombre}
                        />
                      }

                    </center>
                  </div>
                  <div className="col-12  title-p2 ">
                    <h1>{item.nombre}</h1>
                  </div>
                  <div className="col-12">
                    <Accordion className="row justify-content-center">
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey={index + 1}
                        className="text-center"
                        style={{
                          border: "0px",
                          background: "transparent",
                          cursor: "pointer",
                        }}
                      >
                        <label
                          className="d-flex align-items-center justify-content-center text-f"
                          style={{ cursor: "pointer" }}
                        >
                          Folletos de mantenimiento
                          <img
                            src="/images/icons/down.png"
                            className="ml-2"
                            alt="Ver más"
                            style={{ cursor: "pointer" }}
                          />
                        </label>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={index + 1}>
                        <div className="d-flex flex-column py-0">
                          {

                            item?.planes_de_mantenimiento_versiones &&
                            item.planes_de_mantenimiento_versiones.map((version, indent) => {
                              return (
                                <div key={`v-${indent}`} className="col-12 pt-3 ">
                                  <div className="row text-center">
                                    <div className="col-12 px-0 row mx-0 my-1 justify-content-center align-items-center">
                                      <label className="text-f">
                                        {version.nombre}
                                      </label>
                                      <a
                                        target="_blank"
                                        href={version?.pdf?.url}
                                        download
                                      >
                                        <img
                                          className="icon-img img-fluid"
                                          src="images/posventa/down.png"
                                          alt="First slide"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </Accordion.Collapse>
                    </Accordion>
                  </div>
                </div>
              );
            })}
          <div className="container-fluid h-cita px-0 color-blue ">
            <div className="row  align-items-center">
              <div className="col-12 col-sm-9 col-md-7 col-lg-6 pt-3 space-left">
                <div className="col-12 segundo-nivel white-t" dangerouslySetInnerHTML={{ __html: contenido?.condiciones?.titulo ?? '' }}>
                </div>
                <div className="pt-3 col-12 texto white-t">
                  <label dangerouslySetInnerHTML={{ __html: contenido?.condiciones?.texto ?? '' }}>
                  </label>
                </div>
                {!movil && !visible && (
                  <div className="col-12 py-3">
                    <Link href={"/taller/agendarcitataller"}>
                      <button
                        className={
                          movil ? "btn btn-primary mb-3" : "btn btn-white  mb-3"
                        }
                      >
                        Agenda tu cita aquí
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              {!movil && (
                <div className="col-12 col-sm-4 col-md-5 col-lg-6 px-0">
                  {
                    contenido?.condiciones?.imagen &&
                    <img
                      src={contenido?.condiciones?.imagen?.url}
                      className="img-fluid hw-img"
                      alt="taller"
                    />

                  }
                </div>
              )}
            </div>
            {movil && (
              <div
                className="row hw-img align-items-end mx-0"
                style={{
                  backgroundImage: `url(${contenido?.condiciones?.imagen_movil?.url})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="col-12 pb-4 px-4  ">
                  <Link href={"/taller/agendarcitataller"}>
                    <button
                      className={
                        movil ? "btn btn-primary mb-3" : "btn btn-primary  mb-3"
                      }
                    >
                      Agenda tu cita aquí
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  function Resumen(props) {
    const isMobile = props.movil;
    return (
      <div className=" resume container-fluid px-0">
        <div className="py-5 px-0">
          {/* <img
            src={
              isMobile
                ? "/images/posventa/movil/esquema_movil.png"
                : "/images/posventa/esquema.png"
            }
            className="img-fluid hw-img py-4"
          /> */}
          <div className="row px-3 py-md-5 my-md-5 px-sm-5 px-md-5">
            <div className="offset-xl-2 offset-lg-2"></div>
            {
              servicios?.length > 0 &&
              servicios.map((item, i) => {
                return (
                  <div key={`servicio-${i}`} className=" pr-2 pr-md-2 col-6 col-sm-4 col-md-3 col-lg-4 col-xl-2 text-center pt-2">
                    <center>
                      {
                        item?.icono &&
                        <img src={item?.icono?.url} className="img-fluid w-50 h-50" />
                      }
                      
                    </center>
                    <p className="texto-titulo-negro white-t pt-3 text-icon-resumen-after-market" dangerouslySetInnerHTML={{ __html: item?.texto ?? '' }}>
                    </p>
                  </div>
                );
              })}</div>
        </div>
      </div>
    );
  }
  function Partes(props) {
    const res = props.responsive;
    const isMobile = props.movil;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className=" parts global plans pb-3 container-fluid ">
        {!isMobile && (
          <div className="row align-items-center ">
            <div className=" col-4 col-sm-4 col-md-6 col-lg-4 col-lg-7  col-xl-8 px-0">
              <hr className="line-p " />
            </div>
            <div className="col-8 col-sm-8  col-md-6 col-lg-4 col-lg-5 col-xl-4 pl-5">
              <p className=" segundo-nivel mb-0" dangerouslySetInnerHTML={{ __html: contenido?.repuestos?.titulo ?? '' }}></p>
            </div>
          </div>
        )}
        {isMobile && (
          <div className="row align-items-center mb-1 py-2">
            <div className="col-8 pl-3">
              <p className=" segundo-nivel mb-0" dangerouslySetInnerHTML={{ __html: contenido?.repuestos?.titulo ?? '' }}></p>
            </div>
            <div className="col-4 px-0 ">
              <hr className="line-p  " />
            </div>
          </div>
        )}
        <div className="row  p-top">
          <div className={isMobile ? "col-12 space-left text-title color-bl space-right " : "col-sm-6 col-md-5 col-lg-4 col-xl-4 space-left text-title color-bl border-gray space-right"}>
            <p dangerouslySetInnerHTML={{ __html: contenido?.repuestos?.subtitulo ?? '' }}></p>
          </div>
          <div
            className={
              isMobile
                ? "col-12 col-sm-12 col-md-7 col-lg-8 col-xl-8 texto color-black"
                : "col-12 col-sm-12 col-md-7 col-lg-8 col-xl-8 texto color-black pl-5 space-right"
            }
          >
            <label dangerouslySetInnerHTML={{ __html: contenido?.repuestos?.texto ?? '' }}>
            </label>
          </div>
        </div>

        {!isMobile ? (
          <div className={isMobile ? "row p-top " : "row p-top px-5 pb-5"}>
            {
              repuestos &&
              repuestos?.map((item, idx) => (
                <div
                  key={`parte-${idx}`}
                  className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-4 d-flex align-items-stretch"
                >
                  <div className="card h-100 border-light">
                    <img
                      src={item?.imagen?.url}
                      className="card-img-top"
                      alt={item?.titulo ?? ''}
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title  color-black titulo-negro-card text-uppercase pl-4 pr-2 pr-md-2">
                        {item?.titulo ?? ''}
                      </h5>
                      <p className="card-text px-4 py-2 texto-card color-gris pb-5">
                        {item?.descripcion ?? ''}
                      </p>
                      <a
                        style={{
                          position: "absolute",
                          bottom: "2%",
                          width: "90%",
                          left: "5%",
                        }}
                        className="btn btn-primary "
                        onClick={handleShow}
                      >
                        Cotiza tu repuesto
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <div
            style={{
              paddingBottom: "30px",
              position: "relative",
            }}
          >
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className="px-0"
              containerClass="container "
              dotListClass=""
              draggable
              responsive={res}
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside
              sliderClass=""
              slidesToSlide={1}
              swipeable
              showDots
            >
              {
                repuestos &&
                repuestos?.map((item, idx) => (
                  <div
                    key={`parte-${idx}`}
                    className="col-12 pt-4  px-0 align-items-stretch"
                    style={{ height: "560px" }}
                  >
                    <div className="card h-100 border-light">
                      <img
                        src={item?.imagen.url}
                        className="card-img-top"
                        alt={item?.titulo ?? ''}
                      ></img>
                      <div className="card-body ">
                        <h5 className="card-title  texto color-black  text-uppercase ">
                          {item?.titulo ?? ''}
                        </h5>
                        <p className="card-text texto py-2  color-gris">
                          {item?.descripcion ?? ''}
                        </p>
                        <a
                          style={{
                            position: "absolute",
                            bottom: "2%",
                            width: "90%",
                            left: "5%",
                          }}
                          className=" btn btn-primary"
                          onClick={handleShow}
                        >
                          Cotiza tu repuesto
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </Carousel>
          </div>
        )}
        <div>
          <Modal
            show={show}
            onHide={handleClose}
            className={showLoader ? "d-none" : "global model-detail"}
          >
            <Modal.Header closeButton style={{ borderBottom: "0 none" }}>
              <Modal.Title className="blue-t modal-text">
                Cotiza tu repuesto
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="pt-0 ">
              <div className="warranty global">
                <div className="row">
                  <div className="col-12 text-blue">
                    <p>Datos de repuesto</p>
                  </div>
                  <div className="col-12 pt-3">
                    <Repuesto
                      handleClose={handleClose}
                      showModal={(bol) => setModal(bol)}
                      showLoader={(bol) => setShowLoader(bol)}
                      setTextModal={(text) => setTextModal(text)}
                    />
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
  function Garantia(props) {
    const isMobile = props.movil;
    const res = props.responsive;
    return (
      <div className="container-fluid global warranty py-5 mb-5">
        <div className="row p-top">
          {!isMobile ? (
            <>
              <div className="segundo-nivel col-12 space-l color-bl" dangerouslySetInnerHTML={{ __html: contenido?.garantia?.titulo ?? '' }}>
              </div>
            </>
          ) : (
            <>
              <div className="col-12 m-0 p-0">
                <div className="row  p-0 m-0 align-items-center py-3">
                  <div className="segundo-nivel col-4 space-l color-bl">
                    <p className="m-0" dangerouslySetInnerHTML={{ __html: contenido?.garantia?.titulo ?? '' }}></p>
                  </div>
                  <div className="offset-1 col-7 pr-2">
                    <hr className="line-left" />
                  </div>
                </div>
              </div>

            </>
          )}
          <div className="col-12 col-sm-4 col-md-6 col-lg-6 px-0 p-top">
            <div
              className="img-background"
              style={{ backgroundImage: "url(/images/posventa/garantia.png)" }}
            ></div>
          </div>
          <div className="col-12 col-sm-8 col-md-6 col-lg-6 p-top space-left space-r">
            <div className="row">
              <div className="col-12 texto-titulo-negro color-bl pb-2" dangerouslySetInnerHTML={{ __html: contenido?.garantia?.subtitulo ?? '' }}>

              </div>
              <div className="col-12 texto color-black pt-2" dangerouslySetInnerHTML={{ __html: contenido?.garantia?.texto ?? '' }}>
              </div>
            </div>
          </div>
          {false && <>
            <div className={isMobile ? "col-12" : "col-12 pt-5"}>
              <center>
                <img
                  className="icon-img img-fluid pt-4"
                  src="images/posventa/poligono.png"
                  alt="First slide"
                />
              </center>
            </div>
            <div
              className={
                isMobile ? "container texto pt-4" : "container texto pt-5 px-5"
              }
            >
              <p className={isMobile ? "" : "px-5"}>
                Los vehículos SUZUKI que se comercializan en Ecuador a través de
                SZK del Ecuador S.A. están garantizados en el territorio
                ecuatoriano por defectos de fabricación o calidad bajo la
                siguiente cobertura de garantía:{" "}
              </p>
            </div>
            {!isMobile ? (
              <div className="row space-r-t pt-3 pb-5 ">
                <div className="col-4  pt-4">
                  <div className="card h-100">
                    <div className="card-body  pt-4 px-3">
                      <p className="card-text texto my-0">
                        Garantía del vehículo 5 años calendario o 100.000 kms, lo
                        que ocurra primero.
                      </p>
                      <p className=" texto-card color-black  my-0">
                        (incluye los siguientes sistemas: motor, caja de cambios,
                        caja de transferencia, diferenciales, cableado principal
                        del motor y caja).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4 pt-4">
                  <div className="card h-100">
                    <div className="card-body  pt-4 px-3">
                      <p className="card-text texto">
                        Garantía de batería del vehículo 1 año calendario o 5.000
                        kms, lo que ocurra primero.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" col-4 pt-4 ">
                  <div className="card h-100">
                    <div className="card-body  pt-4 px-3">
                      <p className="card-text texto">
                        Garantía de reparaciones efectuadas en un taller
                        autorizado SUZUKI 1 año calendario o 10.000 km, lo que
                        ocurra primero.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 col-4  ">
                  <div className="card h-100">
                    <div className="card-body  pt-4 px-3">
                      <p className="card-text texto mb-0">
                        Garantía de neumáticos cubre una garantía de 1.000 kms.
                      </p>
                      <h1 className="card-text my-o texto-card color-black font-weight-bold">
                        No cubre desgaste normal, daños por golpes, rajaduras,
                        trizaduras, mal uso, etc. Se recomienda realizar la
                        alineación y balanceo en nuestra red de concesionarios
                        según se indica en al plan de mantenimiento vigente.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className=" pt-4 col-4  ">
                  <div className="card h-100">
                    <div className="card-body  pt-4 px-3">
                      <p className="card-text texto">
                        Garantía de batería híbrida 5 años calendario o 100.000 km
                        lo que ocurra primero.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" pt-4 col-4 ">
                  <div className="card h-100">
                    <div className="card-body  pt-4 pl-3 pr-4">
                      <p className="card-text texto">
                        Garantía de accesorios genuinos instalados antes de la
                        entrega del vehículo nuevo al cliente 5 años calendario o
                        100.000 kms lo que ocurra primero.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" pt-4 col-4">
                  <div className="card h-100">
                    <div className="card-body  pt-4 px-3">
                      <p className="card-text texto">
                        Garantía de calidad de accesorios instalados por posventa
                        en talleres autorizados SUZUKI, posterior de la entrega
                        del vehículo nuevo al cliente 1 año calendario o 10.000
                        kms, lo que ocurra primero.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" pt-4 col-4 ">
                  <div className="card h-100">
                    <div className="card-body  pt-4 pl-3 pr-4">
                      <p className="card-text texto">
                        Garantía de pintura 1 año calendario o 20.000 kms, lo que
                        ocurra primero. Esta garantía no cubre daños generados por
                        desgaste normal, uso inadecuado o por factores externos
                        tales como: rayones, abolladuras, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="w-100 "
                style={{
                  paddingBottom: "30px",
                  position: "relative",
                }}
              >
                <Carousel
                  additionalTransfrom={0}
                  arrows={false}
                  autoPlaySpeed={3000}
                  centerMode={false}
                  className="px-0"
                  containerClass="container pb-4"
                  dotListClass=""
                  draggable
                  responsive={res}
                  focusOnSelect={false}
                  infinite
                  itemClassName=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  renderDotsOutside={false}
                  renderDotsOutside
                  partialVisible="true"
                  slidesToSlide={1}
                  swipeable
                >
                  <div
                    className="col-12 pt-4  align-items-stretch"
                    style={{ height: "270px" }}
                  >
                    <div className="card h-100">
                      <div className="card-body  pt-4 px-3">
                        <p className="card-text text-description my-0">
                          Garantía del vehículo 5 años calendario o 100.000 kms,
                          lo que ocurra primero.
                        </p>
                        <p className="my-0">
                          (incluye los siguientes sistemas: motor, caja de
                          cambios, caja de transferencia, diferenciales, cableado
                          principal del motor y caja).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" col-12 pt-4   align-items-stretch "
                    style={{ height: "270px" }}
                  >
                    <div className="card h-100">
                      <div className="card-body  pt-4 px-3">
                        <p className="card-text text-description">
                          Garantía de batería del vehículo 1 año calendario o
                          5.000 kms, lo que ocurra primero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" col-12 pt-4  align-items-stretch"
                    style={{ height: "270px" }}
                  >
                    <div className="card h-100">
                      <div className="card-body  pt-4 px-3">
                        <p className="card-text text-description">
                          Garantía de reparaciones efectuadas en un taller
                          autorizado SUZUKI 1 año calendario o 10.000 km, lo que
                          ocurra primero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 pt-4   align-items-stretch"
                    style={{ height: "270px" }}
                  >
                    <div className="card h-100">
                      <div className="card-body  pt-4 px-3">
                        <p className="card-text text-description mb-0">
                          Garantía de neumáticos cubre una garantía de 1.000 kms.
                        </p>
                        <h1 className="card-text my-o car-description">
                          No cubre desgaste normal, daños por golpes, rajaduras,
                          trizaduras, mal uso, etc. Se recomienda realizar la
                          alineación y balanceo en nuestra red de concesionarios
                          según se indica en al plan de mantenimiento vigente.
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" col-12 pt-4  align-items-stretch"
                    style={{ height: "270px" }}
                  >
                    <div className="card h-100">
                      <div className="card-body  pt-4 px-3">
                        <p className="card-text text-description">
                          Garantía de batería híbrida 5 años calendario o 100.000
                          km lo que ocurra primero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 pt-4  align-items-stretch"
                    style={{ height: "270px" }}
                  >
                    <div className="card h-100">
                      <div className="card-body  pt-4 pl-3 pr-4">
                        <p className="card-text text-description">
                          Garantía de accesorios genuinos instalados antes de la
                          entrega del vehículo nuevo al cliente 5 años calendario
                          o 100.000 kms lo que ocurra primero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" col-12 pt-4 align-items-stretch"
                    style={{ height: "270px" }}
                  >
                    <div className="card h-100">
                      <div className="card-body  pt-4 px-3">
                        <p className="card-text text-description">
                          Garantía de calidad de accesorios instalados por
                          posventa en talleres autorizados SUZUKI, posterior de la
                          entrega del vehículo nuevo al cliente 1 año calendario o
                          10.000 kms, lo que ocurra primero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" col-12 pt-4  align-items-stretch"
                    style={{ height: "270px" }}
                  >
                    <div className="card h-100">
                      <div className="card-body  pt-4  pl-3 pr-4">
                        <p className="card-text text-description">
                          Garantía de pintura 1 año calendario o 20.000 kms, lo
                          que ocurra primero. Esta garantía no cubre daños
                          generados por desgaste normal, uso inadecuado o por
                          factores externos tales como: rayones, abolladuras, etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            )}
          </>}
        </div>
      </div>
    );
  }
  return (
    <div className="model-detail">
      <Servicio movil={movil} />
      <Resumen movil={movil} />
      <Planes movil={movil} />
      <Partes movil={movil} responsive={res} />
      <Garantia movil={movil} responsive={res} />
      <ModalMessage
        text={textModal}
        show={modal}
        onClick={(bol) => setModal(bol)}
      />
      <LoaderForm show={showLoader} />
    </div>
  );
}
export default Contenido;
