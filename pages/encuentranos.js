import React, { useEffect, useState } from "react";
import GeneralLayout from "../layouts/GeneralLayout";
import { useMediaQuery } from "react-responsive";
import Agencias from "../src/components/encuentranos/encuentranos.js";
import Contacto from "../src/components/encuentranos/Contacto";
import { getAgencias, getCiudades } from "./api/Contacus";
import Seo from './api/Seo';
function Encuentranos(props) {
  const isMobile = useMediaQuery({ maxWidth: 464 });
  const [agencias, setAgencias] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  useEffect(() => {
    async function agenciasTalleres() {
      const responseAgencia = await getAgencias();
      setAgencias(responseAgencia);
      responseAgencia.map((item) => {
        if (!ciudades.includes(item.ciudad)) {
          ciudades.push(item.ciudad);
        }
      });

      setCiudades(responseAgencia);
    }
    agenciasTalleres();
  }, []);
  return (
    <GeneralLayout toTop={false} Seo={props?.seo}>
      {<Agencias agencias={agencias} ciudades={ciudades} />}
      {<Contacto />}
    </GeneralLayout>
  );
}

export default Encuentranos;
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