import React, { useEffect } from "react";
import Input from "../common/Field.js";
import { StorageInconcertContext } from "../../context/StorageFormInconcert";
import { horarios, posventa_versiones, anios } from "../../../utils/constant";
import { sendAgendarCitaTaller } from "../../../pages/api/AgendarCita";
import { useRouter } from "next/router";
import LinkSugar from "../../../utils/link-sugar";
import Select from "../common/Select.js";
import { getTalleres } from "../../../pages/api/Contacus";

function ScheduleTallerForm(props) {
  const { agendarCita, saveAgendarCita, resetAgendarCita } = React.useContext(
    StorageInconcertContext
  );
  const router = useRouter();
  const [data, setData] = React.useState();
  const [clean, setClean] = React.useState(false);
  const [agencias, setAgencias] = React.useState([]);
  const [disableAgencias, setDisableAgencias] = React.useState(true);

  /* useEffect(() => {
     async function agenciasTalleres() {
       const responseTaller = await getTalleres();
       setAgencias(responseTaller);
     }
     agenciasTalleres();
   }, []);*/

  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef()
  ]);
  const sendToSugar = () => {
    // Se establece la data a enviar
    const sugarData = {
      modelo: data.modelo,
      anio: data.anio,
      placa: data.placa,
      agencia: data.agencia,
      horario: data.Hora,

      cedula: data.cedula,
      nombre: data.nombres,
      apellidos: data.apellidos,
      correo: data.correo,
      telefono: data.telefono,
      comentario_cliente: data.mensaje
    };
    // Se instancia la clase
    const LS = new LinkSugar(
      2, // Id del formulario
      sugarData.cedula,
      sugarData.nombre, // Nombres
      sugarData.apellidos,// Apellidos
      sugarData.correo, // Correo electrónico
      sugarData.telefono, // Teléfono
      `${location?.host}${router.asPath}`
    );
    return LS.send(sugarData);
  };
  const handleChange = (value, name) => {
    //use the old state   ...prev create a new copy, [name]: value set on key name the value  []
    if (name == 'ciudad') {

      let index = props?.ciudades?.findIndex((item) => {
        return item.nombre == value;
      });
      if (index >= 0) {
        setDisableAgencias(false);
        setAgencias(props?.ciudades[index]?.agencias);
        inputRefs.current[0].current.clear();
      } else {
        setDisableAgencias(true);
        setAgencias([]);
        inputRefs.current[0].current.clear();
      }
    }
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
    });
  };
  const dataAPI = (id_CRM) => {
    const apiData = {
      nombre: data.nombres,
      apellido: data.apellidos,
      cedula: data.cedula,
      telefono: data.telefono,
      correo: data.correo,
      mensaje: data.mensaje,
      horario: data.Hora,

      agencia: data.agencia,
      modelo: data.modelo,
      anio: data.anio,
      placa: data.placa,
      Id_CRM: id_CRM,
      ciudad: data.ciudad
    };
    return apiData;
  };

  const sendData = async () => {
    let Id_CRM = "NA";
    //const result = await sendToSugar();
    /*if (!result.success) {
      //props.handleClose(); //Close Modal SE INCLUYE DENTRO DEL IF POR ERROR EN UNMOUNTCOMPONENT

      props.setTextModal(
        "Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos."
      );

      props.showLoader(false);

      props.showModal(true);
      return;
    } else {
      props.setTextModal(
        `La información ha sido enviada correctamente. <br/>¡Gracias por escribirnos!`
      );
      if (result.data.ticket_id) Id_CRM = result.data.ticket_id;
    }*/

    let apiData = dataAPI(Id_CRM);

    const response = await sendAgendarCitaTaller(JSON.stringify(apiData));
    if (response.hasOwnProperty("id")) {
      //props.handleClose(); //Close modal of schedule in posventa SE INCLUYE DENTRO DEL IF POR ERROR EN UNMOUNTCOMPONENTE

      /*props.setTextModal(
        `La información ha sido enviada correctamente. <br/>¡Gracias por escribirnos!`
      );*/

      props.showLoader(false);

      // props.showModal(true);
      let model = data.modelo.toLowerCase();
      model = model.replace(/ /g, "");
      router.push({
        pathname: `../${model}/cita/confirmacion`,
        query: { model: data.modelo }
      })
      //Clean the form information
      setClean(true);
      resetAgendarCita();
      //inputRefs.current[5].current.value = "";
    } else {
      //props.handleClose(); //Close modal of schedule in posventa SE INCLUYE DENTRO DEL IF POR ERROR EN UNMOUNTCOMPONENTE

      props.setTextModal(
        "Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos."
      );

      props.showLoader(false);

      props.showModal(true);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let isValid = true;
    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      if (!valid) isValid = valid;
    }
    if (!isValid) return;
    else {
      props.showLoader(true);
      /*Send data to API */
      sendData();
    }
  };
  return (
    <div className="warranty global">
      <div className="row">
        <div className="col-12 pt-3">
          <form onSubmit={submitForm}>
            <div className="form-row align-items-center">
              <div className="col-12">
                Ingresa tus datos y un asesor se pondrá en contacto con tigo
                para coordinar tu cita taller.
              </div>

              <div className="col-12 color-blue">
                <p><strong>Datos del solicitante</strong></p>
              </div>
              <div className="col-12 mb-2">
                <Select
                  border="true"
                  title="Ciudad"
                  id="ciudad"
                  field="nombre"
                  disabled={false}
                  clean={clean}
                  ref={inputRefs.current[11]}
                  validation="required"
                  onChange={(value, name) => {
                    handleChange(value, name);
                  }}
                  items={props?.ciudades}
                />
              </div>
              <div className="col-12 mb-2">
                <Select
                  border="true"
                  title="Agencia"
                  id="agencia"
                  field="nombre"
                  disabled={disableAgencias}
                  clean={clean}
                  ref={inputRefs.current[0]}
                  validation="required"
                  onChange={(value, name) => {
                    handleChange(value, name);
                  }}
                  items={agencias}
                />
              </div>
              <div className="col-12 mb-2">
                <Select
                  border="true"
                  title="Hora"
                  id="Hora"
                  field="horario"
                  disabled={false}
                  clean={clean}
                  ref={inputRefs.current[1]}
                  validation="required"
                  onChange={(value, name) => {
                    handleChange(value, name);
                    updateFormInconcert("agh", value);
                  }}
                  items={horarios}
                />
              </div>
              <div className="col-12 mb-2">
                <Select
                  border="true"
                  title="Modelo"
                  id="modelo"
                  field="modelo"
                  clean={clean}
                  ref={inputRefs.current[2]}
                  onChange={(value, name) => {
                    handleChange(
                      value,
                      name
                    ); /*updateFormInconcert("ctrm", value)*/
                  }}
                  items={posventa_versiones}
                />
              </div>
              <div className="col-12 mb-2">
                <Select
                  border="true"
                  title="Año"
                  id="anio"
                  field="anio"
                  clean={clean}
                  ref={inputRefs.current[3]}
                  onChange={(value, name) => {
                    handleChange(
                      value,
                      name
                    ); /*updateFormInconcert("ctrm", value)*/
                  }}
                  items={anios}
                />
              </div>
              <div className="col-12 mb-2">
                <Input
                  type="text"
                  border="true"
                  id="nombres"
                  label="Nombres"
                  clean={clean}
                  value=""
                  validation="required|min:1|max:120"
                  disabled={true}
                  onChange={(name, value) => {
                    handleChange(value, name);
                    updateFormInconcert("acn", value);
                  }}
                  ref={inputRefs.current[4]}
                  keyPress={(valueNuevo, valueAnterior) => {
                    const re = /[\!\*\'\(\)\;\:\&\=\+\$\,\/\?\#\[\]]/;
                    if (!re.test(valueNuevo)) {
                      return valueNuevo;
                    } else {
                      return valueAnterior;
                    }
                  }}
                />
              </div>

              <div className="col-12 mb-2">
                <Input
                  type="text"
                  border="true"
                  id="apellidos"
                  label="Apellidos"
                  clean={clean}
                  value=""
                  onChange={(name, value) => {
                    handleChange(value, name);
                    updateFormInconcert("acn", value);
                  }}
                  ref={inputRefs.current[5]}
                  validation="required|min:1|max:120"
                  disabled={true}
                  keyPress={(valueNuevo, valueAnterior) => {
                    const re = /[\!\*\'\(\)\;\:\&\=\+\$\,\/\?\#\[\]]/;
                    if (!re.test(valueNuevo)) {
                      return valueNuevo;
                    } else {
                      return valueAnterior;
                    }
                  }}
                />
              </div>

              <div className="col-12 mb-2">
                <Input
                  type="text"
                  border="true"
                  id="cedula"
                  label="Cédula"
                  clean={clean}
                  value=""
                  onChange={(name, value) => {
                    handleChange(value, name);
                    updateFormInconcert("aca", value);
                  }}
                  ref={inputRefs.current[6]}
                  validation="required|ci|min:10|max:10"
                  disabled={true}
                  keyPress={(valueNuevo, valueAnterior) => {
                    const re = /^[0-9]{0,10}$/;
                    if (re.test(valueNuevo)) {
                      return valueNuevo;
                    } else {
                      return valueAnterior;
                    }
                  }}
                />
              </div>

              <div className="col-12 mb-2">
                <Input
                  type="text"
                  border="true"
                  id="correo"
                  label="Correo"
                  clean={clean}
                  value=""
                  onChange={(name, value) => {
                    handleChange(value, name);
                    updateFormInconcert("acc", value);
                  }}
                  ref={inputRefs.current[7]}
                  validation="required|email"
                  disabled={true}
                  keyPress={(valueNuevo, valueAnterior) => {
                    const re = /[\!\*\'\(\)\;\:\&\=\+\$\,\/\?\#\[\]\s]/;
                    if (!re.test(valueNuevo)) {
                      return valueNuevo;
                    } else {
                      return valueAnterior;
                    }
                  }}
                />
              </div>

              <div className="col-12 mb-2">
                <Input
                  type="text"
                  border="true"
                  id="telefono"
                  label="Teléfono"
                  clean={clean}
                  value=""
                  onChange={(name, value) => {
                    handleChange(value, name);
                    updateFormInconcert("act", value);
                  }}
                  ref={inputRefs.current[8]}
                  validation="required|phone|min:10|max:10"
                  disabled={true}
                  keyPress={(valueNuevo, valueAnterior) => {
                    const re = /^[0-9]{0,10}$/;
                    if (re.test(valueNuevo)) {
                      return valueNuevo;
                    } else {
                      return valueAnterior;
                    }
                  }}
                />
              </div>
              <div className="col-12 mb-2">
                <Input
                  type="text"
                  border="true"
                  id="placa"
                  label="Placa"
                  clean={clean}
                  value=""
                  onChange={(name, value) => {
                    handleChange(value, name);
                  }}
                  ref={inputRefs.current[9]}
                  validation="min:6|max:7"
                  disabled={true}
                />
              </div>
              <div className="col-12 mb-2">
                <Input
                  type="textare"
                  border="true"
                  id="mensaje"
                  label="Comentario"
                  value=""
                  clean={clean}
                  onChange={(name, value) => {
                    handleChange(value, name);
                  }}
                  ref={inputRefs.current[10]}
                  validation="max:500"
                  disabled={true}
                />
              </div>

              <div className="col-12 text-right">
                <label className="subtitle2 red float-right">
                  * Datos requeridos
                </label>
              </div>

              <div className="col-12 px-3">
                <button
                  type="submit"
                  className="btn btn-item blue-bg mb-2 w-100"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ScheduleTallerForm;
