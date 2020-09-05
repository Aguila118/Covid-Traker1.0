import React from 'react';
import './NavButtons.css';

const Nav = ({ setpais, pais }) => {


  return (
    <div>
      <nav>
        <div className="Titulo">
          <h1 className="Covid">COVID-19 TRACKER</h1>
          <h1 className="Sud">Sudamérica</h1>
        </div>
        <ul className="nav-links">
          <li className="Links" onMouseOver={() => { setpais(6) }}>Argentina</li>
          <li className="Links" onMouseOver={() => { setpais(20) }}>Bolivia</li>
          <li className="Links" onMouseOver={() => { setpais(178) }}>Uruguay</li>
          <li className="Links" onMouseOver={() => { setpais(34) }}>Chile</li>
          <li className="Links" onMouseOver={() => { setpais(130) }}>Paraguay</li>
          <li className="Links" onMouseOver={() => { setpais(23) }}>Brasil</li>
        </ul>
      </nav>
    </div>
  )

}
export default Nav;

