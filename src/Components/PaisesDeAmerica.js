import React from 'react';
import './PaisesDeAmerica.css'
import { Estadis } from './Estadis';

const PaisesDeAmerica = ({ pais, datos }) => {

  return (
    <>
      <div className="DatosWrapper">
        <div className="pais">
          <h1>{datos.Countries[pais].Country}</h1><br />
          <div className="items-casos">
            <h3>Nuevos Casos: </h3><h2 className="item-casos-nro">{datos.Countries[pais].NewConfirmed}</h2>
          </div>
          <div className="items-casos">
            <h3>Total de Casos: </h3><h2 className="item-casos-nro">{datos.Countries[pais].TotalConfirmed}</h2>
          </div>
          <div className="items-casos">
            <h3>Total Fallecidos: </h3><h2 className="item-casos-nro">{datos.Countries[pais].TotalDeaths}</h2>
          </div>
          <div className="items-casos">
            <h3>En Recuperacion: </h3><h2 className="item-casos-nro">{datos.Countries[pais].TotalConfirmed - datos.Countries[pais].TotalRecovered}</h2>
          </div>
          <div className="items-casos">
            <h3>Total Recuperados: </h3><h2 className="item-casos-nro">{datos.Countries[pais].TotalRecovered}</h2>
          </div>
        </div>
        <Estadis datos={datos} pais={pais} />
      </div>
    </>
  )
}

export default PaisesDeAmerica;