import React, { useEffect, useState } from 'react'
import Select from "../common/Select";
import { horarios } from "../../../utils/constant";
import Calendar from '../common/Calendar/Calendar';
import { useRouter } from "next/router";
import LinkSugar from "../../../utils/link-sugar";
import { sendTestDrive } from "../../../pages/api/TestDrive";
import { StorageInconcertContext } from '../../context/StorageFormInconcert';
import { getAgencias } from "../../../pages/api/Contacus";

export default function TestDrive(props) {
  const { testDrive, saveTestDrive, resetTestDrive } = React.useContext(StorageInconcertContext);
  const [accessories, setAccesorios] = useState(null);//JSON.parse(window.sessionStorage.getItem("accessories"));
  const [agencias, setAgencias] = React.useState([]);
  const router = useRouter();

  const [client, setClient] = useState([]);
  const [model, setModel] = useState([]);

  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
  ]);

  const [data, setData] = React.useState({});
  const [clean, setClean] = React.useState(false);

  useEffect(() => {
    async function agenciasTalleres() {
      const responseAgencia = await getAgencias();
      setAgencias(responseAgencia);
    }
    agenciasTalleres();
    if (props?.client && props?.model && props?.accessories) {
      setClient(props?.client);
      setModel(props?.model);
      setAccesorios(props?.accessories);
    }
    else if (sessionStorage) {
      setClient(JSON.parse(sessionStorage.getItem("client")));
      setModel(JSON.parse(sessionStorage.getItem("model")));
      setAccesorios(JSON.parse(window.sessionStorage.getItem("accessories")));
    }

  }, []);

  const handleChange = (value, name) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const updateFormInconcert = (id, value) => {
    let nuevoValor = {};
    switch (id) {
      case "tag": {
        nuevoValor.tag = value.trim();
        break;
      }
      case "tc": {
        nuevoValor.tc = value.trim();
        break;
      }
      case "tf": {
        nuevoValor.tf = value.trim();
        break;
      }
      case "th": {
        nuevoValor.th = value.trim();
        break;
      }
    }

    saveTestDrive({
      ...testDrive,
      ...nuevoValor,
      tm: model.modelo,
      tv: accessories?.version,
      ti: client.cedula,
      tn: client.nombres,
      tap: client.apellido,
      te: client.correo,
      tt: client.telefono
    });
  }

  const sendToSugar = () => {
    // Se establece la data a enviar
    const sugarData = {
      modelo: model.modelo,

      version: accessories?.version,

      agencia: data.Agencia,
      fecha: data.Fecha,
      hora: data.Hora,

      cedula: client.cedula,
      nombre: client.nombres,
      apellidos: client.apellido,
      personal_correo: client.correo,
      personal_telefono: client.telefono
    };
    // Se instancia la clase
    const LS = new LinkSugar(
      1, // Id del formulario  
      sugarData.cedula,
      sugarData.nombre, // Nombres
      sugarData.apellidos, //
      sugarData.personal_correo, // Correo electrónico
      sugarData.personal_telefono, // Teléfono
      `${location?.host}${router.asPath}`
    );
    return LS.send(sugarData);
  };
  const imagen = props?.imagen ?? JSON.parse(window.sessionStorage.getItem("imagen"));//TODO:: CAMBIAR PARA AUTOMATIZAR CON BACKEND
  const dataAPI = (id_CRM) => {
    const apiData = {
      modelo: model.modelo,
      version: accessories?.version,

      nombre: client.nombres,
      apellido: client.apellido,
      cedula: client.cedula,
      telefono: client.telefono,
      correo: client.correo,

      agencia: data.Agencia,
      fecha: data.Fecha,
      horario: data.Hora,
      Id_CRM: id_CRM,
      imagenCar: imagen
    };
    return apiData;
  };

  const sendData = async () => {
    let Id_CRM = 'NA'
    const result = await sendToSugar();
    if (!result.success) {

      props.handleClose(); //Close Modal SE INCLUYE DENTRO DEL IF POR ERROR EN UNMOUNTCOMPONENT

      props.saveTextModal("Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos.");

      props.showLoader(false);

      props.showModal(true);
      return;
    }
    else {
      props.saveTextModal(`La información ha sido enviada correctamente. <br/>¡Gracias por escribirnos!`);
      if (result.data.ticket_id) Id_CRM = result.data.ticket_id;
    }

    let apiData = dataAPI(Id_CRM);

    const response = await sendTestDrive(JSON.stringify(apiData));

    if (response.hasOwnProperty("id")) {

      props.handleClose();// Close modal agendar en cotización SE INCLUYE DENTRO DEL IF POR ERROR EN UNMOUNTCOMPONENTE

      props.saveTextModal(`La información ha sido enviada correctamente. <br/>¡Gracias por escribirnos!`);

      props.showLoader(false);

      props.showModal(true);
      setClean(true);

      resetTestDrive();

    } else {

      props.handleClose();// Close modal agendar en cotización SE INCLUYE DENTRO DEL IF POR ERROR EN UNMOUNTCOMPONENTE

      props.saveTextModal("Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos.");

      props.showLoader(false);

      props.showModal(true)
    };


  }

  const submitForm = async (e) => {
    e.preventDefault();
    let isValid = true;
    //Valid every input-component using the ref to the input inside with the valid
    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      if (!valid) isValid = valid;
    }
    if (!isValid) return;
    else {

      props.showLoader(true);

      sendData();
    }
  }
  return (
    <form onSubmit={submitForm} id="form-contact">
      <div className="form-row container px-md-5 global">
        <div className="col-12">

          <Select
            title="Agencia"
            id="Agencia"
            field="nombre"
            disabled={false}
            clean={clean}
            ref={inputRefs.current[0]}
            validation="required"
            onChange={(value, name) => {
              handleChange(value, name);
              updateFormInconcert("tag", value)
            }}
            items={agencias}
          />
        </div>
        <div className="col-12 ">
          <Calendar
            label="Fecha"
            id="Fecha"
            disabled={false}
            onChange={(value, name) => {
              handleChange(value, name);
              updateFormInconcert("tf", value)
            }}
            clean={clean}
          />
          <div style={{ position: 'absolute', right: '6%', top: "33.12%", bottom: '31.25%' }}>
            <img src="/images/icons/down.png" alt="Icono flecha" />
          </div>
        </div>
        <div className="col-12">
          <Select
            title="Hora"
            id="Hora"
            field="horario"
            disabled={false}
            clean={clean}
            ref={inputRefs.current[1]}
            validation="required"
            onChange={(value, name) => {
              handleChange(value, name);
              updateFormInconcert("th", value)
            }}
            items={horarios}
          />
        </div>
        <div className="col-12 text-right">
          <label className="subtitle3 red float-right">* Datos requeridos</label>
        </div>
        <div className="offset-2 col-8  pt-4 text-center">
          <button type="submit" className="btn btn-item blue-bg mb-2 w-100 ">
            Agendar
          </button>
        </div>
        <div className="offset-2 col-8  text-center">
          <button onClick={props.handleClose} className="btn btn-item color-gris mb-2 w-100 " style={{ border: 'none' }}>
            Cancelar
          </button>
        </div>
      </div>
    </form >
  )
}
