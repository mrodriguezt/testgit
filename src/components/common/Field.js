import React, { forwardRef, useImperativeHandle } from 'react'

const Field = forwardRef((props, ref) => {
  const inputRef = React.useRef();
  //state to manage the input value - initial value ""
  const [value, setValue] = React.useState("")
  const [error, setError] = React.useState("")
  const [classStyle, setClass] = React.useState('input-group')
  const [classStyle2, setClass2] = React.useState('input-group2')
  
  React.useEffect(()=>{
    if(props.value){
      setValue(props.value)
    }
},[props.value]);

  //Input onChannge event
  const handleChange = (event) => {
    //set the value
    if (event.target.type == "checkbox") {
      if (event.target.checked) setValue(true);
      else setValue(false);
      let validoFilds = validateWithOutErrorMessage(event.target.checked);
      props.onChange(event.target.name, event.target.checked, validoFilds);
      return;
    } else {
      if (props.keyPress) {
        let valueCorrect = props.keyPress(event.target.value, value);
        setValue(valueCorrect);
      } else {
        setValue(event.target.value);
      }
    }

    setError("");
    let validoFilds = validateWithOutErrorMessage(event.target.value);
    //pass value to the parent component through the props as a callback
    props.onChange(event.target.name, event.target.value, validoFilds);
  };

  const validate = () => {
    if (props.validation) {
      const rules = props.validation.split('|')
      for (let i = 0; i < rules.length; i++) {
        let rule = rules[i]

        //in cases like min:10 max:250
        let pair = rule.split(':')
        if (pair.length > 1) rule = pair[0]

        switch (rule) {
          case 'required':
            if (!value) {
              setError("Requerido")
              return false
            }
            break;
          case 'min':
            if (value.length < pair[1]) {
              setError("Ingresa mínimo " + pair[1] + " caracteres.")
              return false
            }
            break;
          case 'max':
            if (value.length > pair[1]) {
              setError("Ingresa máximo " + pair[1] + " caracteres.")
              return false
            }
            break;
          case 'email':
            if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
              setError("Ingresa un correo válido.")
              return false
            }
            break;
          case 'phone':
            if (!Number.isInteger(Number(value))) {
              setError("Ingresa número de teléfono/celular válido.")
              return false
            }
            break;
          case 'ci':
            if (!Number.isInteger(Number(value))) {
              setError("Ingresa número cedula válido.")
              return false
            }
            break;
          case 'checked':
            if (!value) {
              setError("Debes aceptar la política de privacidad y tratamiento de datos.")
              return false
            }
            break;
          default:
            break;
        }
      }
    }
    return true
  }

  const validateWithOutErrorMessage = (valor) => {
    if (props.validation) {
      const rules = props.validation.split('|')
      for (let i = 0; i < rules.length; i++) {
        let rule = rules[i]

        //in cases like min:10 max:250
        let pair = rule.split(':')
        if (pair.length > 1) rule = pair[0]

        switch (rule) {
          case 'required':
            if (!valor) {

              return false
            }
            break;
          case 'min': {
            return valor.length >= pair[1];
            break
          }
          case 'max':
            if (valor.length <= pair[1]) {

              return false
            }
            break;
          case 'email':
            if (!valor.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {

              return false
            }
            break;
          case 'phone':
            {
              let test = (/^\d+$/i).test(valor);

              return test;

              break;
            }


          case 'checked':
            if (!valor) {
              return false
            }
            break;
          default:
            break;
        }
      }
    }
    return true
  }

  //Assing an object or object contaning methods to the ref (this reference)
  useImperativeHandle(ref, () => {
    if (props.clean) {
      setValue("");
      setClass("input-group");
    }
    return {
      validate: () => validate(),
      focus: () => inputRef.current.focus(),
      SetError:(text)=>setError(text)
    };
  })

  const handleClick = (event, props) => {

      if (props.border === "true") {
        setClass2('input-group2 focus2')
      } else {
        setClass('input-group focus')
  
      }

  }


  const handleBlur = (event, props) => {
      if (props.border === "true") {
        if (event.target.value == '') setClass2('input-group2')
        else setClass2('input-group2 ok')
      }
      else {
        if (event.target.value == '') setClass('input-group')
        else setClass('input-group ok')
      }

  }

  if (props.type == "text") {
    return (
      <>
        <div className={props.border === "true" ? classStyle2 : classStyle} onClick={(event) => inputRef.current.focus()}>
          <label className="label">{props.label} <span className="m-0 p-0 red-asterist red">*</span></label>
          <input
            type={props.type}
            className="input"
            id={props.id}
            name={props.id}
            placeholder={props.placeholder}
            value={props.value ? props.value : value}
            onChange={(event) => handleChange(event)}
            onBlur={(event) => handleBlur(event, props)}
            ref={inputRef}
            onFocus={e => handleClick(e, props)}
            disabled={props.disabled ? "" : "disabled"}
          />

        </div>
        {error && (
          <span className="error_input">{error}</span>
        )}
      </>
    );
  }
  else if (props.type == "textare") {
    return (
      <>
        <div className={classStyle} onClick={(event) => inputRef.current.focus()}>
          <label className="label">{props.label} <span className="m-0 p-0 red-asterist red"></span></label>
          <textarea
            type={props.type}
            className="input"
            id={props.id}
            name={props.id}
            placeholder={props.placeholder}
            onChange={(event) => handleChange(event)}
            onBlur={(event) => handleBlur(event, props)}
            ref={inputRef}
            onFocus={e => handleClick(e, props)}
            disabled={props.disabled ? "" : "disabled"}
            rows={6}
            value={props.value ? props.value : value}
          >
          </textarea>

        </div>
        {error && (
          <span className="error_input">{error}</span>
        )}
      </>
    )
  }
  else if (props.type == "checkbox") {
    return (
      <div className="">

        <label className="custom-check" htmlFor="autoSizingCheck">
          <span>{props.label}</span>

          <input type="checkbox" id={props.id} name={props.id} checked={props.value ? props.value : value} onChange={(event) => handleChange(event)} />
          <span className="checkmark"></span>
        </label>
        {error && (
          <span className="error_input">{error}</span>
        )}
      </div>
    )
  }
})

export default Field;