import React, { useState, useContext } from "react";
import Breadcrumbs from "../common/Breadcrumbs";
import Galleryproduct from "../common/Galleryproduct.js";
import Processheader from "./Processheader.js";
import Stepcontainer from "./Stepcontainer.js";
import ModalMessage from '../common/ModalMessage';

import { PurchaseContext } from "../../context/PurchaseProvider";

function Purchasereponsive(props) {
  const { modal, showModal, model, textModal } = useContext(PurchaseContext);
  const routes = [
    {
      path: "/",
      title: "Inicio",
    },
    {
      path: "/modelos",
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
  let features = model.caracteristicas.map((item, index) => {
    return (
      <div key={`feature-${index}`} className={`px-1 feature d-flex align-items-center mb-3 ${item.texto?.trim() == "" ? "align-self-center" : ""}`}>
        <img
          className={` ${item.texto?.trim() == "" ? "solo-img" : "feat-img"}`}
          src={`${item.icono?.url}`}
          alt="Feature"
        />
        {item.texto?.trim() != "" && <label className="m-0 ml-1">{item.texto}</label>}
      </div>
    );
  });

  return (
    <div className="bg-white purchase row mx-0">
      <div className="col-12 my-lg-5">
        <Processheader isMobile={props.isMobile} />
        <div className="model-name col-12 px-0">{model.modelo}</div>
        <div className="model-type col-12 px-0">{model.tipo}</div>
        <div className="model-info pb-2 col-12 px-0">{model.info}</div>
        <div className="model-feature d-flex flex-wrap ">{features}</div>
        <Galleryproduct isMobile={props.isMobile} />
      </div>
      <div className="col-12 ">
        <div className="process">
          <Stepcontainer isMobile={props.isMobile} />
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

export default Purchasereponsive;
