import React, { Component } from "react";
import GeneralLayout from "../../layouts/GeneralLayout"
import Inicio from "../../src/components/sobre/corporativo/Inicio"
import Info from "../../src/components/sobre/corporativo/Info"
import Banner from "../../src/components/sobre/corporativo/Banner"
import Breadcrumbs from '../../src/components/common/Breadcrumbs'

function Resumen(props) {
  const routes = [
    {
      path: '/',
      title: 'Inicio'
    },
    {
      path: '#',
      title: 'Corporativo'
    }
  ]

  return (
    <>
      <GeneralLayout>
        <div className="corporativo">
          <Breadcrumbs routes={ routes }/>
          <Inicio />
          <Info />
          <Banner />
        </div>
      </GeneralLayout>

    </>
  );
}

export default Resumen;
