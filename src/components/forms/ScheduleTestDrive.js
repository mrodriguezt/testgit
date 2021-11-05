import React from "react";
import Input from "../common/Field.js";
import { useRouter } from "next/router";
import { horarios, modelos } from "../../../utils/constant";
import Calendar from '../common/Calendar/Calendar';
import { StorageInconcertContext } from "../../context/StorageFormInconcert";
import { sendTestDrive } from "../../../pages/api/TestDrive";
import LinkSugar from "../../../utils/link-sugar";
import Select from "../common/Select.js";
import { getAgencias } from "../../../pages/api/Contacus";

function ScheduleTestDrive(props) {

  const { agendarCita, saveAgendarCita, resetAgendarCita } = React.useContext(
    StorageInconcertContext
  );
  const router = useRouter();
  const [data, setData] = React.useState();
  const [clean, setClean] = React.useState(false);
  const [agencias, setAgencias] = React.useState([]);

  React.useEffect(() => {
    async function agenciasTalleres() {
      const responseAgencia = await getAgencias();
      setAgencias(responseAgencia);
    }
    agenciasTalleres();
  }, []);

  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const sendToSugar = () => {
    // Se establece la data a enviar
    const sugarData = {
      modelo: data.modelo,

      cedula: data.cedula,
      nombre: data.nombres,
      apellidos: data.apellidos,
      correo: data.correo,
      telefono: data.telefono,

      agencia: data.Agencia,
      fecha: data.Fecha,
      hora: data.Hora,
    };
    // Se instancia la clase
    const LS = new LinkSugar(
      1, // Id del formulario
      sugarData.cedula,
      sugarData.nombre, // Nombres
      sugarData.apellidos,
      sugarData.correo, // Correo electrónico
      sugarData.telefono, // Teléfono
      `${location?.host}${router.asPath}`
    );
    return LS.send(sugarData);
  };

  const handleChange = (value, name) => {
    //use the old state   ...prev create a new copy, [name]: value set on key name the value  []
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
      modelo: data.modelo,

      nombre: data.nombres,
      apellido: data.apellidos,
      cedula: data.cedula,
      telefono: data.telefono,
      correo: data.correo,

      agencia: data.Agencia,
      fecha: data.Fecha,
      horario: data.Hora,
      Id_CRM: id_CRM,
    };
    return apiData;
  };

  const sendData = async () => {
    let Id_CRM = "NA";
    const result = await sendToSugar();

    if (!result.success) {
      //props.handleClose(); //Close Modal SE INCLUYE DENTRO DEL IF POR ERROR EN UNMOUNTCOMPONENT
      props.setTextModal(
        "Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos."
      );

      props.showLoader(false);

      props.showModal(true);
      return;
    } else {
      /*props.setTextModal(
        `La información ha sido enviada correctamente. <br/>¡Gracias por escribirnos!`
      );*/
      if (result.data.ticket_id) Id_CRM = result.data.ticket_id;
    }

    let apiData = dataAPI(Id_CRM);
    
    const response = await sendTestDrive(JSON.stringify(apiData));
    if (response.hasOwnProperty("id")) {
      //props.handleClose(); // Close modal agendar en cotización SE INCLUYE DENTRO DEL IF POR ERROR EN UNMOUNTCOMPONENTE

      /*props.setTextModal(
        `La información ha sido enviada correctamente. <br/>¡Gracias por escribirnos!`
      );*/

      props.showLoader(false);

      //props.showModal(true);

      router.push({
        pathname: `../${data.modelo.toLowerCase()}/cita/confirmacion`,
        query: {model:data.modelo}
      })

      setClean(true);

      resetAgendarCita();
    } else {
      //props.handleClose(); // Close modal agendar en cotización SE INCLUYE DENTRO DEL IF POR ERROR EN UNMOUNTCOMPONENTE
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

      /*Send data to API Y SUGAR*/

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
                Ingresa tus datos y un asesor se pondrá en contacto contigo
                para coordinar tu cita test drive.
              </div>

              <div className="col-12 color-blue">
                <p>Datos del solicitante</p>
              </div>
              <div className="col-12 mb-2">
                <Select
                  border="true"
                  title="Modelo"
                  id="modelo"
                  field="modelo"
                  clean={clean}
                  ref={inputRefs.current[0]}
                  onChange={(value, name) => {
                    handleChange(
                      value,
                      name
                    ); /*updateFormInconcert("ctrm", value)*/
                  }}
                  items={modelos}
                />
              </div>
              <div className="col-12 mb-2">
                <Select
									border="true"
                  title="Agencia"
                  id="Agencia"
                  field="nombre"
                  disabled={false}
                  clean={clean}
                  ref={inputRefs.current[1]}
                  validation="required"
                  onChange={(value, name) => {
                    handleChange(value, name);
                    updateFormInconcert("tag", value);
                  }}
                  items={agencias}
                />
              </div>
              <div className="col-12 mb-2">
                <Calendar
									border="true"
                  label="Fecha"
                  id="Fecha"
                  disabled={false}
                  onChange={(value, name) => {
                    handleChange(value, name);
                    updateFormInconcert("tf", value);
                  }}
                  clean={clean}
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
									border="true"
                  title="Hora"
                  id="Hora"
                  field="horario"
                  disabled={false}
                  clean={clean}
                  ref={inputRefs.current[2]}
                  validation="required"
                  onChange={(value, name) => {
                    handleChange(value, name);
                    updateFormInconcert("th", value);
                  }}
                  items={horarios}
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
                  ref={inputRefs.current[3]}
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
                  ref={inputRefs.current[4]}
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
                  ref={inputRefs.current[5]}
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
                  ref={inputRefs.current[6]}
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
                  ref={inputRefs.current[7]}
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
              {/*<div className="col-12 mb-2">
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
                  ref={inputRefs.current[6]}
                  validation="max:500"
                  disabled={true}
                />
								</div>*/}

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

export default ScheduleTestDrive;
