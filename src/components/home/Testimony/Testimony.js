import React, { useState, useEffect, useRef } from "react";
import useOnScreen from "../../../hooks/useOnScreen";
import Itemtestimony from "./Itemtestimony";
import { useMediaQuery } from "react-responsive";
import Carousel from "react-multi-carousel";

function Testimony(props) {

  const divRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const onScreen = useOnScreen(divRef);

  useEffect(() => {
    setVisible(onScreen);
  }, [onScreen]);
  const list = props.data;
  const isMobile = props?.isMobile;//useMediaQuery({ maxWidth: 850 });
  const items = list.slice(0, 4).map((item, index) => (
    <Itemtestimony index={index} key={`ig-${index}`} item={item} visible={visible || isMobile} />
  ));

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },

    tablet: {
      breakpoint: { max: 1024, min: 554 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 554, min: 0 },
      items: 1,
      partialVisibilityGutter: 40
    },
  };

  return (
    <div
      ref={divRef}
      className="row bg-white testimony col-12 px-0 mx-0 bg-grey-section"
    >
      <div className="row col-12 px-0 mx-0 justify-content-between align-items-center my-3">
        {!isMobile && <div className="line w-40 pr-xl-5" />}
        <label className={`title pl-3 mb-0 px-xl-5 d-block ${!isMobile ? "w-60" : "w-100"}`}>
          Vive la experiencia Suzuki
        </label>
      </div>

      <div className="row col-12 mx-0 pr-0 px-lg-1 px-xl-1 px-md-5 py-lg-5 py-sm-2 py-md-2  px-sm-4 justify-content-md-center">
        <div className="col-lg-10 col-sm-12 px-0 list-testimony">
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows={false}
            autoPlay={false}
            autoPlaySpeed={3000}
            centerMode={false}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            keyBoardControl
            minimumTouchDrag={0}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots={false}
            partialVisible={isMobile}
            slidesToSlide={1}
            swipeable
          >
            {items}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
