import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import Mark from "./Mark";

//GoogleMap: to take in map props)

class Map extends Component {
  constructor(props) {
    super(props);
    this.lat = null;
    this.lng = null;
    this.state = {
      center: this.props.positionActual,
    };
  }

  currentLocation = () => {
    this.props.currentLocation();
  };
  handleClickMark = (index, selected) => {
    let agencies_pev = this.props.agencies;

    agencies_pev.forEach(function (element, index) {
      element["selected"] = false;
    });

    let agencie = agencies_pev[index];
    agencie["selected"] = selected;
    agencies_pev[index] = agencie;

    let lat = agencie.latitud - 0.002;
    let lng = agencie.longitud + 0.002;
    this.setState({ center: { lat: lat, lng: lng } });

    this.props.onClickMap(agencies_pev);
  };

  render() {
    let center = this.props.positionActual;
    let infoShow = false;

    const llistMarks = this.props.agencies.map((agencie, index) => {
      if (agencie.selected) {
        let lat = Number(agencie.latitud) - 0.0002;
        let lng = Number(agencie.longitud) + 0.0002;
        center = { lat: lat, lng: lng };
        infoShow = true;
      }

      return (
        <Mark
          key={index.toString()}
          lat={Number(agencie.latitud)}
          lng={Number(agencie.longitud)}
          index={index}
          selected={agencie.selected}
          visible={agencie.selected || this.props.firstShow }
          onClickMark={this.handleClickMark}
        />
      );
    });
    const GoogleMapExample = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          options={{ styles: [{ stylers: [{ saturation: "-100" }] }] }}
          defaultCenter={center}
          defaultZoom={this.props.firstShow? 12:20}
        >
          {llistMarks}
          <Marker
            position={this.props.positionActual}
            name={"Posición Actual"}
            onClick={this.currentLocation}
            visible={true}
          ></Marker>
        </GoogleMap>
      ))
    );

    let containerElement = (
      <div style={{ height: `100%`, width: "100%", minHeight: "480px" }} />
    );

    return (
      <div className="container-map-agencia">
        <GoogleMapExample
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTmEnQaciLiDZyivA_WPKqP-hpBkZhFSE&libraries=geometry,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={containerElement}
          mapElement={<div style={{ height: `100%` }} />}
          isMarkerShown="true"
        />
      </div>
    );
  }
}
export default Map;
