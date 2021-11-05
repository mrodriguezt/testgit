import React, { Component, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Map from "./Map";
import Info from "./Info";
import { withRouter } from "next/router";

import Breadcrumbs from "../common/Breadcrumbs";

export default withRouter(
  class Agencias extends Component {
    constructor(props) {
      super(props);
      this.routes = [
        {
          path: "/",
          title: "Inicio",
        },
        {
          path: "/",
          title: "Encuéntranos",
        },
      ];
      let title = "Encuéntranos";
      this.state = {
        title: title,
        infoShow: false,
        agencies: this.props.agencias,
        positionActual: null,
        firstShow: true,
        miUbicacion: false,
        porCiudad: false,
        verCiudad: false,
        ciudades: this.props.ciudades,
      };
    }

    Deg2Rad = (deg) => {
      return (deg * Math.PI) / 180;
    };

    PythagorasEquirectangular = (lat1, lon1, lat2, lon2) => {
      lat1 = this.Deg2Rad(lat1);
      lat2 = this.Deg2Rad(lat2);
      lon1 = this.Deg2Rad(lon1);
      lon2 = this.Deg2Rad(lon2);
      var R = 6371; // km
      var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
      var y = lat2 - lat1;
      var d = Math.sqrt(x * x + y * y) * R;
      return d;
    };

    orderNearbyAgencies = (lat, lng) => {
      let agencies_pev = this.props.agencias;

      for (var index = 0; index < agencies_pev.length; ++index) {
        var dif = this.PythagorasEquirectangular(
          lat,
          lng,
          agencies_pev[index].latitud,
          agencies_pev[index].longitud
        );
        agencies_pev[index]["distancia"] = dif;
      }
      return agencies_pev;
    };

    currentLocation = () => {
      let agencies_pev = this.orderNearbyAgencies(
        this.state.positionActual.lat,
        this.state.positionActual.lng
      );
      let infoShow = false;
      //console.log("ordenadas", agencies_pev);
      agencies_pev.forEach(function (element, i) {
        element["selected"] = false;
      });
      agencies_pev.sort((a, b) => (a.distancia > b.distancia && 1 || -1));
      this.setState({
        firstShow: true,
        agencies: agencies_pev,
        miUbicacion: true,
        porCiudad: false,
        infoShow: infoShow,
      });
    };

    verCiudades = () => {
      this.setState({
        miUbicacion: false,
        porCiudad: true,
        infoShow: false,
        verCiudad: true,
      });
    };

    componentDidMount = () => {
      var pos = {
        lat: 0,
        lng: 0,
      };
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            this.setState({
              positionActual: pos,
            });
          },
          function () {
            //handle location error (i.e. if user disallowed location access manually)
          }
        );
      } else {
        pos = {
          lat: -0.3039491,
          lng: -78.4542021,
        };

        this.setState({
          positionActual: pos,
        });
        // Browser doesn't support Geolocation
      }
    };
    handleClickMap = (agencies) => {
      this.setState({
        agencies: agencies,
        firstShow: false,
      });
    };

    handleSelecttab = (k) => {
      let index = k.substring(k.length - 1);
      if (index == 1) {
        this.setState({ agencies: this.props.agencias });
      } else {
        this.setState({ agencies: this.props.agencias });
      }
    };

    handleClick = (index) => (e) => {
      let agencies_pev = this.state.agencies;
      let infoShow = false;
      agencies_pev.forEach(function (element, i) {
        if (i == index) {
          if (!element["selected"]) {
            element["selected"] = true;
            infoShow = true;
          }
        } else element["selected"] = false;
      });

      this.setState({
        agencies: agencies_pev,
        infoShow: infoShow,
        miUbicacion: false,
        porCiudad: false,
        firstShow: false,
      });
    };

    verCiudad = (ciudad) => (e) => {
      let agencies_pev = this.props.agencias;
      let agencies_new = [];
      agencies_pev.forEach(function (element, i) {
        if (element.ciudad == ciudad) {
          element.selected = false;
          agencies_new.push(element);
        }
      });
      this.setState({
        agencies: agencies_new,
        infoShow: false,
        firstShow: true,
        verCiudad: false,
      });
    };

    render() {
      let infoShow = false;
      let data = null;

      const listItems = this.state.agencies.map((agencie, index) => {
        let active = "";
        if (agencie.selected) {
          active = "active";
          infoShow = true;
          data = agencie;
        }

        return (
          <div
            key={index.toString()}
            className={"div-pointer item " + active}
            href={"#item" + index}
            onClick={this.handleClick(index)}
          >
            <div id={"item" + index} className="agencie-info">
              <p>
                <span className="dot mr-3"></span>
                {agencie.nombre}
              </p>
              <p>
                <span className="dot mr-3" />
                {agencie.direccion}
              </p>
            </div>
          </div>
        );
      });

      const listCiudades = this.state.ciudades.map((ciudad, index) => {
        return (
          <div
            key={index.toString()}
            className={"div-pointer item col-12"}
            id={"ciudad" + index}
            onClick={this.verCiudad(ciudad)}
          >
            <div className="city-info">{ciudad}</div>
          </div>
        );
      });

      const Items = () => {
        return (
          <div className="mb-4 mb-lg-0 col-12 pl-0 pr-lg-5">
            <div
              className={`row container-location mb-4 mx-0 ${
                this.state.miUbicacion ? "selected" : ""
              }`}
            >
              <div className="col div-pointer" onClick={this.currentLocation}>
                <div className="d-flex flex-row justify-content-center ubicacion align-items-center  ">
                  <h5 className="mb-0 d-inline label-ubicacion">
                    Buscar por mi ubicación actual
                  </h5>
                </div>
              </div>
            </div>
            <div className="position-relative">
              <div
                className={`row container-location mb-4 mx-0 ${
                  this.state.porCiudad ? "selected" : ""
                }`}
              >
                <div className="col div-pointer" onClick={this.verCiudades}>
                  <div className="d-flex flex-row justify-content-center ciudad align-items-center  ">
                    <h5 className="mb-0 d-inline label-ubicacion">
                      Buscar por ciudad
                    </h5>
                  </div>
                </div>
              </div>
              {this.state.porCiudad && this.state.verCiudad && (
                <div className="ciudades bg-white w-100">{listCiudades}</div>
              )}
            </div>
            <div className="list-items">
              {(infoShow || this.state.miUbicacion || this.state.porCiudad) &&
                listItems}
            </div>
          </div>
        );
      };
      const Mapa = () => {};

      return (
        <>
          <div className="container-agencias">
            <Breadcrumbs routes={this.routes} paddingSeparador="py-3" />

            <div className="row px-0 mx-0">
              <div className="col-lg-6 pt-5 mb-4 mb-lg-0 col-12 pl-lg-5">
                <div className="row  pt-5 pl-lg-5 titulo-consesionario mx-0">
                  <h1 className="titulo-pagina m-0">Encuentra un <br/> concesionario Suzuki</h1>
                </div>
                <div className="row my-5 px-lg-5 titulo-consesionario mx-0">
                  <Tabs
                    defaultActiveKey="tab0"
                    id="tab-encuentranos"
                    className="tabcomp col-12 tab-detail"
                    onSelect={(k) => this.handleSelecttab(k)}
                  >
                    <Tab eventKey={"tab0"} title="Agencias">
                      <Items />
                    </Tab>
                    <Tab eventKey={"tab1"} title="Talleres">
                      <Items />
                    </Tab>
                  </Tabs>
                </div>
              </div>
              <div id="mapa" className="col-lg-6 col-12 position-relative px-0">
                <Map
                  agencies={this.state.agencies}
                  onClickMap={this.handleClickMap}
                  positionActual={this.state.positionActual}
                  firstShow={this.state.firstShow}
                  currentLocation={this.currentLocation}
                />
                <div className=" container-flotante-detail-location">
                  {infoShow && (
                    <Info
                      className="px-3"
                      infoShow={infoShow}
                      data={data}
                      iconMap="/images/icons/google-maps.png"
                      iconWaze="/images/icons/icon_waze.png"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
);
