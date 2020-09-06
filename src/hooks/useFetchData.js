import { useState, useEffect } from "react";
import { GetData } from '../helper/GetData';

export const useFetchData = () => {
  const [datos, setdatos] = useState({
    data: [],
    Loading: true
  });

  useEffect(() => {

    GetData().then(dat => {
      setdatos({
        data: dat,
        Loading: false
      });
    })

  }, [])

  return datos;
}