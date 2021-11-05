import React, { useState, useEffect, useRef } from "react";
import style from "./TestDrive.module.scss";
import { Modal } from "react-bootstrap";
import LoaderForm from "../LoaderForm";
import ScheduleTestDrive from "../../forms/ScheduleTestDrive";
import ModalMessage from "../ModalMessage";
import Image from "next/image";
import { Animated } from "react-animated-css";
import { gsap } from "gsap";
import Link from "next/link";
export default function TestDrive() {
  const [textModal, setTextModal] = useState(
    "Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos."
  );
  const [modal, setModal] = useState(false);
  const [showLoader, setShowLoader] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(!visible);
    }, 30000);
    let button = document.getElementsByClassName("animated bounce");
    if (button[0]) {
      button[0].style.cssText = "pointer-events: all; animation-duration: 4000ms;"
    }
    return () => clearInterval(interval);
  }, [visible]);
  return (
    <>
      <div className={style.btns}>
        <button id="btnchateanosotros" className={style.chat}>
          Chatea
        </button>
        <Animated
          animationIn="tada"
          animationOut="bounce"
          animationInDuration={3000}
          animationOutDuration={4000}
          isVisible={visible}
        >
        <Link href={"/lo-quiero/test-drive"}>
          <button
            id="btntestDrive"
            className={style.test}
          >
            <Image src="/images/icons/testDrive.svg" width="33" height="33" alt="Test Drive"/>
          </button>
        </Link>
        </Animated>
      </div>

      <ModalMessage
        text={textModal}
        show={modal}
      />
      <LoaderForm show={showLoader} />
      <Modal
        show={open}
        onHide={() => setOpen(false)}
        className={showLoader ? "d-none" : "global"}
      >
        <Modal.Header closeButton>
          <Modal.Title className="color-bl modal-text">
            Test Drive
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0">
          <ScheduleTestDrive
            handleClose={() => setOpen(false)}
            showModal={(bol) => setModal(bol)}
            showLoader={(bol) => setShowLoader(bol)}
            setTextModal={(text) => setTextModal(text)}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
