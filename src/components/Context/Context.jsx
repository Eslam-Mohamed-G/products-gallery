import React, { createContext } from 'react'

export const dataContext = createContext();

export default function StoreContextProvider({ children }) {
    
    return (
        <dataContext.Provider>
            {children}
        </dataContext.Provider>
    )
}
