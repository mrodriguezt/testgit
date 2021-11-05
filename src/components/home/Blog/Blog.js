import React, { useState, useRef, useEffect } from "react";
import Blogslide from "./Blogslide";
import useOnScreen from "../../../hooks/useOnScreen";
import { useMediaQuery } from "react-responsive";
function Blog(props) {
  
  const divRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const onScreen = useOnScreen(divRef);

  useEffect(() => {
    setVisible(onScreen);
  }, [onScreen]);
  
  const isMobile = useMediaQuery({ maxWidth: 750 });

  return (
      <div ref={divRef} className="noticias row col-12 mx-0 px-0">
        <div className="row col-12 pr-0 pl-lg-6 mx-0 ml-lg-5 justify-content-between align-items-center my-3">
          <label className="title mb-0 mx-lg-5 pl-lg-6 d-block">Noticias</label>
          
          {!isMobile && (<div className="line w-60 ml-lg-5 pl-lg-5" />)}
          {isMobile && (<div className="line w-40" />)}
        </div>
        <div className="row col-12 mx-0 pr-0 px-lg-5 justify-content-md-center">
          <div className="col-lg-9 col-md-8 col-sm-12 px-0">
            <Blogslide visible={visible}/>
          </div>
          {/*<div className="col-12 row justify-content-center my-3">
            <button className="btn btn-item w-lg-50 w-sm-100">
              Visita nuestro Blog
            </button>
  </div>*/}
        </div>
      </div>
  );
}

export default Blog;
