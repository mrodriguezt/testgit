import React, { useState, useContext, useEffect } from "react";
import { PurchaseContext } from "../../context/PurchaseProvider";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import NumberFormat from "react-number-format";
import Image from "next/image";
function GalleryproductStorage({ dataCotizacion }) {
  //getModel is a function con PurchaseContext than return the selected model by default 0
  //const { selectedModelData, selectedCar } = useContext(PurchaseContext);
  const [selectedModelData, setSelected] = useState([]);
  const [selectedCar, setCar] = useState([]);
  const [imagen, setImagen] = useState(null);

  let imgs = selectedModelData?.images;
  const images = imgs?.map((image, index) => {
    return (
      <div key={`img-${index} `} className="my-auto">
        <img src={image} />
      </div>
    );
  });


  return (
    <>
      {/* <Carousel showIndicators={ props.isMobile } axis="horizontal" showThumbs={ !props.isMobile } showStatus={ false } showArrows={ false}>
      { images }
      </Carousel> */}
      <div
        className="col-12 d-flex px-0 mx-0 align-items-center justify-content-center"
        style={{ height: "530px" }}
      >

        {dataCotizacion?.imagen && (
          <Image
            src={dataCotizacion?.imagen}
            layout="fill"
            objectFit="contain"
            alt="Imagen cotización final"
          />
        )}
      </div>
      <div className="btns-gallery">
        Precio Desde{" "}
        <p>
          <NumberFormat
            value={dataCotizacion?.precioVersion}
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

export default GalleryproductStorage;
