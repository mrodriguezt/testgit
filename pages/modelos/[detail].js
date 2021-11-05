import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import GeneralLayout from "../../layouts/GeneralLayout";
import { getCaracteristicas, getSecciones, getModeloSlug } from '../api/models'
import DetailModel from "../../src/components/models/detail/Detail";
import Detailmobile from "../../src/components/models/detail/Detailmobile";
import Seo from '../api/Seo';
function Detail(props) {
  let { data, data_api } = props;
  let modelo_prueba = {
    id: 2,
    Tipo: "Offroad",
    Modelo: "Jimny",
    Precio: 0,
    orden: 3,
    slug: "Jimny",
    image: "/gallery/jimny.png",
    features: [
      {
        icon: "Feature1-allgripproVit.svg",
        descripcion: ""
      }, {
        icon: "Icono-Amortiguador.svg",
        descripcion: "Suspensión de eje rígido"
      }, {
        icon: "Icono-Seguridad.svg",
        descripcion: "Seguridad activa"
      }, {
        icon: "Icono-Motor.svg",
        descripcion: "Motor 1,5 Lts"
      },
    ]
  };
  const [modelo, setModelo] = useState(modelo_prueba)
  const [routes, setRoute] = useState([
    {
      path: "/",
      title: "Inicio"
    }, {
      path: "/#modelos",
      title: "Modelos"
    }, {
      path: "#",
      title: ""
    },
  ]);
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 990 });
  useEffect(() => {
    (async () => {
      const { detail } = router.query;
      if (detail != undefined) {
        const response = await getModeloSlug(detail);
        if (response != null) {
          let newRoutes = routes;
          newRoutes[2].title = response.modelo;
          setRoute(newRoutes);
          setModelo(response);
        }
      }
    })();
  }, [router]);

  return (
    <>
      <GeneralLayout Seo={props?.seo}>
        <div key={
          `modelo-${router.query.detail
          }`
        }
          className="model-detail">
          {
            !isMobile && <DetailModel modelo={modelo}
              data={data}
              data_api={data_api}
              routes={routes}
              isMobile={isMobile} />
          }
          {
            isMobile && <Detailmobile modelo={modelo}
              data={data}
              data_api={data_api}
              routes={routes} />
          } </div>
      </GeneralLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { detail } = context.query;
  // Fetch data from external API
  const res = await getCaracteristicas(detail);
  let response = await getSecciones(detail);
  if (response != null) {
    let aux = {
      exterior: {

      },
      interior: {

      }, seguridad: {

      }, desempenio: {
      }

    };
    response?.exterior?.forEach((item) => {
      if (item?.estilo == 'index') {
        aux.exterior.vehiculo = item;
      }
      if (item?.estilo == 'faros') {
        aux.exterior.faros = item;
      }
      if (item?.estilo == 'luces_led') {
        aux.exterior.luces = item;
      }

      if (item?.estilo == 'insignia') {
        aux.exterior.insignia = item;
      }
      if (item?.estilo == 'rueda') {
        aux.exterior.ruedas = item;
      }
      if (item?.estilo == 'aros') {
        aux.exterior.aros = item;
      }
    });


    response?.interior?.forEach((item) => {
      if (item?.estilo == 'index') {
        aux.interior.index = item;
      }
      if (item?.estilo == 'instrumentos') {
        aux.interior.instrumentos = item;
      }
      if (item?.estilo == 'lcd') {
        aux.interior.lcd = item;
      }

      if (item?.estilo == 'asientos') {
        aux.interior.asientos = item;
      }
      if (item?.estilo == 'reloj') {
        aux.interior.reloj = item;
      }
      if (item?.estilo == 'maltero') {
        aux.interior.maletero = item;
      }
      if (item?.estilo == 'aire') {
        aux.interior.aire = item;
      }
      if (item?.estilo == 'reposabrazo') {
        aux.interior.reposabrazos = item;
      }
      if (item?.estilo == 'bolsillo') {
        aux.interior.bolsillo = item;
      }

      if (item?.estilo == 'confort') {
        aux.interior.confort = item;
      }
    });

    response?.seguridad?.forEach((item) => {
      if (item?.estilo == 'index') {
        aux.seguridad.inicio = item;
      }
      if (item?.estilo == 'carroseria') {
        aux.seguridad.carroceria = item;
      }
      if (item?.estilo == 'bolas_aire') {
        aux.seguridad.airbag = item;
      }
      if (item?.estilo == 'ESP') {
        aux.seguridad.esp = item;
      }

      if (item?.estilo == 'sensores') {
        aux.seguridad.sensores = item;
      }

    });

    response?.desempenio?.forEach((item) => {
      if (item?.estilo == 'index') {
        aux.desempenio.inicio = item;
      }
      if (item?.estilo == 'motor') {
        aux.desempenio.motor = item;
      }
      if (item?.estilo == 'all_grip') {
        aux.desempenio.allgrip = item;
      }
      if (item?.estilo == 'suspension') {
        aux.desempenio.suspension = item;
      }

      if (item?.estilo == 'aerodinamica') {
        aux.desempenio.aerodinamica = item;
      }

    });

    let data_api = {
      ...response,
      ...aux
    }

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

    return {
      props: {
        data: res,
        data_api: data_api,
        seo: responseSeo
      }
    }
  }
  return {
    redirect: {
      destination: '/',
      permanent: false
    }
  }
}

export default Detail;
