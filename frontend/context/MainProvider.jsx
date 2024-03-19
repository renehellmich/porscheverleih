import React, { createContext, useEffect, useState } from "react";
import reactHookFunktions from "./reactHookFunctions.js";

export const mainProvider = createContext();

const MainProvider = ({ children }) => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        setCars(reactHookFunktions.loadCars())
    }, [])

  return (
    <>
      <mainProvider.Provider value={{}}>{children}</mainProvider.Provider>
    </>
  );
};

export default MainProvider;
