import React, { useState } from "react";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const Slider = (props) => {

  const [ value, setValue ] = useState(props.min); 
  const [blockCalendar, setBlockNext] = useState(true)

  let steps = new Array(props.max/props.step).fill('');

  const handleClick = (  ) => {
    props.onClick(props.id)
  } 

  return (
    <>
    <div className="px-2">
      <div className="step-list">
        {steps.map((step)=>(<span className="span-dot"></span>))}
      </div>
      <RangeSlider
        className={ 'slider '+props.icon }
        min={props.min}
        max={props.max}
        step={props.step}
        value={value}
        tooltip='off'
        onChange={changeEvent => setValue(changeEvent.target.value)}
      />
    </div>
    <span className="text-sec grey-light">{ props.fomat.replace("val", props.min) }</span>
    <span className="float-right text-sec grey-light">{ props.fomat.replace("val", props.max) }</span>

    <div className="info-slider mt-1">
      { props.fomat.replace("val", value) }
      <a onClick={ handleClick }>
        <img src="/images/icons/next.png"/>
      </a>
    </div>
    </>
  );

};

export default Slider