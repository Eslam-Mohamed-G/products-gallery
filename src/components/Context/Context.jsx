import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

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

    // Function to fetch product details from Fake Store API
    const [id, setId] = useState(null);
    const [productDetails, setProductDetails] = useState([]);
    async function getProductDetails() {
        setLoading(true);
        setErrorMessage("");
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProductDetails(response.data);
            console.log(response.data);
        } catch (error) {
            setErrorMessage("error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductDetails();
    }, [id]);

    return (
        <dataContext.Provider value={{ getAllProducts, loading, errorMessage, products, setId}}>
            {children}
        </dataContext.Provider>
    )
}
