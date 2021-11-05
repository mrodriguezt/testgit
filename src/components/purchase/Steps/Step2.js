import React, { useState, useContext, useRef } from 'react'
import { PurchaseContext } from "../../../context/PurchaseProvider";

import { useRouter } from "next/router";
import Clientinfo from '../../forms/Clientinfo.js'

function Step2() {


  const { model, selectedModelData, selectedColor, selectedPaquete, saveStep, saveClient } = useContext(PurchaseContext);

  const [hide, setHide] = useState(true)
  const router = useRouter();
  const ColorScroll = useRef()


  const handleClick = (index, idFormCotizacion) => {
    saveClient(index);
    handleNext(idFormCotizacion);
  }

  const handleNext = (idFormCotizacion) => {
    saveStep(2);
    router.push({
      //pathname: `/cotizacion/${router.query.id}/finalcotizacion`,
      pathname: `/cotizacion/final/${idFormCotizacion}`,
    })
  }

  const handleReturn = (index) => {
    saveStep(1);
  }
  const data =
  {
    color: selectedModelData.colores[selectedColor].nombre,
    version: selectedModelData.nombre,
    paquete: selectedModelData.paquetes[selectedPaquete].nombre,
    modelo: model.modelo,
    tipo: model.tipo,
    precio: model.precio,
    slug: model.slug
  };

  return (
    <div className="mt-3">
      <label className="title2 black">Ingresa tus datos</label>
      <p className="text2 grey-light">Ingresa la siguiente información para que uno de nuestros asesores se pongan en contacto contigo.</p>
      <Clientinfo nextStep={handleClick} previous={handleReturn} model={data} />

    </div>
  )
};

export default Step2;