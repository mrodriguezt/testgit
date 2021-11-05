import React from "react";
import { Card } from "react-bootstrap";
import NumberFormat from "react-number-format";
import styles from "./Modelos.module.scss";
import Link from "next/link";
import Image from "next/image";

function Itemsmall(props) {
  let features = props.item.caracteristicas.map((item, index) => {
    return (
      <div
        key={`feature-${index}`}
        className={`col-6 appear px-1 mb-3 ${
          item.texto == " " ? "align-self-center" : ""
        }`}
      >
        <div
          className={`${styles.textSec} grey-lighter ${
            item.texto == " " ? "justify-content-center flex-row" : ""
          }`}
        >
          <div
            className={`icon-img px-0 ${
              item.texto == " " ? "col-12" : styles.normal
            }`}
            style={{ height: "33px", width: "33px", position: "relative" }}
          >
            <Image
              layout="fill"
              objectFit="contain"
              src={item.icono.url}
              alt={`feature-${index}`}
            />
          </div>
          {item.texto != " " && <label>{item.texto}</label>}
        </div>
      </div>
    );
  });
  return (
    <div className=" item-gallery-sm col-12 mb-2 px-2">
      <Card className={`py-2 ${styles.card}`} style={{ height: "630px" }}>
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
              className={`px-0 mr-2 col-12`}
              style={{ height: "250px", position: "relative" }}
            >
              <Image
                layout="fill"
                objectFit="contain"
                src={props.item.image.url}
                alt={props.item.modelo}
              />
            </div>
            {
            /*
            <label className="title2 d-block mb-0 my-0 appear">
              Desde{" "}
              <NumberFormat
                value={props.item.precio}
                thousandSeparator="."
                decimalSeparator=","
                displayType={"text"}
                prefix={"$"}
              />
            </label>
            */
            }
            <div
              className={`row col-12 ${styles.caracteristicas} ${styles.txtAl} my-2 px-0 "`}
            >
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
              <Link href={"/lo-quiero/test-drive"}>
                <button className="btn btn-item blue-bg w-100">
                  Test Drive
                </button>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Itemsmall;
