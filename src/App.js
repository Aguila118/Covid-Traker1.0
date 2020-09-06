import React, { useState } from 'react';
import Nav from './Components/Nav'
import PaisesDeAmerica from './Components/PaisesDeAmerica';
import { DatosMundo } from './Components/DatosMundo';
import { useFetchData } from './hooks/useFetchData'
import Spinner from './Components/Spinner'
import { Footer } from './Components/Footer';


const App = () => {

  const { data: datos, Loading } = useFetchData();
  const [pais, setpais] = useState(6)


  return Loading ? (<Spinner />) :
    (
      <>
        <Nav setpais={setpais} />
        <DatosMundo datos={datos} />
        <PaisesDeAmerica datos={datos} pais={pais} />
        <Footer />
      </>
    );
};

export default App;
