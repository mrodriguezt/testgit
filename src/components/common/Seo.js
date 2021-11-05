import { useState, useEffect } from "react";
import Head from "next/head";
//import { getSeo } from "../../../pages/api/seo";
import { domainSite } from '../../../utils/constant';

export default function Seo(props) {
 
 const dataDefault = {
    Title: "Suzuki Autos Ecuador | SUV y automóviles ",
    OG_Title: "Suzuki Autos Ecuador | SUV y automóviles ",
    Description:
      "Bienvenido al siguiente nivel, descubre una nueva generación de vehículos SUV y automóviles 100% japoneses. Solicita ahora una prueba de manejo.",
    Keywords:
      "suzuki,suzuki autos,autos japoneses,auto japonés,suv suzuki,vitara,vitara suzuki,s-cross suzuki,s-cross,jimny suzuki,jimny,vehículos suv,automóviles japoneses,automóvil japonés,vehículos suzuki,vehículo suzuki ,forsa,forsa suzuki",
    OG_Description:
      "Bienvenido al siguiente nivel, descubre una nueva generación de vehículos SUV y automóviles 100% japoneses. Solicita ahora una prueba de manejo.",
    OG_Image: "/_next/image?url=%2Flogo.png&w=384&q=75",
  };

  const info = props?.data && props?.data?.length >= 0 ? props?.data[0] : null;
  const url = `${domainSite ?? ''}${info?.Url ?? ''}`;
  return (
    <>
      <Head>
        <title>{info?.seo?.Title ?? dataDefault?.Title}</title>
        {
          info && <>

            <meta name="description" content={info?.seo?.Description ?? ''} />
            <meta name="keywords" content={info?.seo?.Keywords ?? ''} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={info?.seo?.OG_Title ?? ''} />
            <meta name="twitter:card" content="summary" />
            <meta property="og:description" content={info?.seo?.OG_Description ?? ''} />
            <meta
              property="og:image"
              content={info?.seo?.OG_Image?.url ?? ''}
            />
          </>
        }

        <link rel="icon" href="/faviconsuzuki.png" type="image/png" />
      </Head>
    </>
  );
}
