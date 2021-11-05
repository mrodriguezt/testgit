import React from "react";
import Select from "../../../common/Select";
import { getModelos } from "../../../../../pages/api/models";

function Car(props) {
  //create array-references to the inputs inside the component input
  //React.createRef() for every input
  const inputRefs = React.useRef([React.createRef(), React.createRef()]);
  //store values we create a object and state with and value
  const [data, setData] = React.useState({ Modelo: "", Version: "" });
  const [models, setModels] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    async function getModelosApi() {
      const responseModels = await getModelos();
      setModels(responseModels);
    }
    getModelosApi();
  }, []);
  //function to handle change on every input component
  const handleChange = (value, index, name, id) => {
    //use the old state   ...prev create a new copy, [name]: value set on key name the value  []
    setData((prev) => ({ ...prev, [id]: value }));

    let nuevoEstado = { ...data, [id]: value };
    setDisabled(false);
    if (id == "Modelo") {
      inputRefs.current[1].current.clear();
      let modeloSelected = models.find((modelo) => modelo.modelo == value);
      setSelected(modeloSelected);
      if (modeloSelected != undefined)
        sessionStorage.setItem("modelTest", JSON.stringify(modeloSelected));
    }
    let complete = nuevoEstado.modelo != "" && nuevoEstado.Version != "";
    props.changeCar(complete, nuevoEstado);
  };

  const submitForm = (e) => {
    e.preventDefault();

    let isValid = true;
    //Valid every input-component using the ref to the input inside with the valid
    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      if (!valid) isValid = valid;
    }

    if (!isValid) return;
    else console.log("Send data to API");
  };

  return (
    <form onSubmit={submitForm}>
      <div className="form-row align-items-center">
        <div className="col-12">
          <label className="title2 black">Selecciona el vehículo</label>
        </div>
        <div className="col-12 mb-2">
          <Select
            title="Elige modelo"
            field="modelo"
            id="Modelo"
            items={models}
            ref={inputRefs.current[0]}
            onChange={(value, indexSelect, data) => {
              handleChange(value, indexSelect, data, "Modelo");
              if (props.inconcert) props.inconcert("tm", value);
            }}
          />
        </div>
        <div className="col-12 mb-2">
          <Select
            disabled={disabled}
            title="Versión"
            id="Version"
            field="nombre"
            items={selected?.versiones}
            ref={inputRefs.current[1]}
            onChange={(value, indexSelect, data) =>{
              handleChange(value, indexSelect, data, "Version");
              if (props.inconcert) props.inconcert("tv", value);
            }
            }
          />
        </div>

        <div className="col-12 text-right">
          <label className="subtitle2 red float-right">
            * Datos requeridos
          </label>
        </div>
      </div>
    </form>
  );
}

export default Car;
