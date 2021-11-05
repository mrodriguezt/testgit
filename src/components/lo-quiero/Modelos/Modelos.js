import React,{useRef, useState, useEffect }from "react";
import Carousel from "react-multi-carousel";
import { useMediaQuery } from "react-responsive";
import "react-multi-carousel/lib/styles.css";
import Itemsmall from "./Itemsmall";
import styles from "./Modelos.module.scss";
import { modelos } from "../../../../utils/constant";
import { getModelos } from "../../../../pages/api/models";

function Modelos(props) {
  /*States */
  const [models, setModels] = useState(modelos);
  const [render, setRender] = useState(false);

  /*Mbile version*/
  const isMobile = useMediaQuery({ maxWidth: 550 });

  /*Get API info for gallery*/
  useEffect(() => {
    (async () => {
      const modelosApi = await getModelos()
      //console.log(modelosApi)
      setModels(modelosApi);
      setRender(true);
    })();
  }, []);

  const items = models.map((item, index) => (
    <Itemsmall key={index} item={item} visible={true} />
  ));

  const Gallerysmall =(props) =>{
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 3,
      },
  
      tablet: {
        breakpoint: { max: 1280, min: 600 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        partialVisibilityGutter: 40
      },
    };
    return (
      <div className="models-gallery px-md-5 my-2 mx-xl-3">
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows={false}
          autoPlay={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className="gallery-small justify-content-lg-center"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass="item-gallery-sm"
          keyBoardControl
          minimumTouchDrag={0}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          showDots={false}
          partialVisible={false}
          slidesToSlide={1}
          swipeable
        >
          {items}
        </Carousel>
      </div>
    );
  }

  return (
    <div className={`${styles.containerGallery} py-5 px-0`}>
      {!isMobile && render && <Gallerysmall models={models} />}
      {isMobile && render && <div>{items}</div>}
    </div>
  );
}
export default Modelos;
