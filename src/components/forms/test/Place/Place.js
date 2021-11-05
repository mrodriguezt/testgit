import React from "react";
import Input from "../../../common/Field";
import Select from "../../../common/Select";
import Calendar from "../../../common/Calendar";
import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import { getAgencias } from "../../../../../pages/api/Contacus";
import LinkSugar from "../../../../../utils/link-sugar";
import { StorageInconcertContext } from "../../../../context/StorageFormInconcert";
import { sendTestDrive } from "../../../../../pages/api/TestDrive";
import { horarios } from "../../../../../utils/constant";

function Place(props) {
  //create array-references to the inputs inside the component input
  //React.createRef() for every input
  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  //store values we create a object and state with and value
  const [data, setData] = React.useState({});
  const [agencias, setAgencias] = React.useState([]);
  const [agenciasAux, setAgenciasAux] = React.useState([]);
  const [ciudades, setCiudades] = React.useState([]);
  let history = useHistory();
  let router = useRouter();

  React.useEffect(() => {
    async function agenciasTalleres() {
      let array_ciudades = [];
      const responseAgencia = await getAgencias();
      responseAgencia.map((item)=>{
        if(!array_ciudades.includes(item.ciudad)){
          array_ciudades.push(item.ciudad)
      }});
      array_ciudades.map((item)=>{
        let ciudad = {nombre: item};
        ciudades.push(ciudad)
      });
      setAgenciasAux(responseAgencia);
      setAgencias(responseAgencia);
      setCiudades(ciudades);
    }
    agenciasTalleres();
  }, []);

  //function to handle change on every input component
  const handleChange = (value, name) => {
    //use the old state   ...prev create a new copy, [name]: value set on key name the value  []
    setData((prev) => ({ ...prev, [name]: value }));
    if (name == "Agencia") {
      let agenciaSelected = agencias.find((agencia) => agencia.nombre == value);
      //console.log(agenciaSelected);
      sessionStorage.setItem("agenciaTest", JSON.stringify(agenciaSelected));
    }
    if (name == "Ciudad") {
      inputRefs.current[1].current.clear();
      let agenciasCiudad = agenciasAux.filter((agencia) => agencia.ciudad == value);
      setAgencias(agenciasCiudad);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    let isValid = true;
    //Valid every input-component using the ref to the input inside with the valid
    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      if (!valid) isValid = valid;
    }

    if (!isValid) return;
    else {
      if (props.changePlace) props.changePlace(data);
    }
  };

  return (
    <form
      onSubmit={submitForm}
      className={props.HabilitarAllInputs ? "" : "disabled-form-test"}
    >
      <div className="form-row align-items-center">
        <div className="col-12 mb-2">
          <label className="title2 black">Lugar de Test Drive</label>
        </div>

        <div className="col-12 mb-2">
          <Select
            title="Ciudad"
            disabled={!props.HabilitarAllInputs}
            id="Ciudad"
            ref={inputRefs.current[0]}
            validation="required"
            id="Ciudad"
            field="nombre"
            items={ciudades}
            onChange={(value, name) => {
              handleChange(value, name);
              if (props.inconcert) props.inconcert("tcu", value);
            }}
          />
        </div>

        <div className="col-12 mb-2">
          <Select
            title="Agencia"
            disabled={!props.HabilitarAllInputs}
            id="Agencia"
            ref={inputRefs.current[1]}
            validation="required"
            id="Agencia"
            field="nombre"
            items={agencias}
            onChange={(value, name) => {
              handleChange(value, name);
              if (props.inconcert) props.inconcert("tag", value);
            }}
          />
        </div>

        <div className="col-12 mb-2 position-relative">
          <Calendar
            label="Fecha"
            id="Fecha"
            disabled={!props.HabilitarAllInputs}
            onChange={(value, name) => {
              handleChange(value, name);
              if (props.inconcert) props.inconcert("tf", value);
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "6%",
              top: "33.12%",
              bottom: "31.25%",
            }}
          >
            <img src="/images/icons/down.png" alt="Icono flecha"/>
          </div>
        </div>

        <div className="col-12 mb-2">
          <Select
            title="Hora"
            disabled={!props.HabilitarAllInputs}
            title="Hora"
            id="Hora"
            field="horario"
            ref={inputRefs.current[2]}
            validation="required"
            onChange={(value, name) => {
              handleChange(value, name);
              if (props.inconcert) props.inconcert("th", value);
            }}
            items={horarios}
          />
        </div>

        <div className="col-12 text-right">
          <label className="subtitle2 red float-right">
            * Datos requeridos
          </label>
        </div>

        <div className="col-12 mb-2">
          <Input
            label="Acepto Términos y Condiciones"
            type="checkbox"
            id="terminos"
            value=""
            onChange={(value, id) => {
              handleChange(id, value);
            }}
            ref={inputRefs.current[3]}
            validation="checked"
          />
        </div>

        <div className="col-lg-10 col-12 text-center mt-3">
          <button
            type="submit"
            disabled={!props.HabilitarAllInputs}
            className="btn btn-primary mb-2 w-100 btn-enviar-solicitud"
          >
            ¡Pruébalo ahora!
          </button>
        </div>
      </div>
    </form>
  );
}

export default Place;
