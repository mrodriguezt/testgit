import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Breadcrumbs from "../../../src/components/common/Breadcrumbs";
import Car from "../../../src/components/forms/test/Car";
import User from "../../../src/components/forms/User";
import Place from "../../../src/components/forms/test/Place";
import GeneralLayout from "../../../layouts/GeneralLayout";
import Image from "next/image";
import { horarios, modelos } from "../../../utils/constant";
import Head from "next/head";
import Seo from '../../api/Seo';
function Final(props) {
  const [dataforms, setDataforms] = useState();
  const [modelo, setModelo] = useState();
  const [agencia, setAgencia] = useState();
  const routes = [
    {
      path: "/",
      title: "Inicio",
    },
    {
      path: "/lo-quiero",
      title: "Lo quiero",
    },
    {
      path: "/lo-quiero/test-drive",
      title: "Test Drive",
    },
  ];

  useEffect(() => {
    if (sessionStorage) {
      if (sessionStorage.getItem("dataforms")) {
        setDataforms(JSON.parse(sessionStorage.getItem("dataforms")));
      }

      if (sessionStorage.getItem("modelTest")) {
        setModelo(JSON.parse(sessionStorage.getItem("modelTest")));
        console.log(modelo);
      }
      if (sessionStorage.getItem("agenciaTest")) {
        setAgencia(JSON.parse(sessionStorage.getItem("agenciaTest")));
        console.log(agencia);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/TestDrive/testfinal.css"></link>
      </Head>
      <GeneralLayout Seo={props?.seo}>
        <Breadcrumbs routes={routes} />
        <div className="row col-12 mx-0 container-test-final pb-5 align-items-start">
          <div className="row col-4 px-0 mx-0 justify-content-end">
            <div
              className="row col-9 mx-0 px-0 container-label-test-drive"
              style={{ minHeight: "450px" }}
            >
              <div className="row col-12 px-0 mx-0">
                <div className="row col-12 mx-0 text-card-map">
                  {agencia != undefined && agencia.nombre}
                </div>
                <div className="row col-12 mx-0 text-direction-map">
                  {agencia != undefined && agencia.direccion}
                </div>
              </div>

              <div
                className="col-12 px-0 "
                style={{ width: "100%", height: "250px" }}
              >
                {agencia != undefined && (
                  <Image
                    src={agencia.imagen.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  ></Image>
                )}
              </div>
              {agencia != undefined && (
                <div className="row col-12 no-gutters pt-2 mx-0">
                  <div className="col-6 d-flex flex-row ">
                    <img
                      src="/images/icons/google-maps.png"
                      width="20"
                      height="19"
                      className="mr-2 "
                    ></img>
                    <a
                      target="_blank"
                      href={`https://www.google.com/maps/search/?api=1&query=${agencia.latitud},${agencia.longitud}`}
                      className="d-inline m-0 links"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                  <div className="col-6 d-flex flex-row justify-content-end">
                    <img
                      src="/images/icons/icon_waze.png"
                      width="20"
                      height="19"
                      className="mr-2 mb-2"
                    ></img>
                    <a
                      target="_blank"
                      href={`https://waze.com/ul?ll=${agencia.latitud},${agencia.longitud}&z=10&navigate=yes`}
                      className="d-inline m-0 links"
                    >
                      Ver en Waze
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row col-8 mx-0">
            <div className="row mx-0 px-0 container-title">
              <div className="row col-10 mx-0 title-addv">
                ¡Muy pronto nos conoceremos!
              </div>
              <div className="row col-10 mx-0 my-3">
                Gracias por contactarte con nosotros, tu solicitud de Test Drive
                ha sido enviada. Pronto un asesor se pondrá en contacto contigo
                para agendar tu cita.
              </div>
            </div>
            <div className="row mx-0 px-0 col-11 align-items-start">
              <div className="row col-6 mx-0 my-3">
                <div className="row col-12 mx-0 container-label-test-drive">
                  <label className="row col-6 mx-0">Solicitante:</label>
                  {dataforms != undefined && (
                    <label className="row col-6 mx-0 info">
                      {dataforms.nombres} {dataforms.apellidos}
                    </label>
                  )}
                </div>
                <div className="row col-12 mx-0 container-label-test-drive">
                  <label className="row col-6 mx-0">Modelo:</label>
                  {dataforms != undefined && (
                    <label className="row col-6 mx-0 info">
                      {dataforms.Modelo}
                    </label>
                  )}
                </div>
                <div className="row col-12 mx-0 container-label-test-drive">
                  <label className="row col-6 mx-0">Fecha:</label>
                  {dataforms != undefined && (
                    <label className="row col-6 mx-0 info">
                      {dataforms.Fecha}
                    </label>
                  )}
                </div>
                <div className="row col-12 mx-0 container-label-test-drive">
                  <label className="row col-6 mx-0">Horario:</label>
                  {dataforms != undefined && (
                    <label className="row col-6 mx-0 info">
                      {dataforms.Hora}
                    </label>
                  )}
                </div>
              </div>
              <div className="row col-6 mx-0 my-3">
                {modelo != undefined && (
                  <img src={`${modelo.image.url}`}></img>
                )}
              </div>
            </div>
            <div className="row col-12 mx-0"></div>
          </div>
        </div>
      </GeneralLayout>
    </>
  );
}
export default Final;
export async function getServerSideProps({ resolvedUrl }) {

  let responseSeo = null;
  try {
    let url = resolvedUrl;
    if (url.indexOf('?') >= 0) {
      url = url.split('?')[0];
    }
    responseSeo = await Seo(url);
  }
  catch (e) {
    console.log(e);
  }
  return { props: { seo: responseSeo } };
}

