import React from "react";
import Input from "../../common/Field";

function User(props) {
  //create array-references to the inputs inside the component input
  //React.createRef() for every input
  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  //store values we create a object and state with and value
  const [data, setData] = React.useState({});

  //function to handle change on every input component
  const handleChange = (name, valor, valido) => {
    //use the old state   ...prev create a new copy, [name]: value set on key name the value  []
    setData((prev) => ({ ...prev, [name]: { valor, valido } }));
    let nuevoEstado = { ...data, [name]: { valor, valido } };
    let document = nuevoEstado["cedula"]?.["valido"];
    let nameInput = nuevoEstado["nombres"]?.["valido"];
    let lastname = nuevoEstado["apellidos"]?.["valido"];
    let phonr = nuevoEstado["telefono"]?.["valido"];
    let email = nuevoEstado["correo"]?.["valido"];
    let complete = document && nameInput && lastname && email && phonr;
    props.changeUser(complete, nuevoEstado);
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Submit");
    let isValid = true;
    //Valid every input-component using the ref to the input inside with the valid
    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      if (!valid) isValid = valid;
    }

    if (!isValid) return;
    else {
      console.log("Send data to API");
    }
  };

  return (
    <form
      onSubmit={submitForm}
      className={props.HabilitarAllInputs ? "" : "disabled-form-test"}
    >
      <div className="form-row align-items-center">
        {props.texto == undefined && (
          <div className="col-12 mb-2">
            <label className="title2 black">Ingresa tus datos</label>
          </div>
        )}

        <div className="col-12 mb-2">
          <Input
            type="text"
            id="cedula"
            label="Cédula de identidad"
            value=""
            onChange={handleChange}
            ref={inputRefs.current[0]}
            validation="required|ci|min:10|max:10"
            disabled={props.HabilitarAllInputs}
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
            id="nombres"
            label="Nombres"
            value=""
            onChange={handleChange}
            ref={inputRefs.current[1]}
            validation="required|min:1|max:120"
            keyPress={(valueNuevo, valueAnterior) => {
              const re = /[\!\*\'\(\)\;\:\&\=\+\$\,\/\?\#\[\]]/;
              if (!re.test(valueNuevo)) {
                return valueNuevo;
              } else {
                return valueAnterior;
              }
            }}
            disabled={props.HabilitarAllInputs}
          />
        </div>

        <div className="col-12 mb-2">
          <Input
            type="text"
            id="apellidos"
            label="Apellidos"
            value=""
            onChange={(value, name) => {
              handleChange(value, name, true);
              if (props.inconcert) props.inconcert("acn", value);
            }}
            ref={inputRefs.current[2]}
            validation="required|min:1|max:120"
            disabled={props.HabilitarAllInputs}
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
            id="telefono"
            label="Teléfono"
            value=""
            onChange={handleChange}
            ref={inputRefs.current[3]}
            validation="required|phone|min:10|max:10"
            disabled={props.HabilitarAllInputs}
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
            id="correo"
            label="Correo electrónico"
            value=""
            onChange={handleChange}
            ref={inputRefs.current[4]}
            validation="required|email"
            disabled={props.HabilitarAllInputs}
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

        <div className="col-12 text-right">
          <label className="subtitle2 red">* Datos requeridos</label>
        </div>
      </div>
    </form>
  );
}

export default User;
