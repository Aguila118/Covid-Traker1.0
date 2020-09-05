import React from 'react'
import './Estadis.css'

export const Estadis = ({ datos, pais }) => {


  const tasaRecupero = (((datos.Countries[pais].TotalRecovered * 100) / datos.Countries[pais].TotalConfirmed));
  const tasaMuertes = (((datos.Countries[pais].TotalDeaths * 100) / datos.Countries[pais].TotalConfirmed));


  const estadisticos = () => {
    return (
      <>
        <div className="wrapperTasas">
          <h5 className="TituloTasas">Tasa Fallecidos:</h5>
          <h5 className="numeromuerte">{tasaMuertes.toFixed(2)}</h5>
        </div>
        <div className="wrapperTasas">
          <h5 className="TituloTasas">Tasa Recuperados:</h5>
          <h5 className="numeromuerte">{tasaRecupero.toFixed(2)}</h5>
        </div>
      </>
    )
  }


  return (
    <div className='Estadisticas'>
      <h3>Estadisticas:</h3>
      <div className="WrapperEstad">
        {estadisticos()}
      </div>
    </div>
  )
}
