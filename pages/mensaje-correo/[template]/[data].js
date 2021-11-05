import React, { useEffect } from "react";
import Loader from "../../../src/components/common/Loader";
import { getHTMLMessage } from "../../api/correo";
import Seo from '../../api/Seo';
export async function getServerSideProps({ query, resolvedUrl }) {
  const { template, data } = query;

  const props = await getHTMLMessage(template, data);
  props.print = "print" in query;

  let responseSeo = null;
  try {
    let url = resolvedUrl;

    let arrayString = url.split("/");

    url = arrayString && arrayString?.length > 0 ? "/"+arrayString[1] : url;



    responseSeo = await Seo(url);
  }
  catch (e) {
    console.log(e);
  }
  props.seo = responseSeo;


  return { props };
}


function MensajeCorreo({ styles, body, print }) {
  useEffect(() => {
    if (window == undefined) return;
    if (print) {
      window.print();
    }
  }, []);

  return (
    <>
      <Loader />
      <div
        id="styles-template"
        className="styles"
        dangerouslySetInnerHTML={{ __html: styles }}
      ></div>
      <div
        id="content-template"
        className="message"
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
    </>
  );
}

export default MensajeCorreo;
