import React from "react";
import { Animated } from "react-animated-css";
import { Card, Button } from "react-bootstrap";
import Image from "next/image";
import LazyLoadingImage from '../../common/LazyLoadingImage';
import styles from './Itemtestimony.module.scss';
const Imagen = ({ classNameContainer, classNameImage, ...otherProps }) => {
  return (
    <div className={`${classNameContainer}`}>
      <LazyLoadingImage className={`${classNameImage}`} {...otherProps} />
    </div>
  );
}
function Itemtestimony(props) {
  const src =
    props.item.media_type === "VIDEO"
      ? props.item.thumbnail_url
      : props.item.media_url;
  return (
    <div className=" item-gallery-sm col-12 px-0 p-xl-2 px-1 ">
      <Animated
        animationIn="fadeInUp"
        animationInDelay={1500 * (props.index / 10)}
        animationInDuration={500}
        isVisible={props.visible}
      >
        <Card
          key={props.item.id}
          style={{
            width: "auto",
            marginRight: "5px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
          }}
        >
          <div className="h-card w-100" style={{ position: "relative" }}>
            <Imagen
              src={src}
              alt={`ig-${props.item.id}`}
              classNameContainer={styles.containerImg}
              classNameImage={styles.imgItem}
            />
          </div>
          <Card.Body className="text-left quote">
            <Card.Title
              className="dark d-inline"
              style={{ fontSize: "22px", fontWeight: "700" }}
            >
              <a
                href="https://www.instagram.com/suzukiautos.ec/"
                className="color-dark "
                style={{ textDecoration: "none" }}
              >
                @{props.item.username}
              </a>
            </Card.Title>
            <div className="text2 card-text mt-2 black-gradient">
              <p className="descripcion">{props.item.caption}</p>
            </div>
            <div className="col-12 px-0">
              <a href={props.item.permalink}>
                <p className="v-mas">Ver más en instagram</p>
              </a>
            </div>
          </Card.Body>
        </Card>
      </Animated>
    </div>
  );
}

export default Itemtestimony;
