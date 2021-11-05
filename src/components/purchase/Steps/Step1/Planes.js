import React, { Component } from 'react'
import { Accordion, Card, Button } from "react-bootstrap";

function Planes(props) {
  const [key, setKey] = React.useState('home');
  const [seleted, setPlan] = React.useState(null);


  const handleClick = (e, index) => {
    setPlan(index)
    props.onClick(index)
  }

  const list_planes = props.planes.map((plan, index) => {
    let classNn = 'blocked'
    if (seleted == index) classNn = 'active'
    return <button key={`version-${index}`} className={`btn mb-2 version ${classNn} `} onClick={(e) => handleClick(e, index)}>{plan.nombre}</button>
  });

  return (
    <div className=" row pt-3 ">
      <div className="col-12"><label className="title1 mb-3">Elige una versión</label></div>
      <Accordion className="d-flex flex-wrap">
        {list_planes}
      </Accordion>
    </div>
  );
}

export default Planes;