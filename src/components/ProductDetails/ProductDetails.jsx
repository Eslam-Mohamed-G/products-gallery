import React, { useContext, useEffect } from 'react'
import { dataContext } from '../Context/Context';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const { id } = useParams();
    const { getProductDetails, loading, errorMessage, productDetails } = useContext(dataContext);

    useEffect(() => {
        if (id) {
            getProductDetails(id);
        }
    }, [id]);
    return (
        <div className='flex items-center justify-center md:p-4'>
            {loading &&
                <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            }

            {errorMessage && <p>notFound</p>}

            {!loading && !errorMessage && productDetails && (
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-none md:rounded-lg shadow-sm md:flex-row md:min-w-xl lg:max-w-6xl dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                    {/* image */}
                    <div className="w-3xs md:w-1/4 my-1 overflow-hidden rounded-2xl">
                        <img className="w-full object-contain" src={productDetails.image} alt='product image' />
                    </div>

                    {/* product content */}
                    <div className="flex flex-col justify-between p-4 md:w-3/4">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productDetails?.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{productDetails?.description}</p>
                        <div className='flex gap-4 mt-4'>
                            <p className='flex flex-col'><span className='inline-block'>Price:</span> <span className='border rounded px-2 py-1'>{productDetails?.price}</span></p>
                            <p className='flex flex-col'><span className='inline-block'>Category:</span><span className='border rounded px-2 py-1'>{productDetails?.category}</span></p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
