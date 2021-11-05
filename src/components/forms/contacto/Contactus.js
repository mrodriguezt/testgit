import React, { useEffect, useContext } from "react";
import Input from "../../common/Field.js";
import Select from "../../common/Select.js";
import LinkSugar from "../../../../utils/link-sugar";
import { useRouter } from "next/router";
import { ciudades, agencias } from "../../../../utils/constant";
import { StorageInconcertContext } from "../../../context/StorageFormInconcert";
import { sendContactinfo } from "../../../../pages/api/Contacus";
import LoaderForm from "../../common/LoaderForm/LoaderForm";

function Contactus(props) {
  const router = useRouter();

  //create array-references to the inputs inside the component input
  //React.createRef() for every input
  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  //store values we create a object and state with and value
  const [data, setData] = React.useState({});
  const [agencies, setAgencias] = React.useState([]);
  const [group, setGroup] = React.useState([]);
  const [showLoader, setShowLoader] = React.useState(false);
  const [clean, setClean] = React.useState(false);
  const contextInconcert = useContext(StorageInconcertContext);


  useEffect(() => {
    const group = agencias.reduce((r, a) => {
      r[a.ciudad] = [...(r[a.ciudad] || []), a];
      return r;
    }, {});
    setGroup(group);
    contextInconcert.saveContactoAgencia({
      ...contextInconcert.contactoAgencia,
      cci: "",
      ci: "",
      cno: "",
      cna: "",
      ccr: "",
      ctl: "",
    });
  }, []);
  //
  //function to handle change on every input component
  const handleChange = (name, value) => {
    //The user is filling again the form
    if (clean) setClean(false);

    //use the old state   ...prev create a new copy, [name]: value set on key name the value  []
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const updateFormInconcert = (id, value) => {
    let nuevoValor = {};
    switch (id) {
      case "ciudad": {
        nuevoValor.cci = value.trim();
        break;
      }
      case "cedula": {
        nuevoValor.ci = value.trim();
        break;
      }
      case "nombre": {
        nuevoValor.cno = value.trim();
        break;
      }
      case "apellido": {
        nuevoValor.cna = value.trim();
        break;
      }
      case "correo": {
        nuevoValor.ccr = value.trim();
        break;
      }
      case "telefono": {
        nuevoValor.ctl = value.trim();
        break;
      }
    }
    contextInconcert.saveContactoAgencia({
      ...contextInconcert.contactoAgencia,
      ...nuevoValor,
    });
  };
  const sendToSugar = () => {
    // Se establece la data a enviar
    const sugarData = {
      ciudad: data.ciudad,
      cedula: data.Cedula,
      nombres: data.Nombres,
      apellidos: data.Apellidos,
      correo: data.Correo,
      telefono: data.Telefono,
    };
    // Se instancia la clase
    const LS = new LinkSugar(
      5, // Id del formulario    set 6
      sugarData.cedula, // Consecionario
      sugarData.nombres, // Nombres
      sugarData.apellidos, //Apellidos
      sugarData.correo, // Correo electrónico
      sugarData.telefono, // Teléfono
      `${location?.host}${router.asPath}`
    );
    // Se envía
    return LS.send(sugarData);
  };

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
      setShowLoader(true);
      let apiData = {};
      const result = await sendToSugar();

      if (!result.success) {
        props.setTextModal("Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos.");
        setShowLoader(false);
        props.showModal(true);
        return;
      } else {
        apiData = {
          nombres: data.Nombres,
          apellidos: data.Apellidos,
          telefono: data.Telefono,
          correo: data.Correo,
          cedula: data.Cedula,
          Id_CRM: result.data.ticket_id,
          ciudad: data.ciudad,
        };
        props.setTextModal(`La información ha sido enviada correctamente. <br/>¡Gracias por escribirnos!`);
      }

      /*Send data to API contactos*/
      const response = await sendContactinfo(JSON.stringify(apiData));
      setShowLoader(false);
      if (response.hasOwnProperty("id")) {
        props.setTextModal(`La información ha sido enviada correctamente. <br/>¡Gracias por escribirnos!`);
        contextInconcert.resetContactoAgencia();
        props.showModal(true);
        //Clean the form information
        setClean(true);
        inputRefs.current[0].current.clear();
      } else {
        props.setTextModal("Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos.");
        props.showModal(true);
      }
    }
  };

  let classCol = "col-12 mb-2";

  return (
    <>
      <LoaderForm
        show={showLoader}
      />
      <form onSubmit={submitForm} id="form-contact">
        <div className="form-row align-items-center">
          <div className={classCol}>
            <Select
              title="Ciudad"
              id="ciudad"
              field="nombre"
              disabled={false}
              clean={clean}
              ref={inputRefs.current[0]}
              validation="required"
              onChange={(value, name, valid, index) => {
                handleChange(name, value, valid, index);
                updateFormInconcert("ciudad", value);
              }}
              items={ciudades}
            />
          </div>
          <div className={classCol}>
            <Input
              type="text"
              id="Nombres"
              label="Nombres"
              value=""
              clean={clean}
              onChange={(name, value) => {
                handleChange(name, value), updateFormInconcert("nombre", value);
              }}
              ref={inputRefs.current[1]}
              validation="required|max:120"
              disabled="false"
              keyPress={(valueNuevo, valueAnterior) => {
                const re = /[\!\*\'\(\)\;\:\&\=\+\$\,\/\?\#\[\]]/;
                if (!re.test(valueNuevo)) {
                  return valueNuevo;
                }
                else {
                  return valueAnterior;
                }
              }}
            />
          </div>
          <div className={classCol}>
            <Input
              type="text"
              id="Apellidos"
              label="Apellidos"
              value=""
              clean={clean}
              onChange={(name, value) => {
                handleChange(name, value), updateFormInconcert("apellido", value);
              }}
              ref={inputRefs.current[2]}
              validation="required|max:120"
              disabled="false"
              keyPress={(valueNuevo, valueAnterior) => {
                const re = /[\!\*\'\(\)\;\:\&\=\+\$\,\/\?\#\[\]]/;
                if (!re.test(valueNuevo)) {
                  return valueNuevo;
                }
                else {
                  return valueAnterior;
                }
              }}
            />
          </div>
          <div className={classCol}>
            <Input
              type="text"
              id="Cedula"
              label="Número de Cédula"
              value=""
              clean={clean}
              onChange={(name, value) => {
                handleChange(name, value), updateFormInconcert("cedula", value);
              }}
              ref={inputRefs.current[3]}
              validation="required|ci|min:10|max:10"
              disabled="false"
              keyPress={(valueNuevo, valueAnterior) => {
                const re = /^[0-9]{0,10}$/;
                if (re.test(valueNuevo)) {
                  return valueNuevo;
                }
                else {
                  return valueAnterior;
                }
              }}
            />
          </div>
          <div className={classCol}>
            <Input
              type="text"
              id="Telefono"
              label="Teléfono de contacto"
              value=""
              clean={clean}
              onChange={(name, value) => {
                handleChange(name, value), updateFormInconcert("telefono", value);
              }}
              ref={inputRefs.current[4]}
              validation="required|phone|min:10|max:10"
              disabled="false"
              keyPress={(valueNuevo, valueAnterior) => {
                const re = /^[0-9]{0,10}$/;
                if (re.test(valueNuevo)) {
                  return valueNuevo;
                }
                else {
                  return valueAnterior;
                }
              }}
            />
          </div>
          <div className={classCol}>
            <Input
              type="text"
              id="Correo"
              clean={clean}
              label="Correo electrónico"
              value=""
              onChange={(name, value) => {
                handleChange(name, value), updateFormInconcert("correo", value);
              }}
              ref={inputRefs.current[5]}
              validation="required|email|max:45"
              disabled="false"
              keyPress={(valueNuevo, valueAnterior) => {
                const re = /[\!\*\'\(\)\;\:\&\=\+\$\,\/\?\#\[\]\s]/;
                if (!re.test(valueNuevo)) {
                  return valueNuevo;
                }
                else {
                  return valueAnterior;
                }
              }}
            />
          </div>
          <div className={`col-lg-10 text-center ${props.style?? ""}`}>
            <button type="submit" className="btn btn-item blue-bg mb-2 w-100">
              Enviar
            </button>
          </div>
        </div>
      </form>

    </>
  );
}
export default Contactus;
