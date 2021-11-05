import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import GeneralLayout from "../../../layouts/GeneralLayout";
import Galleryproduct from "../../../src/components/common/GalleryproductStorage.js";
import Breadcrumbs from "../../../src/components/common/Breadcrumbs";
import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Info from "../../../src/components/purchase/Final/StepFinal";
import Steps from "../../../src/components/purchase/Final/Steps";
import { getCotizacion } from "../../api/Cotizacion";
import { getModelslugApi } from "../../api/models";
import Seo from '../../api/Seo';
function Finalreponsive(props) {
  const model = props?.dataCotizacion?.formulario?.modelo ?? [];

  let features = model?.caracteristicas?.map((item, index) => {
    return (
      <div
        key={`feature-${index}`}
        className={`px-1 feature d-flex align-items-center mb-3 ${item.texto?.trim() == "" ? "align-self-center" : ""
          }`}
      >
        <img
          className={` ${item.texto?.trim() == "" ? "solo-img" : "feat-img"}`}
          src={`${item.icono?.url}`}
          alt="Feature"
        />
        {item?.texto && item.texto?.trim() != "" && (
          <label className="m-0 ml-1">{item?.texto}</label>
        )}
      </div>
    );
  });

  return (
    <div className="bg-white purchase row mx-0">
      <div className="col-12 my-lg-5">
        <div className="md-stepper-horizontal orange row mx-0">
          <div className="col-12 d-flex ">
            <Steps isMobile={props.isMobile} />
          </div>
        </div>
        <div className="model-name col-12 px-0">{model?.modelo}</div>
        <div className="model-type col-12 px-0">{model?.tipo}</div>
        <div className="model-info pb-2 col-12 px-0">{model?.info}</div>
        <div className="model-feature d-flex flex-wrap ">
          {features != undefined && features}
        </div>
        <Galleryproduct isMobile={props.isMobile} dataCotizacion={props.dataCotizacion?.metadataFormulario} />
      </div>
      <div className="col-12 ">
        <div className="process">
          <Info isMobile={props.isMobile} idFormulario={props?.idFormulario} dataCotizacion={props?.dataCotizacion} />
        </div>
      </div>
    </div>
  );
}

function FinalWeb(props) {


  const isMobile = props.isMobile;
  const model =props?.dataCotizacion?.formulario?.modelo ?? [];


  const routes = [
    {
      path: "/",
      title: "Inicio",
    },
    {
      path: "/#modelos",
      title: "Modelos",
    },
    {
      path: "/modelos/" + model?.slug,
      title: model?.modelo,
    },
    {
      path: "#",
      title: "Financiamiento",
    },
  ];
  let features = model?.caracteristicas?.map((item, index) => {
    return (
      <div
        key={`feature-${index}`}
        className={`${model?.caracteristicas?.lenght != index + 1 ? "mr-3" : ""
          } feature d-flex align-items-center mb-3 ${item?.texto?.trim() == "" ? "align-self-center" : ""
          }`}
      >
        <img
          className={` ${item?.texto?.trim() == "" ? "solo-img" : "feat-img"}`}
          src={`${item.icono?.url}`}
          alt="Feature"
        />
        {item?.texto && item?.texto?.trim() != "" && (
          <label className="m-0 ml-1">{item?.texto}</label>
        )}
      </div>
    );
  });

  return (
    <>
      <div className="bg-white purchase">
        <Breadcrumbs routes={routes} />
        <div className="row col-12 px-0 mx-0">
          <div className="col-lg-6 col-12 px-md-5 pt-5">
            <div className="col-12 row mt-5 px-3">
              <div className="model-name col-12 px-0">{model?.modelo}</div>
              <div className="model-type col-12 px-0">{model?.tipo}</div>
              <div className="model-info pb-2 col-12 px-0">{model?.info}</div>
              <div className="model-feature d-flex flex-wrap ">
                {features != undefined && features}
              </div>
              <Galleryproduct isMobile={isMobile} dataCotizacion={props.dataCotizacion?.metadataFormulario} />
            </div>
          </div>
          <div className="col-lg-6 col-12 px-4 pt-5 dark-bg">
            <div className=" process ">
              <div className="md-stepper-horizontal orange row mx-0">
                <div className="col-12 d-flex ">
                  <Steps isMobile={isMobile} />
                </div>
              </div>
              <Info idFormulario={props?.idFormulario} dataCotizacion={props?.dataCotizacion} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Final(props) {

  const router = useRouter();
  const [render, setRender] = useState(false);

  const idCotizacion = props?.data?.idFormCotizacion;
  const mobileSsr = props.isMobile;
  const query = useMediaQuery({ maxWidth: 991.5 });
  const [isMobile, setIsMobile] = useState(mobileSsr);

  useEffect(() => {
    setIsMobile(query);
  }, [query]);
  return (
    <>
      {(
        <>
          <Head>
            <link rel="stylesheet" href="/static/purchase/Purchase.css"></link>
            <link rel="stylesheet" href="/static/purchase/Stepper.css"></link>
            <link rel="stylesheet" href="/static/purchase/Step1.css"></link>
            <link rel="stylesheet" href="/static/purchase/Step2.css"></link>
            <link rel="stylesheet" href="/static/purchase/StepFinal.css"></link>
          </Head>
          <GeneralLayout Seo={props?.seo}>

            {!isMobile && <FinalWeb isMobile={isMobile} idFormulario={idCotizacion} dataCotizacion={props?.data} />}
            {isMobile && <Finalreponsive isMobile={isMobile} idFormulario={idCotizacion} dataCotizacion={props?.data} />}

          </GeneralLayout>
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {

  let userAgent;
  let { req } = context;
  if (req) {
    // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers["user-agent"]; // get the user-agent from the headers
  } else {
    userAgent = navigator?.userAgent; // if you are on the client you can access the navigator from the window object
  }
  let isMobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));


  let { idFormCotizacion } = context.query;
  let resolvedUrl = context.resolvedUrl;

  let responseSeo = null;
  try {
    let url = resolvedUrl;

    let arrayString = url.split("/");

    url = arrayString && arrayString?.length > 0 ? "/" + arrayString[1] + "/" + arrayString[2] : url;
    responseSeo = await Seo(url);
    if (responseSeo && responseSeo.length >= 0) {
      responseSeo[0].Url = resolvedUrl;
    }
  }
  catch (e) {
    console.log(e);
  }

  const responseFormCotizacion = await getCotizacion(idFormCotizacion);
  //if(responseFormCotizacion && responseFormCotizacion?.metadata){
  if (responseFormCotizacion?.cotizacion?.id) {
    try {

      let json = JSON.parse(responseFormCotizacion?.cotizacion?.metadata);

      return {
        props: {
          data: {
            formulario: responseFormCotizacion ? responseFormCotizacion : null,

            precioVersion: json?.precioVersion ? json?.precioVersion : null,
            idFormCotizacion: idFormCotizacion,
            metadataFormulario: json

          },
          seo: responseSeo,
          isMobile: isMobile
        }
      };



    }
    catch (e) {
      console.log(e);
      return {
        // returns the default 404 page with a status code of 404
        notFound: true
      }
    }
  }
  else {
    console.log('el endpoint get del formulario de cotizacion fallo');
    return {
      // returns the default 404 page with a status code of 404
      notFound: true
    }
  }
}

export default Final;