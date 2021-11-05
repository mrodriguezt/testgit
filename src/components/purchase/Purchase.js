import React, { Component, useState, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import Breadcrumbs from "../common/Breadcrumbs";
import Galleryproduct from "../common/Galleryproduct.js";
import Processheader from "./Processheader.js";
import Stepcontainer from "./Stepcontainer.js";
import ModalMessage from "../common/ModalMessage";
import { PurchaseContext } from "../../context/PurchaseProvider";

function Purchase(props) {
  const { modal, showModal, model, textModal } = useContext(PurchaseContext);
  const routes = [
    {
      path: "/",
      title: "Inicio",
    },
    {
      path: "/#modelos",
      title: "Modelos",
    },
    {
      path: "/modelos/" + model.slug,
      title: model.modelo,
    },
    {
      path: "#",
      title: "Financiamiento",
    },
  ];
  //console.log(model);
  let features = model.caracteristicas.map((item, index) => {
    return (
      <div
        key={`feature-${index}`}
        className={`${model.caracteristicas.lenght != index + 1 ? "mr-3" : ""
          } feature d-flex align-items-center mb-3 ${item.texto == "" ? "align-self-center" : ""
          }`}
      >
        <img
          className={` ${item.texto?.trim() == "" ? "solo-img" : "feat-img"}`}
          src={`${item.icono?.url}`}
          alt="Feature"
        />
        {item.texto != "" && (
          <label className="m-0 ml-1">{item.texto}</label>
        )}
      </div>
    );
  });

  return (
    <div className="bg-white purchase">
      <Breadcrumbs routes={routes} />
      <div className="row col-12 px-0 mx-0">
        <div className="col-lg-6 col px-md-5 pt-5">
          <div className="col-12 row mt-5 px-3">
            <div className="model-name col-12 px-0">{model.modelo}</div>
            <div className="model-type col-12 px-0">{model.tipo}</div>
            <div className="model-info pb-2 col-12 px-0">{model.info}</div>
            <div className="model-feature d-flex flex-wrap ">{features}</div>
            <Galleryproduct isMobile={props.isMobile} />
          </div>
        </div>
        <div className="col-lg-6 px-4 pt-5 dark-bg">
          <div className=" process ">
            <Processheader isMobile={props.isMobile} />
            <Stepcontainer />
          </div>
        </div>
      </div>
      <ModalMessage
        text={textModal}
        show={modal}
        onClick={(bol) => showModal(bol)}
      />
    </div>
  );
}

export default Purchase;
