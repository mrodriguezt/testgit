import React, { useState, useContext } from "react";
import { PurchaseContext } from "../../context/PurchaseProvider";
import { Animated } from "react-animated-css";
import NumberFormat from "react-number-format";
import Image from "next/image";
const Images = ({ src }) => {
  return (
    <div
      className="col-12 d-flex px-0 mx-0 align-items-center justify-content-center overflow-hidden"
      style={{ height: "530px" }}
    >

      {src &&
        <div className='galleryImgCotizacion'
        >
          <img src={src}></img>


        </div>
      }
    </div>
  );
};
function Galleryproduct(props) {
  //getModel is a function con PurchaseContext than return the selected model by default 0
  const { selectedModelData, selectedCar, selectedColor, model } =
    useContext(PurchaseContext);

  let imgs = model?.silueta?.url;
  let coloresModel = selectedModelData.colores;
  let src = !selectedCar ? imgs : coloresModel[selectedColor].imagen?.url;


  return (
    <>
      {/* <Carousel showIndicators={ props.isMobile } axis="horizontal" showThumbs={ !props.isMobile } showStatus={ false } showArrows={ false}>
      { images }
      </Carousel> */}

      <Images src={src} />
      <div className="btns-gallery">
        Precio Desde{" "}
        <p>
          <NumberFormat
            value={!selectedCar ? "$0" : selectedModelData.precio}
            thousandSeparator="."
            decimalSeparator=","
            displayType={"text"}
            prefix={"$"}
          />
        </p>
      </div>
    </>
  );
}

export default Galleryproduct;
