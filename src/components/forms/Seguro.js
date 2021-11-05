import React, { useEffect, useState } from "react";
import Select from "../common/Select";
import { anios, modelosPdf } from "../../../utils/constant";
import { useRouter } from "next/router";

export default function TestDrive(props) {
  const [models, setModels] = React.useState(modelosPdf);
  const [selected, setSelected] = React.useState(models[0]);
  const router = useRouter();
  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  const [data, setData] = React.useState({});
  const [clean, setClean] = React.useState(false);

  const [client, setClient] = useState([]);

  const handleChange = (value, name) => {
    setData((prev) => ({ ...prev, [name]: value }));
    if (name == "modelo") {
      inputRefs.current[1].current.clear();
      let modeloSelected = models.find((modelo) => modelo.nombre == value);
      setSelected(modeloSelected);
    }
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
      if (props.changeForm) props.changeForm(data);
    }
  };
  return (
    <form onSubmit={submitForm} id="form-contact">
      <div className="form-row global">
        <div className="col-12">
          <Select
            title="Modelo"
            id="modelo"
            field="nombre"
            clean={clean}
            ref={inputRefs.current[0]}
            onChange={(value, name) => {
              handleChange(
                value,
                name,
                "modelo"
              ); /*updateFormInconcert("ctrm", value)*/
            }}
            items={modelosPdf}
          />
        </div>
        <div className="col-12 ">
          <Select
            title="Versión"
            id="version"
            field="nombre"
            items={selected.versiones}
            ref={inputRefs.current[1]}
            onChange={(indexSelect, data) =>
              handleChange(indexSelect, data, "version")
            }
          />
        </div>
        <div className="col-12">
          <Select
            title="Año"
            id="anio"
            field="anio"
            clean={clean}
            ref={inputRefs.current[2]}
            onChange={(value, name) => {
              handleChange(value, name); /*updateFormInconcert("ctrm", value)*/
            }}
            items={anios}
          />
        </div>
        <div className="col-12 text-right">
          <label className="subtitle3 red float-right">
            * Datos requeridos
          </label>
        </div>
        <div className="col-12  pt-4 text-center">
          <button type="submit" className="btn btn-item blue-bg mb-2 w-100 ">
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}
