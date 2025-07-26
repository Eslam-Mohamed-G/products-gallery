import React, { useContext, useEffect } from 'react';
import { dataContext } from '../Context/Context';

export default function Products() {
    const { getAllProducts, loading, errorMessage, products } = useContext(dataContext);

    useEffect(() => {
        getAllProducts();
        return () => {

        };
    }, []);
    return (
        <div className="px-4">
            {loading &&
                <div role="status" className="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        </svg>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <span className="sr-only">Loading...</span>
                </div>
            }

            {errorMessage && <h1>notFound</h1>}

            {!loading && !errorMessage && (
                <div className="flex flex-row flex-wrap justify-center">
                    {products.map((product) => (
                        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4" key={product.id}>
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-80 md:h-96 pt-4 cursor-pointer">
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
                    ))}
                </div>
            )}
        </div>
    )
}
