import React from "react";
import spinner from "../Images/spinner.gif";
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} style={{ width: "200px", margin: "auto", display: "block" }} alt="Cargando" />
      <p>Cargando...</p>
    </div>
  );
};

export default Spinner;
