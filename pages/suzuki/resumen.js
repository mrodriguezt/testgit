import React, { Component } from "react";
import GeneralLayout from "../../layouts/GeneralLayout"
import Why from "../../src/components/suzuki/resumen/Why"
import Co2 from "../../src/components/suzuki/resumen/Co2"
import Design from "../../src/components/suzuki/resumen/Design"
import Traccion from "../../src/components/suzuki/resumen/Traccion"
import Lifestyle from "../../src/components/suzuki/resumen/Lifestyle"
import Breadcrumbs from '../../src/components/common/Breadcrumbs'

function Resumen(props) {
  const routes = [
    {
      path: '/',
      title: 'Inicio'
    },
    {
      path: '#',
      title: '¿Por qué Suzuki?'
    },
    {
      path: '#',
      title: 'Resumen'
    }
  ]

  return (
    <>
      <GeneralLayout>
        <div className="why">
          <Breadcrumbs routes={ routes }/>
          <Why />
          <Lifestyle />
          <Design />
          <Traccion />
          <Co2/>
        </div>
      </GeneralLayout>

    </>
  );
}

export default Resumen;
