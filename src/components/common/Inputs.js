import React , { forwardRef, useImperativeHandle } from 'react'

const Inputs = forwardRef((props, ref) => {
      //state to manage the input value - initial value ""
      const [value, setValue] = React.useState("")
      const [error, setError] = React.useState("")
      const [focusInput, setFocus] = React.useState(false)
      
      const inputRef = React.createRef();
      //Input onChannge event
      const handleChange = (event) =>{
        //set the value
        if(event.target.type=="checkbox"){
          if (event.target.checked)setValue(true)
          else setValue(false)
        }
        else setValue(event.target.value)

        setError("")

        //pass value to the parent component through the props as a callback
        //props.onChange(event.target.name, event.target.value)
      }

      const validate = () => {
        if(props.validation){
          const rules = props.validation.split('|')
          for(let i=0; i<rules.length; i++){
              let rule=rules[i]

              //in cases like min:10 max:250
              let pair = rule.split(':')
              if(pair.length>1)rule=pair[0]
              
              switch(rule) {
                case 'required':
                  if(!value){
                    setError("Requerido")
                    return false
                  }
                  break;
                case 'min':
                  if(value.length<pair[1]){
                    setError("Ingresa mínimo "+pair[1]+" caracteres.")
                    return false
                  }
                  break;
                case 'max':
                  if(value.length>pair[1]){
                    setError("Ingresa máximo "+pair[1]+" caracteres.")
                    return false
                  }
                  break;
                case 'email':
                  if(!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                    setError("Ingresa un correo válido.")
                    return false
                  }
                  break;
                case 'phone':
                    if(!value.IsDigit){
                      setError("Ingresa número de teléfono/celular válido.")
                      return false
                    }
                    break;
                case 'checked':
                  if(!value){
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

      //Assing an object or object contaning methods to the ref (this reference)
      useImperativeHandle(ref, () => {
        return{
          validate: ()=> validate()
        }
      })

      const handleClick = (event) =>setFocus(true)

      const handleBlur = (event) => setFocus(false)
    
      
      if(props.type=="text"){
        return( 
          <div className= { focusInput ? 'input-group focus' : 'input-group'} onClick={(e) => handleClick(e)}>
              <label className="label">{props.label} </label>
              <input 
                  type={props.type} 
                  className="input" 
                  id={props.id} 
                  name={props.id} 
                  placeholder={props.placeholder}
                  value={props.value ? props.value : value}
                  onChange={(event) => handleChange(event)}
                  ref={ ref => ref && ref.focus() }
                  onBlur={(event) => handleBlur(event)}
              />            
            
            {error && (
                <span className="error_input">{ error }</span>
            )}
            
          </div>
        );
      }else if(props.type=="textarea"){
        return( 
        <div className="form-group">
            <img
            className="mr-2"
            src={props.img}
            alt={props.alt}
            />
            <label className="form-label">{props.label} </label>
              <textarea className="form-control textarea" id={props.id} rows={props.rows} onChange={(event) => handleChange(event)}>
              {props.value ? props.value : value}
              </textarea>
            {error && (
                  <span className="error_input">{ error }</span>
            )}
        </div>
        )
      }else if(props.type=="checkbox"){
        return( 
          <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" id={props.id} onChange={(event) => handleChange(event)}/>
            <label className="form-check-label" htmlFor="autoSizingCheck">
            {props.label}
            </label>
            {error && (
                  <span className="error_input">{ error }</span>
            )}
          </div>
        )
      }
})

export default Inputs;