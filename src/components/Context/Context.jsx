import React, { createContext } from 'react'

export const dataContext = createContext();

export default function StoreContextProvider() {
  return (
    <dataContext.Provider>
        {children}
    </dataContext.Provider>
  )
}
