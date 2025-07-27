import React, { useContext, useEffect } from 'react';
import { dataContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import ErrorPage from '../errorPage/errorPage';

export default function Products() {
    const { getAllProducts, loading, errorMessage, filteredProducts, sortedProducts, setSortOption } = useContext(dataContext);
    const navigate = useNavigate();

    useEffect(() => {
        getAllProducts();
        return () => {

        };
    }, []);
    return (
        <div className="px-4">
            {loading &&
                <div className='container mx-auto px-4 sm:px-12 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
                    {Array.from({ length: 20 }, (_, i) => (
                        <div role="status" key={i} className="flex flex-col gap-4 w-full max-w-sm border border-gray-200 p-4 rounded-lg overflow-hidden">
                            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded-t-lg dark:bg-gray-700">
                                <svg className="w-40 h-40 m-auto text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                </svg>
                            </div>
                            <div className="w-full">
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5" />
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    ))}
                </div>
            }

            {errorMessage && <ErrorPage onRetry={getAllProducts} />}

            {!loading && !errorMessage && (
                <div className="">
                    {/* div for sort by name or price */}
                    <div className="flex items-center justify-between border-b-1 border-gray-400 w-full px-2 md:px-4 py-3">
                        <select
                            onChange={(e) => setSortOption(e.target.value)}
                            className="dark:text-white bg-gray-50 dark:bg-gray-700 text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            <option value="" className='hidden'>Sort By Price:</option>
                            <option value="price-low">Low to High</option>
                            <option value="price-high">High to Low</option>
                        </select>

                        <select
                            onChange={(e) => setSortOption(e.target.value)}
                            className="dark:text-white bg-gray-50 dark:bg-gray-700 text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            <option value="" className='hidden'>Sort By Name:</option>
                            <option value="name-az">A–Z</option>
                            <option value="name-za">Z–A</option>
                        </select>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center">
                        {filteredProducts.length > 0 ?
                            sortedProducts.map((product) => (
                                <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4" key={product.id}>
                                    <div onClick={() => { navigate(`/${product.title.split(' ').slice(0, 3).join(" ")}/${product.id}`) }} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-80 md:h-96 pt-4 cursor-pointer">
                                        <div className='w-2/3 h-1/2 sm:h-2/3 m-auto bg-transparent'>
                                            <img className="object-contain w-full h-full" src={product.image} alt="product image" />
                                        </div>
                                        <div className="px-5 pb-5">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title.split(' ').slice(0, 3).join(" ")}</h5>
                                            <div className="flex flex-wrap items-center justify-between mt-2.5 mb-5">
                                                <div className='flex items-center justify-center'>
                                                    <span className="text-yellow-400">★★★★</span>
                                                    <span className="text-gray-300">★</span>
                                                    <span className="bg-blue-100 text-blue-800 text-[10px] font-semibold px-2 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-1">{product.rating.rate}</span>
                                                </div>
                                                <span className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            <p>no products</p>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}
