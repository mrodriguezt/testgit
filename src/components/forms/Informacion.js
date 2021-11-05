import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
// Forms
import User from "./User/User";
import ModalMessage from "../common/ModalMessage";
import LoaderForm from "../common/LoaderForm";
import { StorageInconcertContext } from "../../context/StorageFormInconcert";
import { sendContactinfo } from "../../../pages/api/Contacus";
import LinkSugar from "../../../utils/link-sugar";

export default function InfoForm() {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [dataforms, setDataforms] = useState([]);
  const [showLoader, setShowLoader] = React.useState(false);
  const [data, setData] = useState({ UserComplete: false });
  const [textModal, setTextModal] = useState(
    "Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos."
  );
  const { saveContactoAgencia, resetContactoAgencia, contactoAgencia } =
    useContext(StorageInconcertContext);

  useEffect(() => {
    saveContactoAgencia({
      ...contactoAgencia,
      ci: "",
      cno: "",
      cna: "",
      ccr: "",
      ctl: "",
    });
  }, []);

  const updateFormInconcert = (id, value) => {
    let nuevoValor = {};
    switch (id) {
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
    saveContactoAgencia({
      ...contactoAgencia,
      ...nuevoValor,
    });
  };
  const sendToSugar = (data) => {
    // Se establece la data a enviar
    const sugarData = {
      cedula: data.cedula,
      nombres: data.nombres,
      apellidos: data.apellidos,
      correo: data.correo,
      telefono: data.telefono,
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

  const dataAPI = (id_CRM, data) => {
    const apiData = {
      nombres: data.nombres,
      apellidos: data.apellidos,
      cedula: data.cedula,
      telefono: data.telefono,
      correo: data.correo,
      Id_CRM: id_CRM,
    };
    return apiData;
  };

  const passSiguiente = () => {
    if (data.UserComplete) {
      const dataMerge = {
        ...dataforms["user"],
      };
      Object.keys(dataMerge).reduce((acc, key) => {
        if (dataMerge[key].hasOwnProperty("valido")) {
          dataMerge[key] = dataMerge[key].valor;
        }
      }, {});
      delete dataMerge["on"];
      updateFormInconcert("nombre", dataMerge.nombres);
      updateFormInconcert("apellido", dataMerge.apellidos);
      updateFormInconcert("cedula", dataMerge.cedula);
      updateFormInconcert("telefono", dataMerge.telefono);
      updateFormInconcert("correo", dataMerge.correo);
      setShowLoader(true);
      sendForm(dataMerge);
    }
  };

  const sendForm = async (data) => {
    if (data != undefined) {
      let Id_CRM = "NA";
      const result = await sendToSugar(data);
      if (!result.success) {
        setTextModal(
          "Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos."
        );
        setShowLoader(false);
        setModal(true);
        return;
      } else {
        if (result.data.ticket_id) Id_CRM = result.data.ticket_id;
      }
      let apiData = dataAPI(Id_CRM, data);
      const response = await sendContactinfo(JSON.stringify(apiData));
      if (response.hasOwnProperty("id")) {
        resetContactoAgencia();
        setShowLoader(false);
        router.push("informacion/final");
      } else {
        setTextModal(
          "Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos."
        );
        setShowLoader(false);
        setModal(true);
      }
    }
  };
  const changeUser = (complete, dataUser) => {
    setData((prev) => ({ ...prev, UserComplete: complete }));
    if (complete)
      setDataforms((dataforms) => ({ ...dataforms, ["user"]: dataUser }));
  };

  return (
    <>
      <User texto="" changeUser={changeUser} HabilitarAllInputs={true} />
      <div className="col-12 px-0 text-center">
        <button
          onClick={() => passSiguiente()}
          className="btn btn-item blue-bg mb-2 w-100 "
          style={{ border: "none" }}
        >
          Enviar
        </button>
      </div>
      <ModalMessage
        text={textModal}
        show={modal}
        onClick={(bol) => setModal(bol)}
      />
      <LoaderForm show={showLoader} />
    </>
  );
}
