import React, { createContext, useState } from 'react'

export const dataContext = createContext();

export default function StoreContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    
    // State to store the error message (if any)
    const [errorMessage, setErrorMessage] = useState("");

    const [products, setProducts] = useState([]);

    // Function to fetch all products from Fake Store API
    async function getAllProducts() {
        setLoading(true);
        setErrorMessage("");
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
        } catch (error) {
            setErrorMessage("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <dataContext.Provider value={{ getAllProducts, loading, errorMessage, products}}>
            {children}
        </dataContext.Provider>
    )
}
