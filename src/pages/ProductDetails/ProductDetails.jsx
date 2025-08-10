import React, { useContext, useEffect } from 'react'
import { dataContext } from '../../Context/Context';
import { useParams } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loading from '../../components/Loading/Loading';

export default function ProductDetails() {
    const { id } = useParams();
    const { getProductDetails, loading, errorMessage, productDetails } = useContext(dataContext);

    useEffect(() => {
        if (id) {
            getProductDetails(id);
        }
    }, [id]);
    return (
        <div className='flex items-center justify-center md:p-4 transition-colors ease-in-out duration-1000'>
            {loading &&
                <Loading SkeletonNumber={1} />
            }

            {errorMessage && <ErrorPage onRetry={getProductDetails(id)}/>}

            {!loading && !errorMessage && productDetails && (
                <div className="flex flex-col items-center md:px-4 bg-white border border-gray-200 rounded-none md:rounded-lg shadow-sm md:flex-row md:min-w-xl lg:max-w-6xl dark:border-gray-700 dark:bg-gray-800 dark:text-white transition-colors ease-out duration-1000">
                    {/* image */}
                    <div className="w-3xs md:w-1/4 my-1 overflow-hidden rounded-2xl">
                        <img className="w-full object-contain" src={productDetails.image} alt='product image' />
                    </div>

                    {/* product content */}
                    <div className="flex flex-col justify-between p-4 md:w-3/4">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors ease-in-out duration-1000">{productDetails?.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 transition-colors ease-in-out duration-1000">{productDetails?.description}</p>
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
