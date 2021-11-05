import React from 'react'
import Select from '../common/Select.js'
import Inputs from '../common/Inputs.js'

function Carinfo(){

  const submitForm = (e) =>{
  }

  return(
    <form onSubmit={submitForm}>
        <Select title="¿Qué tipo de vehículo tienes?"/>
        <Select title="Marca de tu vehículo"/>
        <Select title="Elige modelo"/>
        <Select title="Año"/>

        <Inputs placeholder='' type='text' label='Ingresa el kilometraje actual' id='km'/>
        <Inputs placeholder='' type='text' label='Ingresa la placa. Ej: PIT 123' id='plate'/>
    </form>
  );
}

export default Carinfo;