import React, { createContext } from 'react'

export const dataContext = createContext();

export default function StoreContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    
    // State to store the error message (if any)
    const [errorMessage, seterrorMessage] = useState("");
    return (
        <dataContext.Provider>
            {children}
        </dataContext.Provider>
    )
}
