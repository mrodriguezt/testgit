import React, { useEffect, useState } from "react";
import GeneralLayout from "../../../layouts/GeneralLayout";
import { withRouter } from "next/router";
import Page from "../../../src/components/common/ThankyouPage";
import Seo from '../../api/Seo';
function ThankYouPage(props) {
  const [image, setImage] = useState("");

  return (
    <GeneralLayout Seo={props?.seo}>
      <Page image={image} link={"/"} boton={"Página principal"} />
    </GeneralLayout>
  );
}

export default withRouter(ThankYouPage);
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