import React,  { forwardRef, useImperativeHandle }  from 'react'
import  { Dropdown }  from "react-bootstrap"

//class Select extends React.Component{
const Select = forwardRef((props, ref) => {
    const inputRef = React.useRef();
    //state to manage the select value - initial value ""
    const [selected, setSelected] = React.useState(false)
    const [text, setText] = React.useState('')
    const [value, setValue] = React.useState("")
    const [error, setError] = React.useState("")
    const [classStyle, setClass] = React.useState('input-group')

    /*constructor(props) {
        super(props)
    
        this.state = {
            seleted:false,
            title: ''
        }
    }*/

   /* handleChange  = (e, text) =>{
        this.setState({ seleted: true})
        this.setState({ title: 'Cambia texto'})

        if(this.props.onChange)this.props.onChange(e)
    } */

    const handleChange = (event, text) =>{    
        setValue(event)
        setSelected(true)
        setText(text)

        setError("")
        let validoFilds =validateWithOutErrorMessage(event);
        //pass value to the parent component through the props as a callback
        props.onChange(text, props.id,validoFilds)
        //if(this.props.onChange)this.props.onChange(e)
    }

    /*Validation functions*/
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
                default:
                    break;
                }
            }
        }
        return true
    }

    const clear = ()=>{
      setSelected(false);
      setText("");
      setValue("");
      setError("");
    };

    const validateWithOutErrorMessage = (valor) => {
        if(props.validation){
          const rules = props.validation.split('|')
          for(let i=0; i<rules.length; i++){
              let rule=rules[i]

              //in cases like min:10 max:250
              let pair = rule.split(':')
              if(pair.length>1)rule=pair[0]
              
              switch(rule) {
                case 'required':
                  if(!valor){
                   
                    return false
                  }
                  break;
                case 'min':{
                    return valor.length>=pair[1];
                  break
                }
                case 'max':
                  if(valor.length<=pair[1]){
                    
                    return false
                  }
                  break;
                case 'email':
                  if(!valor.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                    
                    return false
                  }
                  break;
                case 'phone':
                   {
                    let test= (/^\d+$/i).test(valor);
                     
                    return test;
                    
                    break;
                   }
                      
                   
                case 'checked':
                  if(!valor){
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
            validate: ()=> validate(),
            clear:clear
        }
    })

    let dropdownItems=<Dropdown.Item  eventKey="1" onSelect={(event) => handleChange(event, 'Option 1', 1)}>Option 1</Dropdown.Item>
    if(props.items){
       dropdownItems=props.items.map((item, index)=>{
          return <Dropdown.Item key={`opt${index}`}  eventKey={index} onSelect={(event) => handleChange(event, item[props.field], index)}>{item[props.field]}</Dropdown.Item>
       })
    }

    return (
        <>
        <Dropdown 
            className= {props.border?selected ? 'select2 active' : 'select2':selected ? 'select active' : 'select'} 
            
            value={props.value ? props.value : value}
            ref={inputRef}
            name={props.id}>

            <Dropdown.Toggle variant="success" id="dropdown-basic" disabled={props.disabled} >
                <span className="select-title">{ props.title } <span className="m-0 p-0 red-asterist red">*</span> </span>
                <span className="select-text">{ text }</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
            {dropdownItems}
            </Dropdown.Menu>
        </Dropdown>
        {error && (
            <span className="error_input">{ error }</span>
        )}
        </>
    )    
})

export default Select