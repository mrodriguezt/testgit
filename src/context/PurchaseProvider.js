import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { modelos } from "../../utils/constant";
import { getModelslugApi, getModeloSlug } from "../../pages/api/models";

export const PurchaseContext = createContext();

const PurchaseProvider = ({ children, dataModelo }) => {
  const steps_data = [
    {
      title: "Configuración",
      icon: "/images/icons/config.png",
      icon2: "/images/icons/config.png",
      path: "./Steps/Step1.js",
    },
    {
      title: "Tus Datos",
      icon: "/images/icons/user.png",
      icon2: "/images/icons/user-g.png",
      path: "./Steps/Step2.js",
    },
    {
      title: "Lo Tengo",
      icon: "/images/icons/listo.png",
      icon2: "/images/icons/listo-g.png",
      path: "./Steps/StepFinal.js",
    },
  ];

  const clientData = {
    nombre: "",
    apellido: "",
    cedula: "",
    correo: "",
    telefono: "",
  };
  /*For financing process: alwayys show second step*/
  let step = 0,
    header = true;
  const [modal, setShowmodal] = useState(false);
  const [textModal, setTextModal] = useState("Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos.");
  const router = useRouter();
  if (router.pathname == "/financiamiento") {
    step = 1;
    header = false;
    steps_data[1].path = "./Steps/Step2.js";
  }
  useEffect(() => {
    /*let { id } = router.query;
    if (!id && !dataModelo) getModelAPI(id);*/
   // sessionStorage.setItem("model", JSON.stringify(model));
  }, [router]);

  const [model, setModels] = useState(dataModelo);
  const [selectedColor, setColor] = useState(0);
  const [selectedPaquete, setPaquete] = useState(0);
  const [steps, setSteps] = useState(steps_data);
  const [client, setClient] = useState(clientData);
  const [selectedModel, setModelId] = useState(0);
  const [selectedCar, setSelected] = useState(false);
  const [selectedModelData, setModelData] = useState(
    model.versions[selectedModel]
  );
  const [dataForm, setFormData] = useState({
    indexColor: 0,
    color: "",
    precioActual: 0,
    version: 0,
  });
  const [activeStep, setActiveStep] = useState(step);
  const [headerSteps, setHeadersteps] = useState(header);


  const getModelAPI = async (value) => {
    let response = await getModeloSlug(value);

    if (response) {
      setModels(response);
      //sessionStorage.setItem("model", JSON.stringify(response));
      setFormData({
        ...dataForm,
        precioActual: response?.precio,
      });
    } else {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  };

  const getModel = () => {
    return model;
  };

  const saveModel = (index) => {
    setModelId(index);
    setSelected(true);
    setModelData(model.versions[index]);
    setColor(0);
   /* sessionStorage.setItem("selectedModel", JSON.stringify(model.versions[index]));
    sessionStorage.setItem("selectedCar", true);*/
  };
  const saveClient = (client) => {
    setClient(client);
   // sessionStorage.setItem("client", JSON.stringify(client));
  };

  const saveColor = (index) => {
    setColor(index);
   // sessionStorage.setItem("color", index);
  };
  const savePaquete = (index) => {
    setPaquete(index);
    //sessionStorage.setItem("paquete", index);
  };

  const saveStep = (n) => {
    setActiveStep(n);
  };

  const saveHeader = (bol) => {
    setHeadersteps(bol);
  };

  const showModal = (bol) => setShowmodal(bol);

  const savetextModal = (text) => setTextModal(text);

  return (
    <PurchaseContext.Provider
      value={{
        dataForm,
        model,
        selectedModel,
        selectedModelData,
        selectedCar,
        activeStep,
        steps,
        headerSteps,
        client,
        selectedColor,
        selectedPaquete,
        saveModel: (index) => saveModel(index),
        saveClient: (value) => saveClient(value),
        saveStep: (n) => saveStep(n),
        saveColor: (n) => saveColor(n),
        savePaquete: (n) => savePaquete(n),
        getModel: () => getModel(),
        saveHeader: (bol) => saveHeader(bol),
        saveDataForm: (value) => setFormData(value),

        modal,
        textModal,
        showModal: (bol) => showModal(bol),
        saveTextModal: (text) => savetextModal(text)

      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export default PurchaseProvider;
