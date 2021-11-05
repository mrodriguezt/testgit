import React, { useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function Detail({ model }) {
  const caracteristicas = model.caracteristicas.map((item, index) => {
    return (
      <div
        key={`feature-${index}`}
        className={`row col-5 appear px-1 mb-3 align-items-center`}
      >
        <img src={`${item.icono.url}`} alt={item.texto} />
        {item.texto != " " && (
          <label
            className={`text-sec grey-lighter my-0 ${
              item.texto == " " ? "" : "col-10"
            }`}
          >
            {item.texto}
          </label>
        )}
      </div>
    );
  });
  return (
    <div className={"row col-xl-8 col-7 info d-block px-0"}>
      <img className="modelo" src={`${model.image.url}`} alt="Imagen modelo"/>
      <img className="galery-model" src={`${model.background.url}`} alt="Imagen fondo"/>
      <div className="galery-model ml-4 pt-3 col-12">
        <label>{model.descripcion}</label>
        <div className="row caracteristicas text-left">
          {caracteristicas}
          <div className="row col-12">
            <Link href={`/modelos/${model.slug}`}>
              <a style={{ textDecoration: "none" }}>
                <button className="btn nav mr-4 mt-2">Conoce más</button>
              </a>
            </Link>

            {/* <button className="btn nav mt-3">
                        Agenda un test drive
                      </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
