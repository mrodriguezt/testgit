import React from 'react'
import Input from '../common/Field.js'
import { useRouter } from 'next/router'
import LinkSugar from "../../../utils/link-sugar";
import { sendCotizacioninfo } from "../../../pages/api/Cotizacion";
import { StorageInconcertContext } from "../../context/StorageFormInconcert";
import { PurchaseContext } from "../../context/PurchaseProvider";
import LoaderForm from "../common/LoaderForm";

function Clientinfo(props) {
  const { cotizacionCar, saveCotizacionInconcert, resetCotizacion } = React.useContext(StorageInconcertContext);
  const { model, client, saveClient, selectedModelData, selectedPaquete, showModal, saveTextModal, selectedColor } = React.useContext(PurchaseContext);
  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef()
  ]);
  //store values we create a object and state with and value
  const [data, setData] = React.useState({});
  const [showLoader, setShowLoader] = React.useState(false);
  let router = useRouter();

  //function to handle change on every input component
  const handleChange = (name, value) => {
    //use the old state   ...prev create a new copy, [name]: value set on key name the value  []
    setData(prev => ({ ...prev, [name]: value }))
  }

  const updateFormInconcert = (id, value) => {
    let nuevoValor = {};
    switch (id) {
      case "cn": {
        nuevoValor.cn = value.trim();
        break;
      }
      case "cta": {
        nuevoValor.cta = value.trim();
        break;
      }
      case "cte": {
        nuevoValor.cte = value.trim();
        break;
      }
      case "ce": {
        nuevoValor.ce = value.trim();
        break;
      }
      case "ctc": {
        nuevoValor.ctc = value.trim();
        break;
      }
    };

    saveCotizacionInconcert({
      ...cotizacionCar,
      ...nuevoValor
    });

  };

  const sendToSugar = () => {
    // Se establece la data a enviar
    const sugarData = {
      cedula: data.cedula,
      nombres: data.nombres,
      apellidos: data.apellido,
      correo: data.correo,
      telefono: data.telefono,
      color: props.model.color,
      modelo: props.model.modelo,
      paquete: props.model.paquete,
      tipo: props.model.tipo,
      version: props.model.version,
    };
    // Se instancia la clase
    const LS = new LinkSugar(
      4, // Id del formulario
      sugarData.cedula, // 
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
    let isValid = true
    //Valid every input-component using the ref to the input inside with the valid
    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate()
      if (!valid) isValid = valid
    }
    if (isValid) {
      setShowLoader(true);
      let apiData = {};
      const result = await sendToSugar();

      if (!result.success) {
        saveTextModal("Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos.");
        showModal(true);
        return;
      } else {
        let precio_plan = 0;
        if (selectedModelData.paquetes[selectedPaquete].precio) {
          precio_plan = parseFloat(selectedModelData.paquetes[selectedPaquete].precio);
        }
        //const imagen = JSON.parse(window.sessionStorage.getItem("imagen"));//TODO:: CAMBIAR PARA AUTOMATIZAR CON BACKEND
        let imagen = null;
        try {
          imagen = selectedModelData?.colores[selectedColor]?.imagen?.url ? selectedModelData?.colores[selectedColor]?.imagen?.url : selectedModelData?.imagen?.url;
        } catch (e) {
          console.log(e);
        }
        let metadata = {
          "precioVersion": selectedModelData?.precio ?? null,
          "slug": props?.model?.slug ?? null,
          "modelo": props?.model?.modelo ?? null,
          "imagen": imagen ?? null
        };
        metadata = JSON.stringify(metadata);
        apiData = {
          Id_CRM: result.data.ticket_id,
          cedula: data.cedula,
          nombres: data.nombres,
          apellidos: data.apellido,
          correo: data.correo,
          telefono: data.telefono,
          color: props.model.color,
          modelo: props.model.modelo,
          paquete: props.model.paquete,
          tipo: props.model.tipo,
          version: props.model.version,
          precio: selectedModelData.precio,
          precio_paquete: precio_plan,
          imagenCar: imagen,
          metadata: metadata
        };
        saveTextModal(`La información ha sido enviada correctamente. <br/>¡Gracias por escribirnos!`);
      }
      saveClient({
        ...client,
        nombre: data.nombres,
        apellido: data.apellido,
        cedula: data.cedula,
        correo: data.correo,
        telefono: data.telefono,
      });

      const response = await sendCotizacioninfo(JSON.stringify(apiData));
      setShowLoader(false);
      if (response.id) {
        //saveTextModal(`La información ha sido enviada correctamente. <br/>¡Gracias por escribirnos!`);
        //resetCotizacion();
        //showModal(true);
        //console.log(response)
        if (props.nextStep) { props.nextStep(data, response.id) } else {

          //router.push('/pago')
        }
      } else {
        saveTextModal("Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos.");
        showModal(true);
      };
    } return;

  }


  return (
    <>
      <LoaderForm
        show={showLoader}
      />
      <form onSubmit={submitForm}>
        <div className="form-row align-items-center">
          <div className="col-12 mb-2">
            <Input
              type="text"
              id="nombres"
              label="Nombres"
              value=""
              onChange={(name, value) => { handleChange(name, value); updateFormInconcert("cn", value) }}
              ref={inputRefs.current[0]}
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

          <div className="col-12 mb-2">
            <Input
              type="text"
              id="apellido"
              label="Apellidos"
              value=""
              onChange={(name, value) => { handleChange(name, value); updateFormInconcert("cta", value) }}
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

          <div className="col-12 mb-2">
            <Input
              type="text"
              id="cedula"
              label="Número de cédula"
              value=""
              onChange={(name, value) => { handleChange(name, value); updateFormInconcert("ctc", value) }}
              ref={inputRefs.current[2]}
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

          <div className="col-12 mb-2">
            <Input
              type="text"
              id="correo"
              label="Correo electrónico"
              value=""
              onChange={(name, value) => { handleChange(name, value); updateFormInconcert("ce", value) }}
              ref={inputRefs.current[3]}
              validation="required|email"
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

          <div className="col-12 mb-2">
            <Input
              type="text"
              id="telefono"
              label="Teléfono "
              value=""
              onChange={(name, value) => { handleChange(name, value); updateFormInconcert("cte", value) }}
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

          <div className="col-12 text-right">
            <label className="subtitle2 red">* Datos requeridos</label>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary mb-2 w-100">ENVIAR COTIZACIÓN</button>
          </div>
        </div>
      </form>

    </>

  );
}

export default Clientinfo;