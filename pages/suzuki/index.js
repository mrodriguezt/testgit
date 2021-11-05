import React, { Component } from "react";
import GeneralLayout from "../../layouts/GeneralLayout";
import Breadcrumbs from '../../src/components/common/Breadcrumbs';
import Portada from "../../src/components/suzuki/index/Portada";
import Design from "../../src/components/suzuki/index/Design";
import Eficiencia from "../../src/components/suzuki/index/Eficiencia";
import Tech from "../../src/components/suzuki/index/Tech";

function Resumen(props) {
  const routes = [
    {
      path: '/',
      title: 'Inicio'
    },
    {
      path: '/suzuki',
      title: '¿Por qué Suzuki?'
    }
  ]

  return (
    <>
      <GeneralLayout>
        <div className="why-suzuki">
          <Breadcrumbs routes={ routes }/>
          <Portada />
          <Design />
          <Eficiencia />
          <Tech />
        </div>
      </GeneralLayout>

    </>
  );
}

export default Resumen;
