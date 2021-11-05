import React, { useState, useContext, useRef, useEffect } from "react";
import { PurchaseContext } from "../../../context/PurchaseProvider";
import { StorageInconcertContext } from "../../../context/StorageFormInconcert";
import { Animated } from "react-animated-css";
import Paquetes from "./Step1/Paquetes.js";
import Planes from "./Step1/Planes.js";
import Colors from "../../../components/common/Colors.js";

function Step1() {
  const {
    model,
    selectedModelData,
    selectedColor,
    saveStep,
    saveModel,
    saveColor,
    savePaquete,
    dataForm,
    saveDataForm,
  } = useContext(PurchaseContext);
  const { cotizacionCar, saveCotizacionInconcert } = useContext(
    StorageInconcertContext
  );

  const [hide, setHide] = useState(true);
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const ColorScroll = useRef();
  const [selected, setSelected] = useState(false);

  /*useEffect(() => {
    sessionStorage.setItem("color", 0);
    sessionStorage.setItem("selectedCar", false);
  }, []);*/

  const handleClick = (index) => {

    setSelected(true);
    saveCotizacionInconcert({
      ...cotizacionCar,
      cv: model.versions[index].nombre,
      cm: model.modelo,
      cp: model.versions[index].precio,
    });
    saveDataForm({
      ...dataForm,
      precioActual: model.versions[index].precio,
      version: model.versions[index].nombre,
    });
    saveModel(index);
    setButtonEnabled(false);
  };
  const handleNext = (index) => {
    let accesorios = {};
    accesorios = {
      ...dataForm,
    };

    if (dataForm?.color?.trim() == "") {
      let color = selectedModelData?.colores[dataForm?.indexColor]?.nombre;
      saveDataForm({
        ...dataForm,
        color: color,
      });
      accesorios.color = color;
      saveCotizacionInconcert({
        ...cotizacionCar,
        cc: color,
      });
    }

  /*  window.sessionStorage.setItem("accessories", JSON.stringify(accesorios));
    let imgCar = selectedModelData?.colores[dataForm?.indexColor]?.imagen?.url;
    if (!imgCar) {
      imgCar = selectedModelData?.imagen?.url;
    }
    window.sessionStorage.setItem(
      "imagen",
      JSON.stringify(imgCar)
    ); //TODO AUTOMAMIZAR PARA LAS VERSIONES Y MODELOS*/
    if (!hide) {
      saveStep(1);
    }
  };

  const handleClickColor = (index) => {
    saveCotizacionInconcert({
      ...cotizacionCar,
      cc: selectedModelData.colores[index].nombre,
    });
    saveDataForm({
      ...dataForm,
      indexColor: index,
      color: selectedModelData.colores[index].nombre,
    });
    saveColor(index);

  };

  const handleClickplan = (index) => {
    saveCotizacionInconcert({
      ...cotizacionCar,
      ctpa: selectedModelData.paquetes[index].nombre,
    });
    setHide(false);
    savePaquete(index);
    ColorScroll.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <div className="step1">
      <div className="pt-3">
        <label className="step-title ">Configura tu Suzuki</label>

        <p className="subtitle ">
          Elige las opciones que deseas para tu vehículo.
        </p>
      </div>
      <Planes planes={model.versions} onClick={handleClick} />
      {selected ? (
        <Animated
          animationIn="fadeInUp"
          animationInDuration={1000}
          isVisible={true}
        >
          <div className="py-3" ref={ColorScroll}>
            <div className="pt-2">
              <label className="title1 black mb-3">Elige un color</label>
              <Colors
                colors={selectedModelData.colores}
                selected={selectedColor}
                onClick={handleClickColor}
              />
            </div>
          </div>

          <Paquetes
            planes={selectedModelData.paquetes}
            check={buttonEnabled}
            onClick={handleClickplan}
          />

          <div className={hide ? "py-3 blocked" : "py-3"} ref={ColorScroll}>
            <div className="border-top col-12 pt-4 mt-4">
              <button className="btn btn-primary w-100" onClick={handleNext}>
                CONTINUAR
              </button>
            </div>
          </div>
        </Animated>
      ) : (
        ""
      )}
    </div>
  );
}

export default Step1;
