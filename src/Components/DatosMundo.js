import React from 'react'
import './Datosmundo.css'

export const DatosMundo = ({ datos }) => {

  return (
    <div>
      <div className="mundo">
        <h1>Mundo</h1><br />
        <h4>Nuevos Casos: {datos.Global.NewConfirmed}</h4>
        <h4>Total Casos: {datos.Global.TotalConfirmed}</h4>
        <h4>Total Fallecidos: {datos.Global.TotalDeaths}</h4>
        <h4>Total Recuperados: {datos.Global.TotalRecovered}</h4>
      </div>
    </div>
  )
}
