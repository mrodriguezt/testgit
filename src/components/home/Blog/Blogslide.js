import React from "react";
import Carousel from 'react-multi-carousel';
import { useMediaQuery } from 'react-responsive'
import Itemblog from "./Itemblog"

function Blogslide(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },

    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 40
    }
  };

  const isMobile = useMediaQuery({ maxWidth: 464 })

  const list = [
    {
      id: 0,
      title: 'Noche Suzuki',
      description: 'En SUZUKI trabajamos para brindar la mejor experiencia a nuestros clientes. Este compromiso atraviesa todos nuestros ejes de acción, desde ofrecer un portafolio  ...',
      image: 'fotografia.png',
    },
    {
      id: 1,
      title: 'Suzuki “PURA TRACCIÓN EXPEDITION”',
      description: 'Pura Tracción Expedition es un proyecto que busca comunicar masivamente los beneficios y utilidades 4×4 de los modelos Suzuki, como ...',
      image: 'fotografia-1.png',
    },
    {
      id: 2,
      title: 'Apoyo a emprendedores',
      description: 'Dentro de los objetivos estratégicos del Grupo Baca está el de: “Apoyar a Emprendedores”, por lo que el Directorio del Grupo ha decidido celebrar  ...',
      image: 'fotografia-2.png',
    },
    {
      id: 3,
      title: 'Noche Suzuki',
      description: 'En SUZUKI trabajamos para brindar la mejor experiencia a nuestros clientes. Este compromiso atraviesa todos nuestros ejes de acción, desde ofrecer un portafolio  ...',
      image: 'fotografia-1.png',
    },
    {
      id: 4,
      title: 'Apoyo a emprendedores',
      description: 'Pura Tracción Expedition es un proyecto que busca comunicar masivamente los beneficios y utilidades 4×4 de los modelos Suzuki, como ...',
      image: 'fotografia-2.png',
    },

  ]

  const next = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide + 1,
    }));
  };

  const prev = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide - 1,
    }));
  };

  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide, totalItems, slidesToShow }
    } = rest;

    return (
      <div className="carousel-button-group d-none d-md-flex">
        <a className="next mr-3" onClick={() => next()}></a>
        <a className="before mr-3" onClick={() => previous()}></a>
      </div>
    );
  };

  const items = list.map((item, index) => (<Itemblog key={index} item={item} visible={props.visible} isMobile={isMobile}/>))
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={false}
      autoPlay={false}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      dotListClassName=""
      draggable
      focusOnSelect={false}
      infinite
      itemClassName=""
      keyBoardControl
      minimumTouchDrag={0}
      renderDotsOutside={false}
      showDots={false}
      partialVisible={isMobile}
      slidesToSlide={1}
      swipeable
      renderButtonGroupOutside
      customButtonGroup={<ButtonGroup
        next={next}
        previous={prev}
      />}>
      { items}
    </Carousel>

  )
}

export default Blogslide;