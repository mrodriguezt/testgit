import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import DetailModel from "./DetailModel";
import Image from "next/image";
import Link from "next/link";
import { modelos } from "../../../../utils/constant";
import { getModelos } from "../../../../pages/api/models";

function NavbarSite() {
  const router = useRouter();
  const [clickedId, setClickedId] = useState(router.pathname);
  const [modelId, setModelId] = useState(0);
  const [models, setModels] = useState(modelos);
  const [model, setModel] = useState(modelos[0]);

  const handleClick = (index) => {
    setModel(models[index]);
    setModelId(index);
  };

  useEffect(() => {
    (async () => {
      const modelosApi = await getModelos();
      setModels(modelosApi);
      setModel(modelosApi[modelId]);
    })();
  }, []);

  const modelosList = models.map((item, index) => {
    return (
      <div
        key={`model-${index}`}
        onClick={() => {
          handleClick(index);
        }}
        className={`row d-flex align-items-center col-12 px-0 mx-0 nav-modelo ${
          modelId === index ? "active " : " inactive"
        }`}
      >
        <div className="nombre col-xl-5 col-4  pl-5">
          <label>{item.modelo}</label>
        </div>
        <div
          className="d-flex col-xl-7 col-8 justify-content-end align-items-center"
          style={{ height: "250px" }}
        >
          <div className="col-10 h-100">
            <Image
              src={item.image.url}
              alt={item.modelo}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <img
            src={
              modelId === index
                ? "/images/navbar/arrow.png"
                : "/images/navbar/arrow-1.png"
            }
            alt="Flecha"
          />
        </div>
      </div>
    );
  });

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="ml-auto px-sm-5 px-3 px-lg-3 px-xl-5 py-2 py-sm-1 py-md-2 py-lg-0 shadow-menu d-lg-flex d-none "
    >
      <Navbar.Brand href="/">
        <Image
          src={"/logo.png"}
          width="96"
          height="64"
          className="img-fluid d-inline-block align-top"
          alt="Suzuki logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="nav-collapse">
        <Nav className="ml-auto" id="container-navlink">
          <Link href="/">
            <a className={clickedId === "/" ? "active nav-link" : "nav-link"}>
              Inicio
            </a>
          </Link>
          <NavDropdown
            title="Modelos"
            id="collasible-nav-dropdown"
            className={`${
              clickedId === "modelos" || clickedId.includes("/modelos")
                ? "static-position active"
                : "static-position"
            }`}
          >
            <div className="row col-12 d-lg-flex d-none h-100">
              <div className="col-xl-4 col-5 px-0">{modelosList}</div>
              <DetailModel model={model} />
            </div>
          </NavDropdown>
          {/*
            <Link href="/suzuki">
            <a className={clickedId === "/suzuki" ? "active nav-link" : "nav-link"}>
              ¿Por qué Suzuki?
            </a>
          </Link>
          */}
          {/*<NavDropdown
            title="Lo quiero"
            className={
              clickedId === "lo-quiero" || clickedId.includes("lo-quiero")
                ? "active"
                : ""
            }
          >
            <NavDropdown.Item
              href="#"
              className="d-flex"
              onClick={() => setClickedId("lo-quiero")}
            >
              Ofertas
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#"
              className="d-flex"
              onClick={() => setClickedId("lo-quiero")}
            >
              Financiamiento
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#"
              className="d-flex"
              onClick={() => setClickedId("lo-quiero")}
            >
              Trade In
            </NavDropdown.Item>

            <NavDropdown.Item
              href="/lo-quiero/test-drive"
              className="d-flex"
              onClick={() => setClickedId("lo-quiero")}
            >
              Agenda Test Drive
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#"
              className="d-flex"
              onClick={() => setClickedId("lo-quiero")}
            >
              Agenda Cita Talleres
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#"
              className="d-flex"
              onClick={() => setClickedId("lo-quiero")}
            >
              Garantía
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#"
              className="d-flex"
              onClick={() => setClickedId("lo-quiero")}
            >
              Seguro
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#"
              className="d-flex"
              onClick={() => setClickedId("lo-quiero")}
            >
              Contacto
            </NavDropdown.Item>
          </NavDropdown> 
          <NavDropdown
            title="¿Por qué Suzuki?"
            className={clickedId.includes("/suzuki") ? "active" : ""}
          >
            <NavDropdown.Item
              href="/suzuki/resumen"
              className="d-flex"
              onClick={() => setClickedId("suzuki")}
            >
              Resumen
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#"
              className="d-flex"
              onClick={() => setClickedId("suzuki")}
            >
              Diseño
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#"
              className="d-flex"
              onClick={() => setClickedId("suzuki")}
            >
              All Grip
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#"
              className="d-flex"
              onClick={() => setClickedId("suzuki")}
            >
              Híbrido
            </NavDropdown.Item>
          </NavDropdown>*/}
          <Link href="/lo-quiero" onClick={() => setClickedId("lo-quiero")}>
            <a
              className={
                clickedId === "/lo-quiero" || clickedId.includes("/lo-quiero")
                  ? "nav-link active"
                  : "nav-link "
              }
            >
              Lo quiero
            </a>
            </Link>
          <Link href="/posventa" onClick={() => setClickedId("posventa")}>
            <a
              className={
                clickedId === "/posventa" ? "nav-link active" : "nav-link "
              }
            >
              Posventa
            </a>
          </Link>
          <Link
            href="/encuentranos"
            onClick={() => setClickedId("encuentranos")}
          >
            <a
              className={
                clickedId === "/encuentranos" ? "active nav-link" : "nav-link"
              }
            >
              Encuéntranos
            </a>
          </Link>
          {/*
          <Link
            href="/sobresuzuki"
            onClick={() => setClickedId("sobre")}
          >
            <a
              className={
                clickedId === "/sobresuzuki" ? "active nav-link" : "nav-link"
              }
            >
              Sobre Suzuki
            </a>
            </Link>
            */}
          {/*<NavDropdown
            title="Sobre Suzuki"
            alignRight
            className={clickedId.includes("/sobre") ? "active" : ""}
          >
            <NavDropdown.Item href="/sobre/corporativo" className="d-flex">
              Corporativo
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#"
              className="d-flex"
              onClick={() => setClickedId("sobre")}
            >
              Noticias y Eventos
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#"
              className="d-flex"
              onClick={() => setClickedId("sobre")}
            >
              Patrocinio
            </NavDropdown.Item>

            <NavDropdown.Item
              href="#"
              className="d-flex"
              onClick={() => setClickedId("sobre")}
            >
              Contáctanos
            </NavDropdown.Item>
          </NavDropdown>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarSite;
