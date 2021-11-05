import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../../src/components/common/Breadcrumbs";
import TestDriveForm from "../../../src/components/lo-quiero/TestDriveForm";
import GeneralLayout from "../../../layouts/GeneralLayout";
import Head from "next/head";
import Seo from '../../api/Seo';
function Test(props) {

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

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/TestDrive/test.css"></link>
      </Head>
      <GeneralLayout Seo={props?.seo}>
        <div className="bg-white purchase">
          <Breadcrumbs routes={routes} />
          <TestDriveForm />
        </div>
      </GeneralLayout>
    </>
  );
}

export default Test;
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

