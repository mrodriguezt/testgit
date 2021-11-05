import React, { useEffect, useState } from "react";
import Gallerysmall from "./Gallerysmall.js";
import { useMediaQuery } from "react-responsive";
import "react-multi-carousel/lib/styles.css";
import Itemsmall from "./Itemsmall";
import { modelos } from "../../../../utils/constant";
import { getModelos } from "../../../../pages/api/models";

function Gallery(props) {
  /*States */
  const [selected, setSelected] = useState("");
  const [models, setModels] = useState(modelos);
  const [render, setRender] = useState(false);

  /*Mbile version*/
  //const isMobile = useMediaQuery({ maxWidth: 550 });
  const isMobile = props?.isMobile;

  /*Get API info for gallery*/
  useEffect(() => {
    (async () => {
      const modelosApi = await getModelos()
      //console.log(modelosApi)
      setModels(modelosApi);
      setRender(true);
    })();
  }, []);

  const Items = (props) => {
    const items = props.models.map((item, index) => (
      <Itemsmall key={index} item={item} visible={true} />
    ));

    return <div>{items}</div>;
  };

  return (
    <div className="container-gallery bg-white pt-4  mb-3 px-0">
      <div id="modelos" className="header-gallery text-center pl-lg-5 my-3">
        <div className="title col-12 mb-0 px-0 pl-3 d-flex w-100 justify-content-between align-items-center">
          Modelos
          {!isMobile && <div className="line ml-lg-5 w-60" />}
          {isMobile && <div className="line w-40" />}
        </div>
      </div>
      {!isMobile && render && <Gallerysmall models={models} />}

      {isMobile && render && <Items models={models} />}
    </div>
  );
}
export default Gallery;
