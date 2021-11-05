import React, { useState } from "react";
import Breadcrumbs from "../../src/components/common/Breadcrumbs";
import Inicio from "../../src/components/lo-quiero/Inicio";
import Modelos from "../../src/components/lo-quiero/Modelos";
import Seguro from "../../src/components/lo-quiero/Seguro";
import Hunter from "../../src/components/lo-quiero/Hunter";
import GeneralLayout from "../../layouts/GeneralLayout";
import { getLoQuiero } from "../api/LoQuiero";
import Seo from '../api/Seo';
function Quiero(props) {

  const routes = [
    {
      path: "/",
      title: "Inicio",
    },
    {
      path: "#",
      title: "Lo quiero",
    },
  ];

  return (
    <>
      <GeneralLayout Seo={props?.seo}>
        <div className="bg-white lo-quiero">
          <Breadcrumbs routes={routes} paddingSeparador="pt-md-4" />
          <Inicio data={props?.data?.inicio}/>
          <Modelos />
          <Seguro data={props?.data?.seguros}/>
          <Hunter data={props?.data?.hunter}/>
        </div>
      </GeneralLayout>
    </>
  );
}

export default Quiero;

export async function getServerSideProps({ resolvedUrl }) {
  let response = await getLoQuiero();
  let aux = {
    inicio: {

    },
    seguros:{

    },
    hunter:{

    }
  };
  if (response != null) {

    response?.forEach((item) => {
      if (item?.estilo == "index") {
        aux.inicio = item;
      }
      if (item?.estilo == "seguro") {
        aux.seguros.seguro = item;
      }
      if (item?.estilo == "beneficios") {
        aux.seguros.beneficios = item;
      }
      if (item?.estilo == "contrato") {
        aux.seguros.contrato = item;
      }
      if (item?.estilo == "tracking") {
        aux.hunter.tracking = item;
      }
      if (item?.estilo == "tracking_complemento") {
        aux.hunter.tracking_complemento = item;
      }
      if (item?.estilo == "funcionalidades") {
        aux.hunter.funcionalidades = item;
      }
      if (item?.estilo == "alertas") {
        aux.hunter.alertas = item;
      }
    });
  }
  let data = {
    ...response,
    ...aux
  }
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
  return { 
    props: { 
      seo: responseSeo,
      data: data
    } 
  };
}
