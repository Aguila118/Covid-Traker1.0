import React from "react";
import './Spinner.css';

const Spinner = () => {



  return (
    <section className="loader">
      <div className="spinner">
        <span style={{ transform: "rotate(calc(18deg * 1))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 2))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 3))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 4))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 5))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 6))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 7))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 8))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 9))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 10))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 11))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 12))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 13))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 14))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 15))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 16))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 17))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 18))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 19))" }}></span>
        <span style={{ transform: "rotate(calc(18deg * 20))" }}></span>
      </div >
      <p>Cargando...</p>
    </section >
  );
};

export default Spinner;
