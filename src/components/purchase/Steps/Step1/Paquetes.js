import React, { Component } from 'react'
import { Accordion, Card, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";

function Paquetes(props) {
  const enabled = props.check;
  const [key, setKey] = React.useState('home');
  const [seleted, setPlan] = React.useState(null);
  const [textSelect, setTextSelect] = React.useState(false);
  // const [seletedCheck, setCheck] = React.useState('/images/modelos/check1.png');


  const handleClick = (e, index) => {
    setPlan(index)
    props.onClick(index)
    if (!textSelect) {
      setTextSelect(true);
    }
    if (textSelect) {
      setTextSelect(false);
    }
  }

  const list_planes = props?.planes?.map((plan, index) => {
    plan.bold = true;
    let detail = plan?.accesorios?.map((detail, indx) => (
      plan.bold ?
        <label key={`detail-${index}${indx}`} className="mb-0 px-0 ">{detail?.Descripcion}</label>
        :
        <div key={`detail-${index}${indx}`} className="d-flex flex-row">
          <div className='mr-2'>
            <img src="/images/icons/check.svg" />
          </div>
          <div>
            <label className="mb-0 px-0 " >{detail?.Descripcion}</label>
          </div>
        </div>
    ))
    let classNn = 'blocked';
    let img = '/images/modelos/check1.png';
    let text = 'Seleccionar';
    if (seleted == index && textSelect) {
      classNn = 'active';
      img = '/images/modelos/check2.png';
      text = 'Borrar';
    }

    return (
      <div className="card mb-2 card-option" key={"paquete" + index} style={{ width: '100%' }}>
        <div className="row py-3 px-3 align-items-center">
          <div className="col-3 col-sm-3 col-md-2 col-lg-4  col-xl-2">
            <center><img className="img-fluid" src={img} style={{ height: '50px', width: '50px' }} /></center>
          </div>
          <div className="col-4 col-sm-4 col-md-3  col-lg-4 col-xl-3 pr-xl-3 dark p-name text-center ">
            <span className="p-nombre d-block font-weight-bold">Paquete {plan.nombre}</span>
            {plan.precio != undefined ? <div className="text-sec mt-1 p-precio grey-light"><NumberFormat
              value={plan.precio}
              thousandSeparator="."
              decimalSeparator=","
              displayType={"text"}
              prefix={"$"}
            /></div> : ""}
          </div>
          <div className={`col-4 col-sm-4 col-md-4 col-lg-4 px-0  col-xl-4 ${plan.bold || plan.bold == undefined ? 'text-tit font-weight-bold ' : 'body-accordio text-tit2 '}`}>
            <ul className={"m-0 d-flex flex-column "}>{detail}</ul>
          </div>
          <div className=" col col-md-3 col-lg-12 col-xl-3 ">
            <div className="row pt-3 px-2 pt-lg-3 px-sm-2 px-md-2 px-lg-5 px-xl-2 ">
              <button onClick={(e) => handleClick(e, index)} disabled={enabled} className={`col-12  btn ${classNn}`}>{text}</button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="pt-3">
      <label className="title1 mb-3">Elige un paquete de accesorios</label>
      <Accordion className="d-block ">
        {list_planes}
      </Accordion>
    </div>
  );
}

export default Paquetes;