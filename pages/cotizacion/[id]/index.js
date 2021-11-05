import Head from "next/head";
import GeneralLayout from "../../../layouts/GeneralLayout";
import { useMediaQuery } from "react-responsive";
import Purchasedesktop from "../../../src/components/purchase/Purchase.js";
import Purchasereponsive from "../../../src/components/purchase/Purchasereponsive.js";
import PurchaseProvider from "../../../src/context/PurchaseProvider";
import { getModeloSlug, getColorVersionBySlug } from '../../api/models'
import React, { useState, useEffect } from 'react'
import Seo from '../../api/Seo';


function Purchase(props) {
  const mediaquery = useMediaQuery({ maxWidth: 990 });

  const [isMobile, setisMobile] = useState(true);
  useEffect(() => {
    if (mediaquery !== isMobile) {
      setisMobile(mediaquery)
    }
  }, [mediaquery])

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/purchase/Purchase.css"></link>
        <link rel="stylesheet" href="/static/purchase/Stepper.css"></link>
        <link rel="stylesheet" href="/static/purchase/Step1.css"></link>
        <link rel="stylesheet" href="/static/purchase/Step2.css"></link>
      </Head>
      <GeneralLayout Seo={props?.seo}>
        <PurchaseProvider dataModelo={props?.modelo} >
          {!isMobile && <Purchasedesktop isMobile={isMobile} />}
          {isMobile && <Purchasereponsive isMobile={isMobile} />}
        </PurchaseProvider>
      </GeneralLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  // Fetch data from external API

  let responseModelo = await getModeloSlug(id);
  if (!responseModelo) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const { versiones, ...otherProps } = responseModelo;

  responseModelo = { versions: versiones, ...otherProps };



  let responseSeo = null;
  try {
    let url = context.resolvedUrl;
    if (url.indexOf('?') >= 0) {
      url = url.split('?')[0];
    }
    responseSeo = await Seo(url);
  }
  catch (e) {
    console.log(e);
  }

  return { props: { seo: responseSeo, modelo: responseModelo } }
}

export default Purchase;
