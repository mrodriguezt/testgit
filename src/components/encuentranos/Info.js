import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Info extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let className = "card-map";
    if (this.props.infoShow == true) className = "card-map show";
    let items = [];
    items.push(
      <div key={"agencia" + this.props.data.id} className="text2 mb-3">
        <p className="nombre">{this.props.data.nombre}</p>
        <p className="direccion">{this.props.data.direccion}</p>
        <div className="horario">
          <p className="horario-t">Horarios de atención </p>
          <p
            className="horario-c"
            dangerouslySetInnerHTML={{
              __html: this.props.data.horario.replaceAll("&nbsp;", " "),
            }}
          />
        </div>
        <div className="horario">
          <p className="horario-t">Síguenos en:</p>

          <div className="row col-12 px-0 align-items-center no-gutters mx-0">
            <a
              target="_blank"
              href={`${this.props.data.facebook}`}
              className="d-inline m-0 links"
            >
              <img
                src="/images/icons/FacebookLogo.svg"
                width="25"
                height="25"
                className="mr-2 mb-2"
                alt="Facebook"
              ></img>
            </a>
            <a
              target="_blank"
              href={`${this.props.data.instagram}`}
              className="d-inline m-0 links"
            >
              <img
                src="/images/icons/InstagramLogo.svg"
                width="25"
                height="25"
                className="mr-2 mb-2"
                alt="Instagram"
              ></img>
            </a>
          </div>
        </div>
      </div>
    );

    return (
      <Card style={{ width: "12rem !important" }} className={className}>
        <Card.Body>
          {items}
          <div className="row col-12 px-0 no-gutters pt-2 mx-0">
            <div className="col-6 d-flex flex-row ">
              <img
                src={this.props.iconMap}
                width="20"
                height="19"
                className="mr-2 mb-2"
                alt="Icono google maps"
              ></img>
              <a
                target="_blank"
                href={`https://www.google.com/maps/search/?api=1&query=${this.props.data.latitud},${this.props.data.longitud}`}
                className="d-inline m-0 links"
              >
                Ver en Google Maps
              </a>
            </div>
            <div className="col-6 d-flex flex-row justify-content-end">
              <img
                src={this.props.iconWaze}
                width="20"
                height="19"
                className="mr-2 mb-2"
                alt="Icono waze"
              ></img>
              <a
                target="_blank"
                href={`https://waze.com/ul?ll=${this.props.data.latitud},${this.props.data.longitud}&z=10&navigate=yes`}
                className="d-inline m-0 links"
              >
                Ver en Waze
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default Info;
