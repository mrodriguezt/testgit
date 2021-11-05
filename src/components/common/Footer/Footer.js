import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Accordion, Card, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import LazyILoadingImage from "../../common/LazyLoadingImage";
function Footer(props) {
  const topPage = props.top != undefined ? false : true;
  const mediaquery = useMediaQuery({ maxWidth: 991 });
  const [isMobile, setisMobile] = useState(true);
  const [isModelos, setisModelos] = useState(false);
  const router = useRouter();
  const toTopPage = () => {
    if (isModelos) {
      document
        .getElementById("features-model").scrollIntoView({ behavior: "smooth" });
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    if (mediaquery !== isMobile) {
      setisMobile(mediaquery);
    }
    if (router.pathname.includes("modelos")) {
      setisModelos(true);
    }
  }, [mediaquery, router]);
  return (
    <div className={`footer w-100 ${topPage ? "padding" : ""}`}>
      <div className="row mx-0">
        <div className="col-12 position-relative border-top">
          {topPage ? (
            <div
              className="position-absolute icon-top-footer"
              onClick={toTopPage}
            >
              {topPage && (
                <LazyILoadingImage src="/images/footer/ArrowCircleUp.svg" className="toTop" alt="Volver arriba" height="68" width='68' />
              )}
            </div>
          ) : null}
          <div className="row text-left justify-content-center grey">
            <div className="col-lg-11 col-sm-10">
              <div className="row no-gutters py-5">
                {!isMobile && (
                  <div className="col-lg-3 col-12  d-flex justify-content-center">
                    <LazyILoadingImage
                      src="/logo_firma.webp"
                      alt="logos"
                      className="logos-footer"
                      height="100.125" width='200'
                    ></LazyILoadingImage>
                  </div>
                )}
                {isMobile && (
                  <div className="col-12 px-3">
                    <a href="/">
                      <span className="l-footer2 pl-1">Home</span>
                    </a>
                  </div>
                )}
                <div className="col-lg-3 col-12  d-flex justify-content-center">
                  <div className="d-lg-block d-none">
                    <span className="subtitle l-footer2 mb-2">Modelos</span>
                    <Link href="/modelos/vitara">
                      <a className="subtitle2 l-footer">Vitara</a>
                    </Link>
                    <Link href="/modelos/scross">
                      <a className="subtitle2 l-footer">SX4 S-CROSS</a>
                    </Link>
                  </div>

                  <div className="d-lg-none w-100 d-block">
                    <Accordion>
                      <Card className="border-0">
                        <Accordion.Toggle
                          as={Card.Header}
                          className="border-0"
                          eventKey="0"
                        >
                          <div className="header-collpase-footer-card">
                            <span className=" l-footer2 m-0">Modelos</span>
                            <img
                              className="float-right icon-drop-down-footer"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 5' fill='none'%3E%3Cpath d='M0.960063 4.5284C0.669271 4.23587 0.669271 3.76342 0.960064 3.4709L3.96006 0.470898C4.10467 0.33139 4.2992 0.255737 4.50007 0.260898C4.69942 0.259745 4.89103 0.338008 5.03257 0.478398L8.03257 3.4784C8.32459 3.77249 8.32291 4.24763 8.02882 4.53965C7.73472 4.83167 7.25959 4.82999 6.96757 4.5359L4.50007 2.0759L2.02506 4.5359C1.88324 4.67689 1.69098 4.75541 1.491 4.754C1.29102 4.75259 1.09989 4.67138 0.960063 4.5284Z' fill='%23ffffff'/%3E%3C/svg%3E"
                              alt="Regresar"
                              width='12'
                              height='6.662'
                            ></img>
                          </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body className="d-flex flex-column py-0">
                            <Link href="/modelos/vitara">
                              <a className="subtitle2 l-footer">Vitara</a>
                            </Link>
                            <Link href="/modelos/scross">
                              <a className="subtitle2 l-footer">SX4 S-CROSS</a>
                            </Link>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                {isMobile && (
                  <>
                    <div className="col-12  px-3">
                      <a href="/posventa">
                        <span className="  l-footer2 pl-1">Posventa</span>
                      </a>
                    </div>
                    <div className="col-12 px-3">
                      <a href="/encuentranos">
                        <span className=" l-footer2 pl-1">Encuéntranos</span>
                      </a>
                    </div>
                    <div className="col-12 py-4 d-flex justify-content-center">
                      <a href="https://wa.link/7yc1ph">
                        <img
                          src="/images/footer/WhatsappLogo.svg"
                          alt="Whatsapp"
                          style={{ height: "40px" }}
                          height="40" width='40'
                        />
                      </a>
                      <a href="https://www.instagram.com/suzukiautos.ec/">
                        <img
                          className="ml-3"
                          src="/images/footer/InstagramLogo.svg"
                          alt="Instagram"
                          style={{ height: "40px" }}
                          height="40" width='40'
                        />
                      </a>
                      <a href="https://www.facebook.com/suzukiautos.ec">
                        <img
                          className="ml-3"
                          src="/images/footer/FacebookLogo.svg"
                          alt="Facebook"
                          style={{ height: "40px" }}
                          height="40" width='40'
                        />
                      </a>
                    </div>
                    <div className="col-12 pb-3 d-flex justify-content-center">
                      <LazyILoadingImage
                        src="/logo_firma.webp"
                        alt="logos"
                        className="logos-footer"
                        height="100.125" width='200'
                      ></LazyILoadingImage>
                    </div>
                  </>
                )}
                {!isMobile && (
                  <>
                    <div className="col-lg-3 col-12 d-flex  justify-content-center">
                      <div className="d-lg-block d-none">
                        <span className="subtitle l-footer2 mb-2">
                          Servicios
                        </span>
                        <Link href="/posventa">
                          <a className="subtitle2 l-footer">Posventa</a>
                        </Link>
                      </div>
                      <div className="d-lg-none w-100 d-block">
                        <Accordion>
                          <Card className="border-0">
                            <Accordion.Toggle
                              as={Card.Header}
                              className="border-0"
                              eventKey="1"
                            >
                              <div className="header-collpase-footer-card">
                                <span className="subtitle l-footer2 m-0">
                                  Servicios
                                </span>
                                <img
                                  className="float-right icon-drop-down-footer"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 5' fill='none'%3E%3Cpath d='M0.960063 4.5284C0.669271 4.23587 0.669271 3.76342 0.960064 3.4709L3.96006 0.470898C4.10467 0.33139 4.2992 0.255737 4.50007 0.260898C4.69942 0.259745 4.89103 0.338008 5.03257 0.478398L8.03257 3.4784C8.32459 3.77249 8.32291 4.24763 8.02882 4.53965C7.73472 4.83167 7.25959 4.82999 6.96757 4.5359L4.50007 2.0759L2.02506 4.5359C1.88324 4.67689 1.69098 4.75541 1.491 4.754C1.29102 4.75259 1.09989 4.67138 0.960063 4.5284Z' fill='%23ffffff'/%3E%3C/svg%3E"
                                  alt="Regresar"
                                ></img>
                              </div>
                            </Accordion.Toggle>
                          </Card>
                        </Accordion>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12 d-flex  justify-content-center">
                      <div className="d-lg-block d-none">
                        <span className="subtitle l-footer2 mb-3 mb-lg-2">
                          Encuéntranos
                        </span>
                        <Link href="/encuentranos">
                          <a className="subtitle2 l-footer">
                            Agencias y Talleres
                          </a>
                        </Link>
                        <div className="d-block">
                          <a href="https://wa.link/7yc1ph">
                            <img
                              src="/images/footer/WhatsappLogo.svg"
                              alt="Whatsapp"
                              height="24" width='24'
                            />
                          </a>
                          <a href="https://www.instagram.com/suzukiautos.ec/">
                            <img
                              className="ml-3"
                              src="/images/footer/InstagramLogo.svg"
                              alt="Instagram"
                              height="24" width='24'
                            />
                          </a>
                          <a href="https://www.facebook.com/suzukiautos.ec">
                            <img
                              className="ml-3"
                              src="/images/footer/FacebookLogo.svg"
                              alt="Facebook"
                              height="24" width='24'
                            />
                          </a>
                        </div>
                      </div>
                      <div className="d-lg-none w-100 d-block">
                        <Accordion>
                          <Card className="border-0">
                            <Accordion.Toggle
                              as={Card.Header}
                              className="border-0"
                              eventKey="1"
                            >
                              <div className="header-collpase-footer-card">
                                <span className="subtitle l-footer2 m-0">
                                  Encuentranos
                                </span>
                                <img
                                  className="float-right icon-drop-down-footer"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 5' fill='none'%3E%3Cpath d='M0.960063 4.5284C0.669271 4.23587 0.669271 3.76342 0.960064 3.4709L3.96006 0.470898C4.10467 0.33139 4.2992 0.255737 4.50007 0.260898C4.69942 0.259745 4.89103 0.338008 5.03257 0.478398L8.03257 3.4784C8.32459 3.77249 8.32291 4.24763 8.02882 4.53965C7.73472 4.83167 7.25959 4.82999 6.96757 4.5359L4.50007 2.0759L2.02506 4.5359C1.88324 4.67689 1.69098 4.75541 1.491 4.754C1.29102 4.75259 1.09989 4.67138 0.960063 4.5284Z' fill='%23ffffff'/%3E%3C/svg%3E"
                                  alt="Regresar"
                                ></img>
                              </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body className="d-flex flex-column py-0">
                                <Link href="/encuentranos">
                                  <a className="subtitle2 l-footer">
                                    Agencias y Talleres
                                  </a>
                                </Link>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                        <div className="d-block"></div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
