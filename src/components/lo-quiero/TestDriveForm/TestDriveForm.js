import React, { useState, useEffect } from "react";
import Place from "../../forms/test/Place";
import Car from "../../forms/test/Car";
import User from "../../forms/User";
import { useRouter } from "next/router";
import { sendTestDrive } from "../../../../pages/api/TestDrive";
import { StorageInconcertContext } from "../../../context/StorageFormInconcert";
import ModalMessage from "../../common/ModalMessage";
import LoaderForm from "../../common/LoaderForm";
import LinkSugar from "../../../../utils/link-sugar";

function TestDriveForm(props) {
  const [data, setData] = useState({
    CarFormComplete: false,
    UserFormComplete: false,
    TestDriveForcomplete: false,
  });
  const { agendarCita, saveAgendarCita, resetAgendarCita, testDrive, saveTestDrive, resetTestDrive } = React.useContext(
    StorageInconcertContext
  );
  const [dataforms, setDataforms] = useState([]);
  const [showLoader, setShowLoader] = React.useState(false);
  const [textModal, setTextModal] = useState(
    "Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos."
  );
  const [modal, setModal] = useState(false);
  const [imagen, setImagen] = useState("/images/modelos/pngkey 1.png");
  let router = useRouter();
  useEffect(() => {
    if (sessionStorage) {
      sessionStorage.removeItem("modelTest");
    }
  }, []);

  useEffect(() => {
    if (sessionStorage) {
      if (sessionStorage.getItem("modelTest")) {
        let modelo = JSON.parse(sessionStorage.getItem("modelTest"));
        if (modelo != undefined && modelo.image != undefined) {
          setImagen(modelo.image.url);
        }
      } else {
        setImagen("/images/modelos/pngkey 1.png");
      }
    }
  }, [data]);

  const changeCar = (complete, dataCar) => {
    setData((prev) => ({ ...prev, CarFormComplete: complete }));
    if (complete)
      setDataforms((dataforms) => ({ ...dataforms, ["car"]: dataCar }));
  };

  const changeUser = (complete, dataUser) => {
    setData((prev) => ({ ...prev, UserFormComplete: complete }));
    if (complete)
      setDataforms((dataforms) => ({ ...dataforms, ["user"]: dataUser }));
  };

  const changePlace = (dataPlace) => {
    const dataMerge = {
      ...dataforms["car"],
      ...dataforms["user"],
      ...dataPlace,
    };
    Object.keys(dataMerge).reduce((acc, key) => {
      if (dataMerge[key].hasOwnProperty("valido")) {
        dataMerge[key] = dataMerge[key].valor; //{ key:dataMerge[key]['valor'] }
      }
    }, {});
    delete dataMerge["on"];
    updateFormInconcert("tn", dataMerge.nombres);
    updateFormInconcert("tap", dataMerge.apellidos);
    updateFormInconcert("ti", dataMerge.cedula);
    updateFormInconcert("tt", dataMerge.telefono);
    updateFormInconcert("te", dataMerge.correo);
    setShowLoader(true)
    sendDatatest(dataMerge);
  };

  const updateFormInconcert = (id, value) => {
    let nuevoValor = {};
    switch (id) {
      case "tm": {
        nuevoValor.tm = value.trim();
        break;
      }
      case "tv": {
        nuevoValor.tv = value.trim();
        break;
      }
      case "ti": {
        nuevoValor.ti = value.trim();
        break;
      }
      case "tn": {
        nuevoValor.tn = value.trim();
        break;
      }
      case "tap": {
        nuevoValor.tap = value.trim();
        break;
      }
      case "tt": {
        nuevoValor.tt = value.trim();
        break;
      }
      case "te": {
        nuevoValor.te = value.trim();
        break;
      }
      case "tcu": {
        nuevoValor.tcu = value.trim();
        break;
      }
      case "th": {
        nuevoValor.t = value.trim();
        break;
      }
      case "tf": {
        nuevoValor.tf = value.trim();
        break;
      }
      case "tac": {
        nuevoValor.tac = value.trim();
        break;
      }
      case "tag": {
        nuevoValor.tag = value.trim();
        break;
      }
    }

    saveTestDrive({
      ...testDrive,
      ...nuevoValor,
    });
  };

  const sendToSugar = (data) => {
    // Se establece la data a enviar
    const sugarData = {
      modelo: data.Modelo,
      version: data.Version,

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

  const dataAPI = (id_CRM, data) => {
    const apiData = {
      modelo: data.Modelo,
      version: data.Version,
      
      nombre: data.nombres,
      apellido: data.apellidos,
      cedula: data.cedula,
      telefono: data.telefono,
      correo: data.correo,

      ciudad: data.Ciudad,
      agencia: data.Agencia,
      fecha: data.Fecha,
      horario: data.Hora,
      Id_CRM: id_CRM,
    };
    return apiData;
  };

  const sendDatatest = async (data) => {
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
      const response = await sendTestDrive(JSON.stringify(apiData));
      if (response.hasOwnProperty("id")) {
        setShowLoader(false);
        sessionStorage.setItem("dataforms", JSON.stringify(data));
        router.push("test-drive/final");
        resetAgendarCita();
      } else {
        setTextModal(
          "Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos."
        );
        setShowLoader(false);
        setModal(true);
      }
    }
  };

  return (
    <>
      <div className="row col-12 dark-bg px-0 mx-0 align-items-center">
        <div className="col-lg-7 dark-bg col px-md-5 pt-5">
          <div className="col-12 row my-5 mx-0 justify-content-center pl-5">
            <img src={imagen} className="img-fluid d-block mt-lg-5" />
          </div>
        </div>
        <div className="col-lg-5 px-4 pr-5 pt-5 bg-white process mb-3">
          <div className="suzuki-driving">Suzuki Driving Experience</div>
          <div className="suzuki-test">
            Prueba ahora tu vehículo y vive la nueva experiencia de conducción
            Suzuki.
          </div>
          <div className="row mt-5">
            <div className="col-lg-10 col-12">
              <Car
                changeCar={changeCar}
                inconcert={updateFormInconcert}
              />
            </div>

            <div
              className={`col-lg-10 col-12 ${
                data.CarFormComplete ? "" : "incomplet"
              }`}
            >
              <User
                changeUser={changeUser}
                HabilitarAllInputs={data.CarFormComplete}
                inconcert={updateFormInconcert}
              />
            </div>

            <div className="col-lg-10 col-12">
              <Place
                changePlace={changePlace}
                inconcert={updateFormInconcert}
                HabilitarAllInputs={
                  data.CarFormComplete && data.UserFormComplete
                }
              />
            </div>
          </div>
        </div>
      </div>
      <LoaderForm show={showLoader} />
      <ModalMessage
        text={textModal}
        show={modal}
        onClick={(bol) => setModal(bol)}
      />
    </>
  );
}

export default TestDriveForm;
