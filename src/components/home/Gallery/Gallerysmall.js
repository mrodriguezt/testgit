import useOnScreen from "../../../hooks/useOnScreen";
import React,{useRef, useState, useEffect }from "react";
import Carousel from "react-multi-carousel";
import Itemsmall from "./Itemsmall";

function Gallerysmall(props) {

  const divRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const onScreen = useOnScreen(divRef, 0.5);

  useEffect(() => {
    setVisible(onScreen);
  }, [onScreen]);
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
      breakpoint: { max: 1280, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  const items = props.models.map((item, index) => (
    <Itemsmall key={index} item={item} visible={visible} index={index}/>
  ));
  return (
    <div ref={divRef} className="models-gallery px-xl-3 my-2 mx-xl-3">
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
        itemClass="item-gallery"
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

export default Gallerysmall;
