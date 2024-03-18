import React, { createContext } from 'react'

export const mainProvider = createContext()

const MainProvider = ({children}) => {

    

  return (
    <>
    <mainProvider.Provider
    value={{}}
    >
        {children}
    </mainProvider.Provider>
    </>
  )
}

export default MainProvider