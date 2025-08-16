import React, { useContext, useEffect, useState } from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { dataContext } from '../../Context/Context';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

export default function Home() {
    const { getAllProducts, products, loading, errorMessage } = useContext(dataContext);
    const [randomProducts, setRandomProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (products.length > 0) {
            const shuffledProducts = [...products].sort(() => .5 - Math.random()).slice(0, 4);
            setRandomProducts(shuffledProducts);
        }
    }, [products]);
    return (
        <div className='px-4 sm:px-6 md:px-8'>
            {loading &&
                <Loading SkeletonNumber={4} />
            }
            {errorMessage && <ErrorPage onRetry={getAllProducts} />}

            {!loading && !errorMessage && (
                <div className="flex flex-col justify-center items-center gap-10 bg-white dark:bg-black">
                    <Carousel />

                    {/* four rondom div  */}
                    <div className="flex flex-row flex-wrap w-full justify-center">
                        {randomProducts?.map((product) => (
                            <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4" key={product.id}>
                                <div onClick={() => { navigate(`/${product.title.split(' ').slice(0, 3).join(" ")}/${product.id}`) }} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-80 md:h-96 pt-4 cursor-pointer">
                                    <div className='w-2/3 h-1/2 sm:h-2/3 m-auto bg-transparent'>
                                        <img className="object-contain w-full h-full" src={product.image} alt="product image" />
                                    </div>
                                    <div className="px-5 pb-5">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title.split(' ').slice(0, 3).join(" ")}</h5>
                                        <div className="flex flex-wrap items-center justify-between mt-2.5 mb-5">
                                            <div className='flex items-center justify-center'>
                                                <span
                                                    className="star-rating"
                                                    style={{ '--rating-percent': `${(product.rating.rate / 5) * 100}%` }}
                                                >
                                                    ★★★★★
                                                </span>
                                                <span className="bg-blue-100 text-blue-800 text-[10px] font-semibold px-2 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-1">{product.rating.rate}</span>
                                            </div>
                                            <span className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
