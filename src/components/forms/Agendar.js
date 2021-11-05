import React, { useEffect, useState } from 'react'
import Select from "../common/Select";
import { horarios } from "../../../utils/constant";
import Calendar from '../common/Calendar/Calendar';
import { useRouter } from "next/router";
import LinkSugar from "../../../utils/link-sugar";
import { sendAgendarCita } from "../../../pages/api/AgendarCita";
import { StorageInconcertContext } from '../../context/StorageFormInconcert';
import { getAgencias } from "../../../pages/api/Contacus";

export default function TestDrive(props) {
  const model=props?.model;
  const { agendarCita, saveAgendarCita, resetAgendarCita } = React.useContext(StorageInconcertContext);
  const [agencias, setAgencias] = React.useState([]);
  const router = useRouter();
  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
  ]);
  const [data, setData] = React.useState({});
  const [clean, setClean] = React.useState(false);

  const [client, setClient] = useState([]);

  useEffect(() => {
    async function agenciasTalleres() {
      const responseAgencia = await getAgencias();
      setAgencias(responseAgencia);
    }
    agenciasTalleres();
    if(props?.client){
      setClient(props?.client);
    }
    else if (sessionStorage) {
      setClient(JSON.parse(sessionStorage.getItem("client")));
    }
  }, []);

  const handleChange = (value, name) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const updateFormInconcert = (id, value) => {
    let nuevoValor = {};
    switch (id) {
      case "acg": {
        nuevoValor.acg = value.trim();
        break;
      }
      case "acn": {
        nuevoValor.acn = value.trim();
        break;
      }
      case "aca": {
        nuevoValor.aca = value.trim();
        break;
      }
      case "acc": {
        nuevoValor.acc = value.trim();
        break;
      }
      case "act": {
        nuevoValor.act = value.trim();
        break;
      }
      case "agf": {
        nuevoValor.agf = value.trim();
        break;
      }
      case "agh": {
        nuevoValor.agh = value.trim();
        break;
      }
    }

    saveAgendarCita({
      ...agendarCita,
      ...nuevoValor,
      acn: client.nombres,
      aca: client.apellido,
      acc: client.correo,
      act: client.telefono
    });
  }

  const sendToSugar = () => {//
    // Se establece la data a enviar
    const sugarData = {
      agencia: data.Agencia,
      fecha: data.Fecha,
      hora: data.Hora,

      cedula: client.cedula,
      nombre: client.nombres,
      apellidos: client.apellido,
      correo: client.correo,
      telefono: client.telefono,
      modelo: model?.modelo ?? ''
    };
    // Se instancia la clase
    const LS = new LinkSugar(
      6, // Id del formulario  
      sugarData.cedula,
      sugarData.nombre, // Nombres
      sugarData.apellidos,
      sugarData.correo, // Correo electrónico
      sugarData.telefono, // Teléfono
      `${location?.host}${router.asPath}`
    );
    return LS.send(sugarData);
  };

  const dataAPI = (id_CRM) => {
    const apiData = {

      nombre: client.nombres,
      apellido: client.apellido,
      cedula: client.cedula,
      telefono: client.telefono,
      correo: client.correo,

      agencia: data.Agencia,
      fecha: data.Fecha,
      horario: data.Hora,
      modelo: model?.modelo ?? '',
      Id_CRM: id_CRM
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
    const response = await sendAgendarCita(JSON.stringify(apiData));
    if (response.hasOwnProperty("id")) {

      props.handleClose(); //Close Modal SE INCLUYE DENTRO DEL IF POR ERROR EN UNMOUNTCOMPONENT

      props.saveTextModal(`La información ha sido enviada correctamente. <br/>¡Gracias por escribirnos!`);

      props.showLoader(false);

      props.showModal(true);//Modal con el mensaje del resultado del response

      //Limpieza del fomulario e inconcertstorage
      setClean(true);
      resetAgendarCita();

    } else {

      props.handleClose(); //Close Modal SE INCLUYE DENTRO DEL IF POR ERROR EN UNMOUNTCOMPONENT

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
              updateFormInconcert("acg", value)
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
              updateFormInconcert("agf", value)
            }}
            clean={clean}
          />
          <div className=" " style={{ position: 'absolute', right: '6%', top: "33.12%", bottom: '31.25%' }}>
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
              updateFormInconcert("agh", value)
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