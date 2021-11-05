import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import ModalMessage from "../common/ModalMessage";
import Contactus from "../forms/contacto/Contactus";

function Contacto() {
  const [textModal, setTextModal] = useState("Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos.");
  const [modal, setModal] = useState(false);
  return (
    <div
      className="row col-12 px-lg-0 px-3 justify-content-end"
      style={{
        backgroundImage: `linear-gradient(270deg, #FFFFFF 0%, #FFFFFF 20%,rgba(255, 255, 255, 0) 100%), url('/images/contacto.jpg')`,
        backgroundRepeat:`no-repeat`,
        backgroundPosition: `35% bottom`,
        backgroundSize:`cover`
      }}
    >
      <div className="col-lg-4 col-md-6 col-12 mr-lg-5 py-5 form-contacto">
        <label id="talleres" className="title2 black">Contáctanos</label>
        <p className="text2 grey-light">
          Ingresa la siguiente información para que uno de nuestros asesores se
          pongan en contacto contigo.
        </p>
        <Contactus  contact={true} showModal={(bol)=>setModal(bol)} setTextModal={(text)=>setTextModal(text)}/>
      </div>
      <ModalMessage
        text={textModal}
        show={modal}
        onClick={(bol) => setModal(bol)}
      />
    </div>
  );
}
export default Contacto;
