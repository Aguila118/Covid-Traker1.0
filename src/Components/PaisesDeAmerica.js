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
            <h2>Nuevos Casos: </h2><h2 className="item-casos-nro">{datos.Countries[pais].NewConfirmed}</h2>
          </div>
          <div className="items-casos">
            <h2>Total de Casos: </h2><h2 className="item-casos-nro">{datos.Countries[pais].TotalConfirmed}</h2>
          </div>
          <div className="items-casos">
            <h2>Total Muertos: </h2><h2 className="item-casos-nro">{datos.Countries[pais].TotalDeaths}</h2>
          </div>
          <div className="items-casos">
            <h2>En Recuperacion: </h2><h2 className="item-casos-nro">{datos.Countries[pais].TotalConfirmed - datos.Countries[pais].TotalRecovered}</h2>
          </div>
          <div className="items-casos">
            <h2>Total Recuperados: </h2><h2 className="item-casos-nro">{datos.Countries[pais].TotalRecovered}</h2>
          </div>
        </div>
        <Estadis datos={datos} pais={pais} />
      </div>
    </>
  )
}

export default PaisesDeAmerica;