import React, { createContext, useEffect, useState } from "react";
import reactHookFunktions from "./reactHookFunctions.js";

export const mainContext = createContext();

const MainProvider = ({ children }) => {

    const [cars, setCars] = useState([])
    const [freeCars, setFreeCars] = useState([])
    const [buchungen, setBuchungen] = useState({
        data: [],
        specificCar: ''
    })

    useEffect(() => {
        fetch('http://localhost:3000/fahrzeuge/')
            .then((res) => res.json())
            .then((data) => setCars(data))
    }, [])

    useEffect(() => {
        console.log(buchungen.specificCar);
    }, [buchungen.specificCar])

  return (
    <>
      <mainContext.Provider value={{cars, setCars, freeCars, setFreeCars, buchungen, setBuchungen}}>{children}</mainContext.Provider>
    </>
  );
};

export default MainProvider;
