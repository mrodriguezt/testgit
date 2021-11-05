import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from 'date-fns';
import es from 'date-fns/locale/es';
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calendar = (props) => {

  const estilo = props.border === "true"?'input-group2':'input-group';
  let inputRef = React.useRef();
  const [startDate, setStartDate] = useState('')
  const [classStyle, setClass] = React.useState(estilo)

  registerLocale('es', es);

  const handleChange = (date) => {
    setStartDate(date)
    setClass(estilo+' ok')
    props.onChange(moment(date).format("YYYY-MM-DD"), "Fecha")
  }

  const handleClick = (event) => {
    document.getElementById("calendar").focus()
    if (classStyle == estilo) setClass('input-group focus')
    else setClass(estilo+' ok')
  }


  const handleBlur = (event) => {
    if (event.target.value == '') setClass(estilo)
    else setClass(estilo+' ok')
  }



  return (

    <div className={classStyle + " calendario-input"} onClick={(event) => inputRef.input.focus()}>
      <label className="label">{props.label} <span className="m-0 p-0 red-asterist red">*</span> </label>
      <DatePicker
        locale="es"
        required
        autoComplete="off"
        selected={startDate}
        onChange={date => handleChange(date)}
        onBlur={(event) => handleBlur(event)}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 5)}
        showDisabledMonthNavigation
        placeholderText=""
        className="input"
        isClearable={props.clean}
        disabled={props.disabled}
        id="calendar"
        ref={(datepicker) => { inputRef = datepicker }}
      />


    </div>
  );
};

export default Calendar