import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import GeneralLayout from "../../../layouts/GeneralLayout";
//api
import { sendContratarSeguro } from "../../api/TestDrive";
//sugar
import LinkSugar from "../../../utils/link-sugar";
// Forms
import User from "../../../src/components/forms/User/User";
import SeguroForm from "../../../src/components/forms/Seguro";
import ModalMessage from "../../../src/components/common/ModalMessage";
import LoaderForm from "../../../src/components/common/LoaderForm";
import Seo from '../../api/Seo';
export default function form(props) {
  const router = useRouter();
  const [dataforms, setDataforms] = useState([]);
  const [siguiente, setSiguiente] = useState(false);
  const [showLoader, setShowLoader] = React.useState(false);
  const [data, setData] = useState({
    CarFormComplete: false,
    UserFormComplete: false,
  });
  const [textModal, setTextModal] = useState(
    "Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos."
  );
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (sessionStorage) {
      sessionStorage.removeItem("modeloSeguro");
    }
  }, []);

  const passSiguiente = (value) => {
    console.log(data);
    if (data.UserFormComplete) setSiguiente(true);
  };

  const sendForm = (dataCar) => {
    const dataMerge = {
      ...dataforms["user"],
      ...dataCar,
    };
    Object.keys(dataMerge).reduce((acc, key) => {
      if (dataMerge[key].hasOwnProperty("valido")) {
        dataMerge[key] = dataMerge[key].valor; //{ key:dataMerge[key]['valor'] }
      }
    }, {});
    delete dataMerge["on"];
    setShowLoader(true);
    sendDatatest(dataMerge);
  };

  const changeUser = (complete, dataUser) => {
    setData((prev) => ({ ...prev, UserFormComplete: complete }));
    if (complete)
      setDataforms((dataforms) => ({ ...dataforms, ["user"]: dataUser }));
  };

  const dataAPI = (id_CRM, data) => {
    const apiData = {
      nombres: data.nombres,
      apellidos: data.apellidos,
      cedula: data.cedula,
      telefono: data.telefono,
      correo: data.correo,

      modelo: data.modelo,
      version: data.version,
      anio: data.anio,
      Id_CRM: id_CRM,
    };
    return apiData;
  };

  const sendDatatest = async (data) => {
    console.log(data)
    if (data != undefined) {
      let Id_CRM = "NA";
      let apiData = dataAPI(Id_CRM, data);
      const response = await sendContratarSeguro(JSON.stringify(apiData));
      if (response.hasOwnProperty("id")) {
        setShowLoader(false);
        sessionStorage.setItem("modeloSeguro", JSON.stringify(data));
        router.push("contratar-seguro/final");
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
    <GeneralLayout toTop={false} Seo={props?.seo}>
      <div className="container min-vh-70 d-flex align-items-center">
        <div className=" mx-lg-5 px-lg-5 my-5 mx-3">
          <div className=" mx-lg-5 px-lg-5">
            <div className="mx-lg-5 px-lg-5">
              <h1>Contrata tu seguro</h1>
              {!siguiente && (
                <User
                  texto=""
                  changeUser={changeUser}
                  HabilitarAllInputs={true}
                />
              )}
              {siguiente && (
                <SeguroForm
                  texto=""
                  changeForm={sendForm}
                  showLoader={(bol) => setShowLoader(bol)}
                  saveTextModal={(text) => setTextModal(text)}
                  showModal={(bol) => setModal(bol)}
                />
              )}
              {!siguiente && (
                <div className="col-12 px-0 text-center">
                  <button
                    onClick={() => passSiguiente()}
                    className="btn btn-item blue-bg mb-2 w-100 "
                    style={{ border: "none" }}
                  >
                    Siguiente
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ModalMessage
        text={textModal}
        show={modal}
        onClick={(bol) => setModal(bol)}
      />
      <LoaderForm show={showLoader} />
    </GeneralLayout>
  );
}
export async function getServerSideProps({ resolvedUrl }) {

  let responseSeo = null;
  try {
    let url = resolvedUrl;
    if (url.indexOf('?') >= 0) {
      url = url.split('?')[0];
    }
    responseSeo = await Seo(url);
  }
  catch (e) {
    console.log(e);
  }
  return { props: { seo: responseSeo } };
}