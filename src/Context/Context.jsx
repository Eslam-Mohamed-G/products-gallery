import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react'

export const dataContext = createContext();

export default function StoreContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    
    // State to store the error message (if any)
    const [errorMessage, setErrorMessage] = useState("");

    const [products, setProducts] = useState([]);

    // Function to fetch all products from Fake Store API
    // getAllProducts with useCallback
    const getAllProducts = useCallback(async () => {
        setLoading(true);
        setErrorMessage("");
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
        } catch (error) {
            setErrorMessage(error.message || "Error fetching products");
        } finally {
            setLoading(false);
        }
    }, []);

    // Call it once when the context mounts
    useEffect(() => {
        getAllProducts();
    }, [getAllProducts]);

    // Function to fetch product details from Fake Store API
    const [productDetails, setProductDetails] = useState({});
    async function getProductDetails(id) {
        setLoading(true);
        setErrorMessage("");
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProductDetails(response.data);
        } catch (error) {
            setErrorMessage("Error fetching product details");
        } finally {
            setLoading(false);
        }
    };

    // handle search bar
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch (term) {
        setSearchTerm(term)
    }

    // Filtered products (case-insensitive)
    const filteredProducts = products.filter( product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))

    // handle Sort Dropdown:
    const [sortOption, setSortOption] = useState("");
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === "price-low") return a.price - b.price;
        if (sortOption === "price-high") return b.price - a.price;
        if (sortOption === "name-az") return a.title.localeCompare(b.title);
        if (sortOption === "name-za") return b.title.localeCompare(a.title);
        return 0;
    });

    // get products by category 
    const [categoryName, setCategoryName] = useState([]);
    const categoryFilteredProducts = products.filter( product => product.category === categoryName);
    return (
        <dataContext.Provider value={{ getAllProducts, loading, errorMessage, products, getProductDetails, productDetails, handleSearch, searchTerm, filteredProducts, sortedProducts, setSortOption, setCategoryName, categoryFilteredProducts }}>
            {children}
        </dataContext.Provider>
    )
}
