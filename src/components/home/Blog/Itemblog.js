import React from "react";
import { Card, Button } from "react-bootstrap";
import { Animated } from "react-animated-css";
function Itemblog(props) {
  return (
    <div className=" item-gallery-sm col-12 px-0 p-xl-3">
      <Animated
        animationIn="fadeInUp"
        animationInDelay={1500 * (props.item.id/10)}
        animationInDuration={450}
        isVisible={props.visible}
      >
        <Card
          key={props.item.id}
          style={{ width: "auto", marginRight: "5px" }}
          className=""
        >
          <Card.Img variant="top" src={"/images/" + props.item.image} />
          <Card.Body className="text-left">
            <Card.Title className="dark w-75" 
              style={{ fontSize: "22px", fontWeight: "700" }}>{props.item.title}</Card.Title>

            <div className="card-text text2 black-gradient mb-3">
              <div className="separador" />
              <br />
              {props.item.description}
            </div>
            {/*<a className="ver-mas subtitle2">
              Conoce más
              <img
                className="ml-2"
                src="/images/icons/arrowr.png"
                alt="Ver más..."
              />
  </a>*/}
          </Card.Body>
        </Card>
      </Animated>
    </div>
  );
}

export default Itemblog;
