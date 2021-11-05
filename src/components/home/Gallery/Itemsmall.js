import React from "react";
import { Card } from "react-bootstrap";
import NumberFormat from "react-number-format";
import Link from "next/link";
import { Animated } from "react-animated-css";
import Image from "next/image";
import LazyILoadingImage from "../../common/LazyLoadingImage";
import styles from './ItemSmall.module.scss';
const Imagen = (props) => {
  return (
    <div className={styles.containerImg}>
      <LazyILoadingImage className={styles.imgItemBanner} {...props} />
    </div>);
}


function Itemsmall(props) {
  let features = props.item.caracteristicas.map((item, index) => {
    return (
      <div
        key={`feature-${index}`}
        className={`col-6 appear px-1 mb-3 ${item.texto == " " ? "align-self-center" : ""
          }`}
      >
        <div
          className={`text-sec grey-lighter ${item.texto == " " ? "justify-content-center flex-row" : ""
            }`}
        >
          <div
            className={`icon-img px-0 ${item.texto == " " ? "col-12" : "normal"}`}
            style={{ height: "33px", width: "33px", position: "relative" }}
          >
            <Image layout="fill" objectFit="contain" src={item.icono.url} alt={`feature-${index}`} />
          </div>
          {item.texto != " " && <label>{item.texto}</label>}
        </div>
      </div>
    );
  });
  return (
    <div className=" item-gallery col-12 mb-2 px-2">
      <Animated
        animationIn="fadeInUp"
        animationInDelay={1500 * (props.index / 10)}
        animationInDuration={500}
        isVisible={props.visible}
      >
        <Card className="py-2" style={{ height: "630px" }}>
          <Card.Body className="text-center">
            <Card.Title className="text-center">
              <label className="title1 text-uppercase black d-block mb-0 appear">
                {props.item.modelo}
              </label>
              <label className="subtitle d-block my-2 appear">
                {props.item.tipo}
              </label>
            </Card.Title>

            <div className="text2 black-gradient">
              <div
                className={`icon-img px-0 mr-2 col-12`}
                style={{ height: "250px", position: "relative" }}
              >
                <Imagen src={props.item.image.url} alt={props.item.modelo} />
              </div>
              {
              /*<label className="title2 d-block mb-0 my-0 appear">
                Desde{" "}
                <NumberFormat
                  value={props.item.precio}
                  thousandSeparator="."
                  decimalSeparator=","
                  displayType={"text"}
                  prefix={"$"}
                />
              </label>*/
              }
              <div className="row col-12 caracteristicas txt-al my-2 px-xl-3 px-0 ">
                {features}
              </div>
              <div
                className="row col-12 mx-0 mt-3"
                style={{
                  position: "absolute",
                  bottom: "4%",
                  width: "90%",
                  left: "5%",
                }}
              >
                <Link href={"/modelos/" + props.item.slug}>
                  <button className="btn btn-primary w-100">
                    Quiero Cotizar
                  </button>
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Animated>
    </div>
  );
}

export default Itemsmall;
