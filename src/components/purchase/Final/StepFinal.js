import React, { useState, useEffect } from "react";
import { PurchaseContext } from "../../../context/PurchaseProvider";
import Link from "next/link";
import { Modal } from "react-bootstrap";
import Agendar from "../../forms/Agendar";
import TestDrive from "../../forms/Testdrive";
import LoaderForm from "../../common/LoaderForm";
import NumberFormat from "react-number-format";
import ModalMessage from "../../common/ModalMessage";
import ToolTip from "rc-tooltip";
import 'rc-tooltip/assets/bootstrap.css';

function StepFinal(props) {
  let cotizacion = props?.dataCotizacion?.formulario?.cotizacion;
  let cliente = null;
  let accesorios = {
    version: cotizacion?.version
  };
  if (cotizacion) {
    cliente = {
      "nombres": cotizacion?.nombres,
      "apellido": cotizacion?.apellidos,
      "cedula": cotizacion?.cedula,
      "correo": cotizacion?.correo,
      "telefono": cotizacion?.telefono

    };
  }
  const [showTest, setShowTest] = useState(false);
  const [show, setShow] = useState(false);
  const [showLoader, setShowLoader] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleCloseTest = () => setShowTest(false);
  const [textModal, setTextModal] = useState("Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos.");
  const [modal, setModal] = useState(false);

  const handleShow = (value) => {
    if (value == "cita") {
      setShow(true);
    } else {
      setShowTest(true);
    }
  };


  const [client, setClient] = useState(cliente ?? []);
  const [model, setModel] = useState(props?.dataCotizacion?.formulario?.modelo ?? []);

  var subtotal;
  if (
    cotizacion?.precio_paquete
  ) {
    subtotal =
      parseFloat(cotizacion?.precio_paquete) +
      parseFloat(props?.dataCotizacion?.precioVersion);
  } else {
    subtotal = parseFloat(props?.dataCotizacion?.precioVersion);
  }
  return (
    <div className="pt-3">
      <div className="step-title">Tu solicitud ha sido enviada</div>
      <p className="subtitle subtitle-nt">
        Revisa el detalle de la simulación de compra que hemos realizado!
      </p>
      <div className="bg-white p-3 text-break">
        <div className="row col-12 px-0 mx-0 align-items-center">
          <label className="col-4 col-sm-6 p-0 my-0 font-weight-bold">
            Nombre:
          </label>
          <label className="col-8 col-sm-6 py-0 my-0">
            {client?.nombres} {client?.apellido}
          </label>
        </div>
        <div className="row col-12 px-0 mx-0 align-items-center">
          <label className="col-4 col-sm-6 p-0 my-0 font-weight-bold">
            Número de Cédula:
          </label>
          <label className="col-8 col-sm-6 py-0 my-0">{client?.cedula}</label>
        </div>
        <div className="row col-12 px-0 mx-0 overflow-hidden align-items-center">
          <label className="col-4 col-sm-6 p-0 my-0 font-weight-bold">
            Correo:
          </label>
          <label className="col-8 col-sm-6 py-0 my-0">{client?.correo}</label>
        </div>
        <div className="row col-12 px-0 mx-0 align-items-center">
          <label className="col-4 col-sm-6 p-0 my-0 font-weight-bold">Teléfono:</label>
          <label className="col-8 col-sm-6 py-0 my-0">{client?.telefono}</label>
        </div>
      </div>
      <div className="col-12 pt-4 px-5 ">
        <div className="row border-bottom "></div>
      </div>
      <div className="row pl-2 col-12 px-0 mx-0 pt-4 pb-2 ">
        <label className="col-12 p-0 my-0 step-title2">Detalle</label>
      </div>

      <div className="row">
        <div className="col-6 pl-4">
          <div className="row col-12 px-0 mx-0">
            <label className="col-5 col-lg-3  p-0 my-0 font-weight-bold">
              Versión:
            </label>
            <label className="col-7 col-lg-9 py-0 my-0 textcase-upper">
              {cotizacion?.version}
            </label>
          </div>
          <div className="row col-12 px-0 mx-0">
            <label className="col-5 col-lg-3 p-0 my-0 font-weight-bold">
              Color:
            </label>
            <label className="col-7 col-lg-9 py-0 my-0 text-uppercase">
              {cotizacion?.color}
            </label>
          </div>
          <div className="row col-12 px-0 mx-0">
            <label className="col-5 col-lg-3 p-0 my-0 font-weight-bold">
              Paquete:
            </label>
            <label className="col-7 col-lg-9 py-0 my-0 text-uppercase">
              {cotizacion?.paquete}
            </label>
          </div>
          <div className="row col-12 px-0 mx-0">
            <label className="col-3 p-0 my-0 font-weight-bold">Subtotal:</label>
          </div>
        </div>
        <div className="col-6">
          <div className="row col-12 px-0 mx-0">
            <label className="col-12 py-0 my-0 text-right">
              <NumberFormat
                value={props?.dataCotizacion?.precioVersion}
                thousandSeparator="."
                decimalSeparator=","
                displayType={"text"}
                prefix={"$"}
              />
            </label>
          </div>
          <div className="row col-12 px-0 mx-0">
            <label className="col-12 py-0 my-0 text-right">Incluido</label>
          </div>
          <div className="row col-12 px-0 mx-0">
            <label className="col-12 py-0 my-0 text-right">
              {cotizacion?.precio_paquete && (
                <NumberFormat
                  value={
                    cotizacion?.precio_paquete
                      ? cotizacion?.precio_paquete
                      : 0
                  }
                  thousandSeparator="."
                  decimalSeparator=","
                  displayType={"text"}
                  prefix={"$"}
                />
              )}
            </label>
          </div>
          <div className="row col-12 px-0 mx-0">
            <label className="col-12 py-0 my-0 text-right">
              <NumberFormat
                value={subtotal}
                thousandSeparator="."
                decimalSeparator=","
                displayType={"text"}
                prefix={"$"}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="px-4 pt-4">
        <div className="row  color-b px-4">
          <div
            className="col-5 col-lg-6  text-white font-weight-bold text-left"
            style={{ fontSize: "16px" }}
          >
            <p className="mt-3">TOTAL</p>
          </div>
          <div
            className="col-7 col-lg-6 text-white font-weight-bold text-right"
            style={{ fontSize: "30px" }}
          >
            <p className="my-2">
              <NumberFormat
                value={subtotal}
                thousandSeparator="."
                decimalSeparator=","
                displayType={"text"}
                prefix={"$"}
              />
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-12 pt-3"
        style={{ fontSize: "14px", lineHeight: "140%" }}
      >
        <label>
          * Importante: Los precios cotizados e imágenes son referenciales
        </label>
      </div>
      <div
        className="col-12 pt-1 "
        style={{ fontSize: "22px", fontWeight: "bold" }}
      >
        <label>¿Cómo deseas continuar?</label>
      </div>
      <div
        className="col-12 "
        style={{ fontSize: "14px", color: "#404042", lineHeight: "140%" }}
      >
        <label>Selecciona una de las siguientes opciones.</label>
      </div>

      <div className="pb-4 bg-image test">
        <div className="row   botones">
          <div className="col-12 my-3 ">
            <button
              onClick={(value) => {
                handleShow("test");
              }}
              className={`btn test-principal mt-1 mt-sm-3 w-100 ${model?.slug == "vitara" ? "bg-orange" : ""
                }`}
            >
              <img src="/images/icons/volante.svg" />
            </button>

            <Modal
              show={showTest}
              onHide={handleCloseTest}
              className={showLoader ? "d-none" : "global model-detail"}
            >
              <Modal.Header closeButton style={{ borderBottom: "0 none" }}>
                <Modal.Title className="color-black modal-text odal-title w-100 text-center pt-5  ">
                  Agendar Test Drive
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="warranty global">
                  <TestDrive
                    imagen={props.dataCotizacion?.metadataFormulario?.imagen}
                    client={client}
                    model={model}
                    accessories={accesorios}
                    handleClose={handleCloseTest}
                    showLoader={(bol) => setShowLoader(bol)}
                    saveTextModal={(text) => setTextModal(text)}
                    showModal={(bol) => setModal(bol)}
                  />
                </div>
              </Modal.Body>
            </Modal>
          </div>
          <div className="col-6 text-center">
            <button
              onClick={(value) => {
                handleShow("cita");
              }}
              className="btn test mt-1 mt-sm-3 w-100"
            >
              <img src="/images/icons/calendario.svg" />
              Agendar Cita
            </button>
          </div>

          {/*<div className="col-6 text-center">
            <ToolTip
              placement="top"
              overlayClassName={`arrowToolTip`}
              trigger={["click"]}
              overlay={<Share idStrapi={props?.idFormulario} />}
            >
              <button className="btn test mt-1 mt-sm-3 w-100">
                <img src="/images/icons/compartir.svg" />
                Compartir
              </button>
            </ToolTip>
          </div>*/}
          <div className="col-6 text-center">
            <a
              target="_blank"
              href={`${model?.ficha_tecnica?.url
                }`}

            >
              <button className="btn test mt-1 mt-sm-3 w-100">
                <img src="/images/icons/download.svg" />
                Descargar
              </button>
            </a>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        className={showLoader ? "d-none" : "global model-detail pr-0"}
      >
        <Modal.Header closeButton style={{ borderBottom: "0 none" }}>
          <Modal.Title className="color-black modal-text odal-title w-100 text-center pt-5  ">
            Agenda la cita
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="warranty global">
            <Agendar
              model={model}
              client={cliente}
              handleClose={handleClose}
              showLoader={(bol) => setShowLoader(bol)}
              saveTextModal={(text) => setTextModal(text)}
              showModal={(bol) => setModal(bol)}
            />
          </div>
        </Modal.Body>
      </Modal>
      <LoaderForm show={showLoader} />
      <ModalMessage
        text={textModal}
        show={modal}
        onClick={(bol) => setModal(bol)}
      />
    </div>
  );
}


const Share = props => {
  let url = `${window?.location?.protocol}//${window?.location?.host}/reports/cotizacion/${props?.idStrapi}`;
  return (
    <>
      <div className="row mx-0">
        <div className="col-12 px-1">
          <p className={`mx-0 textComparteEn`}>Comparte</p>
        </div>
      </div>

      <div className="row mx-0 mt-1">
        <div className="col-12 px-1 text-left">
          <Link
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Te detallamos el pdf de la cotización realizada: ${url}`)}&lang=es`}>
            <a target="_blank">
              <img src="/images/footer/WhatsappLogo.svg"></img>
            </a>
          </Link>
        </div>
      </div>

      <div className="row mx-0 mt-2">
        <div className="col-12 px-1">

          <a href={url} target="_blank" className="text-reset">
            <div className="d-flex align-items-center">
              <p className={`textDownloadPdf mb-0 mr-2`}>Descargar PDF</p>
              <img src="/images/icons/Download-Icon.svg"></img>
            </div>
          </a>

        </div>
      </div>
    </>
  )
}

export default StepFinal;
